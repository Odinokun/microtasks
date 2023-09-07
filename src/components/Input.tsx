import React, { FC } from 'react';

interface IProps {
  singleInputValue: string;
  setSingleInputValue: (value: string) => void;
}

export const Input: FC<IProps> = ({
  singleInputValue,
  setSingleInputValue,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSingleInputValue(e.target.value);

  return (
    <input type='text' value={singleInputValue} onChange={handleInputChange} />
  );
};
