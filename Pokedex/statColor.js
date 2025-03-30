function changeStatColor(element) {
    const colors ={
        normal: '#A8A77A',
        fire: '#EE8130',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#9b2058',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        poison: '#A33EA1',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
        water: '#6390F0',
    };
    const statColor = colors[element] || "#FFFFFF";
    document.getElementById("sp-defense-label").style.setProperty("--progress-color", statColor);
    document.getElementById("sp-attack-label").style.setProperty("--progress-color", statColor);
    document.getElementById("defense-label").style.setProperty("--progress-color", statColor);
    document.getElementById("attack-label").style.setProperty("--progress-color", statColor);
    document.getElementById("hp-label").style.setProperty("--progress-color", statColor);
    document.getElementById("speed-label").style.setProperty("--progress-color", statColor);
    document.getElementById("sp-defense-title").style.setProperty("color", statColor);
    document.getElementById("sp-attack-title").style.setProperty("color", statColor);
    document.getElementById("defense-title").style.setProperty("color", statColor);
    document.getElementById("attack-title").style.setProperty("color", statColor);
    document.getElementById("hp-title").style.setProperty("color", statColor);
    document.getElementById("speed-title").style.setProperty("color", statColor);
    document.getElementById("pokemon_name_title").style.setProperty("color", statColor);
    document.getElementById("type_name").style.setProperty("color", statColor);
}