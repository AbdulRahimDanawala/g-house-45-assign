const current_users: string[] = ["admin", "user1", "Eric", "john", "Mary"];
const new_users: string[] = ["John", "newUser", "Alice", "eRIC", "bob"];

function checkUsernameAvailability(username: string): void {
  const usernameLower = username.toLowerCase(); // Convert username to lowercase for case-insensitive comparison
  for (const existingUser of current_users) {
    if (existingUser.toLowerCase() === usernameLower) {
      console.log(`${username}: Username is already taken. Please choose another.`);
      return; // Exit the function if username is found
    }
  }
  console.log(`${username}: Username is available.`);
}

for (const newUser of new_users) {
  checkUsernameAvailability(newUser);
}
