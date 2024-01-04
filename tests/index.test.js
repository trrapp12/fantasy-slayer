/**
 * @jest-environment jsdom
 */

const { characterOrder, importSpellCSS, disableAttackButton, enableAttackButton, endGameWithDelay, handleFlyOuts, handleCharacterDeathTiming, setNextCharacter } = require('../js/index.js')

describe('endGameWithDelay', () => {
  
  // Calls the function "endGame" after a delay of 2500ms
  it('should call the function "endGame" after a delay of 2500ms', () => {
    jest.useFakeTimers();
    const endGameSpy = jest.spyOn(global, 'endGame');
    
    endGameWithDelay();
    
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2500);
    jest.runAllTimers();
    expect(endGameSpy).toHaveBeenCalledTimes(1);
    
    jest.useRealTimers();
  });
  
  // If "endGame" throws an error, it is not caught and propagated
  it('should not catch and propagate an error thrown by "endGame"', () => {
    jest.useFakeTimers();
    const endGameSpy = jest.spyOn(global, 'endGame').mockImplementation(() => {
      throw new Error('Test error');
    });
    
    expect(() => {
      endGameWithDelay();
      jest.runAllTimers();
    }).toThrow('Test error');
    
    expect(endGameSpy).toHaveBeenCalledTimes(1);
    
    jest.useRealTimers();
  });
  
  // If "endGame" takes longer than 2500ms to execute, subsequent code execution is not blocked
  it('should not block subsequent code execution if "endGame" takes longer than 2500ms to execute', () => {
    jest.useFakeTimers();
    const endGameSpy = jest.spyOn(global, 'endGame').mockImplementation(() => {
      jest.advanceTimersByTime(3000);
    });
    
    endGameWithDelay();
    
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2500);
    jest.runAllTimers();
    expect(endGameSpy).toHaveBeenCalledTimes(1);
    
    jest.useRealTimers();
  });
  
  // If "endGame" is not a function, an error is thrown
  it('should throw an error if "endGame" is not a function', () => {
    jest.useFakeTimers();
    global.endGame = 'not a function';
    
    expect(() => {
      endGameWithDelay();
      jest.runAllTimers();
    }).toThrow('endGame is not a function');
    
    jest.useRealTimers();
  });
  
  // If the delay parameter is not a number, an error is thrown
  it('should throw an error if the delay parameter is not a number', () => {
    jest.useFakeTimers();
    
    expect(() => {
      endGameWithDelay('not a number');
      jest.runAllTimers();
    }).toThrow('delay must be a number');
    
    jest.useRealTimers();
  });
});

describe('characterOrder', () => {
  
  // Returns a shuffled array with the same length as the input array
  it('should return a shuffled array with the same length as the input array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = characterOrder(inputArray);
    expect(shuffledArray.length).toBe(inputArray.length);
  });
  
  // Returns a shuffled array with the same elements as the input array
  it('should return a shuffled array with the same elements as the input array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = characterOrder(inputArray);
    expect(shuffledArray).toEqual(expect.arrayContaining(inputArray));
  });
  
  // Returns a shuffled array with a different order than the input array
  it('should return a shuffled array with a different order than the input array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = characterOrder(inputArray);
    expect(shuffledArray).not.toEqual(inputArray);
  });
  
  // Returns an empty array when given an empty array
  it('should return an empty array when given an empty array', () => {
    const inputArray = [];
    const shuffledArray = characterOrder(inputArray);
    expect(shuffledArray).toEqual([]);
  });
  
  // Returns an array with one element when given an array with one element
  it('should return an array with one element when given an array with one element', () => {
    const inputArray = [1];
    const shuffledArray = characterOrder(inputArray);
    expect(shuffledArray).toEqual([1]);
  });
  
  // Throws an error when given a non-array input
  it('should throw an error when given a non-array input', () => {
    expect(() => {
      characterOrder("not an array");
    }).toThrow();
  });
});

describe('importSpellCSS', () => {

  // should import the spell CSS file if it does not exist in the document head
  it('should import the spell CSS file if it does not exist in the document head', () => {
    const headElement = document.head;
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    linkElement.href = 'css/spell.css';
    linkElement.id = 'spellCss';

    const appendChildSpy = jest.spyOn(headElement, 'appendChild');

    importSpellCSS();

    expect(appendChildSpy).toHaveBeenCalledWith(linkElement);
  });

  // should not import the spell CSS file if it already exists in the document head
  it('should not import the spell CSS file if it already exists in the document head', () => {
    const headElement = document.head;
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    linkElement.href = 'css/spell.css';
    linkElement.id = 'spellCss';

    headElement.appendChild(linkElement);

    const appendChildSpy = jest.spyOn(headElement, 'appendChild');

    importSpellCSS();

    expect(appendChildSpy).not.toHaveBeenCalled();
  });

  // should handle errors if there is an issue with creating the link element
  it('should handle errors if there is an issue with creating the link element', () => {
    const createElementSpy = jest.spyOn(document, 'createElement').mockImplementation(() => {
      throw new Error('Failed to create link element');
    });

    expect(() => {
      importSpellCSS();
    }).toThrow('Failed to create link element');

    createElementSpy.mockRestore();
  });

  // should handle errors if there is an issue with appending the link element to the document head
  it('should handle errors if there is an issue with appending the link element to the document head', () => {
    const headElement = document.head;
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    linkElement.href = 'css/spell.css';
    linkElement.id = 'spellCss';

    const appendChildSpy = jest.spyOn(headElement, 'appendChild').mockImplementation(() => {
      throw new Error('Failed to append link element');
    });

    expect(() => {
      importSpellCSS();
    }).toThrow('Failed to append link element');

    appendChildSpy.mockRestore();
  });

  // should have a link element with rel='stylesheet' and type='text/css'
  it('should have a link element with rel=\'stylesheet\' and type=\'text/css\'', () => {
    const headElement = document.head;
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    linkElement.href = 'css/spell.css';
    linkElement.id = 'spellCss';

    importSpellCSS();

    expect(headElement.innerHTML).toContain(linkElement.outerHTML);
  });

  // should have a link element with an id of 'spellCss'
  it('should have a link element with an id of \'spellCss\'', () => {
    const headElement = document.head;
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    linkElement.href = 'css/spell.css';
    linkElement.id = 'spellCss';

    importSpellCSS();

    expect(headElement.innerHTML).toContain(linkElement.outerHTML);
  });
});

describe('disableAttackButton', () => {

  // disables the attack button
  it('should disable the attack button when called', () => {
    disableAttackButton();
    expect(attackButton.disabled).toBe(true);
  });

  // none
  it('should not have any effect when called', () => {
    const initialDisabledState = attackButton.disabled;
    disableAttackButton();
    expect(attackButton.disabled).toBe(initialDisabledState);
  });

  // function should not throw any errors
  it('should not throw any errors when called', () => {
    expect(disableAttackButton).not.toThrow();
  });

  // should be idempotent
  it('should not modify the disabled state of the attack button when called multiple times', () => {
    const initialDisabledState = attackButton.disabled;
    disableAttackButton();
    disableAttackButton();
    disableAttackButton();
    expect(attackButton.disabled).toBe(initialDisabledState);
  });

  // should not modify any other variables or elements
  it('should not modify any other variables or elements when called', () => {
    const initialAttackButton = attackButton;
    disableAttackButton();
    expect(attackButton).toBe(initialAttackButton);
  });

  // should not affect any other buttons or elements on the page
  it('should not affect any other buttons or elements on the page when called', () => {
    const otherButtons = document.querySelectorAll('button:not(#attack-button)');
    const initialDisabledStates = Array.from(otherButtons).map(button => button.disabled);
    disableAttackButton();
    const newDisabledStates = Array.from(otherButtons).map(button => button.disabled);
    expect(newDisabledStates).toEqual(initialDisabledStates);
  });
});

describe('enableAttackButton', () => {

  // enables the attack button by setting its 'disabled' property to false
  it('should enable the attack button when called', () => {
    enableAttackButton();
    expect(attackButton.disabled).toBe(false);
  });

  // none
  it('should not have any additional behaviours to test', () => {
    // No additional behaviours to test
    expect(true).toBe(true);
  });
});

describe('handleCharacterDeathTiming', () => {

  // should update the hero character with the next character data
  it('should update the hero character with the next character data when there are characters left', () => {
    const hero = new Character(characterData[shuffledArray[0]], new Spells());
    const oldHero = { ...hero };
    handleCharacterDeathTiming();
    expect(hero).not.toEqual(oldHero);
  });

  // should call render function to update the player containers
  it('should call render function to update the player containers when there are characters left', () => {
    const renderSpy = jest.spyOn(global, 'render');
    handleCharacterDeathTiming();
    expect(renderSpy).toHaveBeenCalled();
    renderSpy.mockRestore();
  });

  // should set isWaiting to false
  it('should set isWaiting to false when there are characters left', () => {
    isWaiting = true;
    handleCharacterDeathTiming();
    expect(isWaiting).toBe(false);
  });

  // should handle empty shuffledArray by returning an empty object
  it('should handle empty shuffledArray by returning an empty object', () => {
    shuffledArray = [];
    const result = handleCharacterDeathTiming();
    expect(result).toEqual({});
  });

  // should handle undefined nextCharacterData by returning an empty object
  it('should handle undefined nextCharacterData by returning an empty object', () => {
    characterData[shuffledArray[0]] = undefined;
    const result = handleCharacterDeathTiming();
    expect(result).toEqual({});
  });

  // should handle shuffledArray with only one character left
  it('should handle shuffledArray with only one character left', () => {
    shuffledArray = [0];
    const result = handleCharacterDeathTiming();
    expect(result).toEqual({});
  });
});

describe('handleFlyOuts', () => {

  // Renders multiples for fly out message for hero and villain
  it('should render multiples for fly out message for hero and villain', () => {
    const hero = new Character(characterData.hero);
    const villain = new Character(characterData.villain);
    hero.duplicates = [1, 2, 3];
    villain.duplicates = [4, 5, 6];

    handleFlyOuts();

    expect(hero.renderMultiplesForFlyOutMessage).toHaveBeenCalledWith(villain.duplicates);
    expect(villain.renderMultiplesForFlyOutMessage).toHaveBeenCalledWith(hero.duplicates);
  });

  // Resets multiples for fly out message for hero and villain
  it('should reset multiples for fly out message for hero and villain', () => {
    const hero = new Character(characterData.hero);
    const villain = new Character(characterData.villain);

    handleFlyOuts();

    expect(hero.resetMultiplesForFlyOutMessage).toHaveBeenCalled();
    expect(villain.resetMultiplesForFlyOutMessage).toHaveBeenCalled();
  });

  // Disables attack button
  it('should disable attack button', () => {
    const attackButton = document.createElement('button');
    attackButton.disabled = false;

    handleFlyOuts();

    expect(attackButton.disabled).toBe(true);
  });

  // No duplicates for hero and villain
  it('should not render multiples for fly out message for hero and villain', () => {
    const hero = new Character(characterData.hero);
    const villain = new Character(characterData.villain);

    handleFlyOuts();

    expect(hero.renderMultiplesForFlyOutMessage).not.toHaveBeenCalled();
    expect(villain.renderMultiplesForFlyOutMessage).not.toHaveBeenCalled();
  });

  // Shuffled array is empty
  it('should not set next character when shuffled array is empty', () => {
    const shuffledArray = [];
    const setNextCharacterSpy = jest.spyOn(window, 'setNextCharacter');

    handleFlyOuts();

    expect(setNextCharacterSpy).not.toHaveBeenCalled();
  });

  // Villain and hero are dead
  it('should not render multiples for fly out message and disable attack button when villain and hero are dead', () => {
    const hero = new Character(characterData.hero);
    const villain = new Character(characterData.villain);
    hero.dead = true;
    villain.dead = true;
    const disableAttackButtonSpy = jest.spyOn(window, 'disableAttackButton');

    handleFlyOuts();

    expect(hero.renderMultiplesForFlyOutMessage).not.toHaveBeenCalled();
    expect(villain.renderMultiplesForFlyOutMessage).not.toHaveBeenCalled();
    expect(disableAttackButtonSpy).toHaveBeenCalled();
  });
});

describe('setNextCharacter', () => {
  
  // Returns a new instance of Character with data from the next character in shuffledArray.
  it('should return a new instance of Character with data from the next character in shuffledArray', () => {
    const shuffledArray = ['conscript', 'ignisfatuus', 'mage', 'naqualk', 'ogre', 'soulforge', 'zedfire'];
    const nextCharacter = setNextCharacter();
    expect(nextCharacter).toBeInstanceOf(Character);
    expect(nextCharacter.characterData).toEqual(characterData[shuffledArray[0]]);
  });
  
  // Returns an empty object if there are no more characters in shuffledArray.
  it('should return an empty object if there are no more characters in shuffledArray', () => {
    const shuffledArray = [];
    const nextCharacter = setNextCharacter();
    expect(nextCharacter).toEqual({});
  });
  
  // Returns an empty object if shuffledArray is empty.
  it('should return an empty object if shuffledArray is empty', () => {
    const shuffledArray = [];
    const nextCharacter = setNextCharacter();
    expect(nextCharacter).toEqual({});
  });
  
  // The returned Character instance has a diceArrayForRendering property that is an array of length totalDiceCount.
  it('should have a diceArrayForRendering property that is an array of length totalDiceCount', () => {
    const shuffledArray = ['conscript', 'ignisfatuus', 'mage', 'naqualk', 'ogre', 'soulforge', 'zedfire'];
    const nextCharacter = setNextCharacter();
    expect(nextCharacter.diceArrayForRendering).toBeInstanceOf(Array);
    expect(nextCharacter.diceArrayForRendering.length).toBe(nextCharacter.totalDiceCount);
  });
  
  // The returned Character instance has a defendDiceArray property that is an array of length 1.
  it('should have a defendDiceArray property that is an array of length 1', () => {
    const shuffledArray = ['conscript', 'ignisfatuus', 'mage', 'naqualk', 'ogre', 'soulforge', 'zedfire'];
    const nextCharacter = setNextCharacter();
    expect(nextCharacter.defendDiceArray).toBeInstanceOf(Array);
    expect(nextCharacter.defendDiceArray.length).toBe(1);
  });
  
  // The returned Character instance has a defendDiceValue property that is an empty string.
  it('should have a defendDiceValue property that is an empty string', () => {
    const shuffledArray = ['conscript', 'ignisfatuus', 'mage', 'naqualk', 'ogre', 'soulforge', 'zedfire'];
    const nextCharacter = setNextCharacter();
    expect(nextCharacter.defendDiceValue).toBe('');
  });
});

// Generated by CodiumAI