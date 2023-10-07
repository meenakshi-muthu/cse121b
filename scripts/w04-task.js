let myProfile = {
    name: "Meenakshi Muthu",
    photo: "images/placeholder.png",
    favoriteFoods: ['Dosa', 'Chicken Curry', 'Momos', 'Burger'],
    hobbies: ['Work', 'Studies', 'Watch KC Dramas'],
    placesLived: [
      { place: 'Manila, PH', length: '1 Month' },
      { place: 'Delhi, IN', length: '18 Months' },
      { place: 'Chennai, IN', length: '25 Years' },
      { place: 'Coimbatore, IN', length: '1 week' },
    ],
  };
  
  /* DOM Manipulation (Output) */
  
  document.querySelector('#name').textContent = myProfile.name;
  
  /* Photo with attributes */
  document.querySelector('#photo').setAttribute('src', myProfile.photo);
  document.querySelector('#photo').setAttribute('alt', myProfile.name);
  
  /* Favorite Foods List */
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  
  /* Hobbies List */
  let hobbiesList = document.querySelector('#hobbies');
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    hobbiesList.appendChild(li);
  });
  
  /* Places Lived DataList */
  let placesLivedList = document.querySelector('#places-lived');
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
  
    // Create a strong element for the place name (bold)
    let strong = document.createElement('strong');
    strong.textContent = place.place;
    dt.appendChild(strong);
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    placesLivedList.appendChild(dt);
  
    // Add a space before appending the dd element
    placesLivedList.appendChild(document.createTextNode(' '));
    placesLivedList.appendChild(dd);
  });
  