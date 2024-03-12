// Your dinner guests 
const guests: string[] = ["Mark", "Imran", "Mobin"];

// Invitation message template
const message: string = "Dear %s, I would be honored if you would join me for dinner. It would be a great opportunity to learn from your incredible mind and achievements.";

// Loop through the guest list and print personalized invitations
for (let i = 0; i < guests.length; i++) {
  const personalizedInvitation = message.replace("%s", guests[i]);
  console.log(personalizedInvitation);
}


// Guest who can't make it
const guestUnableToAttend = "Mobin";

// Inform about the guest who can't make it
console.log(`\nUnfortunately, ${guestUnableToAttend} won't be able to make it to dinner.`);

// Remove the unavailable guest from the array (optional)
guests.splice(guests.indexOf(guestUnableToAttend), 1);

// New guest to invite (replace with your choice)
const newGuest = "Ahmad";

// Add the new guest to the array
guests.push(newGuest);

// Print invitations for remaining guests
console.log("\nSending new invitations:");
for (let i = 0; i < guests.length; i++) {
  const updatedInvitation = message.replace("%s", guests[i]);
  console.log(updatedInvitation);
}
