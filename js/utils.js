function getDiceRollArray(totalDiceCount, diceSides) {
    return new Array(totalDiceCount).fill(0).map(() => {
        return Math.floor((Math.random() * diceSides) + 1)
    })
    // new Array creates a new array with the length of dicecount, .fill fills each spot with the parameter provided.
    // (Bad things happen if you fill an array with emptyness)
    // It then immediately maps over it to fill it with random values
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

function hideElement (element) {
    element.style.display = 'none'
  }

function calculateEnhancedScore (obj, arr){
    let total = 0;
    // Calculate the product of all multiplicants (i.e., repeated number raised to its frequency)
    let multiplicantTotal = Object.entries(obj).map(
        ([key, value]) => Number(key) ** value.length
    ).reduce((a, b) => a * b, 1); // Default value of 1 for multiplication

    // Calculate the sum of numbers not repeated
    let uniqueNumbers = arr.filter(arrValue => !obj.hasOwnProperty(arrValue));
    let sumOfUniques = uniqueNumbers.reduce((acc, curr) => acc + curr, 0);

    // Add the two values together for the final total
    total = multiplicantTotal + sumOfUniques;
    console.log('multiplicantTotal', multiplicantTotal, "sumOfUniques", sumOfUniques, "total", total)
    return total;
  }
  
export { calculateEnhancedScore, getDiceRollArray, hasDuplicates, hideElement, renderDicePlaceHolderArray, renderDefenseDicePlaceHolderArray } 