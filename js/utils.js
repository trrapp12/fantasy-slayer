function getDiceRollArray(totalDiceCount, diceSides) {
    return new Array(totalDiceCount).fill(0).map(() => {
        return Math.floor((Math.random() * diceSides) + 1)
    })
    // new Array creates a new array with the length of dicecount, .fill fills each spot with the parameter provided.
    // (Bad things happen if you fill an array with emptyness)
    // It then immediately map over it to fill it with random values
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
    console.log('object is: ', obj)
    console.log('arr is: ', arr)
    // obj is the result of calling findDuplicateIndices(attackScoreArray)  
    // Returns an obj in the form { '1' : [2, 4]} where the 1 is the number repeated on the dice, 
    // and the values in the array are the indices where 1 would appear on the dice
    // arr is the original attackScoreArray, brought back in again to take into account numbers which weren't repeated
    let total = 0;
    console.log('total is :', total)
    // need to keep this total in here.  Without doing a += within the loop, it can't account for two sets of pairs i.e. a dice roll of [2, 2, 3, 3, 3]
    let addends;
    console.log('addends are: ', addends)
    let multiplicant;
    console.log('multiplicants are: ' , multiplicant)
    for (const [key, value] of Object.entries(obj)) {
        console.log('inside for loop, key is: ', key, 'value is: ', value)
        multiplicant = Number(key) ** value.length
        console.log('multiplicant is: ', multiplicant)
        addends = arr.filter(arrValue => arrValue !== Number(key)).reduce((acc, curr) => { return acc += curr}, 0) 
        total += addends + multiplicant
    }
    return total
  }
export { calculateEnhancedScore, diceAnimation, getDiceRollArray, hasDuplicates, renderDicePlaceHolderArray, renderDefenseDicePlaceHolderArray } 