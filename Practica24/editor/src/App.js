import React, { useState } from "react"; // Importa React y la función useState desde la biblioteca de React
import "./App.css"; // Importa el archivo de estilos CSS para la aplicación
function App() {
  // Define el componente función principal llamado App
  const [htmlCode, setHtmlCode] = useState(""); // Define un estado llamado htmlCode para almacenar el código HTML y una función setHtmlCode para actualizar ese estado
  const [cssCode, setCssCode] = useState(""); // Define un estado llamado cssCode para almacenar el código CSS y una función setCssCode para actualizar ese estado
  const handleHtmlChange = (event) => {
    // Define una función handleHtmlChange que se ejecuta cuando hay un cambio en el textarea de HTML
    setHtmlCode(event.target.value); // Actualiza el estado htmlCode con el valor del textarea
  };
  const handleCssChange = (event) => {
    // Define una función handleCssChange que se ejecuta cuando hay un cambio en el textarea de CSS
    setCssCode(event.target.value); // Actualiza el estado cssCode con el valor del textarea
  };
  return (
    // Devuelve la estructura del componente
    <div className="app">
      {" "}
      {/* Crea un contenedor principal con la clase 'app' */}
      <div className="editor">
        {" "}
        {/* Crea un contenedor para el editor */}
        <textarea // Crea un textarea para el código HTML
          className="html-editor" // Asigna la clase 'html-editor' al textarea
          placeholder="Escriba HTML aquí..." // Establece un marcador de posición para el textarea
          value={htmlCode} // Establece el valor del textarea como htmlCode
          onChange={handleHtmlChange} // Asigna la función handleHtmlChange al evento onChange
        ></textarea>
        <textarea // Crea un textarea para el código CSS
          className="css-editor" // Asigna la clase 'css-editor' al textarea
          placeholder="Escriba CSS aquí..." // Establece un marcador de posición para el textarea
          value={cssCode} // Establece el valor del textarea como cssCode
          onChange={handleCssChange} // Asigna la función handleCssChange al evento onChange
        ></textarea>
      </div>
      <div
        className="preview"
        dangerouslySetInnerHTML={{
          __html: `<style>${cssCode}</style>${htmlCode}`,
        }}
      />{" "}
      {/* Crea un div para mostrar la vista previa del código */}
    </div> // Cierra el contenedor principal
  );
}
export default App; // Exporta el componente App para que pueda ser importado en otros archivos
