const albums = [
  "Iron Maiden (1980)",
  "The Number of the Beast (1982)",
  "Powerslave (1984)",
  "Seventh Son of a Seventh Son (1988)",
  "Brave New World (2000)"
];

const list = document.getElementById("album-list");

albums.forEach(album => {
  const li = document.createElement("li");
  li.textContent = album;
  list.appendChild(li);
});
