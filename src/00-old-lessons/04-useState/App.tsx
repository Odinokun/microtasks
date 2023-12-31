import React, { useState } from 'react';
import './App.css';

function App() {
  let [a, setA] = useState(1);

  const onClickHandler = () => {
    setA(++a);
    console.log(a);
  };

  const onResetHandler = () => {
    setA(0);
    console.log(a);
  };

  return (
    <div className='App'>
      <h1>{a}</h1>
      <button onClick={onClickHandler}>click me</button>
      <br />
      <br />
      <button onClick={onResetHandler}>0</button>
    </div>
  );
}

export default App;
