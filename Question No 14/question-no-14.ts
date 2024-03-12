// Your dinner guests 
const guests: string[] = ["Mark", "Imran", "Mobin"];

// Invitation message template
const message: string = "Dear %s, I would be honored if you would join me for dinner. It would be a great opportunity to learn from your incredible mind and achievements.";

// Loop through the guest list and print personalized invitations
for (let i = 0; i < guests.length; i++) {
  const personalizedInvitation = message.replace("%s", guests[i]);
  console.log(personalizedInvitation);
}
