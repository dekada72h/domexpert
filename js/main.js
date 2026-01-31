// ===== DOM ELEMENTS =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== MOBILE MENU TOGGLE =====
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });
}

// Close mobile menu when clicking a link
if (mobileMenu) {
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ===== SEARCH TABS =====
document.querySelectorAll('.search-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// ===== PROPERTY FAVORITES =====
document.querySelectorAll('.property-favorite').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    btn.classList.toggle('active');
    const svg = btn.querySelector('svg');
    if (btn.classList.contains('active')) {
      svg.setAttribute('fill', '#E74C3C');
      svg.setAttribute('stroke', '#E74C3C');
    } else {
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
    }
  });
});

// ===== PROPERTY FILTERS =====
function filterProperties() {
  const type = document.getElementById('filterType')?.value || '';
  const location = document.getElementById('filterLocation')?.value || '';
  const property = document.getElementById('filterProperty')?.value || '';
  const beds = document.getElementById('filterBeds')?.value || '';

  const cards = document.querySelectorAll('#propertiesGrid .property-card');
  let visibleCount = 0;

  cards.forEach(card => {
    let show = true;

    if (type && card.dataset.type !== type) show = false;
    if (location && card.dataset.location !== location) show = false;
    if (property && card.dataset.property !== property) show = false;
    if (beds && parseInt(card.dataset.beds) < parseInt(beds)) show = false;

    card.style.display = show ? '' : 'none';
    if (show) visibleCount++;
  });

  // Update results count
  const resultsInfo = document.querySelector('.results-info p');
  if (resultsInfo) {
    resultsInfo.innerHTML = `Showing <strong>${visibleCount}</strong> properties`;
  }
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll(
    '.property-card, .service-card, .service-detail-card, .testimonial-card, .team-card, .why-us-item, .about-stat, .process-step, .contact-info-card'
  );

  animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index % 3 * 0.15}s, transform 0.6s ease ${index % 3 * 0.15}s`;
    observer.observe(el);
  });
});

// ===== COUNTER ANIMATION =====
function animateCounters() {
  const counters = document.querySelectorAll('.hero-stat-number, .about-stat .number');

  counters.forEach(counter => {
    const text = counter.textContent;
    const match = text.match(/[\d,]+/);
    if (!match) return;

    const target = parseInt(match[0].replace(/,/g, ''));
    const suffix = text.replace(match[0], '');
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += step;
      if (current >= target) {
        counter.textContent = text;
        return;
      }
      counter.textContent = Math.floor(current).toLocaleString() + suffix;
      requestAnimationFrame(updateCounter);
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counterObserver.observe(counter);
  });
}

document.addEventListener('DOMContentLoaded', animateCounters);
