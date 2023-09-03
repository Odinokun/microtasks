import React, { FC } from 'react';

interface IProps {
  students: IStudent[];
  cars: ICar[];
}

interface IStudent {
  id: number;
  name: string;
  age: number;
}

interface ICar {
  manufacturer: string;
  model: string;
}

export const Body: FC<IProps> = ({ students, cars }) => {
  return (
    <>
      <ul>
        {students.map(s => {
          return (
            <li key={s.id}>
              <strong>{s.name}</strong> is <strong>{s.age}</strong> years old.
            </li>
          );
        })}
      </ul>
      <table border={1}>
        <thead>
          <tr>
            <th>Number</th>
            <th>Manufacturer</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((c, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{c.manufacturer}</td>
                <td>{c.model}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
