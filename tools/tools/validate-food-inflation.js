const fs = require('fs');

const FILE = 'public_v2/tools/food-inflation-calculator/food-inflation.json';

try {
  const raw = fs.readFileSync(FILE, 'utf8');

  let data;
  try {
    data = JSON.parse(raw);
  } catch (err) {
    console.error('❌ JSON syntax error:\n', err.message);
    process.exit(1);
  }

  if (!Array.isArray(data)) {
    console.error('❌ JSON root must be an array.');
    process.exit(1);
  }

  let ok = true;

  data.forEach((entry, i) => {
    const missing = [];
    if (!entry.country) missing.push('country');
    if (entry.value === undefined) missing.push('value');
    if (entry.previous === undefined) missing.push('previous');
    if (!entry.date) missing.push('date');

    if (missing.length > 0) {
      ok = false;
      console.error(`❌ Entry ${i + 1} missing fields: ${missing.join(', ')}`);
    }
  });

  if (ok) {
    console.log('✅ JSON is valid and complete.');
  } else {
    console.log('⚠ JSON has structural issues. Fix before deploying.');
  }

} catch (err) {
  console.error('❌ Could not read file:', err.message);
}
