var magicians = ["David Copperfield", "Criss Angel", "Dynamo", "Penn & Teller"];
function show_magicians(magicians) {
    console.log("Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(originalMagicians) {
    var greatMagicians = []; // Create a new array to store modified names
    for (var _i = 0, originalMagicians_1 = originalMagicians; _i < originalMagicians_1.length; _i++) {
        var magician = originalMagicians_1[_i];
        greatMagicians.push(magician + " the Great"); // Add "the Great" with push
    }
    return greatMagicians; // Return the new array with modifications
}
// Print the original magicians
show_magicians(magicians);
// Create a copy of the array before calling make_great
var greatMagicians = make_great(magicians.slice()); // Use slice() for copy
// Now print the original and modified magicians
console.log("\nAfter making them great:");
show_magicians(magicians); // Original magicians remain unchanged
show_magicians(greatMagicians); // New array with modifications
