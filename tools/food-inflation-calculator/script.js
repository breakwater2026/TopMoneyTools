// -------------------------------
// Load Countries from JSON
// -------------------------------
let loadAbortController = null;

async function loadCountries() {
  // Cancel any previous load in progress
  if (loadAbortController) {
    loadAbortController.abort();
  }

  loadAbortController = new AbortController();

  try {
    const response = await fetch('/data/food-inflation.json', {
      signal: loadAbortController.signal
    });
    const data = await response.json();

    const select = document.getElementById('country');
    select.innerHTML = ''; // clear placeholder

    // Sort alphabetically
    data.sort((a, b) => a.country.localeCompare(b.country));

    // Populate dropdown
    data.forEach(entry => {
      const option = document.createElement('option');
      option.value = entry.country;
      option.textContent = entry.country;
      select.appendChild(option);
    });

    // Store globally for later use
    window.foodInflationData = data;

  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Country loading was cancelled');
    } else {
      console.error('Error loading countries:', error);
    }
  }
}

// -------------------------------
// Cancel Loading
// -------------------------------
function cancelLoadCountries() {
  if (loadAbortController) {
    loadAbortController.abort();
  }
}

// -------------------------------
// Calculate Inflation for Selected Country
// -------------------------------
function calculateInflation() {
  const country = document.getElementById('country').value;
  const resultBox = document.getElementById('result');

  if (!window.foodInflationData) {
    resultBox.textContent = "Data not loaded yet.";
    return;
  }

  const entry = window.foodInflationData.find(item => item.country === country);

  if (!entry) {
    resultBox.textContent = "No data available for this country.";
    return;
  }

  resultBox.innerHTML = `
    <strong>${entry.country}</strong><br>
    Latest Food Inflation: <strong>${entry.value}%</strong><br>
    Previous: ${entry.previous}%<br>
    Date: ${entry.date}
  `;
}

// -------------------------------
// Initialize Page
// -------------------------------
document.addEventListener('DOMContentLoaded', () => {
  loadCountries();

  const button = document.getElementById('calculate');
  if (button) {
    button.addEventListener('click', calculateInflation);
  }
});
