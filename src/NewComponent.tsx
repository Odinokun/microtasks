import React, { FC } from 'react';
import { FilterType } from './App';

interface IProps {
  currentMoney: IMoney[];
  onClickFilterHandler: (val: FilterType) => void;
}

interface IMoney {
  banknots: string;
  value: number;
  number: string;
}

export const NewComponent: FC<IProps> = ({
  currentMoney,
  onClickFilterHandler,
}) => {
  return (
    <>
      <ul>
        {currentMoney.map((item, index) => {
          return (
            <li key={index}>
              {item.banknots} {item.value} {item.number}
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={() => onClickFilterHandler('All')}>all</button>
        <button onClick={() => onClickFilterHandler('Dollars')}>dollar</button>
        <button onClick={() => onClickFilterHandler('CAD')}>CAD</button>
      </div>
    </>
  );
};
