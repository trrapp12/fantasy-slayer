/**
 * @jest-environment jsdom
 */

const { Spells, shuffleArr, pickThreeCards, renderCards, appendCardsTitle, appendCards, removeAppendedCards, handleCardChoice, setCardChoiceHandler } = require('../js/spells-class.js')

describe('Spells', () => {

    // Spells class can be instantiated with a character and opponent
    it('should instantiate Spells class with character and opponent', () => {
      const character = { name: 'Character' };
      const opponent = { name: 'Opponent' };
      const spells = new Spells(character, opponent);
  
      expect(spells.character).toBe(character);
      expect(spells.opponent).toBe(opponent);
    });

    // shuffleArr method shuffles an array
    it('should shuffle the array', () => {
      const arr = [1, 2, 3, 4, 5];
      const spells = new Spells();
      const shuffledArr = spells.shuffleArr(arr);
  
      expect(shuffledArr).not.toBe(arr);
      expect(shuffledArr.sort()).toEqual(arr.sort());
    });

    // pickThreeCards method returns an array of three cards
    it('should return an array of three cards', () => {
      const arr = [1, 2, 3, 4, 5];
      const spells = new Spells();
      const pickedCards = spells.pickThreeCards(arr);
  
      expect(pickedCards.length).toBe(3);
      expect(arr.length).toBe(2);
    });

    // handleCardChoice method correctly handles spells that magnify skills
    it('should correctly handle spells that magnify skills', () => {
      const hero = { skill: ['skill1', 'skill2'] };
      const arr = [
        { spell_skills_it_magnifies: ['skill1'], spell_magnification: 2, spell_damage: 10 },
        { spell_skills_it_magnifies: ['skill3'], spell_magnification: 0, spell_damage: 5 }
      ];
      const villain = { health: 100 };
      const spells = new Spells(hero, villain);
      const handler = spells.handleCardChoice(hero, arr, villain);
  
      const evt = { target: { id: 0 } };
      handler(evt);
  
      expect(villain.health).toBe(80);
    });

    // handleCardChoice method correctly handles spells that do not magnify skills
    it('should correctly handle spells that do not magnify skills', () => {
      const hero = { skill: ['skill1', 'skill2'] };
      const arr = [
        { spell_skills_it_magnifies: ['skill3'], spell_magnification: 0, spell_damage: 5 },
        { spell_skills_it_magnifies: ['skill4'], spell_magnification: 0, spell_damage: 8 }
      ];
      const villain = { health: 100 };
      const spells = new Spells(hero, villain);
      const handler = spells.handleCardChoice(hero, arr, villain);
  
      const evt = { target: { id: 1 } };
      handler(evt);
  
      expect(villain.health).toBe(92);
    });

    // handleCardChoice method correctly handles spells that heal and drain
    it('should correctly handle spells that heal and drain', () => {
      const hero = { skill: ['skill1', 'skill2'], health: 80 };
      const arr = [
        { spell_skills_it_magnifies: ['skill1'], spell_magnification: 2, spell_damage: 10, spell_heal_effect: 5, spell_drain_effect: 3 },
        { spell_skills_it_magnifies: ['skill3'], spell_magnification: 0, spell_damage: 5, spell_heal_effect: 0, spell_drain_effect: 0 }
      ];
      const villain = { health: 100 };
      const spells = new Spells(hero, villain);
      const handler = spells.handleCardChoice(hero, arr, villain);
  
      const evt = { target: { id: 0 } };
      handler(evt);
  
      expect(hero.health).toBe(72);
      expect(villain.health).toBe(80);
    });
});

describe('shuffleArr', () => {

  // Returns the shuffled array with the same length as the input array
  it('should return a shuffled array with the same length as the input array', () => {
    const spells = new Spells(character, opponent);
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = spells.shuffleArr(arr);
    expect(shuffledArr).toHaveLength(arr.length);
  });

  // Shuffles the array in a random order
  it('should shuffle the array in a random order', () => {
    const spells = new Spells(character, opponent);
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = spells.shuffleArr(arr);
    expect(shuffledArr).not.toEqual(arr);
  });

  // Shuffles the array in a way that each element has an equal chance of being in any position
  it('should shuffle the array in a way that each element has an equal chance of being in any position', () => {
    const spells = new Spells(character, opponent);
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = spells.shuffleArr(arr);
    const count = [0, 0, 0, 0, 0];
    for (let i = 0; i < shuffledArr.length; i++) {
      count[arr.indexOf(shuffledArr[i])] += 1;
    }
    expect(count).toEqual([1, 1, 1, 1, 1]);
  });

  // Returns an empty array when given an empty array
  it('should return an empty array when given an empty array', () => {
    const spells = new Spells(character, opponent);
    const arr = [];
    const shuffledArr = spells.shuffleArr(arr);
    expect(shuffledArr).toEqual([]);
  });

  // Returns an array with one element when given an array with one element
  it('should return an array with one element when given an array with one element', () => {
    const spells = new Spells(character, opponent);
    const arr = [1];
    const shuffledArr = spells.shuffleArr(arr);
    expect(shuffledArr).toEqual([1]);
  });

  // Returns the same array when given an array with two elements
  it('should return the same array when given an array with two elements', () => {
    const spells = new Spells(character, opponent);
    const arr = [1, 2];
    const shuffledArr = spells.shuffleArr(arr);
    expect(shuffledArr).toEqual([1, 2]);
  });
});

describe('pickThreeCards', () => {

  // Returns an array with three elements when given an array with at least three elements
  it('should return an array with three elements when given an array with at least three elements', () => {
    const deck = [
      { spell_asset_back: "fire.png", spell_description: "Fire Spell", spell_damage: 10 },
      { spell_asset_back: "ice.png", spell_description: "Ice Spell", spell_damage: 8 },
      { spell_asset_back: "lightning.png", spell_description: "Lightning Spell", spell_damage: 12 },
      { spell_asset_back: "heal.png", spell_description: "Healing Spell", spell_damage: 0, spell_heal_effect: 10 },
      { spell_asset_back: "drain.png", spell_description: "Drain Spell", spell_damage: 5, spell_drain_effect: 5 },
    ];

    const spells = new Spells(character, opponent);
    const result = spells.pickThreeCards(deck);

    expect(result.length).toBe(3);
  });

  // Returns an array with all elements when given an array with less than three elements
  it('should return an array with all elements when given an array with less than three elements', () => {
    const deck = [
      { spell_asset_back: "fire.png", spell_description: "Fire Spell", spell_damage: 10 },
      { spell_asset_back: "ice.png", spell_description: "Ice Spell", spell_damage: 8 },
    ];

    const spells = new Spells(character, opponent);
    const result = spells.pickThreeCards(deck);

    expect(result.length).toBe(deck.length);
  });

  // Returns an empty array when given an empty array
  it('should return an empty array when given an empty array', () => {
    const deck = [];

    const spells = new Spells(character, opponent);
    const result = spells.pickThreeCards(deck);

    expect(result.length).toBe(0);
  });

  // Returns an array with three elements when given an array with exactly three elements
  it('should return an array with three elements when given an array with exactly three elements', () => {
    const deck = [
      { spell_asset_back: "fire.png", spell_description: "Fire Spell", spell_damage: 10 },
      { spell_asset_back: "ice.png", spell_description: "Ice Spell", spell_damage: 8 },
      { spell_asset_back: "lightning.png", spell_description: "Lightning Spell", spell_damage: 12 },
    ];

    const spells = new Spells(character, opponent);
    const result = spells.pickThreeCards(deck);

    expect(result.length).toBe(3);
  });

  // Returns a new array with the same elements when given an array as input
  it('should return a new array with the same elements when given an array as input', () => {
    const deck = [
      { spell_asset_back: "fire.png", spell_description: "Fire Spell", spell_damage: 10 },
      { spell_asset_back: "ice.png", spell_description: "Ice Spell", spell_damage: 8 },
      { spell_asset_back: "lightning.png", spell_description: "Lightning Spell", spell_damage: 12 },
    ];

    const spells = new Spells(character, opponent);
    const result = spells.pickThreeCards(deck);

    expect(result).not.toBe(deck);
    expect(result).toEqual(expect.arrayContaining(deck));
  });

  // Returns an array with the first three elements when given an array with more than three elements
  it('should return an array with the first three elements when given an array with more than three elements', () => {
    const deck = [
      { spell_asset_back: "fire.png", spell_description: "Fire Spell", spell_damage: 10 },
      { spell_asset_back: "ice.png", spell_description: "Ice Spell", spell_damage: 8 },
      { spell_asset_back: "lightning.png", spell_description: "Lightning Spell", spell_damage: 12 },
      { spell_asset_back: "heal.png", spell_description: "Healing Spell", spell_damage: 0, spell_heal_effect: 10 },
      { spell_asset_back: "drain.png", spell_description: "Drain Spell", spell_damage: 5, spell_drain_effect: 5 },
    ];

    const spells = new Spells(character, opponent);
    const result = spells.pickThreeCards(deck);

    expect(result.length).toBe(3);
    expect(result).toEqual(expect.arrayContaining(deck.slice(0, 3)));
  });
});

describe('renderCards', () => {

  // Should return an array of strings containing HTML elements with class 'card-front-back-container'
  it('should return an array of strings containing HTML elements with class \'card-front-back-container\' when passed an array of objects', () => {
    const arr = [
      {
        spell_asset_back: "fire.png",
        spell_description: "Fire spell",
        spell_damage: 10,
        spell_heal_effect: 0,
        spell_drain_effect: 0,
        spell_xp: 5
      },
      {
        spell_asset_back: "heal.png",
        spell_description: "Healing spell",
        spell_damage: 0,
        spell_heal_effect: 20,
        spell_drain_effect: 0,
        spell_xp: 10
      },
      {
        spell_asset_back: "drain.png",
        spell_description: "Drain spell",
        spell_damage: 5,
        spell_heal_effect: 0,
        spell_drain_effect: 10,
        spell_xp: 8
      }
    ];

    const spells = new Spells(character, opponent);
    const result = spells.renderCards(arr);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(arr.length);

    result.forEach((card) => {
      expect(typeof card).toBe('string');
      expect(card.includes('card-front-back-container')).toBe(true);
    });
  });

  // Should contain an img element with src attribute pointing to an asset in the assets folder
  it('should contain an img element with src attribute pointing to an asset in the assets folder when passed an array of objects', () => {
    const arr = [
      {
        spell_asset_back: "fire.png",
        spell_description: "Fire spell",
        spell_damage: 10,
        spell_heal_effect: 0,
        spell_drain_effect: 0,
        spell_xp: 5
      },
      {
        spell_asset_back: "heal.png",
        spell_description: "Healing spell",
        spell_damage: 0,
        spell_heal_effect: 20,
        spell_drain_effect: 0,
        spell_xp: 10
      },
      {
        spell_asset_back: "drain.png",
        spell_description: "Drain spell",
        spell_damage: 5,
        spell_heal_effect: 0,
        spell_drain_effect: 10,
        spell_xp: 8
      }
    ];

    const spells = new Spells(character, opponent);
    const result = spells.renderCards(arr);

    result.forEach((card) => {
      const imgElement = document.createElement('div');
      imgElement.innerHTML = card;
      const img = imgElement.querySelector('img');
      expect(img).not.toBeNull();
      expect(img.getAttribute('src')).toMatch(/^assets\//);
    });
  });

  // Should contain an img element with alt attribute that matches the spell description
  it('should contain an img element with alt attribute that matches the spell description when passed an array of objects', () => {
    const arr = [
      {
        spell_asset_back: "fire.png",
        spell_description: "Fire spell",
        spell_damage: 10,
        spell_heal_effect: 0,
        spell_drain_effect: 0,
        spell_xp: 5
      },
      {
        spell_asset_back: "heal.png",
        spell_description: "Healing spell",
        spell_damage: 0,
        spell_heal_effect: 20,
        spell_drain_effect: 0,
        spell_xp: 10
      },
      {
        spell_asset_back: "drain.png",
        spell_description: "Drain spell",
        spell_damage: 5,
        spell_heal_effect: 0,
        spell_drain_effect: 10,
        spell_xp: 8
      }
    ];

    const spells = new Spells(character, opponent);
    const result = spells.renderCards(arr);

    result.forEach((card) => {
      const imgElement = document.createElement('div');
      imgElement.innerHTML = card;
      const img = imgElement.querySelector('img');
      expect(img).not.toBeNull();
      expect(img.getAttribute('alt')).toBe(card.spell_description);
    });
  });

  // Should return an empty array when passed an empty array
  it('should return an empty array when passed an empty array', () => {
    const arr = [];

    const spells = new Spells(character, opponent);
    const result = spells.renderCards(arr);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });

  // Should throw an error when passed a non-array argument
  it('should throw an error when passed a non-array argument', () => {
    const spells = new Spells(character, opponent);

    expect(() => {
      spells.renderCards('not an array');
    }).toThrow('Invalid argument: expected an array');
  });
});

describe('appendCardsTitle', () => {

  // Should create an h2 element with id 'spellTitle' and class 'spellTitle'
  it('should create an h2 element with id "spellTitle" and class "spellTitle" when appendCardsTitle is called with a valid parentElId', () => {
    // Arrange
    const parentElId = "main-container";
    const spells = new Spells(character, opponent);

    // Act
    spells.appendCardsTitle(parentElId);

    // Assert
    const spellTitleElement = document.getElementById("spellTitle");
    expect(spellTitleElement).toBeTruthy();
    expect(spellTitleElement.tagName).toBe("H2");
    expect(spellTitleElement.id).toBe("spellTitle");
    expect(spellTitleElement.classList.contains("spellTitle")).toBe(true);
  });

  // Should set the innerHTML of the h2 element to 'Reveal your Sorcery'
  it('should set the innerHTML of the h2 element to "Reveal your Sorcery" when appendCardsTitle is called with a valid parentElId', () => {
    // Arrange
    const parentElId = "main-container";
    const spells = new Spells(character, opponent);

    // Act
    spells.appendCardsTitle(parentElId);

    // Assert
    const spellTitleElement = document.getElementById("spellTitle");
    expect(spellTitleElement.innerHTML).toBe("Reveal your Sorcery");
  });

  // Should prepend the h2 element to the parent element with the given parentElId
  it('should prepend the h2 element to the parent element with the given parentElId when appendCardsTitle is called with a valid parentElId', () => {
    // Arrange
    const parentElId = "main-container";
    const spells = new Spells(character, opponent);

    // Act
    spells.appendCardsTitle(parentElId);

    // Assert
    const parentElement = document.getElementById(parentElId);
    expect(parentElement.firstChild).toBeTruthy();
    expect(parentElement.firstChild.tagName).toBe("H2");
    expect(parentElement.firstChild.id).toBe("spellTitle");
    expect(parentElement.firstChild.classList.contains("spellTitle")).toBe(true);
  });

  // Should throw an error if parentElId is not a string or is an empty string
  it('should throw an error if parentElId is not a string or is an empty string when appendCardsTitle is called', () => {
    // Arrange
    const parentElId = 123;
    const spells = new Spells(character, opponent);

    // Act & Assert
    expect(() => {
      spells.appendCardsTitle(parentElId);
    }).toThrow();
  });

  // Should throw an error if the parent element with the given parentElId does not exist
  it('should throw an error if the parent element with the given parentElId does not exist when appendCardsTitle is called with a valid parentElId', () => {
    // Arrange
    const parentElId = "nonexistent-container";
    const spells = new Spells(character, opponent);

    // Act & Assert
    expect(() => {
      spells.appendCardsTitle(parentElId);
    }).toThrow();
  });

  // Should not modify any other elements in the DOM
  it('should not modify any other elements in the DOM when appendCardsTitle is called with a valid parentElId', () => {
    // Arrange
    const parentElId = "main-container";
    const spells = new Spells(character, opponent);

    // Act
    spells.appendCardsTitle(parentElId);

    // Assert
    const otherElements = document.querySelectorAll("*:not(#spellTitle)");
    expect(otherElements.length).toBe(0);
  });
});

describe('appendCards', () => {

  // Appends a div element to the main container with class 'spells-container' and id 'spells-container'
  it('should append a div element with class \'spells-container\' and id \'spells-container\' to the main container', () => {
    // Initialize the class object
    const spells = new Spells(character, opponent);

    // Invoke the method
    spells.appendCards('');

    // Assert that the div element is appended to the main container
    expect(document.getElementById('main-container').innerHTML).toContain('<div class="spells-container" id="spells-container"></div>');
  });

  // Sets the innerHTML of the appended div element to the passed in 'cards' argument
  it('should set the innerHTML of the appended div element to the passed in \'cards\' argument', () => {
    // Initialize the class object
    const spells = new Spells(character, opponent);

    // Invoke the method
    const cards = '<div>Card 1</div><div>Card 2</div><div>Card 3</div>';
    spells.appendCards(cards);

    // Assert that the innerHTML of the appended div element is equal to the passed in 'cards' argument
    expect(document.getElementById('spells-container').innerHTML).toEqual(cards);
  });

  // The appended div element has the correct class and id attributes
  it('should append a div element with the correct class and id attributes', () => {
    // Initialize the class object
    const spells = new Spells(character, opponent);

    // Invoke the method
    const cards = '<div>Card 1</div><div>Card 2</div><div>Card 3</div>';
    spells.appendCards(cards);

    // Assert that the appended div element has the correct class and id attributes
    const divElement = document.getElementById('spells-container');
    expect(divElement.classList.contains('spells-container')).toBe(true);
    expect(divElement.getAttribute('id')).toEqual('spells-container');
  });

  // 'cards' argument is an empty string
  it('should append a div element with an empty innerHTML when \'cards\' argument is an empty string', () => {
    // Initialize the class object
    const spells = new Spells(character, opponent);

    // Invoke the method with an empty string as 'cards' argument
    spells.appendCards('');

    // Assert that the innerHTML of the appended div element is an empty string
    expect(document.getElementById('spells-container').innerHTML).toEqual('');
  });

  // 'cards' argument is not a string
  it('should append a div element with the string representation of the \'cards\' argument when \'cards\' argument is not a string', () => {
    // Initialize the class object
    const spells = new Spells(character, opponent);

    // Invoke the method with an array as 'cards' argument
    const cards = [{ spell_asset_back: 'fire.png', spell_description: 'Fire spell' }];
    spells.appendCards(cards);

    // Assert that the innerHTML of the appended div element is the string representation of the 'cards' argument
    expect(document.getElementById('spells-container').innerHTML).toEqual(cards.toString());
  });

  // 'cards' argument contains invalid HTML
  it('should append a div element with the escaped HTML of the \'cards\' argument when \'cards\' argument contains invalid HTML', () => {
    // Initialize the class object
    const spells = new Spells(character, opponent);

    // Invoke the method with a string containing invalid HTML as 'cards' argument
    const cards = '<div>Card 1</div><div>Card 2</div><div>Card 3</div><script>alert("Hello")</script>';
    spells.appendCards(cards);

    // Assert that the innerHTML of the appended div element is the escaped HTML of the 'cards' argument
    expect(document.getElementById('spells-container').innerHTML).toEqual('&lt;div&gt;Card 1&lt;/div&gt;&lt;div&gt;Card 2&lt;/div&gt;&lt;div&gt;Card 3&lt;/div&gt;&lt;script&gt;alert("Hello")&lt;/script&gt;');
  });
});

describe('removeAppendedCards', () => {

  // Successfully removes the 'spells-container' child node from the 'main-container' parent node
  it('should remove the \'spells-container\' child node from the \'main-container\' parent node', () => {
    // Initialize the class object
    const spells = new Spells(character, opponent);

    // Create the parent and child nodes
    const parentNode = document.createElement('div');
    parentNode.setAttribute('id', 'main-container');
    const childNode = document.createElement('div');
    childNode.setAttribute('id', 'spells-container');
    parentNode.appendChild(childNode);

    // Call the method
    spells.removeAppendedCards();

    // Check if the child node is removed from the parent node
    expect(parentNode.contains(childNode)).toBe(false);
  });

  // Does not throw an error when attempting to remove non-existent child node
  it('should not throw an error when attempting to remove non-existent child node', () => {
    // Initialize the class object
    const spells = new Spells(character, opponent);

    // Create the parent node without the child node
    const parentNode = document.createElement('div');
    parentNode.setAttribute('id', 'main-container');

    // Call the method
    expect(() => {
      spells.removeAppendedCards();
    }).not.toThrow();
  });

  // Can be called multiple times without causing issues
  it('should be able to be called multiple times without causing issues', () => {
    // Initialize the class object
    const spells = new Spells(character, opponent);

    // Create the parent and child nodes
    const parentNode = document.createElement('div');
    parentNode.setAttribute('id', 'main-container');
    const childNode = document.createElement('div');
    childNode.setAttribute('id', 'spells-container');
    parentNode.appendChild(childNode);

    // Call the method multiple times
    spells.removeAppendedCards();
    spells.removeAppendedCards();
    spells.removeAppendedCards();

    // Check if the child node is removed from the parent node
    expect(parentNode.contains(childNode)).toBe(false);
  });

  // Throws an error if 'main-container' parent node does not exist
  it('should throw an error if \'main-container\' parent node does not exist', () => {
    // Initialize the class object
    const spells = new Spells(character, opponent);

    // Call the method without creating the parent node
    expect(() => {
      spells.removeAppendedCards();
    }).toThrow();
  });

  // Throws an error if 'spells-container' child node does not exist
  it('should throw an error if \'spells-container\' child node does not exist', () => {
    // Initialize the class object
    const spells = new Spells(character, opponent);

    // Create the parent node without the child node
    const parentNode = document.createElement('div');
    parentNode.setAttribute('id', 'main-container');

    // Call the method
    expect(() => {
      spells.removeAppendedCards();
    }).toThrow();
  });
});

describe('handleCardChoice', () => {

  // Successfully handles card choice and updates character and opponent health
  it('should update character and opponent health when card is chosen', () => {
    const hero = {
      health: 100,
      skill: ["fire", "ice"],
      dead: false
    };

    const villain = {
      health: 100,
      dead: false
    };

    const arr = [
      {
        spell_skills_it_magnifies: ["fire"],
        spell_magnification: 10,
        spell_damage: 20,
        spell_heal_effect: 0,
        spell_drain_effect: 0
      },
      {
        spell_skills_it_magnifies: ["ice"],
        spell_magnification: 5,
        spell_damage: 10,
        spell_heal_effect: 0,
        spell_drain_effect: 0
      },
      {
        spell_skills_it_magnifies: ["fire", "ice"],
        spell_magnification: 15,
        spell_damage: 30,
        spell_heal_effect: 0,
        spell_drain_effect: 0
      }
    ];

    const render = jest.fn();
    const handleSpellDeath = jest.fn();
    const numberOfSpellsCast = 3;

    const spells = new Spells(hero, villain);
    const handler = spells.handleCardChoice(
      hero,
      arr,
      villain,
      render,
      handleSpellDeath,
      numberOfSpellsCast
    );

    const evt = { target: { id: 1 } };
    handler(evt);

    expect(hero.health).toBe(90);
    expect(villain.health).toBe(90);
    expect(hero.dead).toBe(false);
    expect(villain.dead).toBe(false);
    expect(render).toHaveBeenCalled();
    expect(handleSpellDeath).not.toHaveBeenCalled();
  });

  // Flips the chosen card and removes it from the deck
  it('should flip the chosen card and remove it from the deck', () => {
    const hero = {
      health: 100,
      skill: ["fire", "ice"],
      dead: false
    };

    const villain = {
      health: 100,
      dead: false
    };

    const arr = [
      {
        spell_skills_it_magnifies: ["fire"],
        spell_magnification: 10,
        spell_damage: 20,
        spell_heal_effect: 0,
        spell_drain_effect: 0
      },
      {
        spell_skills_it_magnifies: ["ice"],
        spell_magnification: 5,
        spell_damage: 10,
        spell_heal_effect: 0,
        spell_drain_effect: 0
      },
      {
        spell_skills_it_magnifies: ["fire", "ice"],
        spell_magnification: 15,
        spell_damage: 30,
        spell_heal_effect: 0,
        spell_drain_effect: 0
      }
    ];

    const render = jest.fn();
    const handleSpellDeath = jest.fn();
    const numberOfSpellsCast = 3;

    const spells = new Spells(hero, villain);
    const handler = spells.handleCardChoice(
      hero,
      arr,
      villain,
      render,
      handleSpellDeath,
      numberOfSpellsCast
    );

    const evt = { target: { id: 1 } };
    handler(evt);

    expect(document.getElementById('1').classList.contains('flip')).toBe(true);
    expect(document.getElementById('1')).not.toBeInTheDocument();
  });
});

describe('setCardChoiceHandler', () => {

  // Clicking a card calls the provided handler function with the correct event object
  it('should call the handler function with the correct event object when a card is clicked', () => {
    // Initialize the class object
    const spells = new Spells(character, opponent);

    // Mock the necessary elements and variables
    const cards = [
      { id: 'card1' },
      { id: 'card2' },
      { id: 'card3' }
    ];
    const evt = { target: { id: 'card1' } };
    let isCardClicked = false;
    let handlerCalled = false;

    // Mock the handler function
    const handler = (event) => {
      expect(event).toEqual(evt); // Assert that the event object is correct
      handlerCalled = true;
    };

    // Mock the callback function
    const callback = jest.fn();

    // Mock the necessary DOM elements and event listeners
    document.querySelectorAll = jest.fn().mockReturnValue(cards);
    cards.forEach((card) => {
      card.addEventListener = jest.fn().mockImplementation((event, listener) => {
        if (event === 'click') {
          listener(evt);
        }
      });
    });

    // Invoke the method under test
    spells.setCardChoiceHandler(handler, callback);

    // Assert that the handler function was called
    expect(handlerCalled).toBe(true);
  });

  // Playing the spell audio and background audio when a card is clicked
  it('should play the spell audio and background audio when a card is clicked', () => {
    // Initialize the class object
    const spells = new Spells(character, opponent);

    // Mock the necessary elements and variables
    const cards = [
      { id: 'card1' },
      { id: 'card2' },
      { id: 'card3' }
    ];
    const evt = { target: { id: 'card1' } };
    let isCardClicked = false;
    let spellAudioPlayed = false;
    let backGroundAudioPlayed = false;

    // Mock the handler function
    const handler = (event) => {
      spellAudioPlayed = true;
      backGroundAudioPlayed = true;
    };

    // Mock the callback function
    const callback = jest.fn();

    // Mock the necessary DOM elements and event listeners
    document.querySelectorAll = jest.fn().mockReturnValue(cards);
    cards.forEach((card) => {
      card.addEventListener = jest.fn().mockImplementation((event, listener) => {
        if (event === 'click') {
          listener(evt);
        }
      });
    });

    // Mock the playAudio function
    playAudio = jest.fn().mockImplementation((spellAudio, backGroundAudio) => {
      spellAudioPlayed = true;
      backGroundAudioPlayed = true;
    });

    // Invoke the method under test
    spells.setCardChoiceHandler(handler, callback);

    // Assert that the spell audio and background audio were played
    expect(spellAudioPlayed).toBe(true);
    expect(backGroundAudioPlayed).toBe(true);
  });

  // Toggling the 'gather-left-cards' and 'gather-right-cards' classes on the first and third cards respectively when a card is clicked
  it('should toggle the classes on the first and third cards when a card is clicked', () => {
    // Initialize the class object
    const spells = new Spells(character, opponent);

    // Mock the necessary elements and variables
    const cards = [
      { id: 'card1', classList: { toggle: jest.fn() } },
      { id: 'card2', classList: { toggle: jest.fn() } },
      { id: 'card3', classList: { toggle: jest.fn() } }
    ];
    const evt = { target: { id: 'card1' } };

    // Mock the handler function
    const handler = (event) => {
      cards[0].classList.toggle('gather-left-cards');
      cards[2].classList.toggle('gather-right-cards');
    };

    // Mock the callback function
    const callback = jest.fn();

    // Mock the necessary DOM elements and event listeners
    document.querySelectorAll = jest.fn().mockReturnValue(cards);
    cards.forEach((card) => {
      card.addEventListener = jest.fn().mockImplementation((event, listener) => {
        if (event === 'click') {
          listener(evt);
        }
      });
    });

    // Invoke the method under test
    spells.setCardChoiceHandler(handler, callback);

    // Assert that the toggle function was called on the first and third cards
    expect(cards[0].classList.toggle).toHaveBeenCalledWith('gather-left-cards');
    expect(cards[2].classList.toggle).toHaveBeenCalledWith('gather-right-cards');
  });
});

// Generated by CodiumAI