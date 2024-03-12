function city_country(city: string, country: string): string {
    // Combine city and country with a comma and space separator
    return `${city}, ${country}`;
  }
  
  // Call the function with different city-country pairs
  const lahorePakistan = city_country("Lahore", "Pakistan");
  const londonEngland = city_country("London", "England");
  const chicagoUSA = city_country("Chicago", "USA");
  
  // Print the returned formatted strings
  console.log(lahorePakistan);
  console.log(londonEngland);
  console.log(chicagoUSA);
  