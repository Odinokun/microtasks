import React, { FC } from 'react';

interface IProps {
  title: string;
}

export const Header: FC<IProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
