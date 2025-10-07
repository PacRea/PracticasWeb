// Se espera a que la ventana haya cargado completamente antes de ejecutar el código

window.onload = function () {
  // Se obtiene el elemento del DOM con el ID "helloWorld" y se guarda en una variable llamada "helloWorld"
  var helloWorld = document.getElementById("helloWorld");

  // Se agrega un evento "click" al elemento obtenido anteriormente, y cuando se hace click en él, se ejecuta la función de callback que muestra un mensaje de alerta con el texto "Hola Clase"
  helloWorld.addEventListener("click", function () {
    alert("Hola, este es mi primer porgrama en JavaScript y soy Diego Rea Morales");
  });
};
