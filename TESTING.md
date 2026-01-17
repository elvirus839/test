# Testing Documentation

## Overview

This document describes the test suite for the InnovateTech Landing Page. The tests are designed to verify the structure, functionality, and behavior of the webpage.

## Test Framework

- **Jest**: JavaScript testing framework
- **@testing-library/dom**: DOM testing utilities
- **@testing-library/jest-dom**: Custom Jest matchers for DOM
- **jsdom**: JavaScript implementation of web standards for Node.js

## Test Structure

### 1. Landing Page Tests (`landing-page.test.js`)

Comprehensive unit tests for the landing page components and interactions.

**Coverage:**
- Hero section rendering and content
- Hero title with gradient text
- Hero subtitle and action buttons
- Floating cards in hero visual
- Smooth scrolling navigation
- Mobile menu hamburger animation
- Particle effect on hero section
- Parallax scrolling effect
- Page initialization
- Interactive elements (buttons, feature cards)

**Example Tests:**
```javascript
test('should render hero section with correct id', ...)
test('should display hero title with gradient text', ...)
test('hamburger spans should support transform animations', ...)
test('particle should have correct styling properties', ...)
```

### 2. Navigation Tests (`navigation.test.js`)

Tests the navigation menu and scroll-related functionality.

**Coverage:**
- Navigation menu structure
- Navigation links
- Menu toggle button and hamburger icon
- Mobile menu toggle functionality
- Navigation link hash references
- Target sections for navigation
- Navbar scroll effects

**Example Tests:**
```javascript
test('should have navigation menu', ...)
test('menu toggle should have three spans for hamburger icon', ...)
test('should be able to toggle active class on nav menu', ...)
```

### 3. Form Tests (`form.test.js`)

Tests the contact form functionality.

**Coverage:**
- Form element existence
- Email input field with validation
- Submit button
- Form submission handling
- Form validation attributes
- Button text and style changes
- Form reset functionality

**Example Tests:**
```javascript
test('should have contact form', ...)
test('should have email input field', ...)
test('should have form validation attributes', ...)
```

### 4. Animation Tests (`animations.test.js`)

Tests animations and dynamic effects.

**Coverage:**
- Counter animation elements
- Stat numbers with data-target attributes
- Intersection Observer setup
- Section animations
- Feature card animations
- Staggered transitions

**Example Tests:**
```javascript
test('should have stat numbers with data-target attributes', ...)
test('animateCounter should update element text content', ...)
test('sections should be styled for animation', ...)
```

### 5. Structure Tests (`structure.test.js`)

Tests the overall page structure and DOM elements.

**Coverage:**
- Main sections (navbar, hero, features, stats, testimonials, CTA, footer)
- Logo and branding
- Hero section elements
- Feature cards
- Stat items
- Testimonial cards
- Contact form
- Hero buttons (primary and secondary)
- Floating cards

**Example Tests:**
```javascript
test('should have navigation bar', ...)
test('should have hero section', ...)
test('should have feature cards', ...)
```

### 6. Integration Tests (`integration.test.js`)

Tests the integration of multiple components.

**Coverage:**
- All main page sections together
- Navigation menu toggle behavior
- Form element manipulation
- Feature cards count
- Stat numbers data attributes
- Navbar scroll behavior
- Hero parallax effects

**Example Tests:**
```javascript
test('page should have all main sections', ...)
test('navigation menu should be toggleable', ...)
test('form elements should be manipulable', ...)
```

## Running Tests

### Prerequisites

Install dependencies:
```bash
npm install
```

### Commands

```bash
# Run all tests once
npm test

# Run tests in watch mode (automatically re-runs on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### Watch Mode Usage

When in watch mode, you can:
- Press `a` to run all tests
- Press `f` to run only failed tests
- Press `p` to filter by filename pattern
- Press `t` to filter by test name pattern
- Press `q` to quit

## Test Configuration

### Jest Configuration (`jest.config.js`)

```javascript
{
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  collectCoverageFrom: ['script.js']
}
```

### Jest Setup (`jest.setup.js`)

Includes:
- Testing Library Jest DOM matchers
- `requestAnimationFrame` mock
- `IntersectionObserver` mock
- `scrollIntoView` mock

## Test Approach

The tests follow a **structural testing approach**:

1. **DOM Structure**: Verify that all necessary elements exist
2. **Attributes**: Check that elements have correct attributes
3. **Manipulability**: Ensure elements can be manipulated (class toggles, style changes)
4. **Relationships**: Verify parent-child relationships and element counts

This approach tests that:
- The HTML structure is correct
- Elements are properly accessible
- The page is ready for JavaScript interaction
- All necessary hooks and attributes are in place

## Writing New Tests

### Test Template

```javascript
describe('Feature Name', () => {
  beforeEach(() => {
    // Set up DOM
    document.body.innerHTML = `...`;
  });

  afterEach(() => {
    // Clean up
    document.body.innerHTML = '';
    jest.clearAllMocks();
  });

  test('should do something', () => {
    const element = document.querySelector('.selector');
    expect(element).toBeInTheDocument();
  });
});
```

### Best Practices

1. **Clean up after tests**: Always reset `document.body.innerHTML` in `afterEach`
2. **Use descriptive test names**: Start with "should" and describe the expected behavior
3. **One assertion per concept**: Keep tests focused
4. **Use appropriate matchers**: Leverage jest-dom matchers like `toBeInTheDocument()`
5. **Mock external dependencies**: Use Jest mocks for timers, observers, etc.

## Common Matchers

```javascript
// jest-dom matchers
expect(element).toBeInTheDocument()
expect(element).toHaveAttribute('href', '#home')
expect(element).toHaveClass('active')
expect(element).toBeVisible()

// Standard Jest matchers
expect(value).toBe(expected)
expect(value).toEqual(expected)
expect(array).toHaveLength(3)
expect(value).toBeGreaterThan(0)
```

## Continuous Integration

These tests can be integrated into CI/CD pipelines:

```yaml
# Example GitHub Actions workflow
- name: Run tests
  run: npm test

- name: Run tests with coverage
  run: npm run test:coverage
```

## Troubleshooting

### Tests fail with "element not found"
- Check that the DOM is properly set up in `beforeEach`
- Verify selector strings match the HTML

### Timeout errors
- Increase Jest timeout: `jest.setTimeout(10000)`
- Check for infinite loops in tested code

### Mock not working
- Ensure mocks are defined before the code that uses them
- Check that mocks are cleared in `afterEach`

## Future Enhancements

Potential improvements to the test suite:

1. **E2E Tests**: Add Playwright or Cypress for browser testing
2. **Visual Regression**: Add screenshot comparison tests
3. **Accessibility Tests**: Add axe-core for a11y testing
4. **Performance Tests**: Add performance benchmarks
5. **Cross-browser Testing**: Test in multiple browsers

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing Library](https://testing-library.com/)
- [jest-dom Matchers](https://github.com/testing-library/jest-dom)
- [jsdom Documentation](https://github.com/jsdom/jsdom)
