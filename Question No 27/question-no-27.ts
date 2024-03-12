// Version 1: Alien is green (earns 5 points)
let alien_color = "green";

if (alien_color === "green") {
  console.log("You just earned 5 points for shooting the alien.");
} else if (alien_color === "yellow") {
  console.log("You just earned 10 points for shooting the alien."); // Won't be executed
} else {
  console.log("You just earned 15 points for shooting the alien."); // Won't be executed
}

// Version 2: Alien is yellow (earns 10 points)
alien_color = "yellow";

if (alien_color === "green") {
  console.log("You just earned 5 points for shooting the alien."); // Won't be executed
} else if (alien_color === "yellow") {
  console.log("You just earned 10 points for shooting the alien.");
} else {
  console.log("You just earned 15 points for shooting the alien."); // Won't be executed
}

// Version 3: Alien is red (earns 15 points)
alien_color = "red";

if (alien_color === "green") {
  console.log("You just earned 5 points for shooting the alien."); // Won't be executed
} else if (alien_color === "yellow") {
  console.log("You just earned 10 points for shooting the alien."); // Won't be executed
} else {
  console.log("You just earned 15 points for shooting the alien.");
}
