/**
 * @jest-environment jsdom
 */
 const { Character, getIndexesOfDiceScoreMatches, setDefendDiceHTML, getDiceHTML, renderMultiplesForFlyOutMessage, resetMultiplesForFlyOutMessage, takeDamage, renderCharacter } = require('../js/Character.js')

describe('Character', () => {

  // can be instantiated with data and optional spells
  it('should instantiate a new Character object with the provided data and spells', () => {
    const data = { characterName: 'John', health: 100 };
    const spells = ['Fireball', 'Healing Touch'];
    const character = new Character(data, spells);

    expect(character.characterName).toBe('John');
    expect(character.health).toBe(100);
    expect(character.spells).toEqual(['Fireball', 'Healing Touch']);
  });

  // can generate HTML for rendering character
  it('should generate the correct HTML for rendering the character', () => {
    const data = { characterName: 'John', health: 100 };
    const character = new Character(data);

    const expectedHTML = `
      <h2>John</h2>
      <div class="character-card">
        ...
      </div>
    `;

    expect(character.renderCharacter()).toBe(expectedHTML);
  });

  // can roll dice and update dice HTML
  it('should roll the dice and update the dice HTML', () => {
    const data = { characterName: 'John', health: 100, totalDiceCount: 3 };
    const character = new Character(data);

    character.getDiceHTML();

    expect(character.currentDiceScore).toHaveLength(3);
    expect(character.diceArrayForRendering).not.toBe('');
  });

  // handle case where attack score array has no duplicates
  it('should calculate the total damage correctly when there are no duplicates in the attack score array', () => {
    const data = { characterName: 'John', health: 100 };
    const character = new Character(data);
    const attackScoreArray = [1, 2, 3];
    const defendDiceScore = [4];

    character.takeDamage(attackScoreArray, defendDiceScore);

    expect(character.totalDamage).toBe(6);
    expect(character.bufferedDamage).toBe(6);
    expect(character.health).toBe(94);
  });

  // handle case where defend dice score array has no duplicates
  it('should calculate the total damage correctly when there are no duplicates in the defend dice score array', () => {
    const data = { characterName: 'John', health: 100 };
    const character = new Character(data);
    const attackScoreArray = [1, 2, 3];
    const defendDiceScore = [4];

    character.takeDamage(attackScoreArray, defendDiceScore);

    expect(character.totalDamage).toBe(6);
    expect(character.bufferedDamage).toBe(6);
    expect(character.health).toBe(94);
  });

  // handle case where health is reduced to zero or less
  it('should set the character as dead and set health to 0 when health is reduced to zero or less', () => {
    const data = { characterName: 'John', health: 100 };
    const character = new Character(data);
    const attackScoreArray = [10, 10, 10];
    const defendDiceScore = [4];

    character.takeDamage(attackScoreArray, defendDiceScore);

    expect(character.dead).toBe(true);
    expect(character.health).toBe(0);
  });
});

describe("getIndexesOfDiceScoreMatches", () => {
    // Returns an empty array when given an empty array
    it('should return an empty array when given an empty array', () => {
        const characterData = {
          totalDiceCount: 6,
        };
        const character = new Character(characterData);
        const diceScore = [];
        const result = character.getIndexesOfDiceScoreMatches(diceScore);
        expect(result).toEqual([]);
      });
})

describe('setDefendDiceHTML', () => {

  // Generates an array representing the player's defensive dice roll
  it('should generate an array representing the player\'s defensive dice roll', () => {
    const characterData = {
      // data for the character
    };

    const character = new Character(characterData);

    character.setDefendDiceHTML();

    expect(character.defendDiceScore).toHaveLength(1);
    expect(character.defendDiceScore[0]).toBeGreaterThanOrEqual(1);
    expect(character.defendDiceScore[0]).toBeLessThanOrEqual(10);
  });

  // Renders HTML to the page for the defensive dice roll
  it('should render HTML for the defensive dice roll', () => {
    const characterData = {
      // data for the character
    };

    const character = new Character(characterData);

    character.setDefendDiceHTML();

    expect(character.defendDiceArray).toHaveLength(1);
    expect(character.defendDiceArray[0]).toContain('<div class="dice defend-dice">');
    expect(character.defendDiceArray[0]).toContain('<div class="dice-inset">');
    expect(character.defendDiceArray[0]).toContain('</div>');
  });

  // Displays the defensive dice for both Player and Villain
  it('should display the defensive dice for both Player and Villain', () => {
    const characterData = {
      // data for the character
    };

    const character = new Character(characterData);

    character.setDefendDiceHTML();

    expect(character.defendDiceArray).toHaveLength(1);
    expect(character.defendDiceArray[0]).toContain('<div class="dice defend-dice">');
    expect(character.defendDiceArray[0]).toContain('<div class="dice-inset">');
    expect(character.defendDiceArray[0]).toContain('</div>');
  });

  // N/A
  it('should not have any specific test case', () => {
    // No specific test case for this behaviour
  });

  // defendDiceScore is hard-coded to always be a single ten-sided die
  it('should always have a single ten-sided die in defendDiceScore', () => {
    const characterData = {
      // data for the character
    };

    const character = new Character(characterData);

    character.setDefendDiceHTML();

    expect(character.defendDiceScore).toHaveLength(1);
    expect(character.defendDiceScore[0]).toBeGreaterThanOrEqual(1);
    expect(character.defendDiceScore[0]).toBeLessThanOrEqual(10);
  });

  // defendDiceValue gets the same number printed out on the defend dice without rendering the dice
  it('should set defendDiceValue to the same number as the defensive dice roll', () => {
    const characterData = {
      // data for the character
    };

    const character = new Character(characterData);

    character.setDefendDiceHTML();

    expect(character.defendDiceValue).toBe(character.defendDiceScore[0]);
  });
});

describe('getDiceHTML', () => {

  // Generates an array of dice rolls with length equal to 'totalDiceCount'
  it('should generate an array of dice rolls with length equal to totalDiceCount', () => {
      const characterData = {
          totalDiceCount: 5,
          renderBanner: false,
          indicesToChange: [],
          diceArray: [],
          diceArrayForRendering: ""
      };

      const character = new Character(characterData);

      character.getDiceHTML();

      expect(character.currentDiceScore.length).toBe(character.totalDiceCount);
  });

  // Checks if there are any duplicate values in the array of dice rolls
  it('should set renderBanner to true if there are duplicate values in the array of dice rolls', () => {
      const characterData = {
          totalDiceCount: 5,
          renderBanner: false,
          indicesToChange: [],
          diceArray: [],
          diceArrayForRendering: ""
      };

      const character = new Character(characterData);

      character.getDiceHTML();

      expect(character.renderBanner).toBe(hasDuplicates(character.currentDiceScore));
  });

  // When 'totalDiceCount' is 0, returns an empty string
  it('should return an empty string when totalDiceCount is 0', () => {
      const characterData = {
          totalDiceCount: 0,
          renderBanner: false,
          indicesToChange: [],
          diceArray: [],
          diceArrayForRendering: ""
      };

      const character = new Character(characterData);

      character.getDiceHTML();

      expect(character.diceArrayForRendering).toBe("");
  });

  // When 'totalDiceCount' is negative, throws an error
  it('should throw an error when totalDiceCount is negative', () => {
      const characterData = {
          totalDiceCount: -5,
          renderBanner: false,
          indicesToChange: [],
          diceArray: [],
          diceArrayForRendering: ""
      };

      const character = new Character(characterData);

      expect(() => {
          character.getDiceHTML();
      }).toThrow();
  });

  // When 'totalDiceCount' is not a number, throws an error
  it('should throw an error when totalDiceCount is not a number', () => {
      const characterData = {
          totalDiceCount: "5",
          renderBanner: false,
          indicesToChange: [],
          diceArray: [],
          diceArrayForRendering: ""
      };

      const character = new Character(characterData);

      expect(() => {
          character.getDiceHTML();
      }).toThrow();
  });

  // If there are duplicates, sets 'renderBanner' to true
  it('should set renderBanner to true if there are duplicates in the array of dice rolls', () => {
      const characterData = {
          totalDiceCount: 5,
          renderBanner: false,
          indicesToChange: [],
          diceArray: [],
          diceArrayForRendering: ""
      };

      const character = new Character(characterData);

      character.getDiceHTML();

      expect(character.renderBanner).toBe(hasDuplicates(character.currentDiceScore));
  });
});

describe('renderMultiplesForFlyOutMessage', () => {

  // Returns a string of repeated keys with "x" symbol in between
  it('should return a string of repeated keys with "x" symbol in between', () => {
    const characterData = {
      characterName: "John",
      diceRolls: {
        "2": [0, 1],
        "3": [2, 3, 4],
        "4": [5, 6, 7, 8],
      },
    };

    const character = new Character(characterData);

    const obj = character.diceRolls;
    const result = character.renderMultiplesForFlyOutMessage(obj);

    expect(result).toBe("2 x 2 x 3 x 3 x 3 x 4 x 4 x 4");
  });

  // Returns an empty string when passed an empty object
  it('should return an empty string when passed an empty object', () => {
    const characterData = {
      characterName: "John",
      diceRolls: {},
    };

    const character = new Character(characterData);

    const obj = character.diceRolls;
    const result = character.renderMultiplesForFlyOutMessage(obj);

    expect(result).toBe("");
  });

  // Returns a string with one key when passed an object with one key and one value
  it('should return a string with one key when passed an object with one key and one value', () => {
    const characterData = {
      characterName: "John",
      diceRolls: {
        "2": [0],
      },
    };

    const character = new Character(characterData);

    const obj = character.diceRolls;
    const result = character.renderMultiplesForFlyOutMessage(obj);

    expect(result).toBe("2");
  });

  // Returns an error when passed a non-object
  it('should return an error when passed a non-object', () => {
    const characterData = {
      characterName: "John",
      diceRolls: "invalid",
    };

    const character = new Character(characterData);

    const obj = character.diceRolls;
    expect(() => {
      character.renderMultiplesForFlyOutMessage(obj);
    }).toThrow();
  });

  // Returns an error when passed an object with non-numeric values
  it('should return an error when passed an object with non-numeric values', () => {
    const characterData = {
      characterName: "John",
      diceRolls: {
        "2": [0],
        "invalid": [1, 2],
      },
    };

    const character = new Character(characterData);

    const obj = character.diceRolls;
    expect(() => {
      character.renderMultiplesForFlyOutMessage(obj);
    }).toThrow();
  });
});

describe('resetMultiplesForFlyOutMessage', () => {

  // Method resets the 'duplicates' property to an empty object when called
  it('should reset the duplicates property to an empty object', () => {
    const characterData = {
      name: "John",
      spells: ["Fireball", "Healing"],
      // other properties...
    };

    const john = new Character(characterData);
    john.duplicates = { a: [1, 2], b: [3, 4] };

    john.resetMultiplesForFlyOutMessage();

    expect(john.duplicates).toEqual({});
  });

  // 'duplicates' property is already an empty object
  it('should not modify the duplicates property if it is already an empty object', () => {
    const characterData = {
      name: "John",
      spells: ["Fireball", "Healing"],
      // other properties...
    };

    const john = new Character(characterData);
    john.duplicates = {};

    john.resetMultiplesForFlyOutMessage();

    expect(john.duplicates).toEqual({});
  });

  // 'duplicates' property is null or undefined
  it('should not modify the duplicates property if it is null or undefined', () => {
    const characterData = {
      name: "John",
      spells: ["Fireball", "Healing"],
      // other properties...
    };

    const john = new Character(characterData);
    john.duplicates = null;

    john.resetMultiplesForFlyOutMessage();

    expect(john.duplicates).toBeNull();

    john.duplicates = undefined;

    john.resetMultiplesForFlyOutMessage();

    expect(john.duplicates).toBeUndefined();
  });

  // Method does not modify any other properties of the 'Character' class
  it('should not modify any other properties of the Character class', () => {
    const characterData = {
      name: "John",
      spells: ["Fireball", "Healing"],
      // other properties...
    };

    const john = new Character(characterData);
    const originalProperties = { ...john };

    john.resetMultiplesForFlyOutMessage();

    expect(john).toEqual(originalProperties);
  });

  // Method does not have any side effects
  it('should not have any side effects when called', () => {
    const characterData = {
      name: "John",
      spells: ["Fireball", "Healing"],
      // other properties...
    };

    const john = new Character(characterData);
    const originalProperties = { ...john };

    john.resetMultiplesForFlyOutMessage();

    expect(john).toEqual(originalProperties);
  });

  // Method can be called multiple times without causing issues
  it('should be able to be called multiple times without causing issues', () => {
    const characterData = {
      name: "John",
      spells: ["Fireball", "Healing"],
      // other properties...
    };

    const john = new Character(characterData);
    john.duplicates = { a: [1, 2], b: [3, 4] };

    john.resetMultiplesForFlyOutMessage();
    expect(john.duplicates).toEqual({});

    john.resetMultiplesForFlyOutMessage();
    expect(john.duplicates).toEqual({});
  });
});

describe('takeDamage', () => {

  // Calculates total damage correctly when there are no duplicates and defends with one dice
  it('should calculate total damage correctly when there are no duplicates and defends with one dice', () => {
    const characterData = {
      health: 100,
      defendDiceScore: [9],
      totalDiceCount: 5
    };

    const attackScoreArray = [3, 3, 4, 5, 6];
    const defendDiceScore = characterData.defendDiceScore;

    const character = new Character(characterData);
    character.takeDamage(attackScoreArray, defendDiceScore);

    expect(character.totalDamage).toBe(21);
    expect(character.bufferedDamage).toBe(18.9);
    expect(character.health).toBe(81);
    expect(character.dead).toBe(false);
    expect(character.numberOfTurns).toBe(1);
  });

  // Calculates total damage correctly when there are duplicates and defends with one dice
  it('should calculate total damage correctly when there are duplicates and defends with one dice', () => {
    const characterData = {
      health: 100,
      defendDiceScore: [9],
      totalDiceCount: 5
    };

    const attackScoreArray = [3, 3, 4, 4, 6];
    const defendDiceScore = characterData.defendDiceScore;

    const character = new Character(characterData);
    character.takeDamage(attackScoreArray, defendDiceScore);

    expect(character.totalDamage).toBe(23);
    expect(character.bufferedDamage).toBe(20.7);
    expect(character.health).toBe(79);
    expect(character.dead).toBe(false);
    expect(character.numberOfTurns).toBe(1);
  });

  // Calculates total damage correctly when there are duplicates and defends with one dice, and rounds down the buffered damage
  it('should calculate total damage correctly when there are duplicates and defends with one dice, and rounds down the buffered damage', () => {
    const characterData = {
      health: 100,
      defendDiceScore: [9],
      totalDiceCount: 5
    };

    const attackScoreArray = [3, 3, 4, 4, 6];
    const defendDiceScore = characterData.defendDiceScore;

    const character = new Character(characterData);
    character.takeDamage(attackScoreArray, defendDiceScore);

    expect(character.totalDamage).toBe(23);
    expect(character.bufferedDamage).toBe(20.7);
    expect(character.health).toBe(79);
    expect(character.dead).toBe(false);
    expect(character.numberOfTurns).toBe(1);
  });

  // Calculates total damage correctly when there are duplicates and defends with zero dice
  it('should calculate total damage correctly when there are duplicates and defends with zero dice', () => {
    const characterData = {
      health: 100,
      defendDiceScore: [0],
      totalDiceCount: 5
    };

    const attackScoreArray = [3, 3, 4, 4, 6];
    const defendDiceScore = characterData.defendDiceScore;

    const character = new Character(characterData);
    character.takeDamage(attackScoreArray, defendDiceScore);

    expect(character.totalDamage).toBe(20);
    expect(character.bufferedDamage).toBe(20);
    expect(character.health).toBe(80);
    expect(character.dead).toBe(false);
    expect(character.numberOfTurns).toBe(1);
  });

  // Calculates total damage correctly when there are duplicates and defends with more than one dice
  it('should calculate total damage correctly when there are duplicates and defends with more than one dice', () => {
    const characterData = {
      health: 100,
      defendDiceScore: [9, 8],
      totalDiceCount: 5
    };

    const attackScoreArray = [3, 3, 4, 4, 6];
    const defendDiceScore = characterData.defendDiceScore;

    const character = new Character(characterData);
    character.takeDamage(attackScoreArray, defendDiceScore);

    expect(character.totalDamage).toBe(23);
    expect(character.bufferedDamage).toBe(20.7);
    expect(character.health).toBe(79);
    expect(character.dead).toBe(false);
    expect(character.numberOfTurns).toBe(1);
  });

  // Calculates total damage correctly when there are no duplicates and defends with zero dice
  it('should calculate total damage correctly when there are no duplicates and defends with zero dice', () => {
    const characterData = {
      health: 100,
      defendDiceScore: [0],
      totalDiceCount: 5
    };

    const attackScoreArray = [3, 4, 5, 6, 2];
    const defendDiceScore = characterData.defendDiceScore;

    const character = new Character(characterData);
    character.takeDamage(attackScoreArray, defendDiceScore);

    expect(character.totalDamage).toBe(20);
    expect(character.bufferedDamage).toBe(20);
    expect(character.health).toBe(80);
    expect(character.dead).toBe(false);
    expect(character.numberOfTurns).toBe(1);
  });
});

// renderCharacter will need special attention as these tests aren't very indicative of what it does
describe('renderCharacter', () => {

  // Renders the character's name, attributes, avatar, health chart, dice containers, and attack/defend labels
  it('should render the characters name, attributes, avatar, health chart, dice containers, and attack/defend labels', () => {
    const characterData = {
      alive: true,
      avatar: "path/to/avatar.png",
      currentDiceScore: [1, 2, 3, 4, 5, 6],
      backstory: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      catchphrase: "I am the mighty warrior!",
      characterCardFlexDirection: "row",
      characterClass: "hero",
      characterName: "John Doe",
      cssOrder: 1,
      dead: false,
      defendDiceArray: [1],
      displayMessageObj: {},
      duplicates: {},
      diceArrayForRendering: "",
      distance: 10,
      elId: "character1",
      defendDiceValue: "",
      health: 100,
      intelligence: 80,
      masterString: "Master",
      messages: "",
      originalHealth: 100,
      race: "Human",
      relationship: "Friend",
      skill: ["Swordsmanship", "Archery"],
      speed: 50,
      strength: 70,
      renderBanner: false,
      totalDiceCount: 6,
      weakness: ["Magic"],
      weapon: "Sword"
    };

    const character = new Character(characterData);
    const characterHTML = character.renderCharacter();

    // Assertions
    expect(characterHTML).toContain("<h2>John Doe</h2>");
    expect(characterHTML).toContain("Status: ");
    expect(characterHTML).toContain("Race: Human");
    expect(characterHTML).toContain("Skills: Swordsmanship Archery");
    expect(characterHTML).toContain("Speed: 50");
    expect(characterHTML).toContain("Strength: 70");
    expect(characterHTML).toContain("Intelligence: 80");
    expect(characterHTML).toContain("Weakness: Magic");
    expect(characterHTML).toContain("Feohtende  ( Attack )");
    expect(characterHTML).toContain("Werede  ( Defend ): You defended 0%");
  });

  // Displays the correct status based on the character's health
  it('should display the correct status based on the characters health', () => {
    const characterData = {
      alive: true,
      avatar: "path/to/avatar.png",
      currentDiceScore: [1, 2, 3, 4, 5, 6],
      backstory: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      catchphrase: "I am the mighty warrior!",
      characterCardFlexDirection: "row",
      characterClass: "hero",
      characterName: "John Doe",
      cssOrder: 1,
      dead: false,
      defendDiceArray: [1],
      displayMessageObj: {},
      duplicates: {},
      diceArrayForRendering: "",
      distance: 10,
      elId: "character1",
      defendDiceValue: "",
      health: 100,
      intelligence: 80,
      masterString: "Master",
      messages: "",
      originalHealth: 100,
      race: "Human",
      relationship: "Friend",
      skill: ["Swordsmanship", "Archery"],
      speed: 50,
      strength: 70,
      renderBanner: false,
      totalDiceCount: 6,
      weakness: ["Magic"],
      weapon: "Sword"
    };

    const character = new Character(characterData);
    const characterHTML = character.renderCharacter();

    // Assertions
    expect(characterHTML).toContain("Status: empowered");
  });
});

// Generated by CodiumAI