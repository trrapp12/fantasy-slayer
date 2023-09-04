function getDiceRollArray(totalDiceCount, diceSides) {
    return new Array(totalDiceCount).fill(0).map(() => {
        return Math.floor((Math.random() * diceSides) + 1)
    })
    // new Array creates a new array with the length of dicecount, .fill fills each spot with the parameter provided.
    // Bad things happen if you fill an array with emptyness.
    // then immediately map over it to fill it with random values
}

function renderDicePlaceHolderArray(totalDiceCount) {
    return new Array(totalDiceCount).fill(0).map(()=> {
        return `
            <div class="dice">
                <div class="dice-inset placeholder-dice">0</div>
            </div>
        `
    }).join('')
}

function renderDefenseDicePlaceHolderArray(totalDiceCount) {
    return new Array(totalDiceCount).fill(0).map(()=> {
        return `
            <div class="dice defend-dice">
                <div class="dice-inset">0</div>
            </div>
        `
    }).join('')
}

function diceAnimation(elClass) {
    const dices = document.querySelectorAll(elClass)
    for (const die of dices) {
        die.classList.add('roll-animation')
    }
}

function hasDuplicates (arr){
    let x = new Set();
    for (const value in arr) {
        x.add((arr[value]))
    }
    return x.size !== Object.keys(arr).length
    // if the size of the set does not match the length of the array 
    // (i.e. the length of the array is longer), then there are duplicates, 
    // because a set can only have unique values, where the array would have that same value multiple times
}

function calculateEnhancedScore (obj, arr){
    // obj is the result of calling findDuplicateIndices(attackScoreArray)  
    // Returns an obj like { '1' : [2, 4]} where the 1 is the number repeated on the dice, 
    //and the array is the indices where they appear on the dice
    // arr is the original attackScoreArray, brought back in again to take into account numbers which weren't repeated
    let total = 0;
    // need to keep this total in here.  Without doing a += within the loop, it can't account for two sets of pairs i.e. a dice roll of [2, 2, 3, 3, 3]
    let addends;
    let multiplicant;
    for (const [key, value] of Object.entries(obj)) {
        multiplicant = Number(key) ** value.length
        addends = arr.filter(arrValue => arrValue !== Number(key)).reduce((acc, curr) => { return acc += curr}, 0) 
        total += addends + multiplicant
    }
    console.log(`calculateEnhancedScore total ${total}`)
    return total
  }
export { calculateEnhancedScore, diceAnimation, getDiceRollArray, hasDuplicates, renderDicePlaceHolderArray, renderDefenseDicePlaceHolderArray } 