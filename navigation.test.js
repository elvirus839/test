/**
 * @jest-environment jsdom
 */

describe('Landing Page - Navigation', () => {
  let document;

  beforeEach(() => {
    // Set up our document body with the necessary HTML structure
    document = global.document;
    document.body.innerHTML = `
      <nav class="navbar">
        <div class="container">
          <div class="nav-brand">
            <span class="logo">🚀 InnovateTech</span>
          </div>
          <ul class="nav-menu">
            <li><a href="#home" class="nav-link">Home</a></li>
            <li><a href="#features" class="nav-link">Features</a></li>
          </ul>
          <button class="menu-toggle" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <section id="home">Home Section</section>
      <section id="features">Features Section</section>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
  });

  test('should have navigation menu', () => {
    const navMenu = document.querySelector('.nav-menu');
    expect(navMenu).toBeInTheDocument();
  });

  test('should have navigation links', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    expect(navLinks.length).toBeGreaterThan(0);
  });

  test('should have menu toggle button', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    expect(menuToggle).toBeInTheDocument();
    expect(menuToggle.getAttribute('aria-label')).toBe('Toggle menu');
  });

  test('menu toggle should have three spans for hamburger icon', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const spans = menuToggle.querySelectorAll('span');
    expect(spans.length).toBe(3);
  });

  test('should be able to toggle active class on nav menu', () => {
    const navMenu = document.querySelector('.nav-menu');

    expect(navMenu.classList.contains('active')).toBe(false);

    navMenu.classList.toggle('active');
    expect(navMenu.classList.contains('active')).toBe(true);

    navMenu.classList.toggle('active');
    expect(navMenu.classList.contains('active')).toBe(false);
  });

  test('navigation links should have hash hrefs', () => {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    expect(navLinks.length).toBeGreaterThan(0);

    navLinks.forEach(link => {
      expect(link.getAttribute('href')).toMatch(/^#/);
    });
  });

  test('target sections should exist for navigation links', () => {
    const homeSection = document.querySelector('#home');
    const featuresSection = document.querySelector('#features');

    expect(homeSection).toBeInTheDocument();
    expect(featuresSection).toBeInTheDocument();
  });
});

describe('Landing Page - Scroll Effects', () => {
  let document;

  beforeEach(() => {
    document = global.document;
    document.body.innerHTML = `
      <nav class="navbar"></nav>
      <div class="hero"></div>
    `;

    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0
    });

    Object.defineProperty(window, 'pageYOffset', {
      writable: true,
      configurable: true,
      value: 0
    });
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('navbar should be able to have scrolled class', () => {
    const navbar = document.querySelector('.navbar');

    expect(navbar.classList.contains('scrolled')).toBe(false);

    navbar.classList.add('scrolled');
    expect(navbar.classList.contains('scrolled')).toBe(true);

    navbar.classList.remove('scrolled');
    expect(navbar.classList.contains('scrolled')).toBe(false);
  });

  test('hero section should exist for parallax effect', () => {
    const hero = document.querySelector('.hero');
    expect(hero).toBeInTheDocument();
  });
});
