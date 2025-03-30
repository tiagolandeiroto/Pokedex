function changeBackground(element) {
    const backgroundColors ={
      normal: '#A8A77A',
      fire: '#EE8130',
      electric: '#F7D02C',
      grass: '#7AC74C',
      ice: '#96D9D6',
      fighting: '#9b2058',
      poison: '#A33EA1',
      ground: '#E2BF65',
      flying: '#A98FF3',
      psychic: '#F95587',
      bug: '#A6B91A',
      rock: '#B6A136',
      ghost: '#735797',
      dragon: '#6F35FC',
      dark: '#705746',
      steel: '#B7B7CE',
      fairy: '#D685AD',
      water: '#6390F0',
  };

  const backgroundColor = backgroundColors[element] || "#FFFFFF";
  document.getElementById("center").style.background = `linear-gradient(180deg, ${backgroundColor} 0%, #FFFFFF 100%)`;
}