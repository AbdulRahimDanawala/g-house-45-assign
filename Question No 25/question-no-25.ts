// Version 1: Alien is green (passes the if test)
let alien_color = "green";

if (alien_color === "green") {
  console.log("You just earned 5 points!");
}

// Version 2: Alien is not green (fails the if test)
alien_color = "red";

if (alien_color === "green") { // This condition will now fail
  console.log("You just earned 5 points!"); // This line won't be executed
}
