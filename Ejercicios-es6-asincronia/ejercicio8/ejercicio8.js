// Esperamos a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("character-list");
  const image = document.querySelector(".character-image");

  // Obtener personajes desde la API
  fetch("https://thronesapi.com/api/v2/Characters")
    .then(response => response.json())
    .then(characters => {
      // Llenar el select con los nombres
      characters.forEach(character => {
        const option = document.createElement("option");
        option.value = character.imageUrl;
        option.textContent = character.fullName;
        select.appendChild(option);
      });

      // Mostrar la imagen del primer personaje al cargar
      image.src = characters[0].imageUrl;
    })
    .catch(error => {
      console.error("Error al obtener los personajes:", error);
    });

  // Cambiar imagen cuando se selecciona un personaje
  select.addEventListener("change", () => {
    const selectedImageUrl = select.value;
    image.src = selectedImageUrl;
  });
});
