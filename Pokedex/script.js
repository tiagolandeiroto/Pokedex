const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const pokemon_sprite =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
const pokemon_family = "https://pokeapi.co/api/v2/evolution-chain/";
let currentID = 1;

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
  const apiResult = await fetch(
    pokemonName ? `${apiUrl}${pokemonName}` : `${apiUrl}${currentID}`
  );
  if (apiResult.status == 404) {
    alert("That's not a real pokemon");
    return;
  }
  const pokemon = await apiResult.json();

  //Prevent wrong inputs
  if (apiResult.status == 404) {
    alert("Wrong");
  }

  //Pokedex number formatter
  let pokedex = pokemon.id;

  //Capitalize first letter of the pokemon name
  let pokemon_name = pokemon.name;
  let pokemon_name_cap =
    pokemon_name.charAt(0).toUpperCase() + pokemon_name.slice(1);

  //Pokemon basic stats info

  if (pokedex.toString().length == 1) {
    document.getElementById("pokemon_name_title").innerHTML =
      pokemon_name_cap + " - #00" + pokemon.id;
  } else if (pokedex.toString().length == 2) {
    document.getElementById("pokemon_name_title").innerHTML =
      pokemon_name_cap + " - #0" + pokemon.id;
  } else {
    document.getElementById("pokemon_name_title").innerHTML =
      pokemon_name_cap + " - #" + pokemon.id;
  }

  //Pokemon image
  document
    .getElementById("pokemon_picture")
    .setAttribute("src", pokemon_sprite + pokemon.id + ".png");

  //Pokemon Stats

  function setProgressBarValues(elementId, value) {
    const progressBar = document.getElementById(elementId);
    progressBar.style.setProperty("--progress-value", value);
  }

  setProgressBarValues("hp-label", pokemon.stats[0].base_stat);
  document.getElementById("hp-text").innerHTML = pokemon.stats[0].base_stat;

  setProgressBarValues("attack-label", pokemon.stats[1].base_stat);
  document.getElementById("attack-text").innerHTML = pokemon.stats[1].base_stat;

  setProgressBarValues("defense-label", pokemon.stats[2].base_stat);
  document.getElementById("defense-text").innerHTML =
    pokemon.stats[2].base_stat;

  setProgressBarValues("sp-attack-label", pokemon.stats[3].base_stat);
  document.getElementById("sp-attack-text").innerHTML =
    pokemon.stats[3].base_stat;

  setProgressBarValues("sp-defense-label", pokemon.stats[4].base_stat);
  document.getElementById("sp-defense-text").innerHTML =
    pokemon.stats[4].base_stat;

  setProgressBarValues("speed-label", pokemon.stats[5].base_stat);
  document.getElementById("speed-text").innerHTML = pokemon.stats[5].base_stat;
  //Change type logo/name

  let type_name;
  let type_name_cap;
  let type_name2;
  let type_name_cap2;

  if (pokemon.types.length == 1) {
    document
      .getElementById("type_image")
      .setAttribute("src", getLogo(pokemon.types[0].type.name));
    document.getElementById("type_image2").style.display = "none";
  }
  if (pokemon.types.length == 2) {
    document
      .getElementById("type_image")
      .setAttribute("src", getLogo(pokemon.types[0].type.name));
    document.getElementById("type_image").style.display = "inline";
    document.getElementById("type_image").style.height = 100;
    document.getElementById("type_image").style.width = 100;
    document
      .getElementById("type_image2")
      .setAttribute("src", getLogo(pokemon.types[1].type.name));
    document.getElementById("type_image2").style.display = "inline";
    document.getElementById("type_image2").style.height = 100;
    document.getElementById("type_image2").style.width = 100;
  }
}
document.getElementById("pokemon_form").addEventListener("submit", pokedex);

document.addEventListener("DOMContentLoaded", () => {
  attachArrowClickEvents();
});
