const magicians: string[] = ["David Copperfield", "Criss Angel", "Dynamo", "Penn & Teller"];

function show_magicians(magicians: string[]): void {
  console.log("Magicians:");
  for (const magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
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
