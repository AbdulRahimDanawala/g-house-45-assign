let personName: string = `\t  John\n Doe\t \n`;

// Print the name with whitespace
console.log("Name with whitespace:", personName);

// Remove whitespace using replace()
let trimmedName: string = personName.replace(/\s/g, "");

// Print the trimmed name
console.log("Name without whitespace:", trimmedName);
