/**
 * Simula la tirada de un dado con un número dado de caras.
 * @param {number} sides - Número de caras del dado (por ejemplo, 6 para un dado común).
 * @returns {number} Resultado de la tirada, un número entero entre 1 y sides inclusive.
 */
function rollDice(sides) {
  if (typeof sides !== 'number' || sides < 1 || !Number.isInteger(sides)) {
    throw new Error('El número de caras debe ser un entero positivo mayor o igual a 1');
  }

  return Math.floor(Math.random() * sides) + 1;
}

// Ejemplos de uso:
console.log("Tirada de dado de 6 caras:", rollDice(6));  
console.log("Tirada de dado de 20 caras:", rollDice(20)); 
console.log("Tirada de dado de 1 cara:", rollDice(1));  

// Para probar múltiples tiradas:
console.log("Cinco tiradas de dado de 6 caras:");
for (let i = 0; i < 5; i++) {
  console.log(rollDice(6));
}