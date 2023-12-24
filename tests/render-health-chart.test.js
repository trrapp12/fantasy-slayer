/**
 * @jest-environment jsdom
 */

 const { glowEffectCodeBlock, findRadius, setColor, findCircumference, getBoxWidth, findDiameter, setXInit, setYInit, renderHealthChart, updateHealthChart } = require('../js/render-health-chart.js')

    // describe('glowEffectCodeBlock()', () => {
    //     it("")
    // }

describe('findRadius()', () => {
    it("should return the right radius when given a valid circumference", () => {
        const circumference = 220;
        const expectedResult = circumference / Math.pow(Math.PI, 2) 
        const result = findRadius(circumference)

        expect(result).toBe(expectedResult)
    })

    // returns a radius of 0 when given a circumference of 0
    it('should return a radius of 0 when given a circumference of 0', () => {
        const circumference = 0;
        const expected = 0;
        const result = findRadius(circumference);
        expect(result).toBe(expected);
        });

    // returns a radius of 1 when given a circumference of 2π
    it('should return a radius of 1 when given a circumference of 2π', () => {
        const circumference = 2 * Math.PI;
        const expected = 1;
        const result = findRadius(circumference);
        expect(result).toBe(expected);
      });
    // returns NaN when given a negative circumference
    it('should return NaN when given a negative circumference', () => {
        const circumference = -10;
        const result = findRadius(circumference);
        expect(result).toBeNaN();
      });
    
    // returns NaN when given a circumference of NaN
    it('should return NaN when given a circumference of NaN', () => {
        const circumference = NaN;
        const result = findRadius(circumference);
        expect(result).toBeNaN();
        });

    // returns Infinity when given a circumference of Infinity
    it('should return Infinity when given a circumference of Infinity', () => {
        const circumference = Infinity;
        const result = findRadius(circumference);
        expect(result).toBe(Infinity);
      });

    // describe('setColor()', () => {
    //     it("")
    // }
    
    // describe('findCircumference()', () => {
    //     it("")
    // }
    
    // describe('getBoxWidth()', () => {
    //     it("")
    // }
    
    // describe('findDiameter()', () => {
    //     it("")
    // }
    
    // describe('setXInit()', () => {
    //     it("")
    // }
    
    // describe('setYInit()', () => {
    //     it("")
    // }
    // describe('renderHealthChart()', () => {
    //     it("")
    // }
    
    // describe('updateHealthChart()', () => {
    //     it("", () => {
    
    // })
    // }
})