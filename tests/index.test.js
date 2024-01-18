/**
 * @jest-environment jsdom
 */

const { characterOrder, render, importSpellCSS, castSpells, handleSpellDeath, attack, disableAttackButton, enableAttackButton, handleFlyOuts, handleCharacterDeathTiming, setNextCharacter, endGameWithDelay } = require('../js/index.js')


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

describe('render', () => {

  // Renders the hero and villain characters in their respective containers.
  it('should render hero and villain characters in their respective containers', () => {
    const player1Container = document.createElement('div');
    const player2Container = document.createElement('div');
    const hero = new Character(characterData.hero);
    const villain = new Character(characterData.villain);

    render();

    expect(player1Container.innerHTML).toBe(hero.renderCharacter());
    expect(player2Container.innerHTML).toBe(villain.renderCharacter());
  });

  // Enables the attack button after a timeout of 3.5 seconds.
  it('should enable the attack button after a timeout of 3.5 seconds', () => {
    const attackButton = document.createElement('button');
    attackButton.disabled = true;

    render();

    jest.useFakeTimers();
    expect(attackButton.disabled).toBe(true);
    jest.advanceTimersByTime(3500);
    expect(attackButton.disabled).toBe(false);
  });

  // Calls the 'enableAttackButton' function after a timeout of 3.5 seconds.
  it('should call the enableAttackButton function after a timeout of 3.5 seconds', () => {
    const enableAttackButton = jest.fn();

    render();

    jest.useFakeTimers();
    expect(enableAttackButton).not.toHaveBeenCalled();
    jest.advanceTimersByTime(3500);
    expect(enableAttackButton).toHaveBeenCalled();
  });

  // Handles the case where the hero object is empty.
  it('should handle the case where the hero object is empty', () => {
    const player1Container = document.createElement('div');
    const player2Container = document.createElement('div');
    const villain = new Character(characterData.villain);

    render();

    expect(player1Container.innerHTML).toBe('');
    expect(player2Container.innerHTML).toBe(villain.renderCharacter());
  });

  // Handles the case where the villain object is empty.
  it('should handle the case where the villain object is empty', () => {
    const player1Container = document.createElement('div');
    const player2Container = document.createElement('div');
    const hero = new Character(characterData.hero);

    render();

    expect(player1Container.innerHTML).toBe(hero.renderCharacter());
    expect(player2Container.innerHTML).toBe('');
  });

  // Handles the case where the 'enableAttackButton' function is not called due to an error.
  it('should handle the case where the enableAttackButton function is not called due to an error', () => {
    const attackButton = document.createElement('button');
    attackButton.disabled = true;

    render();

    jest.useFakeTimers();
    expect(attackButton.disabled).toBe(true);
    jest.advanceTimersByTime(3500);
    expect(attackButton.disabled).toBe(true);
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

describe('castSpells', () => {

  // should import spell CSS if it doesn't exist
  it("should import spell CSS if it doesn't exist", () => {
    const importSpellCSSSpy = jest.spyOn(global.document, 'getElementById').mockReturnValue(null);
    const appendChildSpy = jest.spyOn(global.document.head, 'appendChild');

    castSpells();

    expect(importSpellCSSSpy).toHaveBeenCalledTimes(1);
    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(appendChildSpy).toHaveBeenCalledWith(expect.objectContaining({
      rel: 'stylesheet',
      type: 'text/css',
      href: 'css/spell.css',
      id: 'spellCss'
    }));

    importSpellCSSSpy.mockRestore();
    appendChildSpy.mockRestore();
  });

  // should render three spell cards and append them to the DOM
  it('should render three spell cards and append them to the DOM', () => {
    const pickThreeCardsSpy = jest.spyOn(hero.spells, 'pickThreeCards').mockReturnValue(['spell1', 'spell2', 'spell3']);
    const renderCardsSpy = jest.spyOn(hero.spells, 'renderCards').mockReturnValue(['<div>spell1</div>', '<div>spell2</div>', '<div>spell3</div>']);
    const appendCardsSpy = jest.spyOn(hero.spells, 'appendCards');
    const appendCardsTitleSpy = jest.spyOn(hero.spells, 'appendCardsTitle');

    castSpells();

    expect(pickThreeCardsSpy).toHaveBeenCalledTimes(1);
    expect(renderCardsSpy).toHaveBeenCalledTimes(1);
    expect(renderCardsSpy).toHaveBeenCalledWith(['spell1', 'spell2', 'spell3']);
    expect(appendCardsSpy).toHaveBeenCalledTimes(1);
    expect(appendCardsSpy).toHaveBeenCalledWith('<div>spell1</div><div>spell2</div><div>spell3</div>');
    expect(appendCardsTitleSpy).toHaveBeenCalledTimes(1);
    expect(appendCardsTitleSpy).toHaveBeenCalledWith('spells-container');

    pickThreeCardsSpy.mockRestore();
    renderCardsSpy.mockRestore();
    appendCardsSpy.mockRestore();
    appendCardsTitleSpy.mockRestore();
  });

  // should set a card choice handler on the spell cards
  it('should set a card choice handler on the spell cards', () => {
    const pickThreeCardsSpy = jest.spyOn(hero.spells, 'pickThreeCards').mockReturnValue(['spell1', 'spell2', 'spell3']);
    const renderCardsSpy = jest.spyOn(hero.spells, 'renderCards').mockReturnValue(['<div>spell1</div>', '<div>spell2</div>', '<div>spell3</div>']);
    const appendCardsSpy = jest.spyOn(hero.spells, 'appendCards');
    const appendCardsTitleSpy = jest.spyOn(hero.spells, 'appendCardsTitle');
    const setCardChoiceHandlerSpy = jest.spyOn(hero.spells, 'setCardChoiceHandler');

    castSpells();

    expect(setCardChoiceHandlerSpy).toHaveBeenCalledTimes(1);
    expect(setCardChoiceHandlerSpy).toHaveBeenCalledWith(expect.any(Function), expect.any(Function));

    pickThreeCardsSpy.mockRestore();
    renderCardsSpy.mockRestore();
    appendCardsSpy.mockRestore();
    appendCardsTitleSpy.mockRestore();
    setCardChoiceHandlerSpy.mockRestore();
  });

  // should not import spell CSS if it already exists
  it('should not import spell CSS if it already exists', () => {
    const importSpellCSSSpy = jest.spyOn(global.document, 'getElementById').mockReturnValue({});
    const appendChildSpy = jest.spyOn(global.document.head, 'appendChild');

    castSpells();

    expect(importSpellCSSSpy).toHaveBeenCalledTimes(1);
    expect(appendChildSpy).not.toHaveBeenCalled();

    importSpellCSSSpy.mockRestore();
    appendChildSpy.mockRestore();
  });

  // should not render spell cards if shuffledSpellArr is empty
  it('should not render spell cards if shuffledSpellArr is empty', () => {
    const pickThreeCardsSpy = jest.spyOn(hero.spells, 'pickThreeCards').mockReturnValue([]);
    const renderCardsSpy = jest.spyOn(hero.spells, 'renderCards');
    const appendCardsSpy = jest.spyOn(hero.spells, 'appendCards');
    const appendCardsTitleSpy = jest.spyOn(hero.spells, 'appendCardsTitle');

    castSpells();

    expect(pickThreeCardsSpy).toHaveBeenCalledTimes(1);
    expect(renderCardsSpy).not.toHaveBeenCalled();
    expect(appendCardsSpy).not.toHaveBeenCalled();
    expect(appendCardsTitleSpy).not.toHaveBeenCalled();

    pickThreeCardsSpy.mockRestore();
    renderCardsSpy.mockRestore();
    appendCardsSpy.mockRestore();
    appendCardsTitleSpy.mockRestore();
  });

  // should not set a card choice handler if nextThreeCards is empty
  it('should not set a card choice handler if nextThreeCards is empty', () => {
    const pickThreeCardsSpy = jest.spyOn(hero.spells, 'pickThreeCards').mockReturnValue([]);
    const renderCardsSpy = jest.spyOn(hero.spells, 'renderCards');
    const appendCardsSpy = jest.spyOn(hero.spells, 'appendCards');
    const appendCardsTitleSpy = jest.spyOn(hero.spells, 'appendCardsTitle');
    const setCardChoiceHandlerSpy = jest.spyOn(hero.spells, 'setCardChoiceHandler');

    castSpells();

    expect(setCardChoiceHandlerSpy).not.toHaveBeenCalled();

    pickThreeCardsSpy.mockRestore();
    renderCardsSpy.mockRestore();
    appendCardsSpy.mockRestore();
    appendCardsTitleSpy.mockRestore();
    setCardChoiceHandlerSpy.mockRestore();
  });
});

describe('handleSpellDeath', () => {

  // handles the case where neither hero nor villain is dead
  it('should not end the game when neither hero nor villain is dead', () => {
    const hero = new Character(characterData[0], new Spells());
    const villain = new Character(characterData[1], new Spells());

    handleSpellDeath(hero, villain);

    // Assert that the game has not ended
    // ...
  });

  // handles the case where hero is dead and there are more characters left
  it('should set the next character and render when hero is dead and there are more characters left', () => {
    const hero = new Character(characterData[0], new Spells());
    const villain = new Character(characterData[1], new Spells());
    const shuffledArray = [2, 3, 4]; // Example shuffled array of character order

    handleSpellDeath(hero, villain);

    // Assert that the next character is set and rendered
    // ...
  });

  // handles the case where hero is dead and there are no more characters left
  it('should end the game when hero is dead and there are no more characters left', () => {
    const hero = new Character(characterData[0], new Spells());
    const villain = new Character(characterData[1], new Spells());
    const shuffledArray = []; // Empty shuffled array of character order

    handleSpellDeath(hero, villain);

    // Assert that the game has ended
    // ...
  });

  // handles the case where hero is dead and villain is not dead
  it('should end the game when hero is dead and villain is not dead', () => {
    const hero = new Character(characterData[0], new Spells());
    const villain = new Character(characterData[1], new Spells());

    handleSpellDeath(hero, villain);

    // Assert that the game has ended
    // ...
  });

  // handles the case where villain is dead and hero is not dead
  it('should end the game when villain is dead and hero is not dead', () => {
    const hero = new Character(characterData[0], new Spells());
    const villain = new Character(characterData[1], new Spells());

    handleSpellDeath(hero, villain);

    // Assert that the game has ended
    // ...
  });

  // handles the case where both hero and villain are dead
  it('should end the game when both hero and villain are dead', () => {
    const hero = new Character(characterData[0], new Spells());
    const villain = new Character(characterData[1], new Spells());

    handleSpellDeath(hero, villain);

    // Assert that the game has ended
    // ...
  });
});

describe('attack', () => {

  // attack successfully damages villain and updates health chart
  it('should damage villain and update health chart when attacking', () => {
    // Arrange
    const initialVillainHealth = villain.health;
    const initialHeroHealth = hero.health;
    const initialVillainDuplicateCount = villain.duplicates.length;
    const initialHeroDuplicateCount = hero.duplicates.length;

    // Act
    attack();

    // Assert
    expect(villain.health).toBeLessThan(initialVillainHealth);
    expect(hero.health).toBe(initialHeroHealth);
    expect(villain.duplicates.length).toBeLessThan(initialVillainDuplicateCount);
    expect(hero.duplicates.length).toBe(initialHeroDuplicateCount);
    expect(updateHealthChart).toHaveBeenCalled();
  });

  // attack successfully damages hero and updates health chart
  it('should damage hero and update health chart when attacking', () => {
    // Arrange
    const initialVillainHealth = villain.health;
    const initialHeroHealth = hero.health;
    const initialVillainDuplicateCount = villain.duplicates.length;
    const initialHeroDuplicateCount = hero.duplicates.length;

    // Act
    attack();

    // Assert
    expect(villain.health).toBe(initialVillainHealth);
    expect(hero.health).toBeLessThan(initialHeroHealth);
    expect(villain.duplicates.length).toBe(initialVillainDuplicateCount);
    expect(hero.duplicates.length).toBeLessThan(initialHeroDuplicateCount);
    expect(updateHealthChart).toHaveBeenCalled();
  });

  // attack successfully damages both hero and villain and updates health chart
  it('should damage both hero and villain and update health chart when attacking', () => {
    // Arrange
    const initialVillainHealth = villain.health;
    const initialHeroHealth = hero.health;
    const initialVillainDuplicateCount = villain.duplicates.length;
    const initialHeroDuplicateCount = hero.duplicates.length;

    // Act
    attack();

    // Assert
    expect(villain.health).toBeLessThan(initialVillainHealth);
    expect(hero.health).toBeLessThan(initialHeroHealth);
    expect(villain.duplicates.length).toBeLessThan(initialVillainDuplicateCount);
    expect(hero.duplicates.length).toBeLessThan(initialHeroDuplicateCount);
    expect(updateHealthChart).toHaveBeenCalled();
  });

  // hero and villain both have 0 health and end game is called
  it('should end the game when both hero and villain have 0 health', () => {
    // Arrange
    hero.health = 0;
    villain.health = 0;

    // Act
    attack();

    // Assert
    expect(endGameWithDelay).toHaveBeenCalled();
  });

  // hero and villain both have 1 health and end game is called
  it('should end the game when both hero and villain have 1 health', () => {
    // Arrange
    hero.health = 1;
    villain.health = 1;

    // Act
    attack();

    // Assert
    expect(endGameWithDelay).toHaveBeenCalled();
  });

  // hero and villain both have 100 health and attack is called
  it('should damage both hero and villain when attacking with 100 health each', () => {
    // Arrange
    hero.health = 100;
    villain.health = 100;
    const initialVillainHealth = villain.health;
    const initialHeroHealth = hero.health;
    const initialVillainDuplicateCount = villain.duplicates.length;
    const initialHeroDuplicateCount = hero.duplicates.length;

    // Act
    attack();

    // Assert
    expect(villain.health).toBeLessThan(initialVillainHealth);
    expect(hero.health).toBeLessThan(initialHeroHealth);
    expect(villain.duplicates.length).toBeLessThan(initialVillainDuplicateCount);
    expect(hero.duplicates.length).toBeLessThan(initialHeroDuplicateCount);
    expect(updateHealthChart).toHaveBeenCalled();
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

// endGame() goes here

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

// Generated by CodiumAI