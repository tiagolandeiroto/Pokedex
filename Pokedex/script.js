const pokemon_name_call = "https://pokeapi.co/api/v2/pokemon/";

function getName() {
  let pokemon_name = document.getElementById("pokemon-name").value;
  document.getElementById("image").innerHTML = pokemon_name;

  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(pokemon_name_call + pokemon_name).then((response) =>
    response.text().then((text) => console.log(text))
  );
}
