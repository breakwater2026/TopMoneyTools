import '@testing-library/jest-dom';

// Mock react-helmet (SEO component)
vi.mock('react-helmet', () => ({
  Helmet: ({ children }) => children || null,
}));

// Mock AdSlot
vi.mock('@/components/AdSlot', () => ({
  default: ({ slot }) => null,
}));

// Mock lazy/async components that aren't relevant
vi.mock('@/components/MoneyBasicsSidebar', () => ({
  default: ({ terms }) => null,
}));

vi.mock('@/components/Reveal', () => ({
  default: ({ children }) => children,
}));

vi.mock('@/components/BreadcrumbNav', () => ({
  default: ({ items }) => null,
}));

// Mock Layout to just render children
vi.mock('@/components/Layout', () => ({
  default: ({ children }) => children,
}));

// Mock SEO to pass through children
vi.mock('@/components/SEO', () => ({
  default: ({ children }) => null,
}));

// Suppress console errors in tests (optional)
const originalError = console.error;
console.error = (...args) => {
  if (
    args[0]?.includes?.('Not implemented:') ||
    args[0]?.includes?.('act(')
  ) {
    return;
  }
  originalError.call(console, ...args);
};
