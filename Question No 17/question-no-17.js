// Your dinner guests 
var guests = ["Mark", "Imran", "Mobin"];
// Invitation message template
var message = "Dear %s, I would be honored if you would join me for dinner. It would be a great opportunity to learn from your incredible mind and achievements.";
// Loop through the guest list and print personalized invitations
for (var i = 0; i < guests.length; i++) {
    var personalizedInvitation = message.replace("%s", guests[i]);
    console.log(personalizedInvitation);
}
// Guest who can't make it
var guestUnableToAttend = "Mobin";
// Inform about the guest who can't make it
console.log("\nUnfortunately, ".concat(guestUnableToAttend, " won't be able to make it to dinner."));
// Remove the unavailable guest from the array (optional)
guests.splice(guests.indexOf(guestUnableToAttend), 1);
// New guest to invite (replace with your choice)
var newGuest = "Ahmad";
// Add the new guest to the array
guests.push(newGuest);
// Print invitations for remaining guests
console.log("\nSending new invitations:");
for (var i = 0; i < guests.length; i++) {
    var updatedInvitation = message.replace("%s", guests[i]);
    console.log(updatedInvitation);
}
// Found a bigger table!
console.log("\nGreat news! I found a bigger dinner table.");
// New guests to invite (replace with your choices)
var newGuest1 = "Stephen Hawking";
var newGuest2 = "Alan Turing";
var newGuest3 = "Ada Lovelace";
// Add a guest to the beginning of the array
guests.unshift(newGuest1);
// Add a guest to the middle of the array (floor of list length divided by 2)
guests.splice(Math.floor(guests.length / 2), 0, newGuest2);
// Add a guest to the end of the array using append() (alternative to push())
guests.push(newGuest3);
// Print invitations for all guests
console.log("\nSending new invitations to the expanded guest list:");
for (var i = 0; i < guests.length; i++) {
    var updatedInvitation = message.replace("%s", guests[i]);
    console.log(updatedInvitation);
}
// Unfortunately, the table won't arrive in time
console.log("\nUnfortunately, the new dinner table won't arrive in time. I can only invite two people for dinner.");
// Regretfully remove guests until only two remain
while (guests.length > 2) {
    var removedGuest = guests.pop(); // Remove the last guest
    if (removedGuest) { // Check if a guest was removed (could be undefined)
        console.log("\nI'm so sorry, ".concat(removedGuest, ", but due to limited space, I won't be able to invite you to dinner this time."));
    }
}
// Inform the remaining two guests
console.log("\nThe good news is that there's still space for you two amazing people:");
for (var i = 0; i < guests.length; i++) {
    console.log("  - ".concat(guests[i]));
}
// Remove the remaining two guests (optional)
guests.splice(0, guests.length); // Remove all elements starting from index 0
// Print the final guest list to verify it's empty
console.log("\nFinal guest list:");
console.log(guests); // Should be an empty array `[]`
