/* ============================================================
TopMoneyTools — Shared Utility Library
File: /assets/js/moneytools.js
Purpose: Provide common helpers for all calculators
============================================================ */

/* -----------------------------
Number Parsing & Validation
----------------------------- */

export function toNumber(value) {
  if (value === null || value === undefined) return null;
  const n = parseFloat(value);
  return isNaN(n) ? null : n;
}

export function nonNegative(n) {
  return n < 0 ? 0 : n;
}

export function round2(n) {
  return Math.round(n * 100) / 100;
}

/* -----------------------------
DOM Helpers
----------------------------- */

export function el(id) {
  return document.getElementById(id);
}

export function show(element) {
  if (!element) return;
  element.classList.remove('hidden');
}

export function hide(element) {
  if (!element) return;
  element.classList.add('hidden');
}

export function setText(element, value) {
  if (!element) return;
  element.textContent = value;
}

/* -----------------------------
Calculation Helpers
----------------------------- */

export function applyRate(amount, ratePercent) {
  return amount * (1 + ratePercent / 100);
}

export function difference(newValue, oldValue) {
  return newValue - oldValue;
}

/* -----------------------------
JSON Loading Helper
----------------------------- */

export async function loadJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load JSON: ${path}`);
  return await res.json();
}

/* -----------------------------
Country Dropdown Helper
----------------------------- */

export function populateCountrySelect(selectEl, countries) {
  countries.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.code;
    opt.textContent = c.name;
    opt.dataset.inflation = c.value;
    selectEl.appendChild(opt);
  });
}

/* -----------------------------
Currency Formatting
Used by: food-inflation-calculator.js
----------------------------- */

export function fmtCurrency(value) {
  if (isNaN(value) || value === null) return "—";
  return new Intl.NumberFormat('en-GB', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

/* -----------------------------
Period Toggle Helpers
Used by: food-inflation-calculator.js
----------------------------- */

export function getActivePeriod(containerEl) {
  if (!containerEl) return 'monthly';
  const active = containerEl.querySelector('button.active');
  return active ? active.dataset.period : 'monthly';
}

export function setActiveButton(containerEl, clickedBtn) {
  if (!containerEl) return;
  containerEl.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
  clickedBtn.classList.add('active');
}

/* -----------------------------
Period Normalisation
Used by: food-inflation-calculator.js
----------------------------- */

export function normalizeToMonthly(amount, period) {
  if (isNaN(amount) || amount === null) return 0;
  switch (period) {
    case 'weekly':
      return amount * 52 / 12;
    case 'annual':
      return amount / 12;
    case 'monthly':
    default:
      return amount;
  }
}