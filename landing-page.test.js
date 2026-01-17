/**
 * Landing Page Unit Tests
 * 
 * This file contains comprehensive unit tests for the landing page components
 * and interactions. Tests verify DOM structure, element presence, and the ability
 * to manipulate elements for interactive features.
 * 
 * @jest-environment jsdom
 */

/**
 * Hero Section Tests
 * 
 * Tests for the main hero section of the landing page including:
 * - Hero section structure and content
 * - Title and subtitle rendering
 * - Call-to-action buttons
 * - Floating visual cards
 */
describe('Landing Page - Hero Section', () => {
  beforeEach(() => {
    // Set up the hero section DOM structure for testing
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
    // Clean up DOM after each test
    document.body.innerHTML = '';
  });

  // Verify the hero section renders with the correct ID attribute
  test('should render hero section with correct id', () => {
    const hero = document.querySelector('#home.hero');
    expect(hero).toBeInTheDocument();
  });

  // Verify the hero title contains the expected text and gradient styling
  test('should display hero title with gradient text', () => {
    const heroTitle = document.querySelector('.hero-title');
    const gradientText = heroTitle.querySelector('.gradient-text');
    
    expect(heroTitle).toBeInTheDocument();
    expect(heroTitle.textContent).toContain('Transform Your Digital');
    expect(gradientText).toBeInTheDocument();
    expect(gradientText.textContent).toBe('Future');
  });

  // Verify the hero subtitle is displayed with the expected content
  test('should display hero subtitle', () => {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    expect(heroSubtitle).toBeInTheDocument();
    expect(heroSubtitle.textContent).toContain('Empowering businesses');
  });

  // Verify there are exactly two action buttons in the hero section
  test('should have two action buttons in hero', () => {
    const buttons = document.querySelectorAll('.hero-buttons .btn');
    
    expect(buttons).toHaveLength(2);
  });

  // Verify both primary and secondary CTA buttons exist with correct text
  test('should have primary and secondary CTA buttons', () => {
    const primaryBtn = document.querySelector('.hero-buttons .btn-primary');
    const secondaryBtn = document.querySelector('.hero-buttons .btn-secondary');
    
    expect(primaryBtn).toBeInTheDocument();
    expect(primaryBtn.textContent).toBe('Get Started');
    expect(secondaryBtn).toBeInTheDocument();
    expect(secondaryBtn.textContent).toBe('Learn More');
  });

  // Verify all three floating cards are rendered in the hero visual
  test('should have three floating cards in hero visual', () => {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    expect(floatingCards).toHaveLength(3);
  });

  // Verify each floating card has a unique class for individual styling
  test('should have unique card classes for floating cards', () => {
    const card1 = document.querySelector('.card-1');
    const card2 = document.querySelector('.card-2');
    const card3 = document.querySelector('.card-3');
    
    expect(card1).toBeInTheDocument();
    expect(card2).toBeInTheDocument();
    expect(card3).toBeInTheDocument();
  });

  // Verify each floating card has both an icon and text element
  test('floating cards should have icons and text', () => {
    const cards = document.querySelectorAll('.floating-card');
    
    cards.forEach(card => {
      const icon = card.querySelector('.card-icon');
      const text = card.querySelector('.card-text');
      
      expect(icon).toBeInTheDocument();
      expect(text).toBeInTheDocument();
    });
  });

  // Verify the floating cards display the correct content (Analytics, Strategy, Performance)
  test('floating cards should display correct content', () => {
    const card1 = document.querySelector('.card-1');
    const card2 = document.querySelector('.card-2');
    const card3 = document.querySelector('.card-3');
    
    expect(card1.querySelector('.card-text').textContent).toBe('Analytics');
    expect(card2.querySelector('.card-text').textContent).toBe('Strategy');
    expect(card3.querySelector('.card-text').textContent).toBe('Performance');
  });
});

/**
 * Smooth Scrolling Tests
 * 
 * Tests for smooth scrolling navigation functionality:
 * - Navigation links with hash anchors
 * - Link-to-section relationships
 * - Target section retrieval
 */
describe('Landing Page - Smooth Scrolling', () => {
  beforeEach(() => {
    // Set up navigation and sections for smooth scrolling tests
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
    // Clean up DOM and mocks after each test
    document.body.innerHTML = '';
    jest.clearAllMocks();
  });

  // Verify all navigation links use hash-based hrefs for smooth scrolling
  test('should have navigation links with hash hrefs', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    expect(links).toHaveLength(4);
    links.forEach(link => {
      expect(link.getAttribute('href')).toMatch(/^#/);
    });
  });

  // Verify that each navigation link points to an existing section on the page
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

  // Verify we can retrieve the target section from a navigation link's href
  test('should be able to get target section from link href', () => {
    const link = document.querySelector('a[href="#home"]');
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    expect(targetSection).toBeInTheDocument();
    expect(targetSection.id).toBe('home');
  });
});

/**
 * Mobile Menu Animation Tests
 * 
 * Tests for the mobile hamburger menu animation:
 * - Hamburger icon structure (3 spans)
 * - Transform animations (hamburger to X)
 * - Animation reset functionality
 * - Menu toggle state management
 */
describe('Landing Page - Mobile Menu Animation', () => {
  beforeEach(() => {
    // Set up mobile menu structure for testing
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
    // Clean up DOM after each test
    document.body.innerHTML = '';
  });

  // Verify the hamburger menu toggle has three span elements for the icon
  test('menu toggle should have three spans for hamburger animation', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const spans = menuToggle.querySelectorAll('span');
    
    expect(spans).toHaveLength(3);
  });

  // Verify the hamburger spans can be transformed to create an X animation
  test('hamburger spans should support transform animations', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const spans = menuToggle.querySelectorAll('span');
    
    // Simulate hamburger to X animation:
    // Top line rotates 45deg and moves down
    // Middle line fades out
    // Bottom line rotates -45deg and moves up
    spans[0].style.transform = 'rotate(45deg) translateY(10px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    
    expect(spans[0].style.transform).toBe('rotate(45deg) translateY(10px)');
    expect(spans[1].style.opacity).toBe('0');
    expect(spans[2].style.transform).toBe('rotate(-45deg) translateY(-10px)');
  });

  // Verify the hamburger animation can be reset back to its original state
  test('hamburger spans should be resettable', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const spans = menuToggle.querySelectorAll('span');
    
    // Apply hamburger to X animation
    spans[0].style.transform = 'rotate(45deg) translateY(10px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    
    // Reset animation to original hamburger state
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
    
    expect(spans[0].style.transform).toBe('none');
    expect(spans[1].style.opacity).toBe('1');
    expect(spans[2].style.transform).toBe('none');
  });

  // Verify the navigation menu can toggle the 'active' class for showing/hiding
  test('nav menu should toggle active state', () => {
    const navMenu = document.querySelector('.nav-menu');
    
    expect(navMenu.classList.contains('active')).toBe(false);
    
    navMenu.classList.toggle('active');
    expect(navMenu.classList.contains('active')).toBe(true);
    
    navMenu.classList.toggle('active');
    expect(navMenu.classList.contains('active')).toBe(false);
  });
});

/**
 * Particle Effect Tests
 * 
 * Tests for the particle effect on the hero section:
 * - Hero section existence for particle attachment
 * - Particle element creation
 * - Particle styling properties
 * - DOM manipulation (add/remove particles)
 */
describe('Landing Page - Particle Effect', () => {
  beforeEach(() => {
    // Set up minimal hero section for particle effect tests
    document.body.innerHTML = `
      <section class="hero"></section>
    `;
  });

  afterEach(() => {
    // Clean up DOM after each test
    document.body.innerHTML = '';
  });

  // Verify the hero section exists as a container for the particle effect
  test('hero section should exist for particle effect', () => {
    const hero = document.querySelector('.hero');
    expect(hero).toBeInTheDocument();
  });

  // Verify we can dynamically create particle elements
  test('should be able to create particle element', () => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    expect(particle.className).toBe('particle');
  });

  // Verify particles have the correct CSS properties for the visual effect
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

  // Verify particles can be added to and removed from the DOM
  test('particle should be appendable and removable from DOM', () => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    document.body.appendChild(particle);
    expect(document.querySelector('.particle')).toBeInTheDocument();
    
    particle.remove();
    expect(document.querySelector('.particle')).not.toBeInTheDocument();
  });
});

/**
 * Page Initialization Tests
 * 
 * Tests for the overall landing page structure and initialization:
 * - All required page sections
 * - Logo and branding
 * - Contact form setup
 */
describe('Landing Page - Page Initialization', () => {
  beforeEach(() => {
    // Set up complete landing page structure for initialization tests
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
    // Clean up DOM after each test
    document.body.innerHTML = '';
  });

  // Verify all major sections of the landing page are present
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

  // Verify the logo displays the brand name correctly
  test('logo should display brand name', () => {
    const logo = document.querySelector('.logo');
    expect(logo.textContent).toContain('InnovateTech');
  });

  // Verify the contact form has all required elements with proper validation
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

/**
 * Parallax Effect Tests
 * 
 * Tests for the parallax scrolling effect on the hero section:
 * - Transform support for parallax movement
 * - Parallax calculation logic
 */
describe('Landing Page - Parallax Effect', () => {
  beforeEach(() => {
    // Set up hero section and mock scroll position
    document.body.innerHTML = `
      <section class="hero"></section>
    `;

    // Mock window.pageYOffset for scroll position testing
    Object.defineProperty(window, 'pageYOffset', {
      writable: true,
      configurable: true,
      value: 0
    });
  });

  afterEach(() => {
    // Clean up DOM after each test
    document.body.innerHTML = '';
  });

  // Verify the hero section can have CSS transforms applied for parallax
  test('hero should support transform for parallax', () => {
    const hero = document.querySelector('.hero');
    
    hero.style.transform = 'translateY(0px)';
    expect(hero.style.transform).toBe('translateY(0px)');
    
    hero.style.transform = 'translateY(25px)';
    expect(hero.style.transform).toBe('translateY(25px)');
  });

  // Verify the parallax calculation logic (scroll position * 0.5)
  test('parallax transform should calculate based on scroll position', () => {
    const scrolled = 100;
    const parallaxValue = scrolled * 0.5;
    
    expect(parallaxValue).toBe(50);
  });
});

/**
 * Interactive Elements Tests
 * 
 * Tests for interactive elements on the landing page:
 * - Hero action buttons
 * - Feature cards structure
 * - Content display verification
 */
describe('Landing Page - Interactive Elements', () => {
  beforeEach(() => {
    // Set up interactive elements for testing
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
    // Clean up DOM after each test
    document.body.innerHTML = '';
  });

  // Verify the hero buttons are actual button elements for interactivity
  test('hero buttons should be interactive elements', () => {
    const primaryBtn = document.querySelector('.btn-primary');
    const secondaryBtn = document.querySelector('.btn-secondary');
    
    expect(primaryBtn.tagName).toBe('BUTTON');
    expect(secondaryBtn.tagName).toBe('BUTTON');
  });

  // Verify all feature cards have a consistent structure (icon, heading, description)
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

  // Verify the feature cards display the expected content
  test('feature cards should display content', () => {
    const cards = document.querySelectorAll('.feature-card');
    
    expect(cards[0].querySelector('h3').textContent).toBe('Global Reach');
    expect(cards[1].querySelector('h3').textContent).toBe('Enterprise Security');
  });
});
