function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for different cities
describe_city("Karachi"); // Use default country (Pakistan)
describe_city("Berlin", "Germany"); // Specify country
describe_city("New York", "USA"); // Specify country
