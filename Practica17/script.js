// Se declara una variable "numero" que almacena un número aleatorio entre 1 y 100, generado por la función "Math.random()" y redondeado hacia abajo por "Math.floor()".

let numero = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
// Se declara una función llamada "AdivinaNumero".

function AdivinaNumero() {
  // Se obtiene el valor del input con ID "numUsuario" y se convierte a número con "parseInt()". Se guarda el resultado en la variable "guess".

  let guess = parseInt(document.getElementById("numUsuario").value);

  // Se comprueba si el número adivinado (guardado en "guess") es igual al número generado al azar (guardado en "numero").

  if (guess === numero) {
    // Si son iguales, se modifica el contenido del elemento del DOM con ID "resultado" para mostrar el mensaje "¡Felicidades! Adivinaste el número."

    document.getElementById("resultado").innerHTML =
      "¡Felicidades! Adivinaste el número.";

    // Si el número adivinado es mayor que el número generado al azar.
  } else if (guess > numero && intentos < 5) {
    // Se modifica el contenido del elemento del DOM con ID "resultado" para mostrar el mensaje "El número es menor que [guess]."

    document.getElementById("resultado").innerHTML =
      "El número es menor que " + guess + ".";
    intentos++;

    // Si el número adivinado es menor que el número generado al azar.
  } else if (guess < numero && intentos < 5) {
    // Se modifica el contenido del elemento del DOM con ID "resultado" para mostrar el mensaje "El número es mayor que [guess]."

    document.getElementById("resultado").innerHTML =
      "El número es mayor que " + guess + ".";
    intentos++;
  }
  else{
    document.getElementById("resultado").innerHTML =
      "Lo siento, has excedido el número máximo de intentos. El número era " + numero + ".";
  }
}
