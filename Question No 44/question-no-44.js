function describe_sandwich() {
    var sandwich_ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sandwich_ingredients[_i] = arguments[_i];
    }
    // Check if any ingredients were provided
    if (!sandwich_ingredients.length) {
        console.log("You haven't chosen any ingredients for your sandwich.");
        return;
    }
    // Print the sandwich description
    console.log("Your sandwich includes:");
    for (var _a = 0, sandwich_ingredients_1 = sandwich_ingredients; _a < sandwich_ingredients_1.length; _a++) {
        var ingredient = sandwich_ingredients_1[_a];
        console.log("- ".concat(ingredient));
    }
}
// Call the function with different numbers of arguments
describe_sandwich("bread", "turkey", "cheese");
describe_sandwich("bread", "lettuce", "tomato");
describe_sandwich("bread");
