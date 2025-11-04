import React, { useState } from "react";
function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [tipoOp, setTipoOp] = useState("");
  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };
  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const sum = parseInt(num1) + parseInt(num2);
    setResult(sum);
  };
  const handleRes = (event) => {
    event.preventDefault();
    const sum = parseInt(num1) - parseInt(num2);
    setResult(sum);
  };
  const handleMult = (event) => {
    event.preventDefault();
    const sum = parseInt(num1) * parseInt(num2);
    setResult(sum);
  };
  const handleDiv = (event) => {
    event.preventDefault();
    const sum = parseInt(num1) / parseInt(num2);
    setResult(sum);
  };

  return (
    <div>
      <h1>Sumar dos variables</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Ingrese el primer número"
          value={num1}
          onChange={handleNum1Change}
          required
        />
        <input
          type="number"
          placeholder="Ingrese el segundo número"
          value={num2}
          onChange={handleNum2Change}
          required
        />
        <button className="btn-op" type="submit">Sumar</button>
        <button className="btn-op" onClick={handleRes}>Restar</button>
        <button className="btn-op" onClick={handleMult}>Multiplicar</button>
        <button className="btn-op" onClick={handleDiv}>Dividir</button>
      </form>
      {result && <p>El resultado es: {result}</p>}
    </div>
  );
}
export default App;
