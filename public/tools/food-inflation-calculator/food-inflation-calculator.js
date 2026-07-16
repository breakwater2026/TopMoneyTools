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
    const res = await fetch("/tools/food-inflation-calculator/Countries-Inflation.json");
    const data = await res.json();
    
    if (!data.countries || !Array.isArray(data.countries)) {
      throw new Error("Invalid data structure");
    }

    countryEl.innerHTML = "";
    data.countries
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach(entry => {
        const opt = document.createElement("option");
        opt.value = entry.code;
        opt.textContent = entry.name;
        opt.dataset.inflation = entry.value;
        opt.dataset.date = entry.date;
        countryEl.appendChild(opt);
      });

    // Default to Netherlands (NL), fallback to US, then first entry
    const preferred = ['NL', 'US'];
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
    console.error("Error loading inflation data:", err);
    countryEl.innerHTML = "<option>Error loading data</option>";
  }
}

/* --------------------------------------------------
   Apply Country Selection
-------------------------------------------------- */

function applyCountryData() {
  const countryCode = countryEl.value;
  const selected = countryEl.options[countryEl.selectedIndex];
  
  if (!selected || !selected.dataset.inflation) return;

  selectedCountry = {
    code: countryCode,
    name: selected.textContent,
    value: parseFloat(selected.dataset.inflation),
    date: selected.dataset.date
  };

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

  resultInflation.textContent = `${(inflationRate * 100).toFixed(1)}`;
  resultFoodCost.textContent = fmtCurrency(inflatedFood);
  resultSalary.textContent = fmtCurrency(monthlySalary);
  resultBurden.textContent = `${burdenPct.toFixed(1)}`;

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
