var request = new XMLHttpRequest();
request.open("GET", "https://pokeapi.co/api/v2/{endpoint}/", true);

request.onload = function () {
  // Begin accessing JSON data here
};

// Send request
request.send();
