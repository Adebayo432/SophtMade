/* ═══════════════════════════════════════════════
   PRODUCT DETAIL MODAL
═══════════════════════════════════════════════ */

const Modal = (() => {
  let currentProduct = null;
  let selectedSize   = null;

  /* ── Elements ───────────────────────────────── */
  const overlay      = () => document.getElementById('modalOverlay');
  const closeBtn     = () => document.getElementById('modalClose');
  const imgEl        = () => document.getElementById('modalImage');
  const imgPlaceholder = () => document.getElementById('modalImagePlaceholder');
  const categoryEl   = () => document.getElementById('modalCategory');
  const nameEl       = () => document.getElementById('modalProductName');
  const starsEl      = () => document.getElementById('modalStars');
  const priceEl      = () => document.getElementById('modalPrice');
  const descEl       = () => document.getElementById('modalDesc');
  const sizeOptions  = () => document.getElementById('modalSizeOptions');
  const sizeSelected = () => document.getElementById('modalSizeSelected');
  const addBtn       = () => document.getElementById('modalAddToCart');
  const versionBadge = () => document.getElementById('modalVersionBadge');
  const kitBadge     = () => document.getElementById('modalKitBadge');

  /* ── Open ───────────────────────────────────── */
  function open(product) {
    if (!overlay()) return;
    currentProduct = product;
    selectedSize   = null;
    populate(product);
    overlay().hidden = false;
    document.body.style.overflow = 'hidden';
    // Focus close button for accessibility
    setTimeout(() => closeBtn() && closeBtn().focus(), 50);
  }

  /* ── Populate ───────────────────────────────── */
  function populate(product) {
    // Image
    const img = imgEl();
    const ph  = imgPlaceholder();
    if (product.image) {
      img.src   = product.image;
      img.alt   = product.name;
      img.style.opacity    = '0';
      img.style.transition = 'opacity .4s';
      img.style.display    = '';
      img.onload  = () => { img.style.opacity = '1'; if (ph) ph.style.display = 'none'; };
      img.onerror = () => { img.style.display = 'none'; if (ph) ph.style.display = 'flex'; };
      if (ph) ph.style.display = 'none';
    } else {
      if (img) img.style.display = 'none';
      if (ph)  ph.style.display  = 'flex';
    }

    // Badges
    if (versionBadge()) {
      versionBadge().textContent = `${capitalize(product.version)} edition`;
      versionBadge().className   = `badge badge--${product.version}`;
    }
    if (kitBadge()) {
      kitBadge().textContent = `${capitalize(product.kit)} kit`;
    }

    // Text
    if (categoryEl()) categoryEl().textContent = `${capitalize(product.category)} · ${product.club}`;
    if (nameEl())     nameEl().textContent = product.name;
    if (priceEl())    priceEl().textContent = formatPrice(product.price);
    if (descEl())     descEl().textContent  = product.description;

    // Stars
    if (starsEl()) starsEl().innerHTML = renderStars(product.rating, product.reviewCount);

    // Sizes
    buildSizeOptions(product.sizes);

    // Reset add button
    const btn = addBtn();
    if (btn) {
      btn.disabled     = true;
      btn.textContent  = 'Select a size to add to cart';
    }
    if (sizeSelected()) {
      sizeSelected().textContent = '— choose one';
      sizeSelected().classList.remove('chosen');
    }
  }

  /* ── Size selector ──────────────────────────── */
  function buildSizeOptions(sizes) {
    const wrap = sizeOptions();
    if (!wrap) return;
    wrap.innerHTML = sizes.map(s => `
      <button class="size-btn" data-size="${s}" aria-label="Size ${s}" role="button">
        ${s}
      </button>
    `).join('');

    wrap.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => selectSize(btn.dataset.size));
    });
  }

  function selectSize(size) {
    selectedSize = size;

    // Update button states
    sizeOptions().querySelectorAll('.size-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.size === size);
      btn.setAttribute('aria-pressed', btn.dataset.size === size);
    });

    // Update label
    const sel = sizeSelected();
    if (sel) {
      sel.textContent = size;
      sel.classList.add('chosen');
    }

    // Enable add button
    const btn = addBtn();
    if (btn) {
      btn.disabled    = false;
      btn.textContent = `Add to cart — ${size}`;
    }
  }

  /* ── Close ──────────────────────────────────── */
  function close() {
    if (!overlay()) return;
    overlay().hidden = true;
    document.body.style.overflow = '';
    currentProduct = null;
    selectedSize   = null;
  }

  /* ── Init ───────────────────────────────────── */
  function init() {
    // Close button
    document.addEventListener('click', e => {
      if (e.target.closest('#modalClose')) close();
    });

    // Click outside modal
    document.addEventListener('click', e => {
      if (e.target.id === 'modalOverlay') close();
    });

    // Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') close();
    });

    // Add to cart
    document.addEventListener('click', e => {
      if (e.target.closest('#modalAddToCart') && currentProduct && selectedSize) {
        const success = Cart.add(currentProduct, selectedSize);
        if (success) {
          const btn = addBtn();
          if (btn) {
            btn.textContent = '✓ Added to cart!';
            setTimeout(() => { close(); }, 900);
          }
        }
      }
    });
  }

  return { open, close, init };
})();

document.addEventListener('DOMContentLoaded', () => Modal.init());