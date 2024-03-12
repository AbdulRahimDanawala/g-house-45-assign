let car = "corolla";
let price = 25000;
let isNew = false;
let colors = ["red", "green", "blue"];

// String equality and inequality (True and False)
console.log("String Equality: Is car == 'corolla'? I predict False (case sensitive).");
console.log(car == "corolla"); // False, car is "corolla" with uppercase S

console.log("String Inequality: Is car != 'corolla'? I predict True.");
console.log(car != "corolla"); // True, car is not exactly "corolla"

// Lowercase function tests (True and False)
console.log("Lowercase Test: Is car.toLowerCase() == 'corolla'? I predict True.");
console.log(car.toLowerCase() == "corolla"); // True, converts car to lowercase for comparison

console.log("Lowercase Test: Is car == 'corolla'.toLowerCase()? I predict False.");
console.log(car == "corolla".toLowerCase()); // False, car remains uppercase

// Numerical tests (True and False for each)
console.log("Numerical Equality: Is price == 25000? I predict True.");
console.log(price == 25000); // True, price equals 25000

console.log("Numerical Inequality: Is price != 30000? I predict True.");
console.log(price != 30000); // True, price is not equal to 30000

console.log("Numerical Greater Than: Is price > 20000? I predict True.");
console.log(price > 20000); // True, price is greater than 20000

console.log("Numerical Less Than: Is price < 30000? I predict True.");
console.log(price < 30000); // True, price is less than 30000

console.log("Numerical Greater Than or Equal: Is price >= 25000? I predict True.");
console.log(price >= 25000); // True, price is greater than or equal to 25000

console.log("Numerical Less Than or Equal: Is price <= 20000? I predict False.");
console.log(price <= 20000); // False, price is greater than 20000

// Logical AND and OR (True and False for each)
console.log("Logical AND: Is price > 20000 && isNew? I predict False.");
console.log(price > 20000 && isNew); // False, isNew is false

console.log("Logical OR: Is price > 20000 || isNew? I predict True.");
console.log(price > 20000 || isNew); // True, price is greater than 20000

// Item in array (True and False)
console.log("Item in Array: Is 'red' in colors? I predict True.");
console.log("red" in colors); // True, "red" is an element in the colors array

console.log("Item in Array: Is 'purple' in colors? I predict False.");
console.log("purple" in colors); // False, "purple" is not in the colors array

// Item not in array (True)
console.log("Item Not in Array: Is 'yellow' not in colors? I predict True.");
console.log("yellow"  in colors); // True, "yellow" is not in the colors array
