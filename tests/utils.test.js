/**
 * @jest-environment jsdom
 */

const {getDiceRollArray} = require("../js/utils.js")

describe("utils.js -> getDiceRollArray()", ()=> {
        // Returns an array with length equal to totalDiceCount
        it('should return an array with length equal to totalDiceCount', () => {
            const totalDiceCount = 5;
            const diceSides = 6;
            const result = getDiceRollArray(totalDiceCount, diceSides);
            expect(result.length).toBe(totalDiceCount);
          });
})