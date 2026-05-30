/* ============================================================
TopMoneyTools — Shared Utility Library
File: /assets/js/moneytools.js
============================================================ */

export function toNumber(value) {
  if (value === null || value === undefined) return null;
  const n = parseFloat(value);
  return isNaN(n) ? null : n;
}

export function nonNegative(n) { return n < 0 ? 0 : n; }
export function round2(n) { return Math.round(n * 100) / 100; }
export function el(id) { return document.getElementById(id); }
export function show(element) { if (element) element.classList.remove('hidden'); }
export function hide(element) { if (element) element.classList.add('hidden'); }
export function setText(element, value) { if (element) element.textContent = value; }
export function applyRate(amount, ratePercent) { return amount * (1 + ratePercent / 100); }
export function difference(newValue, oldValue) { return newValue - oldValue; }

export async function loadJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load JSON: ${path}`);
  return await res.json();
}

export function populateCountrySelect(selectEl, countries) {
  countries.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.code || c.currency || c.name;
    opt.textContent = c.name || c.country;
    opt.dataset.inflation = c.value || '';
    selectEl.appendChild(opt);
  });
}

const CURRENCY_SYMBOLS = {
  USD:'$', EUR:'€', GBP:'£', JPY:'¥', CAD:'CA$', AUD:'A$',
  CHF:'CHF', CNY:'¥', INR:'₹', BRL:'R$', MXN:'MX$', KRW:'₩',
  SEK:'kr', NOK:'kr', DKK:'kr', PLN:'zł', CZK:'Kč', HUF:'Ft',
  RON:'lei', TRY:'₺', RUB:'₽', ZAR:'R', NGN:'₦', EGP:'£',
  AED:'AED', SAR:'SAR', ILS:'₪', THB:'฿', SGD:'S$', HKD:'HK$',
  MYR:'RM', IDR:'Rp', PHP:'₱', PKR:'₨', BDT:'৳', VND:'₫',
  CLP:'CLP', COP:'COP', PEN:'S/', ARS:'$', UYU:'$U'
};

export function fmtCurrency(value, currencyCode) {
  if (isNaN(value) || value === null) return '—';
  const formatted = new Intl.NumberFormat('en-GB', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
  const symbol = currencyCode ? (CURRENCY_SYMBOLS[currencyCode] || currencyCode + ' ') : '';
  return symbol + formatted;
}

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

export function normalizeToMonthly(amount, period) {
  if (isNaN(amount) || amount === null) return 0;
  switch (period) {
    case 'weekly':  return amount * 52 / 12;
    case 'annual':  return amount / 12;
    default:        return amount;
  }
}