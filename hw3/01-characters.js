// Saving the url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

// Fetch the data from the Thrones API
fetch(url)
  .then(response => response.json())
  .then(data => {
    const section = document.querySelector('section');
    
    // Loop through each character
    data.forEach(character => {
      const div = document.createElement('div');
      div.className = 'character';
      const img = document.createElement('img');
      img.src = character.imageUrl;
      img.alt = character.fullName;
      const name = document.createElement('p');
      name.textContent = character.fullName;
      const title = document.createElement('p');
      title.textContent = character.title;

      // Add the elements to div
      div.appendChild(img);
      div.appendChild(name);
      div.appendChild(title);

      // Add the div to section
      section.appendChild(div);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  })
  .finally(() => {
    console.log("If no error was reported: Success!");
  });
