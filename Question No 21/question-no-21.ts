// Define an interface for Book properties (optional but recommended)
interface Book {
    title: string;
    author: string;
    yearPublished: number;
    isAvailable?: boolean; // Optional property
  }
  
  // Create Book objects
  const book1: Book = {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    yearPublished: 1954,
    isAvailable: true,
  };
  
  const book2: Book = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    yearPublished: 1813,
  };
  
  // Print the Book objects
  console.log("Book 1:", book1);
  console.log("Book 2:", book2);
  