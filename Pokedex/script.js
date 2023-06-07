const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const pokemon_sprite =
  "hhttps://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
const pokemon_color = "https://pokeapi.co/api/v2/pokemon-color/";

//Prevent page from reloading
async function getName(event) {
  if (event) {
    event.preventDefault();
  }
  let pokemonName = document.getElementById("pokemon-name").value;

  //GET request
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  //Fetch api results for pokemon basic data
  const apiResult = await fetch(`${apiUrl}${pokemonName}`);
  const pokemon = await apiResult.json();

  //Fetch api results for pokemon color to change background color
  /*const apiColorResult = await fetch(`${pokemon_color}${pokemon.id}`);
  const pokemonColor = await apiColorResult.json();*/

  //Background color change
  //document.body.style.backgroundColor = pokemonColor.name;

  //Pokedex number formatter
  let pokedex = pokemon.id;

  if (pokedex.toString().length == 1) {
    document.getElementById("pokemon_id").innerHTML = "#00" + pokemon.id;
  } else if (pokedex.toString().length == 2) {
    document.getElementById("pokemon_id").innerHTML = "#0" + pokemon.id;
  } else {
    document.getElementById("pokemon_id").innerHTML = "#" + pokemon.id;
  }

  //Capitalize first letter of the pokemon name
  let pokemon_name = pokemon.name;
  let pokemon_name_cap =
    pokemon_name.charAt(0).toUpperCase() + pokemon_name.slice(1);

  //Pokemon basic stats info

  document.getElementById("stats_name").innerHTML = pokemon_name_cap;
  document.getElementById("height").innerHTML = pokemon.height;
  document.getElementById("weight").innerHTML = pokemon.weight;

  //Pokemon image
  document
    .getElementById("pokemon_image")
    .setAttribute("src", pokemon.sprites.other.dream_world.front_default);
}

document.getElementById("pokemon_form").addEventListener("submit", getName);

/*
const search_term = document.getElementById("pokemon-name");
const search_btn = document.getElementById("search_button");

const getPokemonData = async (query) => {
  const url = "https://pokeapi.co/api/v2/pokemon/${query}";
  const response = await fetch(url);

  if (response.status == 404 || response.statusText == "Not_Found") {
    alert("Not Found");
    return;
  }

  const pokemon = response.json();

  document.getElementById('pokemon_image').setAttribute('src', pokemon.sprite.other.dream_world.front_default);
};
*/
