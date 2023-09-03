import React, { useState } from 'react';
import './App.css';
import { NewComponent } from './NewComponent';

export type FilterType = 'All' | 'Dollars' | 'CAD';

function App() {
  const [banknots, setBanknots] = useState<FilterType>('All');
  const money = [
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'CAD', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'CAD', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'CAD', value: 50, number: ' v1234567890' },
  ];

  let currentMoney = money;
  if (banknots === 'Dollars') {
    currentMoney = money.filter((item: any) => item.banknots === 'Dollars');
  } else if (banknots === 'CAD') {
    currentMoney = money.filter((item: any) => item.banknots === 'CAD');
  }

  const onClickFilterHandler = (buttonName: FilterType) => {
    setBanknots(buttonName);
  };

  return (
    <div className='App'>
      <NewComponent
        currentMoney={currentMoney}
        onClickFilterHandler={onClickFilterHandler}
      />
    </div>
  );
}

export default App;
