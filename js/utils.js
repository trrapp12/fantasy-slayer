const manaRotateContainer = document.getElementById('mana-rotate');
const mainContainer = document.getElementById('main-container');
let hasNotDisplayedTheMessageBefore = true

function displayNoManaMessage (hasNotDisplayedTheMessageBefore) {
    hasNotDisplayedTheMessageBefore = false
    let messageDiv = document.createElement('div')
    messageDiv.setAttribute('class', 'no-more-spells')
    messageDiv.setAttribute('id', 'no-more-spells')
    messageDiv.innerHTML = `
    <div class="no-spells-message">
        <h1>Mana has been depleted</h1>
        <p>You must continue without any more magical prowess</p>
    </div>`
    mainContainer.appendChild(messageDiv)
    setTimeout(() => {
        document.getElementById('no-more-spells').classList.add('disappear');
        messageDiv.addEventListener('animationend', () => {
            messageDiv.style.display = "none"
        })
    }, 2500)
}

function getDiceRollArray(totalDiceCount, diceSides) {
    if (isNaN(totalDiceCount) || isNaN(diceSides)) {
        throw new Error('getDiceRollArray received a value that is NaN for either totalDiceCount or diceSides')
    } 
    return new Array(totalDiceCount).fill(0).map(() => {
        return Math.floor((Math.random() * diceSides) + 1)
    })
    // new Array creates a new array with the length of dicecount, .fill fills each spot with the parameter provided.
    // (Bad things happen if you fill an array with emptyness)
    // It then immediately maps over it to fill it with random values
}

function renderDicePlaceHolderArray(totalDiceCount) {
    if (isNaN(totalDiceCount)) {
        throw new Error('renderDicePlaceHolderArray received a value that is NaN')
    } 
    if (totalDiceCount < 0 || !Number.isInteger(totalDiceCount)) {
        return ''
    }
    return new Array(totalDiceCount).fill(0).map(()=> {
        return `
            <div class="dice">
                <div class="dice-inset placeholder-dice">0</div>
            </div>
        `
    }).join('')
}

function renderDefenseDicePlaceHolderArray(totalDiceCount) {
    if (isNaN(totalDiceCount)) {
        throw new Error('renderDefenseDicePlaceHolder received a value that is NaN')
    } 
    if (totalDiceCount < 0 || !Number.isInteger(totalDiceCount)) {
        return ''
    }
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

function hideElement (el) {
    if (!el) {
        console.log('hideElement received a value that is either null or undefined');
        return
    } 
    el.style.display = 'none'
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




  
export { manaRotateContainer, mainContainer, hasNotDisplayedTheMessageBefore, displayNoManaMessage, calculateEnhancedScore, getDiceRollArray, hasDuplicates, hideElement, renderDicePlaceHolderArray, renderDefenseDicePlaceHolderArray } 