function describe_city(city: string, country = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
  }
  
  // Call the function for different cities
  describe_city("Karachi"); // Use default country (Pakistan)
  describe_city("Berlin", "Germany"); // Specify country
  describe_city("New York", "USA"); // Specify country
  