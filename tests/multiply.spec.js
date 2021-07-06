const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    test("should multiply two positive integers correctly", () => {
        const result = multiply(3, 2);
        expect(result).toBe(6);
    });
    test("should multiply one positive and one negative integer correctly", () => {
        const result = multiply(2, -1);
        expect(result).toBe(-2);
    });
    test("should return zero when one of the arguments is zero", () => {
        const result = multiply(4, 0);
        expect(result).toBe(0);
    });
});