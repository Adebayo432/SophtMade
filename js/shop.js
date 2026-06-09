/* ═══════════════════════════════════════════════
   SHOP — Render grid, filters, search
═══════════════════════════════════════════════ */

const Shop = (() => {

  /* ── State ─────────────────────────────────── */
  let activeFilters = {
    search:   '',
    category: [],   // 'club' | 'national'
    kit:      [],   // 'home' | 'away'
    club:     []    // club names
  };

  /* ── Elements ───────────────────────────────── */
  const countEl = () => document.getElementById('productCount');
  const emptyEl = () => document.getElementById('shopEmpty');

  /* ── Filter & Search ─────────────────────────── */
  function filteredProducts() {
    return PRODUCTS.filter(p => {
      const q = activeFilters.search.toLowerCase();
      if (q && !p.name.toLowerCase().includes(q) &&
               !p.club.toLowerCase().includes(q) &&
               !p.category.toLowerCase().includes(q)) return false;

      if (activeFilters.category.length && !activeFilters.category.includes(p.category)) return false;
      if (activeFilters.kit.length      && !activeFilters.kit.includes(p.kit))            return false;
      if (activeFilters.club.length     && !activeFilters.club.includes(p.club))          return false;
      return true;
    });
  }

  /* ── Render product card HTML ────────────────── */
  function cardHTML(product) {
    const imgSrc = product.image || (typeof getClubImage === 'function' ? getClubImage(product.club, product.kit) : null);
    const imgHTML = imgSrc
      ? `<img class="product-card__img" src="${imgSrc}" alt="${product.name}" loading="lazy">`
      : `<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%">
           <svg width="48" height="62" viewBox="0 0 60 80" fill="none">
             <path d="M15 5 L5 20 L15 25 L15 70 L45 70 L45 25 L55 20 L45 5 L38 10 Q30 14 22 10 Z"
               stroke="#D0CFC9" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
           </svg>
         </div>`;

    return `
      <article class="product-card" data-id="${product.id}" tabindex="0"
        role="button" aria-label="View ${product.name}">
        <div class="product-card__img-wrap">
          <div class="product-card__img-inner">
            ${imgHTML}
          </div>
          <div class="product-card__badges">
            <span class="badge badge--secondary">${capitalize(product.kit)}</span>
          </div>
        </div>
        <div class="product-card__body">
          <p class="product-card__meta">${product.club} · ${capitalize(product.category)}</p>
          <h3 class="product-card__name">${product.name}</h3>
          <div class="product-card__stars">
            ${renderStars(product.rating, product.reviewCount)}
          </div>
          <div class="product-card__footer">
            <span class="product-card__price">${formatPrice(product.price)}</span>
            <button class="product-card__cta" data-id="${product.id}"
              aria-label="Add ${product.name} to cart" title="Quick add to cart"
              onclick="event.stopPropagation()">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  /* ── Render grid ─────────────────────────────── */
  function render(products) {
    const g = document.getElementById('shopGrid');
    if (!g) {
      renderFeatured();
      return;
    }

    const empty = document.getElementById('shopEmpty');
    if (products.length === 0) {
      g.innerHTML = '';
      if (empty) empty.hidden = false;
    } else {
      if (empty) empty.hidden = true;
      g.innerHTML = products.map(cardHTML).join('');
    }

    if (countEl()) countEl().textContent = products.length;

    // Update active filter chips
    renderFilterChips();
    attachCardEvents(g);
  }

  function renderFeatured() {
    const g = document.getElementById('featuredGrid');
    if (!g) return;
    const featured = PRODUCTS.filter(p => p.featured).slice(0, 4);
    g.innerHTML = featured.map(cardHTML).join('');
    attachCardEvents(g);
  }

  function attachCardEvents(container) {
    // Click card → open modal
    container.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => {
        const product = PRODUCTS.find(p => p.id === parseInt(card.dataset.id));
        if (product) Modal.open(product);
      });
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });

    // Quick add → open modal (user still picks size there)
    container.querySelectorAll('.product-card__cta').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const product = PRODUCTS.find(p => p.id === parseInt(btn.dataset.id));
        if (product) Modal.open(product);
      });
    });
  }

  /* ── Filter chips ────────────────────────────── */
  function renderFilterChips() {
    const wrap = document.getElementById('activeFilters');
    if (!wrap) return;
    const chips = [];

    if (activeFilters.search) {
      chips.push({ label: `"${activeFilters.search}"`, type: 'search', value: '' });
    }
    activeFilters.category.forEach(v => chips.push({ label: capitalize(v), type: 'category', value: v }));
    activeFilters.kit.forEach(v      => chips.push({ label: capitalize(v) + ' kit', type: 'kit', value: v }));
    activeFilters.club.forEach(v     => chips.push({ label: v, type: 'club', value: v }));

    wrap.innerHTML = chips.map(c => `
      <button class="filter-chip" data-type="${c.type}" data-value="${c.value}" aria-label="Remove ${c.label} filter">
        ${c.label} <span class="filter-chip__remove" aria-hidden="true">×</span>
      </button>
    `).join('');

    wrap.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => removeFilter(chip.dataset.type, chip.dataset.value));
    });
  }

  function removeFilter(type, value) {
    if (type === 'search') {
      activeFilters.search = '';
      const input = document.getElementById('searchInput');
      if (input) input.value = '';
    } else {
      activeFilters[type] = activeFilters[type].filter(v => v !== value);
      // Uncheck the checkbox
      const cb = document.querySelector(`input[name="${type}"][value="${value}"]`);
      if (cb) cb.checked = false;
    }
    render(filteredProducts());
  }

  /* ── Club filters (dynamic) ──────────────────── */
  function buildClubFilters() {
    const wrap = document.getElementById('clubFilters');
    if (!wrap) return;
    const clubs = getUniqueClubs();
    wrap.innerHTML = clubs.map(club => `
      <label class="filter-check">
        <input type="checkbox" name="club" value="${club}" />
        <span>${club}</span>
      </label>
    `).join('');
    attachFilterListeners();
  }

  /* ── Filter listeners ────────────────────────── */
  function attachFilterListeners() {
    // Checkboxes
    document.querySelectorAll('.filter-check input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', () => {
        const name = cb.name;
        if (cb.checked) {
          if (!activeFilters[name].includes(cb.value)) activeFilters[name].push(cb.value);
        } else {
          activeFilters[name] = activeFilters[name].filter(v => v !== cb.value);
        }
        render(filteredProducts());
      });
    });

    // Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', debounce(e => {
        activeFilters.search = e.target.value.trim();
        render(filteredProducts());
      }, 250));
    }

    // Clear all
    const clearBtn = document.getElementById('clearFilters');
    if (clearBtn) {
      clearBtn.addEventListener('click', clearAll);
    }

    // Reset from empty state
    const resetBtn = document.getElementById('resetSearch');
    if (resetBtn) {
      resetBtn.addEventListener('click', clearAll);
    }
  }

  function clearAll() {
    activeFilters = { search: '', category: [], kit: [], club: [] };
    document.querySelectorAll('.filter-check input[type="checkbox"]').forEach(cb => {
      cb.checked = false;
    });
    const si = document.getElementById('searchInput');
    if (si) si.value = '';
    render(PRODUCTS);
    renderFilterChips();
  }

  /* ── URL params (from collection tiles) ─────── */
  function applyURLParams() {
    const params = new URLSearchParams(window.location.search);
    const filter = params.get('filter');
    if (!filter) return;

    const map = {
      club:     () => { activeFilters.category = ['club'];     setCheckbox('category','club'); },
      national: () => { activeFilters.category = ['national']; setCheckbox('category','national'); }
    };
    if (map[filter]) map[filter]();
  }

  function setCheckbox(name, value) {
    const cb = document.querySelector(`input[name="${name}"][value="${value}"]`);
    if (cb) cb.checked = true;
  }

  /* ── Mobile filter toggle ────────────────────── */
  function initMobileFilter() {
    const toggleBtn = document.getElementById('filterToggle');
    const sidebar   = document.getElementById('shopSidebar');
    if (!toggleBtn || !sidebar) return;

    function setFiltersOpen(isOpen) {
      sidebar.classList.toggle('open', isOpen);
      document.body.classList.toggle('shop-filters-open', isOpen);
      toggleBtn.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setFiltersOpen(!sidebar.classList.contains('open'));
    });

    document.addEventListener('click', e => {
      if (sidebar.classList.contains('open') &&
          !sidebar.contains(e.target) &&
          !toggleBtn.contains(e.target)) {
        setFiltersOpen(false);
      }
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        setFiltersOpen(false);
      }
    });
  }

  /* ── Init ───────────────────────────────────── */
  function init() {
    const isShopPage = !!document.getElementById('shopGrid');

    if (isShopPage) {
      buildClubFilters();
      attachFilterListeners();
      applyURLParams();
      render(filteredProducts());
      initMobileFilter();
    } else {
      renderFeatured();
    }
  }

  return { init };
})();

/* ── Debounce helper ────────────────────────── */
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

document.addEventListener('DOMContentLoaded', () => Shop.init());