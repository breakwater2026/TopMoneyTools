import { 
  fmtCurrency, 
  setActiveButton, 
  getActivePeriod, 
  normalizeToMonthly,
  normalizeFromMonthly,
  calculateDebtPayoff 
} from "/assets/js/moneytools.js";

/* --------------------------------------------------
   DOM Elements
-------------------------------------------------- */

const countryEl = document.getElementById("country");
const interestRateEl = document.getElementById("rate");
const principalEl = document.getElementById("principal");
const monthlyPaymentEl = document.getElementById("monthlyPayment");
const salaryEl = document.getElementById("salary");
const salaryPeriodEl = document.getElementById("salaryPeriod");

const annualInterestDisplay = document.getElementById("annualInterest");
const monthlyInterestDisplay = document.getElementById("monthlyInterest");
const weeklyInterestDisplay = document.getElementById("weeklyInterest");
const burdenValueDisplay = document.getElementById("burdenValue");
const salaryPeriodValueDisplay = document.getElementById("salaryPeriodValue");
const severityCard = document.getElementById("severityCard");
const summaryText = document.getElementById("summaryText");

let debtData = [];
let selectedCountry = null;

/* --------------------------------------------------
   Load Countries & Interest Rates
-------------------------------------------------- */

async function loadCountries() {
  try {
    const res = await fetch("./Countries-Debt.json");
    const data = await res.json();

    if (!data.countries || !Array.isArray(data.countries)) {
      throw new Error("Invalid data structure");
    }

    debtData = data.countries;

    countryEl.innerHTML = "";
    data.countries
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach(entry => {
        const opt = document.createElement("option");
        opt.value = entry.code;
        opt.textContent = entry.name;
        opt.dataset.interestRate = entry.value;
        opt.dataset.date = entry.date;
        countryEl.appendChild(opt);
      });

    // Default to Netherlands (NL), fallback to US, then first entry
    const preferred = ["NL", "US"];
    let defaultSet = false;
    for (const code of preferred) {
      const found = data.countries.find(c => c.code === code);
      if (found) {
        countryEl.value = found.code;
        selectedCountry = found;
        defaultSet = true;
        break;
      }
    }
    if (!defaultSet && data.countries.length > 0) {
      countryEl.value = data.countries[0].code;
      selectedCountry = data.countries[0];
    }

    applyCountryData();

  } catch (err) {
    console.error("Error loading debt interest rates:", err);
    countryEl.innerHTML = "<option>Error loading data</option>";
  }
}

/* --------------------------------------------------
   Apply Country Selection
-------------------------------------------------- */

function applyCountryData() {
  const countryCode = countryEl.value;
  const selected = countryEl.options[countryEl.selectedIndex];

  if (!selected || !selected.dataset.interestRate) return;

  selectedCountry = {
    code: countryCode,
    name: selected.textContent,
    value: parseFloat(selected.dataset.interestRate),
    date: selected.dataset.date,
  };

  interestRateEl.value = selectedCountry.value;
  updateResults();
}

/* --------------------------------------------------
   Main Calculation
-------------------------------------------------- */

function updateResults() {
  if (!selectedCountry) return;

  const principal = parseFloat(principalEl.value) || 0;
  const annualRate = parseFloat(interestRateEl.value) || 0;
  const monthlyPayment = parseFloat(monthlyPaymentEl.value) || 0;
  const salary = parseFloat(salaryEl.value) || 0;
  const salaryPeriod = getActivePeriod(salaryPeriodEl);

  // If missing required inputs, show placeholder
  if (principal <= 0 || annualRate < 0 || monthlyPayment <= 0 || salary <= 0) {
    annualInterestDisplay.textContent = "—";
    monthlyInterestDisplay.textContent = "—";
    weeklyInterestDisplay.textContent = "—";
    burdenValueDisplay.textContent = "—";
    salaryPeriodValueDisplay.textContent = "—";
    summaryText.textContent = "Enter your debt and salary information to see your results.";
    severityCard.classList.remove("green", "orange", "red");
    return;
  }

  // Calculate debt payoff
  const payoffInfo = calculateDebtPayoff(principal, annualRate, monthlyPayment);

  // Display interest costs
  annualInterestDisplay.textContent = fmtCurrency(payoffInfo.annualInterest);
  monthlyInterestDisplay.textContent = fmtCurrency(payoffInfo.monthlyInterest);
  weeklyInterestDisplay.textContent = fmtCurrency(payoffInfo.weeklyInterest);

  // Normalize salary to same period as payment calculation
  const monthlySalary = normalizeToMonthly(salary, salaryPeriod);
  salaryPeriodValueDisplay.textContent = fmtCurrency(normalizeFromMonthly(monthlySalary, salaryPeriod));

  // Calculate burden: how much of monthly payment is interest vs principal
  const interestPercent = 
    monthlyPayment > 0 
      ? (payoffInfo.monthlyInterest / monthlyPayment) * 100 
      : 0;

  burdenValueDisplay.textContent = `${interestPercent.toFixed(1)}%`;

  // Update severity card styling
  severityCard.classList.remove("green", "orange", "red");
  let summaryMsg = "";

  if (!payoffInfo.canPayOff) {
    severityCard.classList.add("red");
    summaryMsg = `⚠️ Your monthly payment of ${fmtCurrency(monthlyPayment)} is too low to cover the interest. You need at least ${fmtCurrency(payoffInfo.monthlyInterest)} per month to avoid negative amortization.`;
  } else if (interestPercent < 20) {
    severityCard.classList.add("green");
    summaryMsg = `✓ You will pay off this debt in ${payoffInfo.months} months with total interest of ${fmtCurrency(payoffInfo.totalInterest)}.`;
  } else if (interestPercent < 50) {
    severityCard.classList.add("orange");
    summaryMsg = `⚠️ Interest consumes ${interestPercent.toFixed(1)}% of your monthly payment. You will pay off this debt in ${payoffInfo.months} months with total interest of ${fmtCurrency(payoffInfo.totalInterest)}.`;
  } else {
    severityCard.classList.add("red");
    summaryMsg = `⚠️ Interest consumes ${interestPercent.toFixed(1)}% of your monthly payment. Consider increasing your payment. At your current rate, it will take ${payoffInfo.months} months with total interest of ${fmtCurrency(payoffInfo.totalInterest)}.`;
  }

  summaryText.textContent = summaryMsg;
}

/* --------------------------------------------------
   Event Listeners
-------------------------------------------------- */

countryEl.addEventListener("change", applyCountryData);
interestRateEl.addEventListener("input", updateResults);
principalEl.addEventListener("input", updateResults);
monthlyPaymentEl.addEventListener("input", updateResults);
salaryEl.addEventListener("input", updateResults);

salaryPeriodEl.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  setActiveButton(salaryPeriodEl, e.target);
  updateResults();
});

/* --------------------------------------------------
   Initialize
-------------------------------------------------- */

document.addEventListener("DOMContentLoaded", loadCountries);
