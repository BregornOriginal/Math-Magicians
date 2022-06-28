import React from 'react';
// import CalculatorTitle from './calculator-title';
// import OutputScreen from './output-screen';
// import Button from './buttons';

const CalculatorTitle = (props) => (
  <div
    value={props.value}
    className="Magicians"
  />
);

const OutputScreenRow = () => (
  <div className="screen-row">
    <input type="text" readOnly />
  </div>
);

const OutputScreen = () => (
  <div className="screen">
    <OutputScreenRow />
  </div>
);

const Button = (props) => (
  <input
    type="button"
    value={props.label}
  />
);

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="frame">
        <CalculatorTitle value="Magicians Calculator" />
        <div className="mainCalc">
          <OutputScreen />
          <div className="button-row">
            <Button label="AC" />
            <Button label="+/-" />
            <Button label="%" />
            <Button label="÷" />
          </div>
          <div className="button-row">
            <Button label="7" />
            <Button label="8" />
            <Button label="9" />
            <Button label="*" />
          </div>
          <div className="button-row">
            <Button label="4" />
            <Button label="5" />
            <Button label="6" />
            <Button label="-" />
          </div>
          <div className="button-row">
            <Button label="1" />
            <Button label="2" />
            <Button label="3" />
            <Button label="+" />
          </div>
          <div className="button-row">
            <Button label="0" />
            <Button label="." />
            <Button label="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
