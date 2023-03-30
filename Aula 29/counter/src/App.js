import './App.css';
import { useState } from "react";

function App() {
  const [valor, setValor] = useState(0);

  function setValorIfGreaterThanZero(newValue) {
    if (newValue >= 0) {
      setValor(newValue);
    }
  }

  return (
    <div className="App">
      <span>Valor: {valor}</span>
      <br/>
      <button onClick={() => setValorIfGreaterThanZero(valor + 1)}>+1</button>
      <button onClick={() => setValorIfGreaterThanZero(valor + 10)}>+10</button>
      <button onClick={() => setValorIfGreaterThanZero(valor + 100)}>+100</button>
      <button onClick={() => setValorIfGreaterThanZero(valor + 1000)}>+1000</button>
      <button onClick={() => setValorIfGreaterThanZero(valor - 1)}>-1</button>
      <button onClick={() => setValorIfGreaterThanZero(valor - 10)}>-10</button>
      <button onClick={() => setValorIfGreaterThanZero(valor - 100)}>-100</button>
      <button onClick={() => setValorIfGreaterThanZero(valor - 1000)}>-1000</button>
    </div>
  );
}

export default App;
