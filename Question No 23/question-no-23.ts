let car = "corolla";
let price = 25000;
let isNew = false;

// Test 1: Equality comparison (predicted True)
console.log("Test 1: Is car == 'corolla'? I predict True.");
console.log(car == "corolla"); // True, checks for value equality

// Test 2: Strict equality comparison (predicted True)
console.log("Test 2: Is car === 'corolla'? I predict True.");
console.log(car === "corolla"); // True, checks for value and type equality

// Test 3: Inequality comparison (predicted False)
console.log("Test 3: Is car != 'corolla'? I predict False.");
console.log(car != "corolla"); // False, car is equal to "corolla"

// Test 4: Strict inequality comparison (predicted False)
console.log("Test 4: Is car !== 'corolla'? I predict False.");
console.log(car !== "corolla"); // False, car has the same value and type as "corolla"

// Test 5: Greater than comparison (predicted False)
console.log("Test 5: Is price > 30000? I predict False.");
console.log(price > 30000); // False, price is less than 30000

// Test 6: Less than or equal comparison (predicted True)
console.log("Test 6: Is price <= 25000? I predict True.");
console.log(price <= 25000); // True, price is less than or equal to 25000

// Test 7: Logical AND (predicted False)
console.log("Test 7: Is price > 20000 && isNew? I predict False.");
console.log(price > 20000 && isNew); // False, isNew is false

// Test 8: Logical OR (predicted True)
console.log("Test 8: Is price > 20000 || isNew? I predict True.");
console.log(price > 20000 || isNew); // True, price is greater than 20000

// Test 9: Falsy check (predicted True)
console.log("Test 9: Is isNew? I predict False (falsy).");
console.log(isNew); // False, isNew is explicitly set to false

// Test 10: Truthy check (predicted True)
console.log("Test 10: Is price? I predict True (truthy).");
console.log(price); // True, price has a value (25000)
