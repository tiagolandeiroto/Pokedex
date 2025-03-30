async function typeImage(pokemon){
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
}