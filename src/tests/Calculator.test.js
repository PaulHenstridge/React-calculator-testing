import React from 'react';
import Calculator from '../containers/Calculator';
import { render, fireEvent } from '@testing-library/react';

describe('Calculator', () => {
    let container;
    let button1, button2, button3, button4, button5, button7, runningTotal, addButton, subtractButton, multiplyButton, divideButton, equalsButton, clearButton
    beforeEach(() => {
        container = render(<Calculator />)
        button3 = container.getByTestId('number3');
        button2 = container.getByTestId('number2');
        button1 = container.getByTestId('number1');
        button4 = container.getByTestId('number4');
        button5 = container.getByTestId('number5');
        button7 = container.getByTestId('number7');
        runningTotal = container.getByTestId('running-total');
        addButton = container.getByTestId('operator-add')
        subtractButton = container.getByTestId('operator-subtract')
        multiplyButton = container.getByTestId('operator-multiply')
        divideButton = container.getByTestId('operator-divide')
        equalsButton = container.getByTestId('operator-equals')
        clearButton = container.getByTestId('clear')

    })

    it('should change running total on number enter', () => {
        const button4 = container.getByTestId('number4');
        const runningTotal = container.getByTestId('running-total');
        fireEvent.click(button4);
        expect(runningTotal.textContent).toEqual('4');
    })

    it('should be able to add numbers', () => {
        fireEvent.click(button4)
        fireEvent.click(addButton)
        fireEvent.click(button1)
        fireEvent.click(equalsButton)
        expect(runningTotal.textContent).toEqual('5')
    })

    it('should be able to subtract numbers', () => {
        fireEvent.click(button7)
        fireEvent.click(subtractButton)
        fireEvent.click(button4)
        fireEvent.click(equalsButton)
        expect(runningTotal.textContent).toEqual('3')
    })
    it('should be able to multiply numbers', () => {
        fireEvent.click(button3)
        fireEvent.click(multiplyButton)
        fireEvent.click(button5)
        fireEvent.click(equalsButton)
        expect(runningTotal.textContent).toEqual('15')
    })
    it('should be able to divide numbers', () => {
        fireEvent.click(button2)
        fireEvent.click(button1)
        fireEvent.click(divideButton)
        fireEvent.click(button7)
        fireEvent.click(equalsButton)
        expect(runningTotal.textContent).toEqual('3')
    })
    it('should be able to concatenate numbers in display', () => {
        fireEvent.click(button2)
        fireEvent.click(button1)
        fireEvent.click(button7)
        expect(runningTotal.textContent).toEqual('217')
    })
    it('should be able to chain multiple operations', () => {
        fireEvent.click(button2)
        fireEvent.click(addButton)
        fireEvent.click(button7)
        fireEvent.click(subtractButton)
        fireEvent.click(button5)
        fireEvent.click(equalsButton)
        expect(runningTotal.textContent).toEqual('4')
    })
    it('should be able to clear display without affecting calculation', () => {
        fireEvent.click(button2)
        fireEvent.click(addButton)
        fireEvent.click(button7)
        fireEvent.click(subtractButton)
        fireEvent.click(button5)
        fireEvent.click(button5)
        fireEvent.click(clearButton)
        fireEvent.click(button5)
        fireEvent.click(equalsButton)
        expect(runningTotal.textContent).toEqual('4')
    })



})

