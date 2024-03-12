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


// Found a bigger table!
console.log("\nGreat news! I found a bigger dinner table.");

// New guests to invite (replace with your choices)
const newGuest1 = "Stephen Hawking";
const newGuest2 = "Alan Turing";
const newGuest3 = "Ada Lovelace";

// Add a guest to the beginning of the array
guests.unshift(newGuest1);

// Add a guest to the middle of the array (floor of list length divided by 2)
guests.splice(Math.floor(guests.length / 2), 0, newGuest2);

// Add a guest to the end of the array using append() (alternative to push())
guests.push(newGuest3);

// Print invitations for all guests
console.log("\nSending new invitations to the expanded guest list:");
for (let i = 0; i < guests.length; i++) {
  const updatedInvitation = message.replace("%s", guests[i]);
  console.log(updatedInvitation);
}
