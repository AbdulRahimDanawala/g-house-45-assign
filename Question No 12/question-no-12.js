// My friends' names
var friends = ["Anas", "Bilal", "Zain", "Mustafa", "Daniyal", "Ali", "Akbar"];
// Greeting message with personalization
var message = "Hey %s, how are you doing today?";
// Loop through the array and print personalized greetings
for (var i = 0; i < friends.length; i++) {
    var personalizedMessage = message.replace("%s", friends[i]);
    console.log(personalizedMessage);
}
