require('@testing-library/jest-dom');

// Mock requestAnimationFrame for tests
global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0);
  return 0;
};

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe(element) {
    // Immediately trigger the callback for testing
    this.callback([{
      target: element,
      isIntersecting: true
    }], this);
  }

  unobserve() {}
  disconnect() {}
};

// Mock scrollIntoView
Element.prototype.scrollIntoView = jest.fn();
