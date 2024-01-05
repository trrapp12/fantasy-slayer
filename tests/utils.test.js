/**
 * @jest-environment jsdom
 */

const { displayNoManaMessage, getDiceRollArray, renderDicePlaceHolderArray, renderDefenseDicePlaceHolderArray, hasDuplicates, hideElement, calculateEnhancedScore } = require("../js/utils.js")

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
 
   it('should create a new div element with class \'no-more-spells\' and id \'no-more-spells\'', () => {
     displayNoManaMessage(true);
     const messageDiv = document.getElementById('no-more-spells');
     expect(messageDiv).toBeTruthy();
     expect(messageDiv.getAttribute('class')).toBe('no-more-spells');
     expect(messageDiv.getAttribute('id')).toBe('no-more-spells');
   });
 
   it('should set the innerHTML of the new div element to a message about depleted mana', () => {
     displayNoManaMessage(true);
     const messageDiv = document.getElementById('no-more-spells');
     const message = messageDiv.querySelector('.no-spells-message');
     expect(message.innerHTML).toContain('Mana has been depleted');
     expect(message.innerHTML).toContain('You must continue without any more magical prowess');
   });
 
   it('should append the new div element to the main container', () => {
     displayNoManaMessage(true);
     const messageDiv = document.getElementById('no-more-spells');
     expect(mainContainer.contains(messageDiv)).toBe(true);
   });
 
   it('should have no additional assertions', () => {
     displayNoManaMessage(true);
     expect.assertions(0);
   });
 
  })
 
 describe('getDiceRollArray', () => {
 
   it('should return an array of length totalDiceCount', () => {
     const totalDiceCount = 5;
     const diceSides = 6;
     const result = getDiceRollArray(totalDiceCount, diceSides);
     expect(result).toHaveLength(totalDiceCount);
   });
 
   it('should have each element in the array between 1 and diceSides', () => {
     const totalDiceCount = 5;
     const diceSides = 6;
     const result = getDiceRollArray(totalDiceCount, diceSides);
     result.forEach((element) => {
       expect(element).toBeGreaterThanOrEqual(1);
       expect(element).toBeLessThanOrEqual(diceSides);
     });
   });
 
   it('should return a different array each time it is called', () => {
     const totalDiceCount = 5;
     const diceSides = 6;
     const result1 = getDiceRollArray(totalDiceCount, diceSides);
     const result2 = getDiceRollArray(totalDiceCount, diceSides);
     expect(result1).not.toEqual(result2);
   });

   it('should throw an error when totalDiceCount is not a positive integer', () => {
     const totalDiceCount = -5;
     const diceSides = 6;
     expect(() => {
       getDiceRollArray(totalDiceCount, diceSides);
     }).toThrow();
   });
 
   it('should throw an error when totalDiceCount is not a number', () => {
     const totalDiceCount = '5';
     const diceSides = 6;
     expect(() => {
       getDiceRollArray(totalDiceCount, diceSides);
     }).toThrow();
   });
 
   it('should throw an error when totalDiceCount is greater than the maximum allowed array length', () => {
     const totalDiceCount = Math.pow(2, 32);
     const diceSides = 6;
     expect(() => {
       getDiceRollArray(totalDiceCount, diceSides);
     }).toThrow();
   });
 });
 
 
 describe('renderDicePlaceHolderArray', () => {
   it('should return a string of HTML elements representing the specified number of dice placeholders', () => {
     const totalDiceCount = 5;
     const result = renderDicePlaceHolderArray(totalDiceCount);
     expect(result.replace(/\s+/g, "")).toBe(`<divclass="dice"><divclass="dice-insetplaceholder-dice">0</div></div><divclass="dice"><divclass="dice-insetplaceholder-dice">0</div></div><divclass="dice"><divclass="dice-insetplaceholder-dice">0</div></div><divclass="dice"><divclass="dice-insetplaceholder-dice">0</div></div><divclass="dice"><divclass="dice-insetplaceholder-dice">0</div></div>`);
    });
    
    it('should return an empty string when totalDiceCount is 0', () => {
      const totalDiceCount = 0;
      const result = renderDicePlaceHolderArray(totalDiceCount);
      expect(result).toBe('');
    });
    
    it('should return a string of HTML elements with class \'dice\' and \'placeholder-dice\'', () => {
      const totalDiceCount = 3;
      const result = renderDicePlaceHolderArray(totalDiceCount);
      expect(result).toContain('<div class="dice">');
      expect(result).toContain('<div class="dice-inset placeholder-dice">0</div>');
    });
    
    it('should return an empty string when totalDiceCount is negative', () => {
      const totalDiceCount = -1;
      const result = renderDicePlaceHolderArray(totalDiceCount);
      expect(result).toBe('');
    });
    
    it('should throw an error when totalDiceCount is not a number', () => {
      const totalDiceCount = 'invalid';
      expect(() => {
        renderDefenseDicePlaceHolderArray(totalDiceCount);
      }).toThrow();
    });
    
    it('should return a string of HTML elements with innerHTML \'0\'', () => {
      const totalDiceCount = 4;
      const result = renderDicePlaceHolderArray(totalDiceCount);
      expect(result).toContain('<div class="dice-inset placeholder-dice">0</div>');
    });
  });
  
  describe('renderDefenseDicePlaceHolderArray', () => {
    it('should return a string of HTML elements representing a number of defense dice placeholders equal to the input totalDiceCount', () => {
      const totalDiceCount = 3;
      const result = renderDefenseDicePlaceHolderArray(totalDiceCount);
      expect(result.replace(/\s+/g, "")).toBe(`<divclass="dicedefend-dice"><divclass="dice-inset">0</div></div><divclass="dicedefend-dice"><divclass="dice-inset">0</div></div><divclass="dicedefend-dice"><divclass="dice-inset">0</div></div>`);
    });
    
    it('should have each defense dice placeholder with the correct classes and innerHTML', () => {
      const totalDiceCount = 2;
      const result = renderDefenseDicePlaceHolderArray(totalDiceCount);
      expect(result).toContain('<div class="dice defend-dice">');
      expect(result).toContain('<div class="dice-inset">0</div>');
    });
    
    it('should return an empty string when totalDiceCount is 0', () => {
      const totalDiceCount = 0;
      const result = renderDefenseDicePlaceHolderArray(totalDiceCount);
      expect(result).toBe('');
    });
    
    it('should throw an error when totalDiceCount is not a number', () => {
      const totalDiceCount = 'invalid';
      expect(() => {
        renderDefenseDicePlaceHolderArray(totalDiceCount);
      }).toThrow();
    });
    
    it('should return an empty string when totalDiceCount is negative', () => {
      const totalDiceCount = -1;
      const result = renderDefenseDicePlaceHolderArray(totalDiceCount);
      expect(result).toBe('');
    });
    
    it('should return an empty string when totalDiceCount is not an integer', () => {
      const totalDiceCount = 2.5;
      const result = renderDefenseDicePlaceHolderArray(totalDiceCount);
      expect(result).toBe('');
    });
  });

  describe('hasDuplicates', () => {

   it('should return false when given an array with no duplicates', () => {
       const arr = [1, 2, 3, 4, 5];
       const result = hasDuplicates(arr);
       expect(result).toBe(false);
   });
 
   it('should return true when given an array with duplicates', () => {
       const arr = [1, 2, 3, 4, 4];
       const result = hasDuplicates(arr);
       expect(result).toBe(true);
   });
 
   it('should work with arrays of different data types', () => {
       const arr = [1, '2', true, null, undefined];
       const result = hasDuplicates(arr);
       expect(result).toBe(false);
   });
 
   it('should work with arrays containing duplicate functions with different references', () => {
       const func1 = () => {};
       const func2 = () => {};
       const arr = [func1, func2, func1];
       const result = hasDuplicates(arr);
       expect(result).toBe(true);
   });
 
   it('should work with arrays containing duplicate arrays with different references', () => {
       const arr1 = [1, 2, 3];
       const arr2 = [1, 2, 3];
       const arr = [arr1, arr2, arr1];
       const result = hasDuplicates(arr);
       expect(result).toBe(true);
   });
 
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
   

   it('should hide the element when called with a valid element', () => {

     // Arrange
     const element = document.createElement('div');
     
     // Act
     hideElement(element);
     
     // Assert
     expect(element.style.display).toBe('none');
    });
    
    it('should set the display style of the element to "none" when called with a valid element', () => {
      // Arrange
      const element = document.createElement('div');
      
      // Act
      hideElement(element);
      
      // Assert
      expect(element.style.display).toBe('none');
    });
    
    it('should not throw any errors when called with a valid element', () => {
      // Arrange
      const element = document.createElement('div');
      
      // Act & Assert
      expect(() => hideElement(element)).not.toThrow();
    });
    
    it('should throw an error when called with no argument', () => {
      // Arrange
      
      // Act & Assert
      expect(() => hideElement()).toThrow('hideElement did not receive any arguments');
    });
    
    it('should throw an error when called with an argument that is not an HTML element', () => {
      // Arrange
      const element = 'not an element';
      
      // Act & Assert
      expect(() => hideElement(element)).toThrow();
    });
    
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
    
    it('should correctly calculate the enhanced score for an object with repeated numbers and an array of unique numbers', () => {
      const obj = { 2: [2, 2], 3: [3, 3, 3] };
      const arr = [1, 4, 5];
      const result = calculateEnhancedScore(obj, arr);
      expect(result).toBe(2**2 * 3**3 + 1 + 4 + 5);
    });
    
    it('should correctly calculate the enhanced score for an object with no repeated numbers and an array of unique numbers', () => {
      const obj = {};
      const arr = [1, 2, 3];
      const result = calculateEnhancedScore(obj, arr);
      expect(result).toBe(1 + 2 + 3);
    });
    
    it('should correctly calculate the enhanced score for an object with repeated numbers and an empty array', () => {
      const obj = { 2: [2, 2], 3: [3, 3, 3] };
      const arr = [];
      const result = calculateEnhancedScore(obj, arr);
      expect(result).toBe(2**2 * 3**3);
    });
    
    it('should correctly calculate the enhanced score for an object with repeated numbers and an array with negative numbers', () => {
      const obj = { 2: [2, 2], 3: [3, 3, 3] };
      const arr = [-1, -2, -3];
      const result = calculateEnhancedScore(obj, arr);
      expect(result).toBe(2**2 * 3**3 + -1 + -2 + -3);
    });
    
    // As negative numbers are never provided, a test for this was not included
    it('should correctly calculate the enhanced score for an object with repeated numbers and an array with decimal numbers', () => {
      const obj = { 2: [2, 2], 3: [3, 3, 3] };
      const arr = [1.5, 2.5, 3.5];
      const result = calculateEnhancedScore(obj, arr);
      expect(result).toBe(2**2 * 3**3 + 1.5 + 2.5 + 3.5);
    });
  });
  
  // Generated by CodiumAI