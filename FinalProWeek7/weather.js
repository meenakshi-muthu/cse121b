import { apiKey } from './config.js';

// Define the getWeather function
async function getWeather() {
  const locationInput = document.getElementById('location');
  const location = locationInput.value.trim();

  if (location === '') {
    alert('Please enter a valid location.');
    return;
  }

  // const apiKey = '338128cbb6msh3e188c30254b31dp1394fejsn4f6f94e57f5d';
  const apiUrl = `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    });

    if (response.status === 200) {
      const weatherData = await response.json();

      // Extract and display weather data here
      const cityName = weatherData.location.name;
      const country = weatherData.location.country;
      const temperature = weatherData.current.temp_c;
      const description = weatherData.current.condition.text;

      const weatherInfoContainer = document.getElementById('weather-info');
      weatherInfoContainer.innerHTML = `
        <h2>${cityName}, ${country}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
      `;

      // Use an array (e.g., cities) and an array method (e.g., push) to store city names.
      const cities = [];
      cities.push(cityName);
      console.log("Temperature:", temperature);

      const formattedCities = cities.map(city => `City: ${city}`);
      console.log(formattedCities);

      // Use of conditional branching
      if (temperature > 25) {
        console.log("It's a warm day!");
      } else {
        console.log("It's a cool day.");
      }

      // Use template literals for string building
      const greeting = `Hello, ${cityName}! The temperature is ${temperature}°C.`;
    } else {
      alert('Error fetching weather data. Please try again.');
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    alert('Error fetching weather data. Please try again.');
  }
}

// Attach the event listener to the button
document.getElementById('weather-button').addEventListener('click', getWeather);
