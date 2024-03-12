function describe_sandwich(...sandwich_ingredients: string[]): void {
    // Check if any ingredients were provided
    if (!sandwich_ingredients.length) {
      console.log("You haven't chosen any ingredients for your sandwich.");
      return;
    }
  
    // Print the sandwich description
    console.log("Your sandwich includes:");
    for (const ingredient of sandwich_ingredients) {
      console.log(`- ${ingredient}`);
    }
  }
  
  // Call the function with different numbers of arguments
  describe_sandwich("bread", "turkey", "cheese");
  describe_sandwich("bread", "lettuce", "tomato");
  describe_sandwich("bread");
  