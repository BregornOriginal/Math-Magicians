import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Calculator from './components/pages/calculator/Calculator';
import Home from './components/pages/home/Home';
import Quote from './components/pages/quote/Quote';

describe('Calculator actions', () => {
  render(<Calculator />);
  const key6 = screen.getByText('6');
  const key2 = screen.getByText('2');
  const keyResult = screen.getByText('=');
  const keyPlus = screen.getByText('+');
  const keyX = screen.getByText('x');
  const display = document.querySelector('.calculator-display');

  it('operate (6 + 6) * 22, should be equal to 264', () => {
    fireEvent.click(key6);
    fireEvent.click(keyPlus);
    fireEvent.click(key6);
    fireEvent.click(keyResult);
    expect(display.innerHTML).toBe('12');
    fireEvent.click(keyX);
    fireEvent.click(key2);
    fireEvent.click(key2);
    fireEvent.click(keyResult);
    expect(display.innerHTML).toBe('264');
  });
});

describe('Snapshot test', () => {
  const Container = () => {
    <BrowserRouter>
      <App />
    </BrowserRouter>;
  };
  it('test App should render and match the Snapshot', () => {
    const tree = renderer.create(<Container />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Calculator', () => {
    const AppContainer = () => {
      <BrowserRouter>
        <Calculator />
      </BrowserRouter>;
    };
    const testCalculator = renderer.create(<AppContainer />).toJSON();
    expect(testCalculator).toMatchSnapshot();
  });

  it('should render Home', () => {
    const HomeContainer = () => {
      <BrowserRouter>
        <Home />
      </BrowserRouter>;
    };
    const homeCalculator = renderer.create(<HomeContainer />).toJSON();
    expect(homeCalculator).toMatchSnapshot();
  });

  it('should render Quote', () => {
    const QuoteContainer = () => {
      <BrowserRouter>
        <Quote />
      </BrowserRouter>;
    };
    const quoteCalculator = renderer.create(<QuoteContainer />).toJSON();
    expect(quoteCalculator).toMatchSnapshot();
  });

});
