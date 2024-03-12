// Create Book objects
var book1 = {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    yearPublished: 1954,
    isAvailable: true,
};
var book2 = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    yearPublished: 1813,
};
// **Intentional Error: Trying to access a non-existent property**
// console.log("Book 1 (incorrect property access):", book1.autho); // Error: autho property doesn't exist
console.log("Book 1 (incorrect property access):", book1.author); // Error Resolved
// Print the Book objects (corrected)
console.log("Book 1:", book1);
console.log("Book 2:", book2);
