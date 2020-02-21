const assert = require('assert');
const chai = require('chai');
const operations = require('../../app/utils/operations');

describe('Unit Test For Calculator', () => { 
    describe('Unit Test For Addition Function', () => {
        it('Should return the correct sum of two numbers', () => {
            const firstNumber = 10;
            const secondNumber = 20;
            const expectedResult = 30;

            const result = operations.addition(firstNumber, secondNumber);
            chai.expect(result).to.equal(expectedResult);
            
        });
    });
    describe('test for subtraction function', () => {
        it('should return the right answers from the subtraction of two numbers', () => {
            const a = 10;
            const b = 5;
            const expectedResult = 5;

            const result = operations.subtraction(a, b);
            chai.expect(result).to.equal(expectedResult);

        });
    });
    describe('test for multiplication function', () => {
        it('should return the right answers from the multiplication of two numbers', () => {
            const a = 3;
            const b = 5;
            const expectedResult = 15;

            const result = operations.multiplication(a, b);
            chai.expect(result).to.equal(expectedResult);

        });
    });
    describe('test for division function', () => {
        it('should return the division', () => {
            const a = 20;
            const b = 2;
            const expectedResult = 10;

            const result = operations.division(a,b);
            chai.expect(result).to.equal(expectedResult);
        })
    })
});