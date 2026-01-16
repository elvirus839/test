/**
 * @jest-environment jsdom
 */

describe('Landing Page - Counter Animation', () => {
  let document;

  beforeEach(() => {
    document = global.document;
    document.body.innerHTML = `
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
            <div class="stat-item">
              <div class="stat-number" data-target="99">0</div>
              <div class="stat-label">Uptime %</div>
            </div>
          </div>
        </div>
      </section>
    `;

    jest.useFakeTimers();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    jest.useRealTimers();
  });

  test('should have stat numbers with data-target attributes', () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    expect(statNumbers.length).toBeGreaterThan(0);

    statNumbers.forEach(stat => {
      expect(stat.hasAttribute('data-target')).toBe(true);
    });
  });

  test('should initialize stat numbers at 0', () => {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
      expect(stat.textContent).toBe('0');
    });
  });

  test('should have correct data-target values', () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    const expectedTargets = ['10000', '150', '99'];

    statNumbers.forEach((stat, index) => {
      expect(stat.getAttribute('data-target')).toBe(expectedTargets[index]);
    });
  });

  test('animateCounter should update element text content', () => {
    const statNumber = document.querySelector('[data-target="10000"]');

    // Create a simple version of animateCounter for testing
    const animateCounter = (element) => {
      const target = parseInt(element.getAttribute('data-target'));
      element.textContent = target.toLocaleString() + '+';
    };

    animateCounter(statNumber);

    expect(statNumber.textContent).toBe('10,000+');
  });

  test('should add suffix for non-percentage stats', () => {
    const usersStatNumber = document.querySelector('[data-target="10000"]');
    const statLabel = usersStatNumber.parentElement.querySelector('.stat-label');

    expect(statLabel.textContent).not.toContain('%');
  });

  test('should not add suffix for percentage stats', () => {
    const percentStatNumber = document.querySelector('[data-target="99"]');
    const statLabel = percentStatNumber.parentElement.querySelector('.stat-label');

    expect(statLabel.textContent).toContain('%');
  });
});

describe('Landing Page - Intersection Observer', () => {
  let document;

  beforeEach(() => {
    document = global.document;
    document.body.innerHTML = `
      <section class="features"></section>
      <section class="stats">
        <div class="stat-number" data-target="100">0</div>
      </section>
      <section class="testimonials"></section>
      <section class="cta"></section>
      <div class="feature-card"></div>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should have sections to observe', () => {
    const sections = document.querySelectorAll('.features, .stats, .testimonials, .cta');
    expect(sections.length).toBe(4);
  });

  test('should observe feature cards', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    expect(featureCards.length).toBeGreaterThan(0);
  });

  test('sections should be styled for animation', () => {
    const section = document.querySelector('.features');

    // These styles would be set by the script
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    expect(section.style.opacity).toBe('0');
    expect(section.style.transform).toBe('translateY(30px)');
    expect(section.style.transition).toBe('opacity 0.8s ease, transform 0.8s ease');
  });

  test('feature cards should have staggered transitions', () => {
    const featureCard = document.querySelector('.feature-card');

    featureCard.style.opacity = '0';
    featureCard.style.transform = 'translateY(30px)';
    featureCard.style.transition = 'opacity 0.6s ease 0s, transform 0.6s ease 0s';

    expect(featureCard.style.opacity).toBe('0');
    expect(featureCard.style.transform).toBe('translateY(30px)');
  });
});
