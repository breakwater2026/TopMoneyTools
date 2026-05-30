const countrySelect = document.getElementById('country');
const currentCostInput = document.getElementById('currentCost');
const inflationRateInput = document.getElementById('inflationRate');
const calculateBtn = document.getElementById('calculateBtn');
const resultBlock = document.getElementById('result');
const newCostSpan = document.getElementById('newCost');
const increaseSpan = document.getElementById('increaseAmount');

async function loadCountries() {
  try {
    const res = await fetch('./Countries-Inflation.json');
    if (!res.ok) throw new Error('Failed to load food inflation data');
    const data = await res.json();

    if (!data.countries || !Array.isArray(data.countries)) return;

    countrySelect.innerHTML = '';

    data.countries.forEach(country => {
      const opt = document.createElement('option');
      opt.value = country.code;
      opt.textContent = country.name;
      opt.dataset.inflation = country.value;
      countrySelect.appendChild(opt);
    });

    // Default to Netherlands (NL), fallback to US, then first entry
    const preferred = ['NL', 'US'];
    let defaultSet = false;
    for (const code of preferred) {
      const found = data.countries.find(c => c.code === code);
      if (found) {
        countrySelect.value = found.code;
        inflationRateInput.value = found.value;
        defaultSet = true;
        break;
      }
    }
    if (!defaultSet && data.countries.length > 0) {
      countrySelect.value = data.countries[0].code;
      inflationRateInput.value = data.countries[0].value;
    }

  } catch (err) {
    console.error(err);
    countrySelect.innerHTML = '<option value="">Error loading data</option>';
  }
}

countrySelect.addEventListener('change', () => {
  const selected = countrySelect.options[countrySelect.selectedIndex];
  const rate = selected.dataset.inflation;
  if (rate !== undefined) {
    inflationRateInput.value = rate;
  }
});

calculateBtn.addEventListener('click', () => {
  const currentCost = parseFloat(currentCostInput.value);
  const inflationRate = parseFloat(inflationRateInput.value);

  if (isNaN(currentCost) || currentCost < 0) {
    alert('Please enter a valid current cost.');
    return;
  }
  if (isNaN(inflationRate)) {
    alert('Please enter a valid inflation rate.');
    return;
  }

  const factor = 1 + inflationRate / 100;
  const newCost = currentCost * factor;
  const increase = newCost - currentCost;

  newCostSpan.textContent = newCost.toFixed(2);
  increaseSpan.textContent = increase.toFixed(2);
  resultBlock.classList.remove('hidden');
});

loadCountries();