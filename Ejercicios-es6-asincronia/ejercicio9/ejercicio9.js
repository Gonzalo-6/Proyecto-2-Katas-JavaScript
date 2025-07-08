document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".random-image");

  // Genera un número aleatorio entre 1 y 151
  const randomId = Math.floor(Math.random() * 151) + 1;

  // Construimos la URL con el ID aleatorio
  const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

  fetch(url)
    .then(response => response.json())
    .then(pokemon => {
        // Asignamos la imagen del Pokémon al elemento img
      img.src = pokemon.sprites.other["official-artwork"].front_default;
      img.alt = pokemon.name;
      img.title = pokemon.name;
    })
    .catch(error => {
      console.error("Error al cargar el Pokémon:", error);
    });
});
