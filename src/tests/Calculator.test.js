import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  });

  it('should add numbers together', () => {
    const button1 = container.getByTestId('number1');
    const button_add = container.getByTestId('operator-add')
    const button4 = container.getByTestId('number4');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(button_add);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5');
  })


it('should subtract numbers', () => {
  const button7 = container.getByTestId('number7');
  const button_subtract = container.getByTestId('operator-subtract')
  const button4 = container.getByTestId('number4');
  const buttonEquals = container.getByTestId('operator-equals');
  const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(button_subtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  })

it('should multiply numbers', () => {
  const button3 = container.getByTestId('number3');
  const button_multiply = container.getByTestId('operator-multiply');
  const button5 = container.getByTestId('number5');
  const buttonEquals = container.getByTestId('operator-equals');
  const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(button_multiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should divide numbers', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button_divide = container.getByTestId('operator-divide');
    const button7 = container.getByTestId('number7');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
      fireEvent.click(button2);
      fireEvent.click(button1);
      fireEvent.click(button_divide);
      fireEvent.click(button7);
      fireEvent.click(buttonEquals);
      expect(runningTotal.textContent).toEqual('3');
  });

  it('should concatenate numbers', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button7);
    expect(runningTotal.textContent).toEqual('217');
  });

  it('should chain multiple operations together', () => {
    const button2 = container.getByTestId('number2');
    const button_multiply = container.getByTestId('operator-multiply');
    const button_add = container.getByTestId('operator-add')
    const button_divide = container.getByTestId('operator-divide');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button_multiply);
    fireEvent.click(button2);
    fireEvent.click(button_add);
    fireEvent.click(button2);
    fireEvent.click(button_divide);
    fireEvent.click(button2);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  });

  it('should clear the running total, without affecting the calculation', () => {
    const button2 = container.getByTestId('number2');
    const button6 = container.getByTestId('number6');
    const button_multiply = container.getByTestId('operator-multiply');
    const button_add = container.getByTestId('operator-add')
    const button_divide = container.getByTestId('operator-divide');
    const buttonEquals = container.getByTestId('operator-equals');
    const button_clear = container.getByTestId('clear');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button_multiply);
    fireEvent.click(button2);
    fireEvent.click(buttonEquals);
    fireEvent.click(button_clear);
    fireEvent.click(button_add);
    fireEvent.click(button6);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('10')
  });
});