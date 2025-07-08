// 2.1 - Copiar un array
const pointsList = [32, 54, 21, 64, 75, 43];
const copiedPoints = [...pointsList];
console.log("2.1 Copia del array:", copiedPoints);


// 2.2 - Copiar un objeto
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const copiedToy = { ...toy };
console.log("2.2 Copia del objeto:", copiedToy);


// 2.3 - Fusionar dos arrays
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];
const mergedPoints = [...pointsList1, ...pointsList2];
console.log("2.3 Fusión de arrays:", mergedPoints);


// 2.4 - Fusionar dos objetos
const toyBase = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] };
const updatedToy = { ...toyBase, ...toyUpdate };
console.log("2.4 Fusión de objetos:", updatedToy);


// 2.5 - Eliminar posición 2 sin modificar el original
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsWithoutIndex2 = [...colors.slice(0, 2), ...colors.slice(3)];
console.log("2.5 Array sin posición 2:", colorsWithoutIndex2);