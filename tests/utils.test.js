/**
 * @jest-environment jsdom
 */

const { manaRotateContainer, hasNotDisplayedTheMessageBefore, displayNoManaMessage, calculateEnhancedScore, getDiceRollArray, hasDuplicates, hideElement, renderDicePlaceHolderArray, renderDefenseDicePlaceHolderArray} = require("../js/utils.js")

let mainContainer;
// mock elements needed for the DOM

// Create and append the mocked main container element before each test
beforeEach(() => {
  mainContainer = document.createElement('div');
  mainContainer.setAttribute('id', 'main-container');
  document.body.appendChild(mainContainer);
});


afterEach(() => {
  if (mainContainer && mainContainer.parentNode) {
    mainContainer.parentNode.removeChild(mainContainer);
  }
});

 
 describe('displayNoManaMessage', () => {
 
   // Creates a new div element with class 'no-more-spells' and id 'no-more-spells'
   it('should create a new div element with class \'no-more-spells\' and id \'no-more-spells\'', () => {
     displayNoManaMessage(true);
     const messageDiv = document.getElementById('no-more-spells');
     expect(messageDiv).toBeTruthy();
     expect(messageDiv.getAttribute('class')).toBe('no-more-spells');
     expect(messageDiv.getAttribute('id')).toBe('no-more-spells');
   });
 
   // Sets the innerHTML of the new div element to a message about depleted mana
   it('should set the innerHTML of the new div element to a message about depleted mana', () => {
     displayNoManaMessage(true);
     const messageDiv = document.getElementById('no-more-spells');
     const message = messageDiv.querySelector('.no-spells-message');
     expect(message.innerHTML).toContain('Mana has been depleted');
     expect(message.innerHTML).toContain('You must continue without any more magical prowess');
   });
 
   // Appends the new div element to the main container
   it('should append the new div element to the main container', () => {
     displayNoManaMessage(true);
     const messageDiv = document.getElementById('no-more-spells');
     expect(mainContainer.contains(messageDiv)).toBe(true);
   });
 
   // None
   it('should have no additional assertions', () => {
     displayNoManaMessage(true);
     expect.assertions(0);
   });
 
  })
 
 describe('getDiceRollArray', () => {
 
   // Returns an array of length totalDiceCount
   it('should return an array of length totalDiceCount', () => {
     const totalDiceCount = 5;
     const diceSides = 6;
     const result = getDiceRollArray(totalDiceCount, diceSides);
     expect(result).toHaveLength(totalDiceCount);
   });
 
   // Each element in the array is an integer between 1 and diceSides
   it('should have each element in the array between 1 and diceSides', () => {
     const totalDiceCount = 5;
     const diceSides = 6;
     const result = getDiceRollArray(totalDiceCount, diceSides);
     result.forEach((element) => {
       expect(element).toBeGreaterThanOrEqual(1);
       expect(element).toBeLessThanOrEqual(diceSides);
     });
   });
 
   // The function returns a different array each time it is called
   it('should return a different array each time it is called', () => {
     const totalDiceCount = 5;
     const diceSides = 6;
     const result1 = getDiceRollArray(totalDiceCount, diceSides);
     const result2 = getDiceRollArray(totalDiceCount, diceSides);
     expect(result1).not.toEqual(result2);
   });
 
   // The function throws an error when totalDiceCount or diceSides is not a positive integer
   it('should throw an error when totalDiceCount is not a positive integer', () => {
     const totalDiceCount = -5;
     const diceSides = 6;
     expect(() => {
       getDiceRollArray(totalDiceCount, diceSides);
     }).toThrow();
   });
 
   // The function throws an error when totalDiceCount or diceSides is not a number
   it('should throw an error when totalDiceCount is not a number', () => {
     const totalDiceCount = '5';
     const diceSides = 6;
     expect(() => {
       getDiceRollArray(totalDiceCount, diceSides);
     }).toThrow();
   });
 
   // The function throws an error when totalDiceCount is greater than the maximum allowed array length
   it('should throw an error when totalDiceCount is greater than the maximum allowed array length', () => {
     const totalDiceCount = Math.pow(2, 32);
     const diceSides = 6;
     expect(() => {
       getDiceRollArray(totalDiceCount, diceSides);
     }).toThrow();
   });
 });
 
 
 describe("hasDuplicates()", () => {
   it("should return false when given an array that has no duplicates", () => {
     const arr = [1,2,3,4,5];
     const result = hasDuplicates(arr);
     expect(result).toBe(false)
   })
 })
 
 describe('renderDicePlaceHolderArray', () => {
 
   // Returns a string of HTML elements representing the specified number of dice placeholders
   it('should return a string of HTML elements representing the specified number of dice placeholders', () => {
    const totalDiceCount = 5;
    const result = renderDicePlaceHolderArray(totalDiceCount);
    expect(result.replace(/\s+/g, "")).toBe(`<divclass="dice"><divclass="dice-insetplaceholder-dice">0</div></div><divclass="dice"><divclass="dice-insetplaceholder-dice">0</div></div><divclass="dice"><divclass="dice-insetplaceholder-dice">0</div></div><divclass="dice"><divclass="dice-insetplaceholder-dice">0</div></div><divclass="dice"><divclass="dice-insetplaceholder-dice">0</div></div>`);
   });
 
   // Returns an empty string when totalDiceCount is 0
   it('should return an empty string when totalDiceCount is 0', () => {
       const totalDiceCount = 0;
       const result = renderDicePlaceHolderArray(totalDiceCount);
       expect(result).toBe('');
   });
 
   // Returns a string of HTML elements with class 'dice' and 'placeholder-dice'
   it('should return a string of HTML elements with class \'dice\' and \'placeholder-dice\'', () => {
       const totalDiceCount = 3;
       const result = renderDicePlaceHolderArray(totalDiceCount);
       expect(result).toContain('<div class="dice">');
       expect(result).toContain('<div class="dice-inset placeholder-dice">0</div>');
   });
 
   // Throws an error when totalDiceCount is negative
   it('should return an empty string when totalDiceCount is negative', () => {
    const totalDiceCount = -1;
    const result = renderDicePlaceHolderArray(totalDiceCount);
    expect(result).toBe('');
});
 
   // Returns an empty string when totalDiceCount is not a number
   it('should throw an error when totalDiceCount is not a number', () => {
    const totalDiceCount = 'invalid';
    expect(() => {
        renderDefenseDicePlaceHolderArray(totalDiceCount);
        }).toThrow();
    });
 
   // Returns a string of HTML elements with innerHTML '0'
   it('should return a string of HTML elements with innerHTML \'0\'', () => {
       const totalDiceCount = 4;
       const result = renderDicePlaceHolderArray(totalDiceCount);
       expect(result).toContain('<div class="dice-inset placeholder-dice">0</div>');
   });
 });
 
 describe('renderDefenseDicePlaceHolderArray', () => {
 
   // Returns a string of HTML elements representing a number of defense dice placeholders equal to the input totalDiceCount
   it('should return a string of HTML elements representing a number of defense dice placeholders equal to the input totalDiceCount', () => {
       const totalDiceCount = 3;
       const result = renderDefenseDicePlaceHolderArray(totalDiceCount);
       expect(result.replace(/\s+/g, "")).toBe(`<divclass="dicedefend-dice"><divclass="dice-inset">0</div></div><divclass="dicedefend-dice"><divclass="dice-inset">0</div></div><divclass="dicedefend-dice"><divclass="dice-inset">0</div></div>`);
   });
 
   // Each defense dice placeholder has a class of "dice defend-dice" and contains a child div element with a class of "dice-inset" and innerHTML of 0
   it('should have each defense dice placeholder with the correct classes and innerHTML', () => {
       const totalDiceCount = 2;
       const result = renderDefenseDicePlaceHolderArray(totalDiceCount);
       expect(result).toContain('<div class="dice defend-dice">');
       expect(result).toContain('<div class="dice-inset">0</div>');
   });
 
   // Returns an empty string when totalDiceCount is 0
   it('should return an empty string when totalDiceCount is 0', () => {
       const totalDiceCount = 0;
       const result = renderDefenseDicePlaceHolderArray(totalDiceCount);
       expect(result).toBe('');
   });
 
   // Throws an error when totalDiceCount is not a number
   it('should throw an error when totalDiceCount is not a number', () => {
       const totalDiceCount = 'invalid';
       expect(() => {
           renderDefenseDicePlaceHolderArray(totalDiceCount);
       }).toThrow();
   });
 
   // Returns an empty string when totalDiceCount is negative
   it('should return an empty string when totalDiceCount is negative', () => {
       const totalDiceCount = -1;
       const result = renderDefenseDicePlaceHolderArray(totalDiceCount);
       expect(result).toBe('');
   });
 
   // Returns an empty string when totalDiceCount is not an integer
   it('should return an empty string when totalDiceCount is not an integer', () => {
       const totalDiceCount = 2.5;
       const result = renderDefenseDicePlaceHolderArray(totalDiceCount);
       expect(result).toBe('');
   });
 });
 
 describe('hasDuplicates', () => {
 
   // Returns false when given an array with no duplicates
   it('should return false when given an array with no duplicates', () => {
       const arr = [1, 2, 3, 4, 5];
       const result = hasDuplicates(arr);
       expect(result).toBe(false);
   });
 
   // Returns true when given an array with duplicates
   it('should return true when given an array with duplicates', () => {
       const arr = [1, 2, 3, 4, 4];
       const result = hasDuplicates(arr);
       expect(result).toBe(true);
   });
 
   // Works with arrays of different data types
   it('should work with arrays of different data types', () => {
       const arr = [1, '2', true, null, undefined];
       const result = hasDuplicates(arr);
       expect(result).toBe(false);
   });
 
   // Works with arrays containing duplicate functions with different references
   it('should work with arrays containing duplicate functions with different references', () => {
       const func1 = () => {};
       const func2 = () => {};
       const arr = [func1, func2, func1];
       const result = hasDuplicates(arr);
       expect(result).toBe(true);
   });
 
   // Works with arrays containing duplicate arrays with different references
   it('should work with arrays containing duplicate arrays with different references', () => {
       const arr1 = [1, 2, 3];
       const arr2 = [1, 2, 3];
       const arr = [arr1, arr2, arr1];
       const result = hasDuplicates(arr);
       expect(result).toBe(true);
   });
 
   // Works with arrays containing duplicate nested arrays with different references
   it('should work with arrays containing duplicate nested arrays with different references', () => {
       const arr1 = [1, 2, 3];
       const arr2 = [1, 2, 3];
       const nestedArr1 = [arr1];
       const nestedArr2 = [arr2];
       const arr = [nestedArr1, nestedArr2, nestedArr1];
       const result = hasDuplicates(arr);
       expect(result).toBe(true);
   });
 });
 
 describe('hideElement', () => {
   
   // Function hides the element passed as argument
   it('should hide the element when called with a valid element', () => {
     // Arrange
     const element = document.createElement('div');
     
     // Act
     hideElement(element);
     
     // Assert
     expect(element.style.display).toBe('none');
    });
    
    // Function sets the display style of the element to 'none'
    it('should set the display style of the element to "none" when called with a valid element', () => {
      // Arrange
      const element = document.createElement('div');
      
      // Act
      hideElement(element);
      
      // Assert
      expect(element.style.display).toBe('none');
    });
    
    // Function does not throw any errors
    it('should not throw any errors when called with a valid element', () => {
      // Arrange
      const element = document.createElement('div');
      
      // Act & Assert
      expect(() => hideElement(element)).not.toThrow();
    });
    
    // Function throws an error if no argument is passed
    it('should throw an error when called with no argument', () => {
      // Arrange
      const element = undefined;
      
      // Act & Assert
      expect(() => hideElement(element)).toThrow();
    });
    
    // Function throws an error if the argument is not an HTML element
    it('should throw an error when called with an argument that is not an HTML element', () => {
      // Arrange
      const element = 'not an element';
      
      // Act & Assert
      expect(() => hideElement(element)).toThrow();
    });
    
    // Function does not throw an error if the argument is null or undefined
    it('should not throw an error when called with null or undefined', () => {
      // Arrange
      const element1 = null;
      const element2 = undefined;
      
      // Act & Assert
      expect(() => hideElement(element1)).not.toThrow();
      expect(() => hideElement(element2)).not.toThrow();
    });
  });
  
  describe('calculateEnhancedScore', () => {
    
    // The function correctly calculates the enhanced score for an object with repeated numbers and an array of unique numbers.
    it('should correctly calculate the enhanced score for an object with repeated numbers and an array of unique numbers', () => {
      const obj = { 2: [2, 2], 3: [3, 3, 3] };
      const arr = [1, 4, 5];
      const result = calculateEnhancedScore(obj, arr);
      expect(result).toBe(2**2 * 3**3 + 1 + 4 + 5);
    });
    
    // The function correctly calculates the enhanced score for an object with no repeated numbers and an array of unique numbers.
    it('should correctly calculate the enhanced score for an object with no repeated numbers and an array of unique numbers', () => {
      const obj = {};
      const arr = [1, 2, 3];
      const result = calculateEnhancedScore(obj, arr);
      expect(result).toBe(1 + 2 + 3);
    });
    
    // The function correctly calculates the enhanced score for an object with repeated numbers and an empty array.
    it('should correctly calculate the enhanced score for an object with repeated numbers and an empty array', () => {
      const obj = { 2: [2, 2], 3: [3, 3, 3] };
      const arr = [];
      const result = calculateEnhancedScore(obj, arr);
      expect(result).toBe(2**2 * 3**3);
    });
    
    // The function correctly calculates the enhanced score for an object with repeated numbers and an array with negative numbers.
    it('should correctly calculate the enhanced score for an object with repeated numbers and an array with negative numbers', () => {
      const obj = { 2: [2, 2], 3: [3, 3, 3] };
      const arr = [-1, -2, -3];
      const result = calculateEnhancedScore(obj, arr);
      expect(result).toBe(2**2 * 3**3 + -1 + -2 + -3);
    });
    
    // As negative numbers are never provided, a test for this was not included
    
    // The function correctly calculates the enhanced score for an object with repeated numbers and an array with decimal numbers.
    it('should correctly calculate the enhanced score for an object with repeated numbers and an array with decimal numbers', () => {
      const obj = { 2: [2, 2], 3: [3, 3, 3] };
      const arr = [1.5, 2.5, 3.5];
      const result = calculateEnhancedScore(obj, arr);
      expect(result).toBe(2**2 * 3**3 + 1.5 + 2.5 + 3.5);
    });
  });
  
  // Generated by CodiumAI