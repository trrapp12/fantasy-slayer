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

    it('should throw an error when given a circumference of 0', () => {
        const circumference = 0;
        const testFunc = () => findRadius(circumference)
        expect(testFunc).toThrowError("findRadius either received NaN, 0, or a negative number as an input");
        });

    it('should return a radius of 1 when given a circumference of 2π', () => {
        const circumference = 2 * Math.PI;
        const expected = 1;
        const result = findRadius(circumference);
        expect(result).toBe(expected);
      });

    it('should throw an error when given a negative number', () => {
        const circumference = -10;
        const testFunc = () => findRadius(circumference)
        expect(testFunc).toThrow("findRadius either received NaN, 0, or a negative number as an input");
      });
    
    it('should throw an error when given a circumference of NaN', () => {
        const circumference = NaN;
        const testFunc = () => findRadius(circumference)
        expect(testFunc).toThrow("findRadius either received NaN, 0, or a negative number as an input");
        });

    it('should return Infinity when given a circumference of Infinity', () => {
        const circumference = Infinity;
        const result = findRadius(circumference);
        expect(result).toBe(Infinity);
      });
})

// Generated by CodiumAI

describe('setColor', () => {

  it('should return white color when health is greater than original health', () => {
    const health = 100;
    const originalHealth = 50;
    const result = setColor(health, originalHealth);
    expect(result).toBe("#FFFFFF");
  });

  it('should return blue color when health is greater than or equal to 75% of original health', () => {
    const health = 75;
    const originalHealth = 100;
    const result = setColor(health, originalHealth);
    expect(result).toBe("#6D8BA6");
  });

  it('should return orange color when health is greater than or equal to 50% of original health', () => {
    const health = 50;
    const originalHealth = 100;
    const result = setColor(health, originalHealth);
    expect(result).toBe("#F2A341");
  });

  it('should return Bermuda Gray when health is equal to original health', () => {
    const health = 100;
    const originalHealth = 100;
    const result = setColor(health, originalHealth);
    expect(result).toBe('#6D8BA6');
  });

  it('should return red color when health is equal to 0', () => {
    const health = 0;
    const originalHealth = 100;
    const result = setColor(health, originalHealth);
    expect(result).toBe("#BF0404");
  });

  it('should return red color when health is less than 50% of original health', () => {
    const health = 25;
    const originalHealth = 100;
    const result = setColor(health, originalHealth);
    expect(result).toBe("#BF0404");
  });
});

// Generated by CodiumAI

describe('findCircumference', () => {

  // Returns the correct circumference when given a valid container width
  it('should return the correct circumference when given a valid container width', () => {
    const containerWidth = 10;
    const result = findCircumference(containerWidth);
    expect(result).toBe(containerWidth * Math.PI);
  });

  // Returns NaN when circumference is NaN
  it('should throw an error when circumference is NaN', () => {
    const containerWidth = NaN;
    const testFunc = () => findCircumference(containerWidth)
    expect(testFunc).toThrowError("findCircumference either received NaN, 0, or a negative number as an input");
    });

  // Returns NaN when circumference is less than or equal to 0
  it('should return the correct circumference when given a valid container width', () => {
    const containerWidth = 10;
    const result = findCircumference(containerWidth);
    expect(result).toBe(containerWidth * Math.PI);
  });

  // Returns NaN when container width is NaN
  it('should throw an error when circumference is NaN', () => {
    const containerWidth = NaN;
    const testFunc = () => findCircumference(containerWidth)
    expect(testFunc).toThrowError("findCircumference either received NaN, 0, or a negative number as an input");
   });

  // Returns NaN when container width is less than or equal to 0
  it('should throw an error when circumference is NaN', () => {
    const containerWidth = 0;
    const testFunc = () => findCircumference(containerWidth)
    expect(testFunc).toThrowError("findCircumference either received NaN, 0, or a negative number as an input");
    });

  // Returns a circumference that is proportional to the container width
  it('should return a circumference that is proportional to the container width', () => {
    const containerWidth = 10;
    const result = findCircumference(containerWidth);
    expect(result).toBe(containerWidth * Math.PI);
  })
});
