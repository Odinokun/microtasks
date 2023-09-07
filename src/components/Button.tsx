import React, { FC } from 'react';

interface IProps {
  title: string;
  callback: () => void;
}

export const Button: FC<IProps> = ({ title, callback }) => {
  return <button onClick={callback}>{title}</button>;
};
