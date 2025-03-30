const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const pokemon_sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
const pokemon_sprite_shiny = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/";
const pokemon_family = "https://pokeapi.co/api/v2/evolution-chain/";
let currentID = 1;
let element;

// Add event listeners for navigation buttons
document.getElementById("before-picture").addEventListener("click", () => {
  if (currentID > 1) {
    currentID -= 1; // Decrement the current ID
    fetchPokemonById(currentID); // Fetch and display the previous Pokémon
  }
});

document.getElementById("after-picture").addEventListener("click", () => {
  if (currentID < 1025) {
    currentID += 1; // Increment the current ID
    fetchPokemonById(currentID); // Fetch and display the next Pokémon
  }
});

// Prevent page from reloading on form submission
async function pokedexEvent(event) {
  if (event) {
    event.preventDefault();
  }

  // Get Pokémon name from input
  let pokemonName = document.getElementById("pokemon_name").value;

  // Fetch Pokémon data
  try {
    const apiResult = await fetch(pokemonName ? `${apiUrl}${pokemonName}` : `${apiUrl}${currentID}`);
    if (!apiResult.ok) {
      alert("That's not a real Pokémon");
      return;
    }
    const pokemon = await apiResult.json();
    updatePokemon(pokemon);
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
  }
}

// Fetch Pokémon by ID
async function fetchPokemonById(id) {
  try {
    const response = await fetch(`${apiUrl}${id}`);
    if (!response.ok) {
      alert("Pokémon not found");
      return;
    }
    const pokemon = await response.json();
    updatePokemon(pokemon);
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
  }
}

// Get type logo from assets
function getLogo(type) {
  return "assets/icons/" + type + ".svg";
}

  let currentPokemon;

// Update Pokémon display
function updatePokemon(pokemon) {
  
  // Update current Pokémon
  currentPokemon = pokemon;
  // Update current ID
  currentID = pokemon.id;

  

  // Format Pokémon name and ID
  const pokemon_name_cap = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  const formattedID = pokemon.id.toString().padStart(3, "0");
  document.getElementById("pokemon_name_title").innerHTML = `${pokemon_name_cap} - #${formattedID}`;

  // Update Pokémon image
  document.getElementById("pokemon_picture").setAttribute("src", `${pokemon_sprite}${pokemon.id}.png`);

  // Update Pokémon stats
  function setProgressBarValues(elementId, value) {
    const progressBar = document.getElementById(elementId);
    progressBar.style.setProperty("--progress-value", value);
  }

  setProgressBarValues("hp-label", pokemon.stats[0].base_stat);
  document.getElementById("hp-text").innerHTML = pokemon.stats[0].base_stat;

  setProgressBarValues("attack-label", pokemon.stats[1].base_stat);
  document.getElementById("attack-text").innerHTML = pokemon.stats[1].base_stat;

  setProgressBarValues("defense-label", pokemon.stats[2].base_stat);
  document.getElementById("defense-text").innerHTML = pokemon.stats[2].base_stat;

  setProgressBarValues("sp-attack-label", pokemon.stats[3].base_stat);
  document.getElementById("sp-attack-text").innerHTML = pokemon.stats[3].base_stat;

  setProgressBarValues("sp-defense-label", pokemon.stats[4].base_stat);
  document.getElementById("sp-defense-text").innerHTML = pokemon.stats[4].base_stat;

  setProgressBarValues("speed-label", pokemon.stats[5].base_stat);
  document.getElementById("speed-text").innerHTML = pokemon.stats[5].base_stat;

  // Update background based on Pokémon type
  element = pokemon.types[0].type.name;
  changeBackground(element);
  changeStatColor(element);

  // Update type images
  if (pokemon.types.length === 1) {
    document.getElementById("type_image").setAttribute("src", getLogo(pokemon.types[0].type.name));
    document.getElementById("type_image").title = pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1);
    document.getElementById("type_image2").style.display = "none";

  } else if (pokemon.types.length === 2) {
    document.getElementById("type_image").setAttribute("src", getLogo(pokemon.types[0].type.name));
    document.getElementById("type_image").title = pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1);
    document.getElementById("type_image2").setAttribute("src", getLogo(pokemon.types[1].type.name));
    document.getElementById("type_image2").title = pokemon.types[1].type.name.charAt(0).toUpperCase() + pokemon.types[1].type.name.slice(1);
    document.getElementById("type_image2").style.display = "inline";
  }

  // Update navigation arrows
  
  beforeAfter(pokemon);
}

// Update navigation arrow images
function beforeAfter(pokemon) {
  if (pokemon.id > 1) {
    document.getElementById("before-picture").setAttribute("src", pokemon_sprite + (pokemon.id - 1) + ".png");
  } else {
    document.getElementById("before-picture").setAttribute("src", "");
  }

  if (pokemon.id < 1025) {
    document.getElementById("after-picture").setAttribute("src", pokemon_sprite + (pokemon.id + 1) + ".png");
  } else {
    document.getElementById("after-picture").setAttribute("src", "");
  }
}

// Initialize the page with the first Pokémon
fetchPokemonById(currentID);

// Add event listener for the Pokémon form submission
document.getElementById("pokemon_form").addEventListener("submit", pokedexEvent);