// Favorite Cars 
var cars = ["Nissan Patrol", "Bentley", "G Wagon", "Astun Martin"];
// Message template with personalization
var message = "I would love to own a %s Car.";
// Loop through the array and print personalized messages
for (var i = 0; i < cars.length; i++) {
    var personalizedMessage = message.replace("%s", cars[i]);
    console.log(personalizedMessage);
}
