import React, { useState } from "react";
import "./App.css";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setListItems([...listItems, inputValue]);
      setInputValue("");
    }
  };
  const handleDeleteList = () => {
    setListItems([]);
  };
  const deleteElement = (index) => {
    //const newList = [...listItems];
    //newList.splice(index, 1)
    //setListItems(newList);
    const updList = listItems.filter((_, i) => i !== index);
    setListItems(updList);
  };
  return (
    <div className="App">
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ingrese un elemento"
        />
        <button onClick={handleAddItem}>Agregar item</button>
        <button onClick={handleDeleteList}>Borrar lista</button>
      </div>
      <div className="list-container">
        <ol>
          {listItems.map((item, index) => (
            <div className="conteiner-datos">
              <div className="datos">
                <li key={index}>{item}</li>
              </div>
              <div className="boton">
                <button
                  className="btn-delete"
                  onClick={() => {
                    deleteElement(index);
                  }}
                >
                  Borrar Dato
                </button>
              </div>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default App;
