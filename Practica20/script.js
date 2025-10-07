//Programa para ver realizar un cronometro
let idInterval
let segundos = 0;

function timer(){
    idInterval = setInterval(starTimer, 1000);
}
function starTimer() {
    const reloj = document.getElementById("crono-text");
   segundos++;
    let horas = Math.floor(segundos / 3600)
    let minutos = Math.floor((segundos / 3600) / 60);
    let segs= segundos % 60;
    
    horas = horas < 10 ? '0' + horas: horas;
    minutos = minutos < 10 ? '0' + minutos: minutos;
    segs = segs < 10 ? '0' + segs: segs;

    const tiempo = horas + ":" + minutos + ":" + segs;
    reloj.innerHTML = tiempo;
}
function stopTimer(){
    clearInterval(idInterval);
    idInterval = null;
}