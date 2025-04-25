const Calculator = require('./test.js').Calculator;
const main = require('./test.js').main;

// test.test.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should add two numbers correctly', () => {
        expect(calculator.add(2, 3)).toBe(5);
        expect(calculator.add(-2, 3)).toBe(1);
        expect(calculator.add(0, 0)).toBe(0);
    });

    test('should subtract two numbers correctly', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
        expect(calculator.subtract(3, 5)).toBe(-2);
        expect(calculator.subtract(0, 0)).toBe(0);
    });

    test('should multiply two numbers correctly', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(-2, 3)).toBe(-6);
        expect(calculator.multiply(0, 5)).toBe(0);
    });

    test('should divide two numbers correctly', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(-6, 3)).toBe(-2);
        expect(calculator.divide(0, 5)).toBe(0);
    });

    test('should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed.');
    });
});

jest.mock('prompt-sync', () => {
    return jest.fn(() => {
        let inputs = ['1', '2', '3', '4', '5'];
        let index = 0;
        return jest.fn(() => inputs[index++]);
    });
});


describe('Main Program', () => {
    test('should run without crashing', () => {
        expect(() => main()).not.toThrow();
    });
});