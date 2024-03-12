function city_country(city, country) {
    // Combine city and country with a comma and space separator
    return "".concat(city, ", ").concat(country);
}
// Call the function with different city-country pairs
var lahorePakistan = city_country("Lahore", "Pakistan");
var londonEngland = city_country("London", "England");
var chicagoUSA = city_country("Chicago", "USA");
// Print the returned formatted strings
console.log(lahorePakistan);
console.log(londonEngland);
console.log(chicagoUSA);
