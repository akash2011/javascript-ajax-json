/* ajax and jason */
/* custom js for getting data using json from external url */
var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");
/* while button click */
btn.addEventListener("click", function() {
  /* xml http request */
  var ourRequest = new XMLHttpRequest();
  /* get json data from external url */
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      /* parsing json data */
      var ourData = JSON.parse(ourRequest.responseText);
      /* calling the html render function */
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  pageCounter++;
    
  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
    
});

/* renderHTML Funcion */
function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    /* html string to add content to the animal container  */
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
    
    for (ii = 0; ii < data[i].foods.likes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.likes[ii];
      } else {
        htmlString += " and " + data[i].foods.likes[ii];
      }
    }

    htmlString += ' and dislikes ';

    for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.dislikes[ii];
      } else {
        htmlString += " and " + data[i].foods.dislikes[ii];
      }
    }

    htmlString += '.</p>';
    /* html string ends */
  }

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
