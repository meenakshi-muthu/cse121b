// Import the Axios library as a module
// import axios from 'axios';
// We can use either import or use the script in the html.

// Export the isWarm function
export function isWarm(city, temperature) {
	// You can define your own condition to determine if a city is warm or not
	return temperature > 25;
  }

// Define the getWeather function
async function getWeather() {
  const locationInput = document.getElementById('location');
  const location = locationInput.value.trim();

  if (location === '') {
    alert('Please enter a valid location.');
    return;
  }

  const apiKey = '338128cbb6msh3e188c30254b31dp1394fejsn4f6f94e57f5d'; 
  const apiUrl = `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`;

  const options = {
    method: 'GET',
    url: apiUrl,
    headers: {
      'X-RapidAPI-Key': '338128cbb6msh3e188c30254b31dp1394fejsn4f6f94e57f5d',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);

    // Extract and display weather data here
    const cityName = response.data.location.name;
    const country = response.data.location.country;
    const temperature = response.data.current.temp_c;
    const description = response.data.current.condition.text;

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

  } catch (error) {
    console.error('Error fetching weather data:', error);
    alert('Error fetching weather data. Please try again.');
  }
}

// Attach the event listener to the button
document.getElementById('weather-button').addEventListener('click', getWeather);


