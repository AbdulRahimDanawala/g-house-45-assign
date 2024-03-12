// Your travel destinations (not in alphabetical order)
var travelWishList = ["Great Barrier Reef", "Iceland", "Petra, Jordan", "Galapagos Islands", "Machu Picchu"];
// Print the original list
console.log("\nOriginal Travel Wish List:");
console.log(travelWishList);
// Sort a copy of the list for alphabetical order (without modifying the original)
var sortedList = travelWishList.slice(); // Create a copy using slice()
sortedList.sort();
console.log("\nTravel Wish List (alphabetical - copy):");
console.log(sortedList);
// Print the original list again to demonstrate it's unchanged
console.log("\nOriginal Travel Wish List (unchanged):");
console.log(travelWishList);
// Sort a copy for reverse alphabetical order (without modifying the original)
var reverseSortedList = travelWishList.slice();
reverseSortedList.sort(function (a, b) { return b.localeCompare(a); }); // Sort descending
console.log("\nTravel Wish List (reverse alphabetical - copy):");
console.log(reverseSortedList);
// Print the original list again to demonstrate it's unchanged
console.log("\nOriginal Travel Wish List (unchanged):");
console.log(travelWishList);
// Reverse the original list
travelWishList.reverse();
console.log("\nTravel Wish List (reversed):");
console.log(travelWishList);
// Reverse the original list again (back to the original order)
travelWishList.reverse();
console.log("\nTravel Wish List (back to original order):");
console.log(travelWishList);
// Sort the original list alphabetically
travelWishList.sort();
console.log("\nTravel Wish List (sorted alphabetically):");
console.log(travelWishList);
// Sort the original list in reverse alphabetical order
travelWishList.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nTravel Wish List (sorted reverse alphabetically):");
console.log(travelWishList);
