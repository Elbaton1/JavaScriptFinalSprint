// Test if script is linked correctly
console.log("Script linked successfully!");

// Step 3: Reading the JSON file
fetch("superheroes.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Logging the data to console for verification

    //Iterating over JSON data and logging names
    data.forEach((item) => {
      console.log(item.name); // Displaying the name of each hero
    });

    function displayHeroes(data) {
      let html = "<ul>";
      data.forEach((item) => {
        html += `<li>${item.name} - Alter Ego: ${
          item.alterEgo
        }, Powers: ${item.powers.join(", ")}</li>`;
      });
      html += "</ul>";
      document.body.innerHTML = html;
    }

    displayHeroes(data); // Displaying data in browser window
  })
  .catch((error) => console.error("Error fetching JSON:", error));
