// Version 1: Alien is green (runs the if block)
let alien_color = "green";

if (alien_color === "green") {
  console.log("You just earned 5 points for shooting the alien.");
} else {
  console.log("You just earned 10 points for shooting the alien."); // This won't be executed
}

// Version 2: Alien is not green (runs the else block)
alien_color = "yellow";

if (alien_color === "green") {
  console.log("You just earned 5 points for shooting the alien."); // This won't be executed
} else {
  console.log("You just earned 10 points for shooting the alien.");
}
