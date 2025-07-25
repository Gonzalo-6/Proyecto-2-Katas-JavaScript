const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

const songsByGenre = {};

for (const track of tracks) {
  // Si no existe aún el array para este género, lo creamos
  if (!songsByGenre[track.genre]) {
    songsByGenre[track.genre] = [];
  }
  // Añadimos la canción al array correspondiente al género
  songsByGenre[track.genre].push(track);
}

console.log(songsByGenre);