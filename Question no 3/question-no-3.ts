let personName: string = "Abdul Rahim"; // Replace "Alice" with the actual name

// Lowercase
let lowercaseName: string = personName.toLowerCase();
console.log(`Lowercase: ${lowercaseName}`);

// Uppercase
let uppercaseName: string = personName.toUpperCase();
console.log(`Uppercase: ${uppercaseName}`);

// Titlecase
let titlecaseName: string = personName.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
console.log(`Titlecase: ${titlecaseName}`);
