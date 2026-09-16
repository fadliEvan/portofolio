/**
 * Fadli Yurisman — Portfolio Core Script
 * Features:
 * 1. Seamless Light/Dark Theme Switching & LocalStorage Persistence
 * 2. 21st.dev Inspired Spotlight Mouse Tracking
 * 3. IntersectionObserver Scroll Reveal
 * 4. Active Scroll Spy Navigation
 * 5. Accessible Mobile Navigation Drawer
 * 6. Dynamic Certificate Grid & Expansion
 * 7. One-Click Email Copy to Clipboard
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. THEME MANAGEMENT ---
  const themeToggle = document.getElementById('themeToggle');
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');

  function getActiveTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  function applyTheme(theme, save = true) {
    document.documentElement.setAttribute('data-theme', theme);
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#090A0F' : '#FBFBFA');
    }
    if (save) {
      localStorage.setItem('fy-portfolio-theme', theme);
    }
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
      themeToggle.setAttribute('title', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = getActiveTheme();
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next, true);
    });
  }

  // Listen for system theme changes if user hasn't explicitly set preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('fy-portfolio-theme')) {
      applyTheme(e.matches ? 'dark' : 'light', false);
    }
  });

  // --- 2. SPOTLIGHT CARD INTERACTION ---
  // Calculates mouse position relative to card boundaries and updates CSS vars
  function setupSpotlightCards() {
    const spotlightCards = document.querySelectorAll('.spotlight-card');
    
    // Only bind pointermove on pointer-capable devices
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      spotlightCards.forEach((card) => {
        card.addEventListener('pointermove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        });
      });
    }
  }
  setupSpotlightCards();

  // --- 3. SCROLL REVEAL (IntersectionObserver) ---
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback: show immediately
    revealElements.forEach((el) => el.classList.add('visible'));
  }

  // --- 4. SCROLL SPY & ACTIVE NAV LINK ---
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-item');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav .mobile-nav-link');

  function onScrollSpy() {
    const scrollPos = window.scrollY + 160;
    let currentId = 'hero';

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    desktopNavLinks.forEach((link) => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === currentId);
    });

    mobileNavLinks.forEach((link) => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === currentId);
    });
  }

  window.addEventListener('scroll', onScrollSpy, { passive: true });
  onScrollSpy();

  // --- 5. MOBILE NAVIGATION DRAWER ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  function closeMobileMenu() {
    if (mobileMenuBtn && mobileDrawer) {
      mobileMenuBtn.classList.remove('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileDrawer.classList.remove('open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
    }
  }

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        mobileMenuBtn.classList.add('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        mobileDrawer.classList.add('open');
        mobileDrawer.setAttribute('aria-hidden', 'false');
      }
    });

    // Close when clicking any nav link
    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (
        mobileDrawer.classList.contains('open') &&
        !mobileDrawer.contains(e.target) &&
        !mobileMenuBtn.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });
  }

  // --- 6. CERTIFICATES DATA & RENDERING ---
  const certificateData = [
    { file: 'certificate_huawei_courses_fadli_yurisman.pdf', title: 'Huawei Courses — Cloud & Tech', type: 'PDF' },
    { file: 'frontend_developer_react certificate.pdf', title: 'Frontend Developer: React', type: 'PDF' },
    { file: 'JavaScriptEssentials1Update20260802-8-j2zer5.pdf', title: 'JavaScript Essentials 1', type: 'PDF' },
    { file: 'javascript_intermediate certificate.pdf', title: 'JavaScript — Intermediate', type: 'PDF' },
    { file: 'nodejs_intermediate certificate.pdf', title: 'Node.js — Intermediate', type: 'PDF' },
    { file: 'rest_api_intermediate certificate.pdf', title: 'REST API — Intermediate', type: 'PDF' },
    { file: 'software_engineer certificate.pdf', title: 'Software Engineering Competency', type: 'PDF' },
    { file: 'chatgpt.jpeg', title: 'ChatGPT AI Prompting Workshop', type: 'JPEG' },
    { file: 'claude.jpeg', title: 'Claude AI Engineering Workshop', type: 'JPEG' },
    { file: 'lovable.jpeg', title: 'Lovable Full-Stack AI Course', type: 'JPEG' },
    { file: 'yourpersonalai.jpeg', title: 'Your Personal AI Specialist', type: 'JPEG' }
  ];

  const certificateGrid = document.getElementById('certificateGrid');
  const certificateToggle = document.getElementById('certificateToggle');
  const INITIAL_VISIBLE_COUNT = 6;
  let isCertsExpanded = false;

  function createCertificateCard(cert) {
    const article = document.createElement('article');
    article.className = 'cert-card spotlight-card';

    const header = document.createElement('div');
    header.className = 'cert-header';

    const title = document.createElement('h3');
    title.className = 'cert-title';
    title.textContent = cert.title;

    const typeBadge = document.createElement('span');
    typeBadge.className = 'cert-type-pill';
    typeBadge.textContent = cert.type;

    header.appendChild(title);
    header.appendChild(typeBadge);

    const meta = document.createElement('div');
    meta.className = 'cert-meta';
    meta.textContent = cert.file;

    const footer = document.createElement('div');
    footer.className = 'cert-footer';

    const link = document.createElement('a');
    link.className = 'cert-view-link';
    link.href = `sertifikat/${encodeURI(cert.file)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.innerHTML = `
      <span>View Document</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
    `;

    footer.appendChild(link);

    article.appendChild(header);
    article.appendChild(meta);
    article.appendChild(footer);

    return article;
  }

  function renderCertificates() {
    if (!certificateGrid) return;
    certificateGrid.innerHTML = '';
    const visibleList = isCertsExpanded ? certificateData : certificateData.slice(0, INITIAL_VISIBLE_COUNT);

    visibleList.forEach((cert) => {
      certificateGrid.appendChild(createCertificateCard(cert));
    });

    if (certificateToggle) {
      const toggleText = certificateToggle.querySelector('span');
      if (toggleText) {
        toggleText.textContent = isCertsExpanded
          ? 'Show fewer certificates'
          : `Show all ${certificateData.length} certificates`;
      }
      certificateToggle.setAttribute('aria-expanded', String(isCertsExpanded));
    }

    setupSpotlightCards();
  }

  if (certificateToggle) {
    certificateToggle.addEventListener('click', () => {
      isCertsExpanded = !isCertsExpanded;
      renderCertificates();
    });
  }

  renderCertificates();

  // --- 7. EMAIL COPY TO CLIPBOARD ---
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'fadliyurisman@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showCopySuccess();
        }).catch(() => {
          fallbackCopy(email);
        });
      } else {
        fallbackCopy(email);
      }
    });

    function showCopySuccess() {
      copyEmailBtn.classList.add('copied');
      const text = copyEmailBtn.querySelector('.copy-text');
      if (text) text.textContent = 'Copied!';
      setTimeout(() => {
        copyEmailBtn.classList.remove('copied');
        if (text) text.textContent = 'Copy';
      }, 2200);
    }

    function fallbackCopy(text) {
      const tempInput = document.createElement('input');
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      try {
        document.execCommand('copy');
        showCopySuccess();
      } catch (err) {}
      document.body.removeChild(tempInput);
    }
  }
});
