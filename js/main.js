/**
 * St. Jude Church (RCSC), Mekkadambu
 * Main JavaScript — navigation, animations, scroll effects
 */

document.addEventListener('DOMContentLoaded', () => {

  // ─────────────────────────────────────────
  // 1. STICKY NAVBAR — scrolled class
  // ─────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // ─────────────────────────────────────────
  // 2. MOBILE HAMBURGER MENU
  // ─────────────────────────────────────────
  const toggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    // Close on link click
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });

    // Mobile dropdown toggle
    document.querySelectorAll('.nav-item > a').forEach(link => {
      link.addEventListener('click', function (e) {
        const parent = this.closest('.nav-item');
        if (parent && parent.querySelector('.dropdown') && window.innerWidth <= 768) {
          e.preventDefault();
          parent.classList.toggle('open');
        }
      });
    });
  }

  // ─────────────────────────────────────────
  // 3. ACTIVE NAV LINK
  // ─────────────────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ─────────────────────────────────────────
  // 4. SCROLL-TO-TOP BUTTON
  // ─────────────────────────────────────────
  const scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 350);
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─────────────────────────────────────────
  // 5. REVEAL ON SCROLL (IntersectionObserver)
  // ─────────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));
  }

  // ─────────────────────────────────────────
  // 6. ANNOUNCEMENT TICKER DUPLICATION
  // ─────────────────────────────────────────
  const tickerContent = document.querySelector('.ticker-content');
  if (tickerContent) {
    // Duplicate for seamless scroll
    tickerContent.innerHTML += tickerContent.innerHTML;
  }

  // ─────────────────────────────────────────
  // 7. GALLERY LIGHTBOX
  // ─────────────────────────────────────────
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  if (lightbox && lightboxImg) {
    document.querySelectorAll('[data-lightbox]').forEach(item => {
      item.addEventListener('click', () => {
        const src = item.getAttribute('data-lightbox');
        const alt = item.getAttribute('data-caption') || 'Parish Photo';
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      lightboxImg.src = '';
    };

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
  }

  // ─────────────────────────────────────────
  // 8. CONTACT FORM — Basic validation + feedback
  // ─────────────────────────────────────────
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name    = contactForm.querySelector('#fname')?.value.trim();
      const email   = contactForm.querySelector('#femail')?.value.trim();
      const message = contactForm.querySelector('#fmessage')?.value.trim();
      const btn     = contactForm.querySelector('[type=submit]');

      if (!name || !email || !message) {
        showFormMsg(contactForm, '⚠ Please fill in all required fields.', 'error');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showFormMsg(contactForm, '⚠ Please enter a valid email address.', 'error');
        return;
      }

      // Simulate submission
      btn.textContent = 'Sending…';
      btn.disabled = true;
      setTimeout(() => {
        showFormMsg(contactForm, '✅ Thank you! Your message has been received. We will get back to you soon.', 'success');
        contactForm.reset();
        btn.textContent = 'Send Message';
        btn.disabled = false;
      }, 1200);
    });
  }

  function showFormMsg(form, text, type) {
    let msgEl = form.querySelector('.form-message');
    if (!msgEl) {
      msgEl = document.createElement('p');
      msgEl.className = 'form-message';
      form.appendChild(msgEl);
    }
    msgEl.textContent = text;
    msgEl.style.cssText = `margin-top:12px;padding:12px 16px;border-radius:6px;font-size:0.9rem;
      background:${type === 'success' ? '#e8f5e9' : '#fce4e4'};
      color:${type === 'success' ? '#2e7d32' : '#c62828'};border:1px solid ${type === 'success' ? '#a5d6a7' : '#ef9a9a'}`;
  }

  // ─────────────────────────────────────────
  // 9. COUNTER ANIMATION (stats)
  // ─────────────────────────────────────────
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'));
          let start = 0;
          const duration = 1200;
          const step = Math.ceil(target / (duration / 16));
          const timer = setInterval(() => {
            start = Math.min(start + step, target);
            el.textContent = start.toLocaleString() + (el.getAttribute('data-suffix') || '');
            if (start >= target) clearInterval(timer);
          }, 16);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObserver.observe(el));
  }

});
