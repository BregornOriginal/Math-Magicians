import React from 'react';
import Button from './buttons/buttons';
import ButtonCard from './buttons/button-card';
import ButtonScreen from './buttons/button-screen';
import calculate from './logic/calculate';
import operate from './logic/operate';

class Calculator extends React.PureComponent {
  btn = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  render() {
    return (
      <>
        <ButtonScreen />
        <ButtonCard>
          {this.btn.flat().map((symbol) => (
            <Button
              key={symbol}
              className={symbol === '=' ? 'equals' : ''}
              value={symbol}
            />
          ))}

        </ButtonCard>
      </>
    );
  }
}

export default Calculator;
