let favorite_fruits: string[] = ["mango", "apple", "grapefruit"];

// Loop through favorite_fruits and check for specific fruits
const fruitsToCheck = ["mango", "apple", "grapefruit", "banana", "kiwi"];
for (const fruit of fruitsToCheck) {
  if (favorite_fruits.indexOf(fruit) !== -1) {
    console.log(`You really like ${fruit}s!`);
  }
}
