import React from 'react';
import './App.css';
import { Button } from './components/Button';

function App() {
  const ButtonFoo = (name: string, age: number) => {
    console.log('user ' + name + ' clicked! My age is ' + age + ' years old.');
  };

  const StupidBtn = () => {
    console.log('Stupid button clicked!');
  };

  return (
    <div className='App'>
      <Button
        title='My 1 super button'
        callback={() => ButtonFoo('John', 21)}
      />
      <Button
        title='My 2 super button'
        callback={() => ButtonFoo('Michael', 44)}
      />
      <Button title='Stupid button' callback={StupidBtn} />
    </div>
  );
}

export default App;
