import React, { useState } from 'react';
import './App.css';
import { FullInput } from './components/FullInput';
import { Input } from './components/Input';
import { Button } from './components/Button';

interface IMessage {
  message: string;
}

function App() {
  let [messageArr, setMessageArr] = useState<IMessage[]>([
    { message: 'message 1' },
    { message: 'message 2' },
    { message: 'message 3' },
  ]);

  const [singleInputValue, setSingleInputValue] = useState<string>('');

  const addMessage = (message: string) => {
    setMessageArr([{ message: message }, ...messageArr]);
  };

  // single button callback
  const handleButtonClick = () => {
    addMessage(singleInputValue);
    setSingleInputValue('');
  };

  return (
    <div className='App'>
      <h3>FullInput</h3>
      <FullInput addMessage={addMessage} />

      {/* ***************************************** */}

      <h3>SingleInput + Button</h3>
      <div>
        <Input
          singleInputValue={singleInputValue}
          setSingleInputValue={setSingleInputValue}
        />
        <Button title='add task' callback={handleButtonClick} />
      </div>

      {/* ***************************************** */}

      {messageArr.map((item, index) => {
        return <div key={index}>{item.message}</div>;
      })}
    </div>
  );
}

export default App;
