var magicians = ["David Copperfield", "Criss Angel", "Dynamo", "Penn & Teller"];
function show_magicians(magicians) {
    console.log("Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] += " the Great"; // Directly modify the array elements
    }
}
// Print the original magicians
show_magicians(magicians);
// Make them great!
make_great(magicians);
// Now print the modified magicians
console.log("\nAfter making them great:");
show_magicians(magicians);
