// Your dinner guests 
var guests = ["Mark", "Imran", "Mobin"];
// Invitation message template
var message = "Dear %s, I would be honored if you would join me for dinner. It would be a great opportunity to learn from your incredible mind and achievements.";
// Loop through the guest list and print personalized invitations
for (var i = 0; i < guests.length; i++) {
    var personalizedInvitation = message.replace("%s", guests[i]);
    console.log(personalizedInvitation);
}
