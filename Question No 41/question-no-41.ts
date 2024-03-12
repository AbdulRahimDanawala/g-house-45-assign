const magicians: string[] = ["David Copperfield", "Criss Angel", "Dynamo", "Penn & Teller"];

function show_magicians(magicians: string[]): void {
  console.log("Magicians:");
  for (const magician of magicians) {
    console.log(magician);
  }
}

show_magicians(magicians);
