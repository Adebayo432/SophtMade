/* ═══════════════════════════════════════════════
   UI — Navbar scroll, hamburger, FAQ, scroll animations
═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAVBAR SCROLL EFFECT ───────────────────── */
  const navbar = document.getElementById('navbar');

  if (navbar) {
    const SCROLL_THRESHOLD = 60;

    function updateNavbar() {
      const scrolled = window.scrollY > SCROLL_THRESHOLD;
      navbar.classList.toggle('navbar--scrolled', scrolled);
    }

    // Run on load
    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
  }

  /* ── HAMBURGER MENU ─────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');

  function closeMenu() {
    if (!navMenu || !hamburger) return;
    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    if (!navMenu || !hamburger) return;
    navMenu.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
  }

  if (hamburger && navMenu) {
    // Toggle on hamburger click
    hamburger.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      navMenu.classList.contains('open') ? closeMenu() : openMenu();
    });

    // Close when a link is clicked
    navMenu.querySelectorAll('.navbar__link').forEach(function(link) {
      link.addEventListener('click', function() { closeMenu(); });
    });

    // Close when clicking outside
    document.addEventListener('click', function(e) {
      if (navMenu.classList.contains('open') &&
          !navMenu.contains(e.target) &&
          e.target !== hamburger &&
          !hamburger.contains(e.target)) {
        closeMenu();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ── FAQ ACCORDION ──────────────────────────── */
  document.querySelectorAll('.faq-item__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-item__answer');
      const isOpen = item.classList.contains('open');

      // Close all open items first
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-item__answer').hidden = true;
          openItem.querySelector('.faq-item__question').setAttribute('aria-expanded', false);
        }
      });

      // Toggle current
      item.classList.toggle('open', !isOpen);
      answer.hidden = isOpen;
      btn.setAttribute('aria-expanded', !isOpen);
    });
  });

  /* ── SCROLL-IN ANIMATIONS ───────────────────── */
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    // Observe cards and sections
    document.querySelectorAll(
      '.why__item, .testi__card, .product-card, .collection-tile, .contact-card, .faq-item'
    ).forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity .5s var(--ease-out) ${(i % 4) * 0.07}s, transform .5s var(--ease-out) ${(i % 4) * 0.07}s`;
      observer.observe(el);
    });

    document.addEventListener('css-ready', () => {
      document.querySelectorAll('.in-view').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    });
  }

  // Apply in-view styles
  document.querySelectorAll('.in-view').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });

  // MutationObserver to catch dynamically added cards
  const gridObserver = new MutationObserver(() => {
    document.querySelectorAll('.product-card:not([data-observed])').forEach((el, i) => {
      el.dataset.observed = '1';
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity .45s var(--ease-out) ${(i % 4) * 0.06}s, transform .45s var(--ease-out) ${(i % 4) * 0.06}s`;
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    });
  });

  const grids = document.querySelectorAll('#shopGrid, #featuredGrid');
  grids.forEach(g => gridObserver.observe(g, { childList: true }));

  /* ── SMOOTH SCROLL for anchor links ─────────── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 68;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset - 16,
        behavior: 'smooth'
      });
    });
  });

  /* ── INTERSECTION for in-view class ─────────── */
  if ('IntersectionObserver' in window) {
    const viewObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'none';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[style*="opacity: 0"]').forEach(el => viewObserver.observe(el));
  }
});