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