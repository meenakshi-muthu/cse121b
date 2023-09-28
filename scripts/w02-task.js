/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

// Step 2: Declare and instantiate a variable to hold your name.
let fullName = "Meenakshi Muthu";

// Step 2: Declare and instantiate a variable to hold the current year.
const currentYear = new Date().getFullYear();

// Step 2: Declare and instantiate a variable to hold the file path (location) and file name of the image.
const profilePicture = "images/placeholder.png";

/* Step 3 - Element Variables */

// Step 3: Use the document.getElementById() method to get the HTML element with the id of "name".
const nameElement = document.getElementById("name");

// Step 3: Use the document.getElementById() method to get the HTML element with the id of "food".
const foodElement = document.getElementById("food");

// Step 3: Use the document.querySelector() method to get the element with the id of "year".
const yearElement = document.querySelector("#year");

// Step 3: Use any viable method to get the profile image element.
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */

// Step 4: Assign the nameElement's innerHTML property the fullName variable value.
// Surround the fullName value with <strong> tags using a template literal.
nameElement.innerHTML = `<strong>${fullName}</strong>`;

// Step 4: Use the textContent property to set the value of the element to the value of the variable currentYear.
yearElement.textContent = currentYear;

// Step 4: Use the setAttribute method to set the src property of the image element.
imageElement.setAttribute("src", profilePicture);

// Step 4: Use the setAttribute method to set the alt property of the image element.
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */

// Step 5: Declare an array variable to hold your favorite foods.
const favoriteFoods = ["Chicken Fry", "Dosa", "Burger", "Momos"];

// Step 5: Declare and instantiate a variable to hold another single favorite food item.
const newFavoriteFood = "Spring potato";

// Step 5: Add the new favorite food item to your favorite food array.
favoriteFoods.push(newFavoriteFood);

// Step 5: Remove the first element in the favorite food array.
favoriteFoods.shift();

// Step 5: Remove the last element in the favorite food array.
favoriteFoods.pop();

// Step 5: Append the modified favorite foods array to the displayed content of the HTML element with the id of "food".
foodElement.innerHTML = favoriteFoods.join("<br>");
