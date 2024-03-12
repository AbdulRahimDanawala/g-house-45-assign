// Favorite Cars 
const cars: string[] = ["Nissan Patrol", "Bentley", "G Wagon", "Astun Martin"];

// Message template with personalization
const message: string = "I would love to own a %s Car.";

// Loop through the array and print personalized messages
for (let i = 0; i < cars.length; i++) {
  const personalizedMessage = message.replace("%s", cars[i]);
  console.log(personalizedMessage);
}