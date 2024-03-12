var favorite_fruits = ["mango", "apple", "grapefruit"];
// Loop through favorite_fruits and check for specific fruits
var fruitsToCheck = ["mango", "apple", "grapefruit", "banana", "kiwi"];
for (var _i = 0, fruitsToCheck_1 = fruitsToCheck; _i < fruitsToCheck_1.length; _i++) {
    var fruit = fruitsToCheck_1[_i];
    if (favorite_fruits.indexOf(fruit) !== -1) {
        console.log("You really like ".concat(fruit, "s!"));
    }
}
