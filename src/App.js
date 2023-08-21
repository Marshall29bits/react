import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      
      <h1>Contador Simple</h1>
      <p>Valor actual: {count}</p>
      <button onClick={incrementCount}>Incrementar</button>
      <button onClick={decrementCount}>Decrementar</button>

    </div>
  );
}

export default App;
