import React, { FC, useState } from 'react';

interface IProps {
  addMessage: (message: string) => void;
}

export const FullInput: FC<IProps> = ({ addMessage }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const handleButtonClick = () => {
    addMessage(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input type='text' value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>++</button>
    </div>
  );
};
