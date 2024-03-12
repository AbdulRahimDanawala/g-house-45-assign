const magicians: string[] = ["David Copperfield", "Criss Angel", "Dynamo", "Penn & Teller"];

function show_magicians(magicians: string[]): void {
  console.log("Magicians:");
  for (const magician of magicians) {
    console.log(magician);
  }
}

function make_great(originalMagicians: string[]): string[] {
  const greatMagicians: string[] = []; // Create a new array to store modified names
  for (const magician of originalMagicians) {
    greatMagicians.push(magician + " the Great"); // Add "the Great" with push
  }
  return greatMagicians; // Return the new array with modifications
}

// Print the original magicians
show_magicians(magicians);

// Create a copy of the array before calling make_great
const greatMagicians = make_great(magicians.slice());  // Use slice() for copy

// Now print the original and modified magicians
console.log("\nAfter making them great:");
show_magicians(magicians);  // Original magicians remain unchanged
show_magicians(greatMagicians);  // New array with modifications
