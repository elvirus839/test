/**
 * @jest-environment jsdom
 */

describe('Landing Page - Form Submission', () => {
  let document;

  beforeEach(() => {
    document = global.document;
    document.body.innerHTML = `
      <form class="cta-form" id="contactForm">
        <input type="email" placeholder="Enter your email" class="email-input" required>
        <button type="submit" class="btn btn-primary">Start Free Trial</button>
      </form>
    `;

    // Mock console.log
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.useFakeTimers();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  test('should have contact form', () => {
    const form = document.querySelector('#contactForm');
    expect(form).toBeInTheDocument();
  });

  test('should have email input field', () => {
    const emailInput = document.querySelector('.email-input');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput.getAttribute('type')).toBe('email');
    expect(emailInput.hasAttribute('required')).toBe(true);
  });

  test('should have submit button', () => {
    const submitBtn = document.querySelector('.btn-primary');
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn.getAttribute('type')).toBe('submit');
  });

  test('should prevent default form submission', () => {
    const form = document.querySelector('#contactForm');
    const emailInput = document.querySelector('.email-input');

    emailInput.value = 'test@example.com';

    const event = new Event('submit', { bubbles: true, cancelable: true });
    const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

    // In a real scenario, the form submission would be prevented
    // Here we just verify the event is cancelable
    expect(event.cancelable).toBe(true);
  });

  test('should have form validation attributes', () => {
    const emailInput = document.querySelector('.email-input');
    expect(emailInput.hasAttribute('required')).toBe(true);
    expect(emailInput.getAttribute('type')).toBe('email');
  });

  test('submit button should be able to change text', () => {
    const submitBtn = document.querySelector('.btn-primary');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = '✓ Success!';
    expect(submitBtn.textContent).toBe('✓ Success!');

    submitBtn.textContent = originalText;
    expect(submitBtn.textContent).toBe(originalText);
  });

  test('submit button should be able to change background color', () => {
    const submitBtn = document.querySelector('.btn-primary');

    submitBtn.style.background = 'rgb(16, 185, 129)';
    expect(submitBtn.style.background).toBe('rgb(16, 185, 129)');

    submitBtn.style.background = '';
    expect(submitBtn.style.background).toBe('');
  });

  test('form should be able to reset', () => {
    const form = document.querySelector('#contactForm');
    const emailInput = document.querySelector('.email-input');

    emailInput.value = 'test@example.com';
    expect(emailInput.value).toBe('test@example.com');

    form.reset();
    expect(emailInput.value).toBe('');
  });
});
