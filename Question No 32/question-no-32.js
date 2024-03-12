var current_users = ["admin", "user1", "Eric", "john", "Mary"];
var new_users = ["John", "newUser", "Alice", "eRIC", "bob"];
function checkUsernameAvailability(username) {
    var usernameLower = username.toLowerCase(); // Convert username to lowercase for case-insensitive comparison
    for (var _i = 0, current_users_1 = current_users; _i < current_users_1.length; _i++) {
        var existingUser = current_users_1[_i];
        if (existingUser.toLowerCase() === usernameLower) {
            console.log("".concat(username, ": Username is already taken. Please choose another."));
            return; // Exit the function if username is found
        }
    }
    console.log("".concat(username, ": Username is available."));
}
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newUser = new_users_1[_i];
    checkUsernameAvailability(newUser);
}
