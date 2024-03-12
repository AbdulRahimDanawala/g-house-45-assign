function make_car(
    manufacturer: string,
    model: string,
    ...car_info: [string, string][] // Array of key-value pairs
  ): object {
    // Create a base car object with manufacturer and model
    const car: { [key: string]: string } = { manufacturer, model };
  
    // Iterate through key-value pairs and add to car object
    for (const [key, value] of car_info) {
      car[key] = String(value); // Ensure string value
    }
  
    return car;
  }
  
  // Call the function with key-value pairs
  const car1 = make_car(
    "Subaru",
    "Outback",
    ["color", "blue"],
    ["sunroof", "true"] // String value for sunroof
  );
  const car2 = make_car("Toyota", "Camry", ["year", "2023"], ["mileage", "10000"]);
  const car3 = make_car("Tesla", "Model S", ["range", "350 miles"]);
  
  // Print the car information objects
  console.log(car1);
  console.log(car2);
  console.log(car3);
  