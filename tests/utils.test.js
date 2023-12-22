/**
 * @jest-environment jsdom
 */

const {manaRotateContainer, mainContainer, hasNotDisplayedTheMessageBefore, displayNoManaMessage, calculateEnhancedScore, getDiceRollArray, hasDuplicates, hideElement, renderDicePlaceHolderArray, renderDefenseDicePlaceHolderArray} = require("../js/utils.js")

describe("utils.js -> getDiceRollArray()", ()=> {
        // Returns an array with length equal to totalDiceCount
        it('should return an array with length equal to totalDiceCount', () => {
            const totalDiceCount = 5;
            const diceSides = 6;
            const result = getDiceRollArray(totalDiceCount, diceSides);
            expect(result.length).toBe(totalDiceCount);
          });
})

describe("hasDuplicates()", () => {
  it("should return false when given an array that has no duplicates", () => {
    const arr = [1,2,3,4,5];
    const result = hasDuplicates(arr);
    expect(result).toBe(false)
  })
})