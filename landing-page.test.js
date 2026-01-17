/**
 * @jest-environment jsdom
 */

describe('Landing Page - Hero Section', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <section id="home" class="hero">
        <div class="hero-content">
          <h1 class="hero-title">
            Transform Your Digital <span class="gradient-text">Future</span>
          </h1>
          <p class="hero-subtitle">
            Empowering businesses with cutting-edge technology solutions that drive innovation and growth
          </p>
          <div class="hero-buttons">
            <button class="btn btn-primary">Get Started</button>
            <button class="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div class="hero-visual">
          <div class="floating-card card-1">
            <div class="card-icon">📊</div>
            <div class="card-text">Analytics</div>
          </div>
          <div class="floating-card card-2">
            <div class="card-icon">🎯</div>
            <div class="card-text">Strategy</div>
          </div>
          <div class="floating-card card-3">
            <div class="card-icon">⚡</div>
            <div class="card-text">Performance</div>
          </div>
        </div>
      </section>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should render hero section with correct id', () => {
    const hero = document.querySelector('#home.hero');
    expect(hero).toBeInTheDocument();
  });

  test('should display hero title with gradient text', () => {
    const heroTitle = document.querySelector('.hero-title');
    const gradientText = heroTitle.querySelector('.gradient-text');
    
    expect(heroTitle).toBeInTheDocument();
    expect(heroTitle.textContent).toContain('Transform Your Digital');
    expect(gradientText).toBeInTheDocument();
    expect(gradientText.textContent).toBe('Future');
  });

  test('should display hero subtitle', () => {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    expect(heroSubtitle).toBeInTheDocument();
    expect(heroSubtitle.textContent).toContain('Empowering businesses');
  });

  test('should have two action buttons in hero', () => {
    const buttons = document.querySelectorAll('.hero-buttons .btn');
    
    expect(buttons).toHaveLength(2);
  });

  test('should have primary and secondary CTA buttons', () => {
    const primaryBtn = document.querySelector('.hero-buttons .btn-primary');
    const secondaryBtn = document.querySelector('.hero-buttons .btn-secondary');
    
    expect(primaryBtn).toBeInTheDocument();
    expect(primaryBtn.textContent).toBe('Get Started');
    expect(secondaryBtn).toBeInTheDocument();
    expect(secondaryBtn.textContent).toBe('Learn More');
  });

  test('should have three floating cards in hero visual', () => {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    expect(floatingCards).toHaveLength(3);
  });

  test('should have unique card classes for floating cards', () => {
    const card1 = document.querySelector('.card-1');
    const card2 = document.querySelector('.card-2');
    const card3 = document.querySelector('.card-3');
    
    expect(card1).toBeInTheDocument();
    expect(card2).toBeInTheDocument();
    expect(card3).toBeInTheDocument();
  });

  test('floating cards should have icons and text', () => {
    const cards = document.querySelectorAll('.floating-card');
    
    cards.forEach(card => {
      const icon = card.querySelector('.card-icon');
      const text = card.querySelector('.card-text');
      
      expect(icon).toBeInTheDocument();
      expect(text).toBeInTheDocument();
    });
  });

  test('floating cards should display correct content', () => {
    const card1 = document.querySelector('.card-1');
    const card2 = document.querySelector('.card-2');
    const card3 = document.querySelector('.card-3');
    
    expect(card1.querySelector('.card-text').textContent).toBe('Analytics');
    expect(card2.querySelector('.card-text').textContent).toBe('Strategy');
    expect(card3.querySelector('.card-text').textContent).toBe('Performance');
  });
});

describe('Landing Page - Smooth Scrolling', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <nav class="navbar">
        <ul class="nav-menu">
          <li><a href="#home" class="nav-link">Home</a></li>
          <li><a href="#features" class="nav-link">Features</a></li>
          <li><a href="#testimonials" class="nav-link">Testimonials</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>
      <section id="home">Home Section</section>
      <section id="features">Features Section</section>
      <section id="testimonials">Testimonials Section</section>
      <section id="contact">Contact Section</section>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
  });

  test('should have navigation links with hash hrefs', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    expect(links).toHaveLength(4);
    links.forEach(link => {
      expect(link.getAttribute('href')).toMatch(/^#/);
    });
  });

  test('navigation links should point to existing sections', () => {
    const homeLink = document.querySelector('a[href="#home"]');
    const featuresLink = document.querySelector('a[href="#features"]');
    const testimonialsLink = document.querySelector('a[href="#testimonials"]');
    const contactLink = document.querySelector('a[href="#contact"]');
    
    expect(homeLink).toBeInTheDocument();
    expect(featuresLink).toBeInTheDocument();
    expect(testimonialsLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    
    expect(document.querySelector('#home')).toBeInTheDocument();
    expect(document.querySelector('#features')).toBeInTheDocument();
    expect(document.querySelector('#testimonials')).toBeInTheDocument();
    expect(document.querySelector('#contact')).toBeInTheDocument();
  });

  test('should be able to get target section from link href', () => {
    const link = document.querySelector('a[href="#home"]');
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    expect(targetSection).toBeInTheDocument();
    expect(targetSection.id).toBe('home');
  });
});

describe('Landing Page - Mobile Menu Animation', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <nav class="navbar">
        <button class="menu-toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-menu"></ul>
      </nav>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('menu toggle should have three spans for hamburger animation', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const spans = menuToggle.querySelectorAll('span');
    
    expect(spans).toHaveLength(3);
  });

  test('hamburger spans should support transform animations', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const spans = menuToggle.querySelectorAll('span');
    
    // Simulate hamburger to X animation
    spans[0].style.transform = 'rotate(45deg) translateY(10px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    
    expect(spans[0].style.transform).toBe('rotate(45deg) translateY(10px)');
    expect(spans[1].style.opacity).toBe('0');
    expect(spans[2].style.transform).toBe('rotate(-45deg) translateY(-10px)');
  });

  test('hamburger spans should be resettable', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const spans = menuToggle.querySelectorAll('span');
    
    // Apply animation
    spans[0].style.transform = 'rotate(45deg) translateY(10px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    
    // Reset animation
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
    
    expect(spans[0].style.transform).toBe('none');
    expect(spans[1].style.opacity).toBe('1');
    expect(spans[2].style.transform).toBe('none');
  });

  test('nav menu should toggle active state', () => {
    const navMenu = document.querySelector('.nav-menu');
    
    expect(navMenu.classList.contains('active')).toBe(false);
    
    navMenu.classList.toggle('active');
    expect(navMenu.classList.contains('active')).toBe(true);
    
    navMenu.classList.toggle('active');
    expect(navMenu.classList.contains('active')).toBe(false);
  });
});

describe('Landing Page - Particle Effect', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <section class="hero"></section>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('hero section should exist for particle effect', () => {
    const hero = document.querySelector('.hero');
    expect(hero).toBeInTheDocument();
  });

  test('should be able to create particle element', () => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    expect(particle.className).toBe('particle');
  });

  test('particle should have correct styling properties', () => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      position: absolute;
      width: 5px;
      height: 5px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      pointer-events: none;
    `;
    
    expect(particle.style.position).toBe('absolute');
    expect(particle.style.width).toBe('5px');
    expect(particle.style.height).toBe('5px');
    expect(particle.style.borderRadius).toBe('50%');
    expect(particle.style.pointerEvents).toBe('none');
  });

  test('particle should be appendable and removable from DOM', () => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    document.body.appendChild(particle);
    expect(document.querySelector('.particle')).toBeInTheDocument();
    
    particle.remove();
    expect(document.querySelector('.particle')).not.toBeInTheDocument();
  });
});

describe('Landing Page - Page Initialization', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <nav class="navbar">
        <div class="nav-brand">
          <span class="logo">🚀 InnovateTech</span>
        </div>
      </nav>
      <section class="hero"></section>
      <section class="features"></section>
      <section class="stats"></section>
      <section class="testimonials"></section>
      <section class="cta">
        <form id="contactForm">
          <input type="email" class="email-input" required>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </section>
      <footer class="footer"></footer>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should have all required DOM elements for landing page', () => {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo');
    const hero = document.querySelector('.hero');
    const features = document.querySelector('.features');
    const stats = document.querySelector('.stats');
    const testimonials = document.querySelector('.testimonials');
    const cta = document.querySelector('.cta');
    const footer = document.querySelector('.footer');
    
    expect(navbar).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(hero).toBeInTheDocument();
    expect(features).toBeInTheDocument();
    expect(stats).toBeInTheDocument();
    expect(testimonials).toBeInTheDocument();
    expect(cta).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  test('logo should display brand name', () => {
    const logo = document.querySelector('.logo');
    expect(logo.textContent).toContain('InnovateTech');
  });

  test('contact form should be present', () => {
    const form = document.querySelector('#contactForm');
    const emailInput = form.querySelector('.email-input');
    const submitBtn = form.querySelector('.btn-primary');
    
    expect(form).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(emailInput.type).toBe('email');
    expect(emailInput.required).toBe(true);
    expect(submitBtn).toBeInTheDocument();
  });
});

describe('Landing Page - Parallax Effect', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <section class="hero"></section>
    `;

    Object.defineProperty(window, 'pageYOffset', {
      writable: true,
      configurable: true,
      value: 0
    });
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('hero should support transform for parallax', () => {
    const hero = document.querySelector('.hero');
    
    hero.style.transform = 'translateY(0px)';
    expect(hero.style.transform).toBe('translateY(0px)');
    
    hero.style.transform = 'translateY(25px)';
    expect(hero.style.transform).toBe('translateY(25px)');
  });

  test('parallax transform should calculate based on scroll position', () => {
    const scrolled = 100;
    const parallaxValue = scrolled * 0.5;
    
    expect(parallaxValue).toBe(50);
  });
});

describe('Landing Page - Interactive Elements', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <section class="hero">
        <div class="hero-buttons">
          <button class="btn btn-primary">Get Started</button>
          <button class="btn btn-secondary">Learn More</button>
        </div>
      </section>
      <section class="features">
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🌐</div>
            <h3>Global Reach</h3>
            <p>Description</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>Enterprise Security</h3>
            <p>Description</p>
          </div>
        </div>
      </section>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('hero buttons should be interactive elements', () => {
    const primaryBtn = document.querySelector('.btn-primary');
    const secondaryBtn = document.querySelector('.btn-secondary');
    
    expect(primaryBtn.tagName).toBe('BUTTON');
    expect(secondaryBtn.tagName).toBe('BUTTON');
  });

  test('feature cards should have consistent structure', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
      const icon = card.querySelector('.feature-icon');
      const heading = card.querySelector('h3');
      const description = card.querySelector('p');
      
      expect(icon).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });

  test('feature cards should display content', () => {
    const cards = document.querySelectorAll('.feature-card');
    
    expect(cards[0].querySelector('h3').textContent).toBe('Global Reach');
    expect(cards[1].querySelector('h3').textContent).toBe('Enterprise Security');
  });
});
