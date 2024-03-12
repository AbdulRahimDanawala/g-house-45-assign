// My friends' names
const friends: string[] = ["Anas", "Bilal", "Zain", "Mustafa", "Daniyal", "Ali", "Akbar"];

// Greeting message with personalization
const message: string = "Hey %s, how are you doing today?";

// Loop through the array and print personalized greetings
for (let i = 0; i < friends.length; i++) {
  const personalizedMessage = message.replace("%s", friends[i]);
  console.log(personalizedMessage);
}
