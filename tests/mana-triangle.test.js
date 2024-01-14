/**
 * @jest-environment jsdom
 */

const { createGradient, createTriangleVertices, createTriangle, parseHeptagonArray, hideAPolygon, removeAPolygon, buildRingContainers, onSpellCast } = require('../js/mana-triangle.js')

describe("createGradient", () => {
        // Creates a linearGradient element with the given id and appends it to the defs element
        it('should create linearGradient element with given id and append it to defs element', () => {
            // Arrange
            const id = "gradient1";
            const angle = 0;
            const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        
            // Act
            createGradient(id, angle, defs);
        
            // Assert
            const linearGradient = defs.querySelector(`#${id}`);
            expect(linearGradient).toBeDefined();
            expect(linearGradient.tagName).toBe("linearGradient");
          });
})

describe('createTriangleVertices', () => {

  // Returns a string with three comma-separated coordinate pairs
  it('should return a string with three comma-separated coordinate pairs', () => {
    const centerX = 0;
    const centerY = 0;
    const radius = 100;
    const index = 0;
    const totalSides = 3;

    const result = createTriangleVertices(centerX, centerY, radius, index, totalSides);

    expect(typeof result).toBe('string');
    expect(result.split(',').length).toBe(6);
  });

  // Calculates the coordinates of the triangle vertices based on the input parameters
  it('should calculate the coordinates of the triangle vertices based on the input parameters', () => {
    const centerX = 0;
    const centerY = 0;
    const radius = 100;
    const index = 0;
    const totalSides = 3;

    const result = createTriangleVertices(centerX, centerY, radius, index, totalSides);

    const coordinates = result.split(',').map(Number);
    expect(coordinates[0]).toBe(centerX);
    expect(coordinates[1]).toBe(centerY);
    expect(coordinates[2]).toBeCloseTo(radius);
    expect(coordinates[3]).toBe(0);
    expect(coordinates[4]).toBeCloseTo(-radius);
    expect(coordinates[5]).toBe(0);
  });

  // Uses the Math.cos and Math.sin functions to calculate the coordinates
  it('should use the Math.cos and Math.sin functions to calculate the coordinates', () => {
    const centerX = 0;
    const centerY = 0;
    const radius = 100;
    const index = 0;
    const totalSides = 3;

    const result = createTriangleVertices(centerX, centerY, radius, index, totalSides);

    const coordinates = result.split(',').map(Number);
    expect(coordinates[0]).toBe(centerX);
    expect(coordinates[1]).toBe(centerY);
    expect(coordinates[2]).toBeCloseTo(radius);
    expect(coordinates[3]).toBe(0);
    expect(coordinates[4]).toBeCloseTo(-radius / 2);
    expect(coordinates[5]).toBeCloseTo(radius * Math.sqrt(3) / 2);
  });

  // Returns a string with NaN values if centerX or centerY is not a number
  it('should return a string with NaN values if centerX or centerY is not a number', () => {
    const centerX = 'invalid';
    const centerY = 0;
    const radius = 100;
    const index = 0;
    const totalSides = 3;

    const result = createTriangleVertices(centerX, centerY, radius, index, totalSides);

    expect(result).toBe('NaN,0 NaN,0 NaN,0');
  });

  // Returns a string with NaN values if radius is not a number
  it('should return a string with NaN values if radius is not a number', () => {
    const centerX = 0;
    const centerY = 0;
    const radius = 'invalid';
    const index = 0;
    const totalSides = 3;

    const result = createTriangleVertices(centerX, centerY, radius, index, totalSides);

    expect(result).toBe('0,0 NaN,NaN NaN,NaN');
  });

  // Returns a string with NaN values if index or totalSides is not a number
  it('should return a string with NaN values if index or totalSides is not a number', () => {
    const centerX = 0;
    const centerY = 0;
    const radius = 100;
    const index = 'invalid';
    const totalSides = 'invalid';

    const result = createTriangleVertices(centerX, centerY, radius, index, totalSides);

    expect(result).toBe('0,0 NaN,NaN NaN,NaN');
  });
});

describe('createTriangle', () => {

  // Creates the specified number of triangles with the correct points, fill color, stroke color, and stroke width
  it('should create the specified number of triangles with the correct attributes', () => {
    const number = 3;
    const fillColor = 'red';
    const strokeColor = 'blue';
    const strokeWidth = 2;

    const result = createTriangle(number, fillColor, strokeColor, strokeWidth);

    expect(result.length).toBe(number);
    result.forEach(triangle => {
      expect(triangle.getAttribute('fill')).toBe(fillColor);
      expect(triangle.getAttribute('stroke')).toBe(strokeColor);
      expect(triangle.getAttribute('stroke-width')).toBe(strokeWidth.toString());
    });
  });

  // Returns an array of created triangles
  it('should return an array of created triangles', () => {
    const number = 3;
    const fillColor = 'red';
    const strokeColor = 'blue';
    const strokeWidth = 2;

    const result = createTriangle(number, fillColor, strokeColor, strokeWidth);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(number);
    result.forEach(triangle => {
      expect(triangle instanceof SVGElement).toBe(true);
    });
  });

  // Uses the createTriangleVertices function to calculate the points of each triangle
  it('should use the createTriangleVertices function to calculate the points of each triangle', () => {
    const number = 3;
    const fillColor = 'red';
    const strokeColor = 'blue';
    const strokeWidth = 2;

    const result = createTriangle(number, fillColor, strokeColor, strokeWidth);

    result.forEach((triangle, index) => {
      const points = createTriangleVertices(centerX, centerY, radius, index, number);
      expect(triangle.getAttribute('points')).toBe(points);
    });
  });

  // Returns an empty array if the specified number is 0
  it('should return an empty array if the specified number is 0', () => {
    const number = 0;
    const fillColor = 'red';
    const strokeColor = 'blue';
    const strokeWidth = 2;

    const result = createTriangle(number, fillColor, strokeColor, strokeWidth);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });

  // Throws an error if the specified number is negative
  it('should throw an error if the specified number is negative', () => {
    const number = -1;
    const fillColor = 'red';
    const strokeColor = 'blue';
    const strokeWidth = 2;

    expect(() => {
      createTriangle(number, fillColor, strokeColor, strokeWidth);
    }).toThrowError('Number must be a positive integer');
  });

  // Throws an error if the specified fill color is not a valid color string
  it('should throw an error if the specified fill color is not a valid color string', () => {
    const number = 3;
    const fillColor = 'invalidColor';
    const strokeColor = 'blue';
    const strokeWidth = 2;

    expect(() => {
      createTriangle(number, fillColor, strokeColor, strokeWidth);
    }).toThrowError('Fill color must be a valid color string');
  });
});

describe('parseHeptagonArray', () => {

  // Returns an array of length 7 when passed an object with heptagonNode property containing 14 elements
  it('should return an array of length 7 when passed an object with heptagonNode property containing 14 elements', () => {
    const obj = {
      heptagonNode: document.querySelectorAll("#heptagon > polygon")
    }
    const result = parseHeptagonArray(obj)
    expect(result).toHaveLength(7)
  });

  // Returns an array of heptagonNode elements from index 7 to 13 when passed an object with heptagonNode property containing 14 elements
  it('should return an array of heptagonNode elements from index 7 to 13 when passed an object with heptagonNode property containing 14 elements', () => {
    const obj = {
      heptagonNode: document.querySelectorAll("#heptagon > polygon")
    }
    const result = parseHeptagonArray(obj)
    expect(result).toEqual(Array.from(obj.heptagonNode).slice(7, 14))
  });

  // Returns an empty array when passed an object without heptagonNode property
  it('should return an empty array when passed an object without heptagonNode property', () => {
    const obj = {}
    const result = parseHeptagonArray(obj)
    expect(result).toEqual([])
  });

  // Returns an empty array when passed an object with heptagonNode property containing less than 14 elements
  it('should return an empty array when passed an object with heptagonNode property containing less than 14 elements', () => {
    const obj = {
      heptagonNode: document.querySelectorAll("#heptagon > polygon").slice(0, 10)
    }
    const result = parseHeptagonArray(obj)
    expect(result).toEqual([])
  });

  // Returns an array of length 7 when passed an object with heptagonNode property containing more than 14 elements
  it('should return an array of length 7 when passed an object with heptagonNode property containing more than 14 elements', () => {
    const obj = {
      heptagonNode: document.querySelectorAll("#heptagon > polygon").slice(0, 20)
    }
    const result = parseHeptagonArray(obj)
    expect(result).toHaveLength(7)
  });
});

describe('hideAPolygon', () => {

  // The function hides the last polygon in the array passed as argument.
  it('should hide the last polygon in the array', () => {
    const arr = [polygon1, polygon2, polygon3];
    hideAPolygon(arr);
    expect(arr[arr.length - 1].style.display).toBe('none');
  });

  // The function sets the display property of the last polygon in the array to 'none'.
  it('should set the display property of the last polygon to "none"', () => {
    const arr = [polygon1, polygon2, polygon3];
    hideAPolygon(arr);
    expect(arr[arr.length - 1].style.display).toBe('none');
  });

  // The function does not throw any errors when hiding the last polygon in the array.
  it('should not throw any errors when hiding the last polygon', () => {
    const arr = [polygon1, polygon2, polygon3];
    expect(() => hideAPolygon(arr)).not.toThrow();
  });

  // The function throws an error when the argument is not an array.
  it('should throw an error when the argument is not an array', () => {
    const arr = 'not an array';
    expect(() => hideAPolygon(arr)).toThrow();
  });

  // The function throws an error when the argument is an empty array.
  it('should throw an error when the argument is an empty array', () => {
    const arr = [];
    expect(() => hideAPolygon(arr)).toThrow();
  });

  // The function throws an error when the argument contains non-polygon elements.
  it('should throw an error when the argument contains non-polygon elements', () => {
    const arr = [polygon1, polygon2, 'not a polygon'];
    expect(() => hideAPolygon(arr)).toThrow();
  });
});

describe('removeAPolygon', () => {

  // Removes the last element of the input array
  it('should remove the last element of the input array and return the modified array', () => {
    const arr = [1, 2, 3];
    const result = removeAPolygon(arr);
    expect(result).toEqual([1, 2]);
  });

  // Returns the modified array
  it('should return the modified array after removing the last element', () => {
    const arr = [1, 2, 3];
    const result = removeAPolygon(arr);
    expect(result).toEqual([1, 2]);
  });

  // Removes the last element of an empty array and returns the empty array
  it('should return an empty array when removing the last element of an empty array', () => {
    const arr = [];
    const result = removeAPolygon(arr);
    expect(result).toEqual([]);
  });

  // Removes the last element of an array with one element and returns an empty array
  it('should return an empty array when removing the last element of an array with one element', () => {
    const arr = [1];
    const result = removeAPolygon(arr);
    expect(result).toEqual([]);
  });

  // Removes the last element of an array with multiple elements and returns the modified array
  it('should remove the last element of an array with multiple elements and return the modified array', () => {
    const arr = [1, 2, 3];
    const result = removeAPolygon(arr);
    expect(result).toEqual([1, 2]);
  });
});

describe('buildRingContainers', () => {

  // should create a new div element with id 'ringContainer'
  it('should create a new div element with id \'ringContainer\' when buildRingContainers is called', () => {
    // Arrange
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "400");
    svg.setAttribute("height", "400");
    svg.setAttribute("id", "heptagon");

    const triangles = [];

    // Act
    buildRingContainers();

    // Assert
    expect(svg.querySelector('#ringContainer')).not.toBeNull();
  });

  // should append the new div element to the svg element
  it('should append the new div element to the svg element when buildRingContainers is called', () => {
    // Arrange
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "400");
    svg.setAttribute("height", "400");
    svg.setAttribute("id", "heptagon");

    const triangles = [];

    // Act
    buildRingContainers();

    // Assert
    expect(svg.lastChild).toHaveAttribute('id', 'ringContainer');
  });

  // svg element is null
  it('should not create a new div element with id \'ringContainer\' when svg element is null', () => {
    // Arrange
    const svg = null;
    const triangles = [];

    // Act
    buildRingContainers();

    // Assert
    expect(svg.querySelector('#ringContainer')).toBeNull();
  });

  // svg element does not have a triangles property
  it('should not create a new div element with id \'ringContainer\' when svg element does not have a triangles property', () => {
    // Arrange
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "400");
    svg.setAttribute("height", "400");
    svg.setAttribute("id", "heptagon");

    const triangles = [];

    // Act
    buildRingContainers();

    // Assert
    expect(svg.querySelector('#ringContainer')).toBeNull();
  });

  // triangles array is empty
  it('should not create a new div element with id \'ringContainer\' when triangles array is empty', () => {
    // Arrange
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "400");
    svg.setAttribute("height", "400");
    svg.setAttribute("id", "heptagon");

    const triangles = [];

    // Act
    buildRingContainers();

    // Assert
    expect(svg.querySelector('#ringContainer')).toBeNull();
  });

  // should not modify any existing elements or attributes
  it('should not modify any existing elements or attributes when buildRingContainers is called', () => {
    // Arrange
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "400");
    svg.setAttribute("height", "400");
    svg.setAttribute("id", "heptagon");

    const triangles = [];

    // Act
    buildRingContainers();

    // Assert
    expect(svg.getAttribute('width')).toBe('400');
    expect(svg.getAttribute('height')).toBe('400');
    expect(svg.getAttribute('id')).toBe('heptagon');
  });
});

describe('onSpellCast', () => {

  // Logs the number of spells cast
  it('should log the number of spells cast when onSpellCast is called', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const numberOfSpellsCast = 5;

    onSpellCast(numberOfSpellsCast);

    expect(consoleSpy).toHaveBeenCalledWith('inside onSpellCast, numberOfSpellsCast is: ', numberOfSpellsCast);
    consoleSpy.mockRestore();
  });

  // Hides a polygon
  it('should hide a polygon when onSpellCast is called', () => {
    const polygonArr = [{ style: { display: 'block' } }];

    onSpellCast(3);

    expect(polygonArr[0].style.display).toBe('none');
  });

  // Removes a polygon from an array
  it('should remove a polygon from the array when onSpellCast is called', () => {
    const polygonArr = [{}, {}, {}];

    onSpellCast(2);

    expect(polygonArr.length).toBe(2);
  });

  // polygonArr is empty
  it('should make polygonArr empty when onSpellCast is called', () => {
    const polygonArr = [{}, {}, {}];

    onSpellCast(3);

    expect(polygonArr.length).toBe(0);
  });

  // numberOfSpellsCast is not a number
  it('should not log the number of spells cast when numberOfSpellsCast is not a number', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const numberOfSpellsCast = 'five';

    onSpellCast(numberOfSpellsCast);

    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  // polygonArr contains non-polygon elements
  it('should not hide a polygon when polygonArr contains non-polygon elements', () => {
    const polygonArr = [{}, {}, {}];

    onSpellCast(3);

    expect(polygonArr[0].style.display).toBeUndefined();
  });
});

// Generated by CodiumAI
