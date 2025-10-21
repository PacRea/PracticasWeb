import React, { useState } from "react"; // Importa React y el hook useState desde React.
import "./myComponents.css"; // Importa un archivo CSS para estilar el componente.
export default MyComponent; // Exporta el componente para su uso en otras partes de la aplicación.
function MyComponent() {
  const [imageUrl, setImageUrl] = useState(
    "https://images.pexels.com/photos/2234685/pexels-photo-2234685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ); // Inicializa un estado para la URL de la imagen.
  const [hue, setHue] = useState(0); // Inicializa un estado para el valor de rotación de matiz (hue).
  const [opacity, setOpacity] = useState(100); // Inicializa un estado para el valor de opacidad.
  const [blur, setBlur] = useState(0); // Inicializa un estado para el valor de desenfoque (blur).
  const [brightness, setBrightness] = useState(100); // Inicializa un estado para el valor de brillo.
  const [sepia, setSepia] = useState(0); // Inicializa un estado para el valor de sepia.
  const handleImageChange = () => {
    const image = document.getElementById("color-change-image"); // Obtiene el elemento de imagen por su ID.
    // Aplica un filtro CSS en función de los valores de estado actuales.
    image.style.filter = `hue-rotate(${hue}deg) opacity(${opacity}%) blur(${blur}px) brightness(${brightness}%) sepia(${sepia}%)`;
  };
  return (
    <div>
      <h1>Image Filter App</h1>
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <div>
        <h1>Image Filter App</h1>
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button onClick={handleImageChange}>Apply Filters</button>
        <br />
        <label>Hue Rotation:</label>
        <input
          type="range"
          min="0"
          max="360"
          value={hue}
          onChange={(e) => setHue(e.target.value)}
        />
        <label>Opacity:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={opacity}
          onChange={(e) => setOpacity(e.target.value)}
        />
        <label>Blur:</label>
        <input
          type="range"
          min="0"
          max="10"
          value={blur}
          onChange={(e) => setBlur(e.target.value)}
        />
        <label>Brightness:</label>
        <input
          type="range"
          min="0"
          max="200"
          value={brightness}
          onChange={(e) => setBrightness(e.target.value)}
        />
        <label>Sepia:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={sepia}
          onChange={(e) => setSepia(e.target.value)}
        />
        <div>
          <img
            id="color-change-image"
            src={imageUrl}
            alt="Image to Apply Filters"
          />
        </div>
      </div>
    </div>
  );
}
