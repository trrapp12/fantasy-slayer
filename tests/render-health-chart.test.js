/**
 * @jest-environment jsdom
 */
 import {expect, jest, test} from '@jest/globals';
 const { containerWidth, circumference, glowEffectCodeBlock, findRadius, setColor, findCircumference, getBoxWidth, findDiameter, setXInit, setYInit, renderHealthChart, updateHealthChart } = require('../js/render-health-chart.js')

describe('findRadius()', () => {
    it("should return the right radius when given a valid circumference", () => {
        const circumference = 220;
        const expectedResult = 35.01408748021697
        const result = findRadius(circumference)
        expect(result).toBe(expectedResult)
    })

    // returns a radius of 0 when given a circumference of 0
    it('should throw an error when given a circumference of 0', () => {
        const circumference = 0;
        const testFunc = () => findRadius(circumference)
        expect(testFunc).toThrowError("findRadius either received NaN, 0, or a negative number as an input");
        });

    // returns a radius of 1 when given a circumference of 2π
    it('should return a radius of 1 when given a circumference of 2π', () => {
        const circumference = 2 * Math.PI;
        const expected = 1;
        const result = findRadius(circumference);
        expect(result).toBe(expected);
      });
    // returns NaN when given a negative circumference
    it('should throw an error when given a negative number', () => {
        const circumference = -10;
        const testFunc = () => findRadius(circumference)
        expect(testFunc).toThrow("findRadius either received NaN, 0, or a negative number as an input");
      });
    
    // returns NaN when given a circumference of NaN
    it('should throw an error when given a circumference of NaN', () => {
        const circumference = NaN;
        const testFunc = () => findRadius(circumference)
        expect(testFunc).toThrow("findRadius either received NaN, 0, or a negative number as an input");
        });

    // returns Infinity when given a circumference of Infinity
    it('should return Infinity when given a circumference of Infinity', () => {
        const circumference = Infinity;
        const result = findRadius(circumference);
        expect(result).toBe(Infinity);
      });
})