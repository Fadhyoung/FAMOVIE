const keyMap: Record<string, string> = {
  // Define your key mappings here
  exampleKey: 'mappedExampleKey',
};

const normalizeKeys = (
  data: Record<string, unknown>
): Record<string, unknown> => {
  const normalized: Record<string, unknown> = {};

  for (const key in data) {
    const mappedKey = keyMap[key] || key; // fallback to original key
    normalized[mappedKey] = data[key];
  }

  return normalized;
};

// Example usage to avoid unused variable error
const exampleData = { exampleKey: 'value', anotherKey: 'anotherValue' };
const normalizedData = normalizeKeys(exampleData);
console.log(normalizedData);
