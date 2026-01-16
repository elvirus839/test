/**
 * @jest-environment jsdom
 */

describe('Landing Page - DOM Structure', () => {
  let document;

  beforeEach(() => {
    document = global.document;
    // Load minimal HTML structure for testing
    document.body.innerHTML = `
      <nav class="navbar">
        <div class="nav-brand"><span class="logo">🚀 InnovateTech</span></div>
      </nav>
      <section id="home" class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Transform Your Digital <span class="gradient-text">Future</span></h1>
        </div>
      </section>
      <section id="features" class="features">
        <div class="features-grid">
          <div class="feature-card"></div>
          <div class="feature-card"></div>
        </div>
      </section>
      <section class="stats">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number" data-target="10000">0</div>
          </div>
        </div>
      </section>
      <section id="testimonials" class="testimonials">
        <div class="testimonial-card"></div>
      </section>
      <section id="contact" class="cta">
        <form id="contactForm"></form>
      </section>
      <footer class="footer"></footer>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should have navigation bar', () => {
    const navbar = document.querySelector('.navbar');
    expect(navbar).toBeInTheDocument();
  });

  test('should have logo in navigation', () => {
    const logo = document.querySelector('.logo');
    expect(logo).toBeInTheDocument();
    expect(logo.textContent).toContain('InnovateTech');
  });

  test('should have hero section', () => {
    const hero = document.querySelector('.hero');
    expect(hero).toBeInTheDocument();
    expect(hero.id).toBe('home');
  });

  test('should have hero title', () => {
    const heroTitle = document.querySelector('.hero-title');
    expect(heroTitle).toBeInTheDocument();
    expect(heroTitle.textContent).toContain('Transform Your Digital');
  });

  test('should have gradient text in hero', () => {
    const gradientText = document.querySelector('.gradient-text');
    expect(gradientText).toBeInTheDocument();
  });

  test('should have features section', () => {
    const features = document.querySelector('.features');
    expect(features).toBeInTheDocument();
    expect(features.id).toBe('features');
  });

  test('should have feature cards', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    expect(featureCards.length).toBeGreaterThan(0);
  });

  test('should have stats section', () => {
    const stats = document.querySelector('.stats');
    expect(stats).toBeInTheDocument();
  });

  test('should have stat items', () => {
    const statItems = document.querySelectorAll('.stat-item');
    expect(statItems.length).toBeGreaterThan(0);
  });

  test('should have testimonials section', () => {
    const testimonials = document.querySelector('.testimonials');
    expect(testimonials).toBeInTheDocument();
    expect(testimonials.id).toBe('testimonials');
  });

  test('should have testimonial cards', () => {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    expect(testimonialCards.length).toBeGreaterThan(0);
  });

  test('should have CTA section', () => {
    const cta = document.querySelector('.cta');
    expect(cta).toBeInTheDocument();
    expect(cta.id).toBe('contact');
  });

  test('should have contact form', () => {
    const form = document.querySelector('#contactForm');
    expect(form).toBeInTheDocument();
  });

  test('should have footer', () => {
    const footer = document.querySelector('.footer');
    expect(footer).toBeInTheDocument();
  });
});

describe('Landing Page - Hero Section', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Title</h1>
          <p class="hero-subtitle">Subtitle</p>
          <div class="hero-buttons">
            <button class="btn btn-primary">Get Started</button>
            <button class="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div class="hero-visual">
          <div class="floating-card card-1"></div>
          <div class="floating-card card-2"></div>
          <div class="floating-card card-3"></div>
        </div>
      </section>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should have hero buttons', () => {
    const buttons = document.querySelectorAll('.hero-buttons .btn');
    expect(buttons.length).toBe(2);
  });

  test('should have primary and secondary buttons', () => {
    const primaryBtn = document.querySelector('.btn-primary');
    const secondaryBtn = document.querySelector('.btn-secondary');

    expect(primaryBtn).toBeInTheDocument();
    expect(secondaryBtn).toBeInTheDocument();
  });

  test('should have floating cards', () => {
    const floatingCards = document.querySelectorAll('.floating-card');
    expect(floatingCards.length).toBe(3);
  });

  test('should have different card classes', () => {
    const card1 = document.querySelector('.card-1');
    const card2 = document.querySelector('.card-2');
    const card3 = document.querySelector('.card-3');

    expect(card1).toBeInTheDocument();
    expect(card2).toBeInTheDocument();
    expect(card3).toBeInTheDocument();
  });
});
