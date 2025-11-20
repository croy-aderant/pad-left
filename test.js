const padLeft = require('./index.js');

// Test cases
console.log('Testing padLeft function...\n');

// Test 1: Basic usage
console.log('Test 1: Basic usage');
const result1 = padLeft('Hello', 3);
console.log(`padLeft('Hello', 3) = "${result1}"`);
console.log(`Expected: "&nbsp;&nbsp;&nbsp;Hello"\n`);

// Test 2: Zero padding
console.log('Test 2: Zero padding');
const result2 = padLeft('World', 0);
console.log(`padLeft('World', 0) = "${result2}"`);
console.log(`Expected: "World"\n`);

// Test 3: Empty string
console.log('Test 3: Empty string');
const result3 = padLeft('', 5);
console.log(`padLeft('', 5) = "${result3}"`);
console.log(`Expected: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"\n`);

// Test 4: Large number
console.log('Test 4: Large number');
const result4 = padLeft('Test', 10);
console.log(`padLeft('Test', 10) = "${result4}"`);
console.log(`Length: ${result4.length}\n`);

// Test 5: Error handling - invalid string
console.log('Test 5: Error handling - invalid string');
try {
  padLeft(123, 5);
  console.log('ERROR: Should have thrown an error');
} catch (e) {
  console.log(`✓ Correctly threw error: ${e.message}\n`);
}

// Test 6: Error handling - invalid count
console.log('Test 6: Error handling - invalid count');
try {
  padLeft('test', -1);
  console.log('ERROR: Should have thrown an error');
} catch (e) {
  console.log(`✓ Correctly threw error: ${e.message}\n`);
}

console.log('All tests completed!');

