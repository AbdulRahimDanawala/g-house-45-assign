function make_shirt(size: string = "large", message = "I love TypeScript!"): void {
    console.log(`I made a ${size} t-shirt that says '${message}'.`);
  }
  
  // Call the function with different arguments
  make_shirt(); // Use defaults (large, I love TypeScript!)
  make_shirt("medium"); // Medium shirt, default message
  make_shirt("small", "Python is awesome"); // Small shirt, different message
  