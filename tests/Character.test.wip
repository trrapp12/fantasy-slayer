/**
 * @jest-environment jsdom
 */
 const { Character, getIndexesOfDiceScoreMatches } = require('../js/Character.js')


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