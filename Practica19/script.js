function dibujarPoligono() {
  const canvas = document.getElementById("canvas");

  const lados = document.getElementById("lados").value;

  const ctx = canvas.getContext("2d");

  const centroX = canvas.width / 2;

  const centroY = canvas.height / 2;

  const radio = 70;

  const angulo = (2 * Math.PI) / lados;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();

  ctx.moveTo(centroX + radio * Math.cos(0), centroY + radio * Math.sin(0));

  for (let i = 1; i <= lados; i++) {
    const x = centroX + radio * Math.cos(i * angulo);

    const y = centroY + radio * Math.sin(i * angulo);

    ctx.lineTo(x, y);
  }
  let angulos = document.getElementById("angle");
  angulos.innerHTML =
    lados == 0 ? "" : "Valor de los Angulos: " + (180 * (lados - 2)) / lados;

  ctx.closePath();

  ctx.stroke();
}
function dibujarRecta() {
  const canvas = document.getElementById("canvas");

  const lados = document.getElementById("lados").value;

  const ctx = canvas.getContext("2d");

  const centroX = canvas.width / 2;

  const centroY = canvas.height / 2;

  const tam = canvas.width * 0.4;

  ctx.beginPath();

  ctx.moveTo(centroX - 70, centroY);
  ctx.lineTo(centroX - 70, tam);

  ctx.closePath();
  ctx.stroke();
}
