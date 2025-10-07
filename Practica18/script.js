// Declaración de una variable llamada "resultado" que almacena el elemento con id "resultado" del Document Object Model (DOM).

let resultado = document.getElementById("resultado");

// Definición de una función llamada "agregarCaracter" que toma un parámetro "caracter" y agrega ese caracter al contenido del elemento "resultado" del DOM.

function agregarCaracter(caracter) {
  resultado.innerHTML += caracter;
}

// Definición de una función llamada "calcularResultado" que evalúa la expresión almacenada en el elemento "resultado" del DOM utilizando la función "eval()", y establece el resultado como el contenido del elemento "resultado" del DOM.

function calcularResultado() {
  let expresion = resultado.innerHTML;
  let valor = 0;
  if (expresion.includes("sin")) {
    resultado.innerHTML = Math.sin(expresion.replace("sin", ""));
    valor = expresion.replace("sin", "");
    resultado.innerHTML = Math.sin(valor * (Math.PI / 180));
  } else if (expresion.includes("cos")) {
    valor = expresion.replace("cos", "");   
    resultado.innerHTML = Math.cos(valor * (Math.PI / 180));
  } else if (expresion) {
    resultado.innerHTML = eval(expresion);
  }
}

// Definición de una función llamada "limpiarPantalla" que establece el contenido del elemento "resultado" del DOM como una cadena vacía.

function limpiarPantalla() {
  resultado.innerHTML = "";
}
