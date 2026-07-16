/**
 * Money Tools - Shared Utility Functions
 * Used by financial calculators across TopMoneyTools
 */

/**
 * Format a number as currency (USD by default, extensible)
 * @param {number} value - The number to format
 * @param {string} currency - Currency code (default: 'USD')
 * @returns {string} Formatted currency string
 */
export function fmtCurrency(value, currency = 'USD') {
  if (isNaN(value)) return '—';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/**
 * Set active state on a button within a button group
 * @param {HTMLElement} container - The container with period toggle buttons
 * @param {HTMLElement} button - The button to activate
 */
export function setActiveButton(container, button) {
  const buttons = container.querySelectorAll('button');
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}

/**
 * Get the active period from a button group
 * @param {HTMLElement} container - The container with period toggle buttons
 * @returns {string} The active period ('weekly', 'monthly', 'annual', 'yearly')
 */
export function getActivePeriod(container) {
  const active = container.querySelector('button.active');
  return active ? active.dataset.period : 'monthly';
}

/**
 * Normalize a value to monthly amount based on the given period
 * @param {number} value - The value to normalize
 * @param {string} period - The period ('weekly', 'monthly', 'annual', 'yearly')
 * @returns {number} The value normalized to monthly
 */
export function normalizeToMonthly(value, period) {
  if (!value || isNaN(value)) return 0;
  
  switch (period) {
    case 'weekly':
      return value * 52 / 12; // 52 weeks / 12 months
    case 'monthly':
      return value;
    case 'annual':
    case 'yearly':
      return value / 12;
    default:
      return value;
  }
}

/**
 * Normalize a value from monthly to a target period
 * @param {number} monthlyValue - The monthly value
 * @param {string} period - The target period ('weekly', 'monthly', 'annual', 'yearly')
 * @returns {number} The value normalized to the target period
 */
export function normalizeFromMonthly(monthlyValue, period) {
  if (!monthlyValue || isNaN(monthlyValue)) return 0;
  
  switch (period) {
    case 'weekly':
      return monthlyValue * 12 / 52;
    case 'monthly':
      return monthlyValue;
    case 'annual':
    case 'yearly':
      return monthlyValue * 12;
    default:
      return monthlyValue;
  }
}

/**
 * Calculate debt payoff information
 * @param {number} principal - Total debt amount
 * @param {number} annualRate - Annual interest rate as percentage (e.g., 5 for 5%)
 * @param {number} monthlyPayment - Monthly payment amount
 * @returns {object} { months, totalInterest, monthlyInterest, weeklyInterest, annualInterest, canPayOff }
 */
export function calculateDebtPayoff(principal, annualRate, monthlyPayment) {
  if (principal <= 0 || annualRate < 0 || monthlyPayment <= 0) {
    return {
      months: 0,
      totalInterest: 0,
      monthlyInterest: 0,
      weeklyInterest: 0,
      annualInterest: 0,
      canPayOff: false,
    };
  }

  const monthlyRate = annualRate / 100 / 12;
  const monthlyInterest = principal * monthlyRate;

  // Check if payment covers interest (negative amortization)
  if (monthlyPayment <= monthlyInterest && monthlyPayment > 0) {
    return {
      months: Infinity,
      totalInterest: Infinity,
      monthlyInterest: monthlyInterest,
      weeklyInterest: monthlyInterest * 12 / 52,
      annualInterest: monthlyInterest * 12,
      canPayOff: false,
    };
  }

  // Standard amortization formula: n = -log(1 - r*P/M) / log(1 + r)
  let balance = principal;
  let totalInterest = 0;
  let months = 0;
  const maxMonths = 600; // Safety cap to prevent infinite loops

  while (balance > 0 && months < maxMonths) {
    const interestPayment = balance * monthlyRate;
    const principalPayment = monthlyPayment - interestPayment;

    if (principalPayment <= 0) break;

    totalInterest += interestPayment;
    balance -= principalPayment;
    months++;
  }

  return {
    months: balance > 0 ? Infinity : months,
    totalInterest: totalInterest,
    monthlyInterest: monthlyInterest,
    weeklyInterest: monthlyInterest * 12 / 52,
    annualInterest: monthlyInterest * 12,
    canPayOff: balance <= 0 && months < maxMonths,
  };
}

/**
 * Calculate simple interest cost over a period
 * @param {number} principal - Amount borrowed
 * @param {number} annualRate - Annual interest rate as percentage
 * @param {number} months - Number of months
 * @returns {number} Interest cost
 */
export function calculateSimpleInterest(principal, annualRate, months) {
  if (principal <= 0 || annualRate < 0) return 0;
  const monthlyRate = annualRate / 100 / 12;
  return principal * monthlyRate * months;
}
