import { fmtCurrency, setActiveButton, getActivePeriod } 
  from "/assets/js/moneytools.js";

/* --------------------------------------------------
   Elements
-------------------------------------------------- */

const countryEl = document.getElementById("country");
const principalEl = document.getElementById("principal");
const rateEl = document.getElementById("rate");
const salaryEl = document.getElementById("salary");
const salaryPeriodEl = document.getElementById("salaryPeriod");

const annualInterestEl = document.getElementById("annualInterest");
const monthlyInterestEl = document.getElementById("monthlyInterest");
const weeklyInterestEl = document.getElementById("weeklyInterest");
const salaryPeriodValueEl = document.getElementById("salaryPeriodValue");
const burdenValueEl = document.getElementById("burdenValue");
const severityCard = document.getElementById("severityCard");
const summaryText = document.getElementById("summaryText");

let countriesData = [];
let selectedCurrency = "USD";

/* --------------------------------------------------
   Load Countries & Rates
-------------------------------------------------- */

async function loadCountries() {
  try {
    const res = await fetch("/data/countries.json");
    const data = await res.json();
    countriesData = data;

    countryEl.innerHTML = "";
    data.forEach((entry, i) => {
      const opt = document.createElement("option");
      opt.value = entry.currency;
      opt.textContent = entry.country;
      if (i === 0) opt.selected = true;
      countryEl.appendChild(opt);
    });

    selectedCurrency = countryEl.value;
    updateResults();
  } catch (err) {
    console.error("Error loading countries:", err);
    countryEl.innerHTML = "<option>Error loading countries</option>";
  }
}

function populateRates() {
  rateEl.innerHTML = "";
  for (let r = 0; r <= 20.0001; r += 0.25) {
    const o = document.createElement("option");
    o.value = r.toFixed(2);
    o.textContent = r % 1 === 0 ? r.toFixed(0) : r.toFixed(2);
    if (r === 5) o.selected = true;
    rateEl.appendChild(o);
  }
}

/* --------------------------------------------------
   Main Calculation
-------------------------------------------------- */

function updateResults() {
  const principal = parseFloat(principalEl.value) || 0;
  const rate = parseFloat(rateEl.value) / 100 || 0;
  const salary = parseFloat(salaryEl.value) || 0;
  const period = getActivePeriod(salaryPeriodEl);

  selectedCurrency = countryEl.value || "USD";

  const annualInterest = principal * rate;
  const monthlyInterest = annualInterest / 12;
  const weeklyInterest = annualInterest / 52;

  let interestForPeriod =
    period === "weekly" ? weeklyInterest :
    period === "monthly" ? monthlyInterest :
    annualInterest;

  const burdenPct = salary > 0 ? (interestForPeriod / salary) * 100 : 0;

  annualInterestEl.textContent = fmtCurrency(annualInterest, selectedCurrency);
  monthlyInterestEl.textContent = fmtCurrency(monthlyInterest, selectedCurrency);
  weeklyInterestEl.textContent = fmtCurrency(weeklyInterest, selectedCurrency);
  salaryPeriodValueEl.textContent = salary > 0 ? fmtCurrency(salary, selectedCurrency) : "—";
  burdenValueEl.textContent = `${burdenPct.toFixed(1)}%`;

  severityCard.classList.remove("green", "orange", "red");
  if (burdenPct < 10) severityCard.classList.add("green");
  else if (burdenPct < 20) severityCard.classList.add("orange");
  else severityCard.classList.add("red");

  summaryText.textContent =
    principal > 0 && salary > 0
      ? `Your interest payments consume ${burdenPct.toFixed(1)}% of your ${period} income.`
      : "Enter your debt, interest rate, and salary to see how much of your income goes to interest.";
}

/* --------------------------------------------------
   Events
-------------------------------------------------- */

countryEl.addEventListener("change", () => {
  selectedCurrency = countryEl.value;
  updateResults();
});

principalEl.addEventListener("input", updateResults);
rateEl.addEventListener("input", updateResults);
salaryEl.addEventListener("input", updateResults);

salaryPeriodEl.addEventListener("click", e => {
  if (e.target.tagName !== "BUTTON") return;
  setActiveButton(salaryPeriodEl, e.target);
  updateResults();
});

/* --------------------------------------------------
   Init
-------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  populateRates();
  loadCountries();
});
