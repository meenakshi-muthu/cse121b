import { isWarm } from 'weather.js'; // Use a relative path to 'weather.js'

// Example usage of the isWarm function
const city = 'New York';
const temperature = 30; // You can set the temperature to any value you want

if (isWarm(city, temperature)) {
  console.log(`${city} is warm.`);
} else {
  console.log(`${city} is not warm.`);
}
