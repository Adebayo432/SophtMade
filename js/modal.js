/* ═══════════════════════════════════════════════
   PRODUCT DETAIL MODAL
═══════════════════════════════════════════════ */

const Modal = (() => {
  let currentProduct = null;
  let selectedSize    = null;
  let selectedVersion = null;
  let selectedPrice   = null;

  /* ── Elements ───────────────────────────────── */
  const overlay        = () => document.getElementById('modalOverlay');
  const closeBtn       = () => document.getElementById('modalClose');
  const imgEl          = () => document.getElementById('modalImage');
  const imgPlaceholder = () => document.getElementById('modalImagePlaceholder');
  const categoryEl     = () => document.getElementById('modalCategory');
  const nameEl         = () => document.getElementById('modalProductName');
  const starsEl        = () => document.getElementById('modalStars');
  const priceEl        = () => document.getElementById('modalPrice');
  const descEl         = () => document.getElementById('modalDesc');
  const sizeOptions    = () => document.getElementById('modalSizeOptions');
  const sizeSelected   = () => document.getElementById('modalSizeSelected');
  const versionOptions = () => document.getElementById('modalVersionOptions');
  const versionSelected = () => document.getElementById('modalVersionSelected');
  const addBtn         = () => document.getElementById('modalAddToCart');
  const versionBadge   = () => document.getElementById('modalVersionBadge');
  const kitBadge       = () => document.getElementById('modalKitBadge');

  function resetSelection() {
    selectedSize    = null;
    selectedVersion = null;
    selectedPrice   = null;
  }

  function updateAddButton() {
    const btn = addBtn();
    if (!btn) return;

    if (selectedSize && selectedVersion) {
      btn.disabled = false;
      btn.textContent = `Add to cart — ${selectedSize} · ${capitalize(selectedVersion)}`;
    } else if (!selectedSize && !selectedVersion) {
      btn.disabled = true;
      btn.textContent = 'Select a size and version to add to cart';
    } else if (!selectedSize) {
      btn.disabled = true;
      btn.textContent = 'Select a size to add to cart';
    } else {
      btn.disabled = true;
      btn.textContent = 'Select a version to add to cart';
    }
  }

  /* ── Open ───────────────────────────────────── */
  function open(product) {
    if (!overlay()) return;
    currentProduct = product;
    resetSelection();
    populate(product);
    overlay().hidden = false;
    document.body.style.overflow = 'hidden';
    setTimeout(() => closeBtn() && closeBtn().focus(), 50);
  }

  /* ── Populate ───────────────────────────────── */
  function populate(product) {
    const img = imgEl();
    const ph  = imgPlaceholder();
    const imageSrc = product.image || getClubImage(product.club, product.kit);

    if (imageSrc && img) {
      img.src   = imageSrc;
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

    if (versionBadge()) {
      versionBadge().textContent = 'Choose version';
      versionBadge().className   = 'badge badge--secondary';
    }
    if (kitBadge()) {
      kitBadge().textContent = `${capitalize(product.kit)} kit`;
    }

    if (categoryEl()) categoryEl().textContent = `${capitalize(product.category)} · ${product.club}`;
    if (nameEl())     nameEl().textContent = product.name;
    if (priceEl())    priceEl().textContent = formatPrice(product.price);
    if (descEl())     descEl().textContent  = product.description;
    if (starsEl())    starsEl().innerHTML   = renderStars(product.rating, product.reviewCount);

    if (sizeSelected()) {
      sizeSelected().textContent = '— choose one';
      sizeSelected().classList.remove('chosen');
    }
    if (versionSelected()) {
      versionSelected().textContent = '— choose one';
      versionSelected().classList.remove('chosen');
    }

    buildSizeOptions(product.sizes);
    buildVersionOptions(product);

    // Auto-select when only one version is available
    const available = getAvailableVersions(product);
    if (available.length === 1) {
      const only = available[0];
      selectVersion(only.version, only.price, only.description, false);
    }

    updateAddButton();
  }

  function getAvailableVersions(product) {
    const versions = product.versions || {};
    return ['fan', 'player']
      .filter(v => versions[v])
      .map(v => ({
        version: v,
        price: versions[v].price,
        description: versions[v].description
      }));
  }

  function buildVersionOptions(product) {
    const wrap = versionOptions();
    if (!wrap) return;

    const entries = getAvailableVersions(product);
    if (entries.length === 0) {
      wrap.innerHTML = '<p class="modal__version-empty">Version options unavailable for this jersey.</p>';
      return;
    }

    wrap.innerHTML = entries.map(e => `
      <button type="button" class="version-btn ${e.version === selectedVersion ? 'active' : ''}"
        data-version="${e.version}" data-price="${e.price}"
        aria-pressed="${e.version === selectedVersion}">
        ${capitalize(e.version)} — ${formatPrice(e.price)}
      </button>
    `).join('');

    wrap.querySelectorAll('.version-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const entry = entries.find(v => v.version === btn.dataset.version);
        selectVersion(btn.dataset.version, Number(btn.dataset.price), entry && entry.description);
      });
    });
  }

  function selectVersion(version, price, description, updateButtons = true) {
    selectedVersion = version;
    selectedPrice   = price;

    if (versionSelected()) {
      versionSelected().textContent = capitalize(version);
      versionSelected().classList.add('chosen');
    }
    if (versionBadge()) {
      versionBadge().textContent = `${capitalize(version)} edition`;
      versionBadge().className = `badge badge--${version}`;
    }
    if (priceEl()) priceEl().textContent = formatPrice(price);
    if (descEl() && description) descEl().textContent = description;

    if (updateButtons) {
      const wrap = versionOptions();
      if (wrap) wrap.querySelectorAll('.version-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.version === version);
        b.setAttribute('aria-pressed', b.dataset.version === version);
      });
    }

    updateAddButton();
  }

  function buildSizeOptions(sizes) {
    const wrap = sizeOptions();
    if (!wrap) return;

    wrap.innerHTML = sizes.map(s => `
      <button type="button" class="size-btn" data-size="${s}" aria-label="Size ${s}">
        ${s}
      </button>
    `).join('');

    wrap.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        selectSize(btn.dataset.size);
      });
    });
  }

  function selectSize(size) {
    selectedSize = size;

    sizeOptions().querySelectorAll('.size-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.size === size);
      btn.setAttribute('aria-pressed', btn.dataset.size === size);
    });

    const sel = sizeSelected();
    if (sel) {
      sel.textContent = size;
      sel.classList.add('chosen');
    }

    updateAddButton();
  }

  /* ── Close ──────────────────────────────────── */
  function close() {
    if (!overlay()) return;
    overlay().hidden = true;
    document.body.style.overflow = '';
    currentProduct = null;
    resetSelection();
  }

  /* ── Init ───────────────────────────────────── */
  function init() {
    document.addEventListener('click', e => {
      if (e.target.closest('#modalClose')) close();
    });

    document.addEventListener('click', e => {
      if (e.target.id === 'modalOverlay') close();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay() && !overlay().hidden) close();
    });

    document.addEventListener('click', e => {
      if (e.target.closest('#modalSelectVersion')) {
        e.preventDefault();
        const first = versionOptions() && versionOptions().querySelector('.version-btn');
        if (first) first.focus();
      }
    });

    document.addEventListener('click', e => {
      const btn = e.target.closest('#modalAddToCart');
      if (!btn || btn.disabled || !currentProduct || !selectedSize || !selectedVersion) return;

      e.preventDefault();
      const success = Cart.add(currentProduct, selectedSize, 1, selectedVersion, selectedPrice);
      if (success) {
        btn.textContent = '✓ Added to cart!';
        btn.disabled = true;
        setTimeout(() => close(), 900);
      }
    });
  }

  return { open, close, init };
})();

document.addEventListener('DOMContentLoaded', () => Modal.init());
