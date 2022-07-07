import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Calculator from './components/pages/calculator/Calculator';

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
    expect(display.innerHTML).toBe('12')
    fireEvent.click(keyX);
    fireEvent.click(key2);
    fireEvent.click(key2);
    fireEvent.click(keyResult)
    expect(display.innerHTML).toBe('264')

  })
})

