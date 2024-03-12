var personName = "Abdul Rahim"; // Replace "Alice" with the actual name
// Lowercase
var lowercaseName = personName.toLowerCase();
console.log("Lowercase: ".concat(lowercaseName));
// Uppercase
var uppercaseName = personName.toUpperCase();
console.log("Uppercase: ".concat(uppercaseName));
// Titlecase
var titlecaseName = personName.split(" ").map(function (word) { return word[0].toUpperCase() + word.slice(1).toLowerCase(); }).join(" ");
console.log("Titlecase: ".concat(titlecaseName));
