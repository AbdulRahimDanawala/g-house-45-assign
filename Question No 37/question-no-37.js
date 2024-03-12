function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript!"; }
    console.log("I made a ".concat(size, " t-shirt that says '").concat(message, "'."));
}
// Call the function with different arguments
make_shirt(); // Use defaults (large, I love TypeScript!)
make_shirt("medium"); // Medium shirt, default message
make_shirt("small", "Python is awesome"); // Small shirt, different message
