//4.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const over18 = ages.filter(age => age > 18);
console.log("Edades mayores de 18:", over18);

//4.2

const evenAges = ages.filter(age => age % 2 === 0);
console.log("Edades pares:", evenAges);

//4.3

const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const lolPlayers = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');
console.log("Streamers que juegan LoL:", lolPlayers);

//4.4

const streamersWithU = streamers.filter(streamer => streamer.name.includes('u'));
console.log("Streamers con 'u' en el nombre:", streamersWithU);

//4.5

const legendsStreamers = streamers
  .filter(streamer => streamer.gameMorePlayed.includes('Legends'))
  .map(streamer => {
    // Si la edad es mayor que 35, ponemos el nombre del juego en mayúsculas
    if (streamer.age > 35) {
      return {
        ...streamer,
        gameMorePlayed: streamer.gameMorePlayed.toUpperCase()
      };
    }
    return streamer;
  });

console.log("Streamers con 'Legends' y juego en mayúsculas si >35:", legendsStreamers);
