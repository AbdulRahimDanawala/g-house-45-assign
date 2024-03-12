function make_car(manufacturer, model) {
    var car_info = []; // Array of key-value pairs
    for (var _i = 2 // Array of key-value pairs
    ; _i < arguments.length // Array of key-value pairs
    ; _i++ // Array of key-value pairs
    ) {
        car_info[_i - 2] = arguments[_i]; // Array of key-value pairs
    }
    // Create a base car object with manufacturer and model
    var car = { manufacturer: manufacturer, model: model };
    // Iterate through key-value pairs and add to car object
    for (var _a = 0, car_info_1 = car_info; _a < car_info_1.length; _a++) {
        var _b = car_info_1[_a], key = _b[0], value = _b[1];
        car[key] = String(value); // Ensure string value
    }
    return car;
}
// Call the function with key-value pairs
var car1 = make_car("Subaru", "Outback", ["color", "blue"], ["sunroof", "true"] // String value for sunroof
);
var car2 = make_car("Toyota", "Camry", ["year", "2023"], ["mileage", "10000"]);
var car3 = make_car("Tesla", "Model S", ["range", "350 miles"]);
// Print the car information objects
console.log(car1);
console.log(car2);
console.log(car3);
