/* ═══════════════════════════════════════════════
   CART — Add, remove, update, persist, sync UI
═══════════════════════════════════════════════ */

const Cart = (() => {
  const STORAGE_KEY = 'sophtmade_cart';

  /* ── State ─────────────────────────────────── */
  let items = load();

  function load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch { return []; }
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    syncAllCounters();
  }

  /* ── CRUD ───────────────────────────────────── */

  /** Add a product. If same product+size exists, bump qty. */
  function add(product, size, qty = 1) {
    if (!size) { showToast('Please select a size first', 'error'); return false; }

    const key = `${product.id}-${size}`;
    const existing = items.find(i => i.key === key);

    if (existing) {
      existing.qty += qty;
    } else {
      items.push({
        key,
        productId: product.id,
        name: product.name,
        club: product.club,
        version: product.version,
        kit: product.kit,
        price: product.price,
        image: product.image,
        size,
        qty
      });
    }
    save();
    showToast(`${product.name} (${size}) added to cart ✓`);
    bumpCartIcon();
    return true;
  }

  function remove(key) {
    items = items.filter(i => i.key !== key);
    save();
    renderCartPage();
  }

  function updateQty(key, delta) {
    const item = items.find(i => i.key === key);
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    save();
    renderCartPage();
  }

  function updateSize(key, newSize) {
    const item = items.find(i => i.key === key);
    if (!item) return;

    const newKey = `${item.productId}-${newSize}`;
    // If new size already in cart, merge
    const exists = items.find(i => i.key === newKey && i.key !== key);
    if (exists) {
      exists.qty += item.qty;
      items = items.filter(i => i.key !== key);
    } else {
      item.key  = newKey;
      item.size = newSize;
    }
    save();
    renderCartPage();
  }

  function clear() {
    items = [];
    save();
  }

  /* ── Getters ────────────────────────────────── */
  function getAll()    { return [...items]; }
  function getCount()  { return items.reduce((sum, i) => sum + i.qty, 0); }
  function getTotal()  { return items.reduce((sum, i) => sum + (i.price * i.qty), 0); }
  function isEmpty()   { return items.length === 0; }

  /* ── UI Sync ────────────────────────────────── */

  function syncAllCounters() {
    const count = getCount();
    document.querySelectorAll('#cartCount').forEach(el => {
      el.textContent = count;
      el.dataset.count = count;
    });
  }

  function bumpCartIcon() {
    document.querySelectorAll('#cartCount').forEach(el => {
      el.classList.remove('bump');
      void el.offsetWidth; // reflow
      el.classList.add('bump');
      setTimeout(() => el.classList.remove('bump'), 300);
    });
  }

  /* ── Cart Page Render ───────────────────────── */

  function renderCartPage() {
    const itemsEl   = document.getElementById('cartItems');
    const emptyEl   = document.getElementById('cartEmpty');
    const layoutEl  = document.getElementById('cartLayout');
    const countEl   = document.getElementById('cartPageCount');
    const subtotalEl = document.getElementById('summarySubtotal');
    const totalEl   = document.getElementById('summaryTotal');

    if (!itemsEl) return; // Not on cart page

    const cartItems = getAll();
    const total     = getTotal();
    const count     = getCount();

    // Toggle empty vs filled
    if (isEmpty()) {
      if (emptyEl)  emptyEl.hidden  = false;
      if (layoutEl) layoutEl.hidden = true;
      if (countEl)  countEl.textContent = '0 items';
      return;
    }

    if (emptyEl)  emptyEl.hidden  = true;
    if (layoutEl) layoutEl.hidden = false;
    if (countEl)  countEl.textContent = `${count} item${count !== 1 ? 's' : ''}`;
    if (subtotalEl) subtotalEl.textContent = formatPrice(total);
    if (totalEl)    totalEl.textContent    = formatPrice(total);

    const SIZES = ['S','M','L','XL','XXL'];

    itemsEl.innerHTML = cartItems.map(item => `
      <article class="cart-item" data-key="${item.key}">
        <div class="cart-item__thumb">
          ${item.image
            ? `<img src="${item.image}" alt="${item.name}" loading="lazy"
                style="opacity:0;transition:opacity .3s;width:100%;height:100%;object-fit:cover"
                onload="this.style.opacity='1';this.nextElementSibling.style.display='none'"
                onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
            : ''}
          <div class="cart-item__thumb-placeholder">
            <svg width="32" height="40" viewBox="0 0 60 80" fill="none"><path d="M15 5 L5 20 L15 25 L15 70 L45 70 L45 25 L55 20 L45 5 L38 10 Q30 14 22 10 Z" stroke="#ccc" stroke-width="1.5" fill="none" stroke-linejoin="round"/></svg>
          </div>
        </div>

        <div class="cart-item__info">
          <div class="cart-item__badges">
            <span class="badge badge--${item.version}">${capitalize(item.version)} edition</span>
            <span class="badge badge--secondary">${capitalize(item.kit)} kit</span>
          </div>
          <p class="cart-item__name">${item.name}</p>

          <div class="cart-item__size-row">
            <span class="cart-item__size-label">Size:</span>
            <div class="cart-item__sizes" role="group" aria-label="Select size">
              ${SIZES.map(s => `
                <button class="cart-size-btn ${s === item.size ? 'active' : ''}"
                  data-key="${item.key}" data-size="${s}"
                  aria-label="Size ${s}" aria-pressed="${s === item.size}">
                  ${s}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="cart-item__qty-row">
            <span class="cart-item__qty-label">Qty:</span>
            <div class="qty-control">
              <button class="qty-btn" data-key="${item.key}" data-delta="-1"
                aria-label="Decrease quantity" ${item.qty <= 1 ? 'disabled' : ''}>−</button>
              <span class="qty-value" aria-live="polite">${item.qty}</span>
              <button class="qty-btn" data-key="${item.key}" data-delta="1"
                aria-label="Increase quantity">+</button>
            </div>
          </div>
        </div>

        <div class="cart-item__right">
          <p class="cart-item__price">${formatPrice(item.price * item.qty)}</p>
          <button class="cart-item__remove" data-key="${item.key}" aria-label="Remove ${item.name}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
            Remove
          </button>
        </div>
      </article>
    `).join('');

    // Attach events
    itemsEl.querySelectorAll('.cart-item__remove').forEach(btn => {
      btn.addEventListener('click', () => remove(btn.dataset.key));
    });

    itemsEl.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => updateQty(btn.dataset.key, parseInt(btn.dataset.delta)));
    });

    itemsEl.querySelectorAll('.cart-size-btn').forEach(btn => {
      btn.addEventListener('click', () => updateSize(btn.dataset.key, btn.dataset.size));
    });
  }

  /* ── Toast ──────────────────────────────────── */

  function showToast(message, type = 'success') {
    let wrap = document.querySelector('.toast-wrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'toast-wrap';
      document.body.appendChild(wrap);
    }
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.textContent = message;
    wrap.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('removing');
      toast.addEventListener('animationend', () => toast.remove(), { once: true });
    }, 2800);
  }

  /* ── Init ───────────────────────────────────── */
  function init() {
    syncAllCounters();
    renderCartPage();
  }

  return { add, remove, updateQty, updateSize, clear, getAll, getCount, getTotal, isEmpty, renderCartPage, showToast, init };
})();

/* ── Helper ─────────────────────────────────── */
function capitalize(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
}

document.addEventListener('DOMContentLoaded', () => Cart.init());