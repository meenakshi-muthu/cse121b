/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = async (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement('article');

    const h3 = document.createElement('h3');
    h3.textContent = temple.templeName;

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.location;

    article.appendChild(h3);
    article.appendChild(img);

    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  try {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();

    displayTemples(templeList);
  } catch (error) {
    console.error('Error fetching temple data:', error);
  }
};

/* reset Function */
const reset = () => {
  templesElement.innerHTML = ''; // Clears all <article> elements
};

/* sortBy Function */
const sortBy = (temples) => {
  reset(); // Clear the displayed list of temples

  const filter = document.getElementById('sortBy').value;

  switch (filter) {
    case 'utah':
      displayTemples(temples.filter(temple => temple.location.toLowerCase().includes('utah')));
      break;
    case 'notutah':
      displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes('utah')));
      break;
    case 'older':
      displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
      break;
    case 'all':
      displayTemples(temples);
      break;
    default:
      console.error('Invalid filter value');
  }
};

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });

// Call getTemples function
getTemples();

