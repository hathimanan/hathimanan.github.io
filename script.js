// Navbar scroll blur + active link highlight
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 20);

    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }, { passive: true });
})();

// Hamburger menu
(function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen.toString());
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Typewriter effect
(function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const phrases = [
    'AI & Security Engineer',
    'QA Specialist',
    'Bug Hunter',
    'AI Behaviour Analyst',
    'Penetration Tester',
    'Cybersecurity Builder'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 400;
    }

    setTimeout(tick, delay);
  }

  setTimeout(tick, 1200);
})();

// Scroll reveal via IntersectionObserver
(function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-section, .stagger-children').forEach(el => {
    observer.observe(el);
  });
})();

// Animated stat counters
(function initCounters() {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const decimals = parseInt(el.dataset.decimals) || 0;
      const duration = 1800;
      const startTime = performance.now();

      function update(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = (eased * target).toFixed(decimals) + suffix;
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target.toFixed(decimals) + suffix;
      }

      requestAnimationFrame(update);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number[data-target]').forEach(el => {
    counterObserver.observe(el);
  });
})();

// Hero scroll indicator fade
(function initScrollIndicator() {
  const indicator = document.querySelector('.hero-scroll-indicator');
  if (!indicator) return;

  window.addEventListener('scroll', () => {
    indicator.style.opacity = Math.max(0, 1 - window.scrollY / 200);
  }, { passive: true });
})();
