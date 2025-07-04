

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1; // Si no se encuentra
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}
// Ejemplos de uso
console.log(findArrayIndex(mainCharacters, "Rey"));        
console.log(findArrayIndex(mainCharacters, "Han Solo"));   
console.log(findArrayIndex(mainCharacters, "Yoda"));       

console.log(removeItem([...mainCharacters], "Rey"));       
console.log(removeItem([...mainCharacters], "Han Solo"));  
console.log(removeItem([...mainCharacters], "Yoda"));      