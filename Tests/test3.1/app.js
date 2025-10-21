const boton = document.querySelector(".boton");
const resultado = document.querySelector(".resultado-ciudad");
const pais = document.querySelector(".pais"); //
const hora = document.querySelector(".hora"); //
const temp = document.querySelector(".temp"); //
const lat = document.querySelector(".latitud");
const long = document.querySelector(".longitud");
const ele = document.querySelector(".elevacion");

boton.addEventListener("click", async () => {
  const ciudad = document.querySelector(".input").value.trim();
  try {
    if (!ciudad) {
      resultado.innerHTML = "⚠️ Escribe una ciudad.";
      return;
    }
    resultado.textContent = "Buscando";

    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${ciudad}&count=1`
    );
    const geoData = await geoResponse.json();
    console.log(geoData);

    const { latitude, longitude, name, country, timezone, elevation } =
      geoData.results[0];

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherResponse.json();
    console.log(weatherData);
    const clima = weatherData.current_weather;

    resultado.textContent = "Ciudad: " + name;
    pais.textContent = "Pais: " + country;
    hora.textContent = "Zona horaria: " + timezone;
    temp.textContent = `Temperatura: ${clima.temperature}°C`;
    lat.textContent = `Latitud: ${latitude}`;
    long.textContent = `Longitud: ${longitude}`;
    ele.textContent = `Elevación: ${elevation} metros`;
  } catch (error) {
    resultado.innerHTML = "⚠️ Error al obtener datos.";
    console.log(error);
  }
});
