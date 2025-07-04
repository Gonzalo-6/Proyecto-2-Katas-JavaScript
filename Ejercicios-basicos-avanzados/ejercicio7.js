function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log("El número mayor es:", numberOne);
  } else if (numberTwo > numberOne) {
    console.log("El número mayor es:", numberTwo);
  } else {
    console.log("Ambos números son iguales:", numberOne);
  }
}

// Ejemplos de prueba
greaterNumber(6, 2);   // Muestra: El número mayor es: 6
greaterNumber(5, 10);    // Muestra: El número mayor es: 10
greaterNumber(2, 2);    // Muestra: Ambos números son iguales: 2