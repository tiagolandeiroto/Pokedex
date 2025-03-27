const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const pokemon_sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
const pokemon_family = "https://pokeapi.co/api/v2/evolution-chain/";
let currentID;

//Prevent page from reloading
async function pokedexEvent(event) {
  if (event) {
    event.preventDefault();
  }

  //Get type logo from assets
  function getLogo(type) {
    return "assets/icons/" + type + ".svg";
  }

  //Get pokemon name
  let pokemonName = document.getElementById("pokemon_name").value;

  //Fetch api results for pokemon basic data
  const apiResult = await fetch(pokemonName ? `${apiUrl}${pokemonName}` : `${apiUrl}${currentID}`);
  if (apiResult.status === 404) {
    alert("That's not a real pokemon");
    return;
  }
  const pokemon = await apiResult.json();
  //Prevent wrong inputs
  if (apiResult.status === 404) {
    alert("Wrong");
  }

  currentID = pokemon.id;

  //Pokedex number formatter
  let pokedex = pokemon.id;
  
  //Capitalize first letter of the pokemon name
  let pokemon_name = pokemon.name;
  let pokemon_name_cap =
    pokemon_name.charAt(0).toUpperCase() + pokemon_name.slice(1);

  //Pokemon basic stats info

  if (pokedex.toString().length === 1) {
    document.getElementById("pokemon_name_title").innerHTML =
      pokemon_name_cap + " - #00" + pokemon.id;
  } else if (pokedex.toString().length === 2) {
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

  //Pokemon small "arrow" images

    if(pokemon.id > 1){
    document
    .getElementById("before-picture")
    .setAttribute("src", pokemon_sprite + (pokemon.id - 1) + ".png")
    }else {
    document.getElementById("before-picture").setAttribute("src", "")
    }

    if(pokemon.id < 1025){
    document
    .getElementById("after-picture")
    .setAttribute("src", pokemon_sprite + (pokemon.id + 1) + ".png")
    }else {
    document
    .getElementById("after-picture")
    .setAttribute("src", "")
    }

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

  let element;

  for (let i = 0; i < 1; i++) {
    element = pokemon.types[i].type.name;
  }

  //change background according to Pokemon type
  switch (element) {
    case "normal":
      document.getElementById("center").style.background =
        "linear-gradient(180deg, rgb(49, 49, 49) 0%, #ffffff 100%)";
      break;
    case "fire":
      document.getElementById("center").style.background =
        "linear-gradient(180deg, rgb(240, 145, 81) 0%, #ffffff 100%)";
      break;
    case "water":
      document.getElementById("center").style.background =
        "linear-gradient(180deg, rgb(59, 158, 175) 0%, #ffffff 100%)";
      break;
    case "grass":
      document.getElementById("center").style.background =
        "linear-gradient(180deg, rgb(95, 163, 63) 0%, #ffffff 100%)";
      break;
    case "flying":
      document.getElementById("center").style.background =
        "linear-gradient(180deg, rgb(199, 239, 247) 0%, #ffffff 100%)";
      break;
    case "fighting":
      document.getElementById("center").style.background =
        "linear-gradient(180deg, rgb(131, 45, 45) 0%, #ffffff 100%)";
      break;
    case "poison":
      document.getElementById("center").style.background =
        "linear-gradient(180deg, rgb(106, 44, 156) 0%, #ffffff 100%)";
      break;
    case "electric":
      document.getElementById("center").style.background =
        "linear-gradient(180deg, rgb(255, 240, 76) 0%, #ffffff 100%)";
      break;
    case "ground":
      document.getElementById("center").style.background =
        "linear-gradient(180deg, rgb(102, 48, 17) 0%, #ffffff 100%)";
      break;
    case "rock":
      document.getElementById("center").style.background =
        "linear-gradient(180deg, rgb(43, 41, 40) 0%, #ffffff 100%)";
      break;
    case "psychic":
      document.getElementById("center").style.background =
        "linear-gradient(180deg, rgb(250, 158, 193) 0%, #ffffff 100%)";
      break;
    case "ice":
      document.getElementById("center").style.background =
        "linear-gradient(180deg, rgb(154, 255, 242) 0%, #ffffff 100%)";
      break;
    case "bug":
      document.getElementById("center").style.background =
        "linear-gradient(180deg, rgb(165, 255, 157) 0%, #ffffff 100%)";
      break;
    case "ghost":
      document.getElementById("center").style.background =
        "linear-gradient(180deg, rgb(233, 220, 255) 0%, #ffffff 100%)";
      break;
    case "steel":
      document.getElementById("center").style.background =
        "linear-gradient(180deg, rgb(85, 85, 85) 0%, #ffffff 100%)";
      break;
    case "dragon":
      document.getElementById("center").style.background =
        "linear-gradient(180deg, rgb(22, 10, 126) 0%, #ffffff 100%)";
      break;
    case "dark":
      document.getElementById("center").style.background =
        "linear-gradient(180deg, rgb(12, 6, 37) 0%, #ffffff 100%)";
      break;
    case "fairy":
      document.getElementById("center").style.background =
        "linear-gradient(180deg, rgb(255, 133, 239) 0%, #ffffff 100%)";
      break;
    default:
  }

  if (pokemon.types.length === 1) {
    document
      .getElementById("type_image")
      .setAttribute("src", getLogo(pokemon.types[0].type.name));
    document.getElementById("type_image2").style.display = "none";
  }
  if (pokemon.types.length === 2) {
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
document.getElementById("pokemon_form").addEventListener("submit", pokedexEvent);
