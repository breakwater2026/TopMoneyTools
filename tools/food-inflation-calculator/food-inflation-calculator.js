import { fmtCurrency, setActiveButton, getActivePeriod, normalizeToMonthly } 
  from "/assets/js/moneytools.js";

/* --------------------------------------------------
   Elements
-------------------------------------------------- */

const countryEl = document.getElementById("country");
const inflationRateEl = document.getElementById("inflationRate");
const inflationNoteEl = document.getElementById("inflationNote");

const foodCostEl = document.getElementById("foodCost");
const foodPeriodEl = document.getElementById("foodPeriod");

const salaryEl = document.getElementById("salary");
const salaryPeriodEl = document.getElementById("salaryPeriod");

const resultInflation = document.getElementById("resultInflation");
const resultFoodCost = document.getElementById("resultFoodCost");
const resultSalary = document.getElementById("resultSalary");
const resultBurden = document.getElementById("resultBurden");
const severityCard = document.getElementById("severityCard");
const summaryText = document.getElementById("summaryText");

let inflationData = [];
let selectedCountry = null;

/* --------------------------------------------------
   Load Data
-------------------------------------------------- */

async function loadCountries() {
  try {
    const res = await fetch("food-inflation.json");
    inflationData = await res.json();

    countryEl.innerHTML = "";
    inflationData
      .sort((a, b) => a.country.localeCompare(b.country))
      .forEach(entry => {
        const opt = document.createElement("option");
        opt.value = entry.country;
        opt.textContent = entry.country;
        countryEl.appendChild(opt);
      });

    selectedCountry = inflationData[0];
    applyCountryData();

  } catch (err) {
    console.error("Error loading inflation data:", err);
    countryEl.innerHTML = "<option>Error loading data</option>";
  }
}

/* --------------------------------------------------
   Apply Country Selection
-------------------------------------------------- */

function applyCountryData() {
  const countryName = countryEl.value;
  selectedCountry = inflationData.find(c => c.country === countryName);

  if (!selectedCountry) return;

  inflationRateEl.value = selectedCountry.value;
  inflationNoteEl.textContent =
    `Latest reading: ${selectedCountry.value}% (${new Date(selectedCountry.date).toLocaleDateString()})`;

  updateResults();
}

/* --------------------------------------------------
   Main Calculation
-------------------------------------------------- */

function updateResults() {
  if (!selectedCountry) return;

  const inflationRate = parseFloat(inflationRateEl.value) / 100 || 0;

  const foodCost = parseFloat(foodCostEl.value) || 0;
  const foodPeriod = getActivePeriod(foodPeriodEl);

  const salary = parseFloat(salaryEl.value) || 0;
  const salaryPeriod = getActivePeriod(salaryPeriodEl);

  const monthlyFood = normalizeToMonthly(foodCost, foodPeriod);
  const monthlySalary = normalizeToMonthly(salary, salaryPeriod);

  const inflatedFood = monthlyFood * (1 + inflationRate);
  const burdenPct = monthlySalary > 0 ? (inflatedFood / monthlySalary) * 100 : 0;

  resultInflation.textContent = `${(inflationRate * 100).toFixed(1)}%`;
  resultFoodCost.textContent = fmtCurrency(inflatedFood);
  resultSalary.textContent = fmtCurrency(monthlySalary);
  resultBurden.textContent = `${burdenPct.toFixed(1)}%`;

  severityCard.classList.remove("green", "orange", "red");
  if (burdenPct < 15) severityCard.classList.add("green");
  else if (burdenPct < 30) severityCard.classList.add("orange");
  else severityCard.classList.add("red");

  summaryText.textContent =
    monthlyFood > 0 && monthlySalary > 0
      ? `Your food costs now consume ${burdenPct.toFixed(1)}% of your monthly salary.`
      : "Enter your information to see your results.";
}

/* --------------------------------------------------
   Events
-------------------------------------------------- */

countryEl.addEventListener("change", applyCountryData);
inflationRateEl.addEventListener("input", updateResults);
foodCostEl.addEventListener("input", updateResults);
salaryEl.addEventListener("input", updateResults);

foodPeriodEl.addEventListener("click", e => {
  if (e.target.tagName !== "BUTTON") return;
  setActiveButton(foodPeriodEl, e.target);
  updateResults();
});

salaryPeriodEl.addEventListener("click", e => {
  if (e.target.tagName !== "BUTTON") return;
  setActiveButton(salaryPeriodEl, e.target);
  updateResults();
});

/* --------------------------------------------------
   Init
-------------------------------------------------- */

document.addEventListener("DOMContentLoaded", loadCountries);
