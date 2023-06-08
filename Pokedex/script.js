const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const pokemon_sprite =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

//Prevent page from reloading
async function pokedex(event) {
  if (event) {
    event.preventDefault();
  }

  //Get type logo from assets
  function getLogo(type) {
    return "assets/icons/" + type + ".svg";
  }

  //Get pokemon name
  let pokemonName = document.getElementById("pokemon_name").value;

  //GET request
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  //Fetch api results for pokemon basic data
  const apiResult = await fetch(`${apiUrl}${pokemonName}`);
  if (apiResult.status == 404) {
    alert("That's not a real pokemon");
  }
  const pokemon = await apiResult.json();

  //Prevent wrong inputs
  if (apiResult.status == 404) {
    alert("Wrong");
  }

  //Pokedex number formatter
  let pokedex = pokemon.id;

  console.log(pokemon);

  if (pokedex.toString().length == 1) {
    document.getElementById("pokemon_id").innerHTML = "#00" + pokemon.id;
  } else if (pokedex.toString().length == 2) {
    document.getElementById("pokemon_id").innerHTML = "#0" + pokemon.id;
  } else {
    document.getElementById("pokemon_id").innerHTML = "#" + pokemon.id;
  }

  //Capitalize first letter of the pokemon name
  let pokemon_name = pokemon.name;
  let type_name = pokemon.types[0].type.name;
  let pokemon_name_cap =
    pokemon_name.charAt(0).toUpperCase() + pokemon_name.slice(1);
  let type_name_cap = type_name.charAt(0).toUpperCase() + type_name.slice(1);

  //Pokemon basic stats info

  document.getElementById("pokemon_name_title").innerHTML = pokemon_name_cap;

  //Pokemon image
  document
    .getElementById("pokemon_picture")
    .setAttribute("src", pokemon_sprite + pokemon.id + ".png");

  //Pokemon Stats
  document
    .getElementById("hp")
    .setAttribute("value", pokemon.stats[0].base_stat);
  document.getElementById("hp_label").innerHTML = pokemon.stats[0].base_stat;
  document
    .getElementById("attack")
    .setAttribute("value", pokemon.stats[1].base_stat);
  document.getElementById("attack_label").innerHTML =
    pokemon.stats[1].base_stat;
  document
    .getElementById("defense")
    .setAttribute("value", pokemon.stats[2].base_stat);
  document.getElementById("defense_label").innerHTML =
    pokemon.stats[2].base_stat;
  document
    .getElementById("special_attack")
    .setAttribute("value", pokemon.stats[3].base_stat);
  document.getElementById("sa_label").innerHTML = pokemon.stats[3].base_stat;
  document
    .getElementById("special_defense")
    .setAttribute("value", pokemon.stats[4].base_stat);
  document.getElementById("sd_label").innerHTML = pokemon.stats[4].base_stat;
  document
    .getElementById("speed")
    .setAttribute("value", pokemon.stats[5].base_stat);
  document.getElementById("speed_label").innerHTML = pokemon.stats[5].base_stat;

  //Change type name
  document.getElementById("type_name").innerHTML = type_name_cap;

  //Change type logo
  document
    .getElementById("type_image")
    .setAttribute("src", getLogo(pokemon.types[0].type.name));
}

document.getElementById("pokemon_form").addEventListener("submit", pokedex);

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
