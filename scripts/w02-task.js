/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

// Step 2: Declare and instantiate a variable to hold your name.
let fullName = "Meenakshi Muthu";

// Step 2: Declare and instantiate a variable to hold the current year.
const currentYear = new Date().getFullYear();

// Step 2: Declare and instantiate a variable to hold the file path (location) and file name of the image.
const profilePicture = "images/placeholder.png";

// Step 2: Declare and instantiate an array to hold favorite foods.
const favoriteFoods = ["Chicken Fry", "Dosa", "Burger", "Momos"];

// Display the array before adding anything.
console.log("Favorite Foods (Before Adding):", favoriteFoods);

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

// Step 5: Declare and instantiate a variable to hold a new favorite food.
const newFavoriteFood = "Spring potato";

// Add the new favorite food to the array.
favoriteFoods.push(newFavoriteFood);

// Display the array after adding the new favorite food.
console.log("Favorite Foods (After Adding One):", favoriteFoods);

// Step 5: Declare and instantiate a variable to hold another new favorite food.
const anotherNewFavoriteFood = "Sushi";

// Add another new favorite food to the array.
favoriteFoods.push(anotherNewFavoriteFood);

// Display the array after adding another new favorite food.
console.log("Favorite Foods (After Adding Two More):", favoriteFoods);

// Remove the first item from the array.
favoriteFoods.shift();

// Display the array after removing the first item.
console.log("Favorite Foods (After Removing the First Item):", favoriteFoods);

// Remove the last item from the array.
favoriteFoods.pop();

// Display the array after removing the last item.
console.log("Favorite Foods (After Removing the Last Item):", favoriteFoods);

// Display the array in the HTML element.
foodElement.innerHTML = favoriteFoods.map(food => `<br>${food}`).join("");
