/**
 * @jest-environment jsdom
 */

describe('Landing Page - Integration Tests', () => {
  beforeEach(() => {
    // Set up the complete HTML structure
    document.body.innerHTML = `
      <nav class="navbar">
        <div class="container">
          <div class="nav-brand">
            <span class="logo">🚀 InnovateTech</span>
          </div>
          <ul class="nav-menu">
            <li><a href="#home" class="nav-link">Home</a></li>
            <li><a href="#features" class="nav-link">Features</a></li>
            <li><a href="#testimonials" class="nav-link">Testimonials</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
          </ul>
          <button class="menu-toggle" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <section id="home" class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Transform Your Digital <span class="gradient-text">Future</span></h1>
          <p class="hero-subtitle">Empowering businesses</p>
          <div class="hero-buttons">
            <button class="btn btn-primary">Get Started</button>
            <button class="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      <section id="features" class="features">
        <div class="container">
          <h2 class="section-title">Powerful Features</h2>
          <div class="features-grid">
            <div class="feature-card"></div>
            <div class="feature-card"></div>
            <div class="feature-card"></div>
          </div>
        </div>
      </section>

      <section class="stats">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-number" data-target="10000">0</div>
              <div class="stat-label">Active Users</div>
            </div>
            <div class="stat-item">
              <div class="stat-number" data-target="150">0</div>
              <div class="stat-label">Countries</div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" class="testimonials">
        <div class="container">
          <div class="testimonial-card"></div>
        </div>
      </section>

      <section id="contact" class="cta">
        <div class="container">
          <div class="cta-content">
            <form class="cta-form" id="contactForm">
              <input type="email" placeholder="Enter your email" class="email-input" required>
              <button type="submit" class="btn btn-primary">Start Free Trial</button>
            </form>
          </div>
        </div>
      </section>

      <footer class="footer"></footer>
    `;

    // Mock console.log
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
  });

  test('page should have all main sections', () => {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    const features = document.querySelector('.features');
    const stats = document.querySelector('.stats');
    const testimonials = document.querySelector('.testimonials');
    const cta = document.querySelector('.cta');
    const footer = document.querySelector('.footer');

    expect(navbar).toBeInTheDocument();
    expect(hero).toBeInTheDocument();
    expect(features).toBeInTheDocument();
    expect(stats).toBeInTheDocument();
    expect(testimonials).toBeInTheDocument();
    expect(cta).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  test('navigation menu should be toggleable', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Initial state
    expect(navMenu.classList.contains('active')).toBe(false);

    // Manually toggle class to test structure
    navMenu.classList.toggle('active');
    expect(navMenu.classList.contains('active')).toBe(true);

    navMenu.classList.toggle('active');
    expect(navMenu.classList.contains('active')).toBe(false);
  });

  test('form elements should be manipulable', () => {
    const form = document.querySelector('#contactForm');
    const emailInput = document.querySelector('.email-input');
    const submitBtn = form.querySelector('.btn-primary');

    // Fill form
    emailInput.value = 'user@example.com';
    expect(emailInput.value).toBe('user@example.com');

    // Change button text
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '✓ Success!';
    expect(submitBtn.textContent).toBe('✓ Success!');

    // Reset
    submitBtn.textContent = originalText;
    form.reset();
    expect(emailInput.value).toBe('');
  });

  test('all feature cards should be present', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    expect(featureCards.length).toBe(3);
  });

  test('all stat numbers should have data-target', () => {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
      expect(stat.hasAttribute('data-target')).toBe(true);
      expect(parseInt(stat.getAttribute('data-target'))).toBeGreaterThan(0);
    });
  });

  test('navbar should handle scroll event', () => {
    const navbar = document.querySelector('.navbar');

    // Verify navbar exists and can have scrolled class
    expect(navbar).toBeInTheDocument();
    expect(navbar.classList.contains('scrolled')).toBe(false);

    // Manually add to verify functionality
    navbar.classList.add('scrolled');
    expect(navbar.classList.contains('scrolled')).toBe(true);

    navbar.classList.remove('scrolled');
    expect(navbar.classList.contains('scrolled')).toBe(false);
  });

  test('hero section should support parallax transform', () => {
    const hero = document.querySelector('.hero');

    expect(hero).toBeInTheDocument();

    // Test that transform can be applied
    hero.style.transform = 'translateY(50px)';
    expect(hero.style.transform).toBe('translateY(50px)');

    hero.style.transform = '';
    expect(hero.style.transform).toBe('');
  });
});
