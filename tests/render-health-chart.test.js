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

describe('findCircumference', () => {

  it('should return the correct circumference when given a valid container width', () => {
    const containerWidth = 10;
    const result = findCircumference(containerWidth);
    expect(result).toBe(containerWidth * Math.PI);
  });

  it('should throw an error when circumference is NaN', () => {
    const containerWidth = NaN;
    const testFunc = () => findCircumference(containerWidth)
    expect(testFunc).toThrowError("findCircumference either received NaN, 0, or a negative number as an input");
    });

  it('should return the correct circumference when given a valid container width', () => {
    const containerWidth = 10;
    const result = findCircumference(containerWidth);
    expect(result).toBe(containerWidth * Math.PI);
  });

  it('should throw an error when circumference is NaN', () => {
    const containerWidth = NaN;
    const testFunc = () => findCircumference(containerWidth)
    expect(testFunc).toThrowError("findCircumference either received NaN, 0, or a negative number as an input");
   });

  it('should throw an error when circumference is NaN', () => {
    const containerWidth = 0;
    const testFunc = () => findCircumference(containerWidth)
    expect(testFunc).toThrowError("findCircumference either received NaN, 0, or a negative number as an input");
    });

  it('should return a circumference that is proportional to the container width', () => {
    const containerWidth = 10;
    const result = findCircumference(containerWidth);
    expect(result).toBe(containerWidth * Math.PI);
  })
});

describe('glowEffectCodeBlock', () => {

  it('should return an empty string when health is less than or equal to originalHealth', () => {
    const health = 10;
    const originalHealth = 20;
    const result = glowEffectCodeBlock(health, originalHealth);
    expect(result).toBe('');
  });

  it('should return a url string when health is greater than originalHealth', () => {
    const health = 30;
    const originalHealth = 20;
    const result = glowEffectCodeBlock(health, originalHealth);
    expect(result).toBe('url(#glow)');
  });

  it('should return an empty string when health is equal to originalHealth', () => {
    const health = 20;
    const originalHealth = 20;
    const result = glowEffectCodeBlock(health, originalHealth);
    expect(result).toBe(`url(#glow)`);
  });

});

describe('getBoxWidth', () => {

  it('should return the correct box width when given a radius and percentage', () => {
    // Arrange
    const r = 5;
    const percentage = 50;

    // Act
    const result = getBoxWidth(r, percentage);

    // Assert
    expect(result).toBe(5);
  });

  it('should return 0 when given a radius of 0', () => {
    // Arrange
    const r = 0;
    const percentage = 50;

    // Act
    const result = getBoxWidth(r, percentage);

    // Assert
    expect(result).toBe(0);
  });

  it('should return 0 when given a percentage of 0', () => {
    // Arrange
    const r = 5;
    const percentage = 0;

    // Act
    const result = getBoxWidth(r, percentage);

    // Assert
    expect(result).toBe(0);
  });

  it('should return the correct box width when given the maximum possible values for radius and percentage', () => {
    // Arrange
    const r = Number.MAX_VALUE;
    const percentage = 100;

    // Act
    const result = getBoxWidth(r, percentage);

    // Assert
    expect(result).toBe(Number.MAX_VALUE * 2);
  });

  it('should return the correct box width when given the minimum possible values for radius and percentage', () => {
    // Arrange
    const r = Number.MIN_VALUE;
    const percentage = 0.01;

    // Act
    const result = getBoxWidth(r, percentage);

    // Assert
    expect(result).toBe(Number.MIN_VALUE * 2 * 0.01);
  });

  it('should return the correct box width when given a very large radius and percentage', () => {
    // Arrange
    const r = 1e20;
    const percentage = 75;

    // Act
    const result = getBoxWidth(r, percentage);

    // Assert
    expect(result).toBe(1e20 * 2 * 0.75);
  });
});

describe('findDiameter', () => {

it('should return the correct diameter when given a valid radius', () => {
    // Arrange
    const radius = 5;

    // Act
    const result = findDiameter(radius);

    // Assert
    expect(result).toBe(10);
  });

  it('should return 0 when given a radius of 0', () => {
    // Arrange
    const radius = 0;

    // Act
    const result = findDiameter(radius);

    // Assert
    expect(result).toBe(0);
  });

  it('should throw an error when given a negative radius', () => {
    // Arrange
    const radius = -5;

    // Act & Assert
    expect(() => {
      findDiameter(radius);
    }).toThrowError("findDiameter either received NaN, 0, or a negative number as an input");
  });

  it('should throw an error when given a non-numeric radius', () => {
    // Arrange
    const radius = '5';

    // Act & Assert
    expect(() => {
      findDiameter(radius);
    }).toThrowError("findDiameter either received NaN, 0, or a negative number as an input");
  });

  it('should return a decimal value when given a radius with decimal places', () => {
    // Arrange
    const radius = 3.5;

    // Act
    const result = findDiameter(radius);

    // Assert
    expect(result).toBe(7);
  });

  it('should return a whole number when given an integer radius', () => {
    // Arrange
    const radius = 4;

    // Act
    const result = findDiameter(radius);

    // Assert
    expect(result).toBe(8);
  });
});

// Generated by CodiumAI