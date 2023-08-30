function getDiceRollArray(totalDiceCount, diceSides) {
    return new Array(totalDiceCount).fill(0).map(() => {
        return Math.floor((Math.random() * diceSides) + 1)
    })
    // new Array creates a new array with the length of dicecount, .fill fills each spot with the parameter provided (bad things happen if you fill an array with emptyness),
    // then immediately map over it to fill it with random values
}

function renderDicePlaceHolderArray(totalDiceCount) {
    return new Array(totalDiceCount).fill(0).map(()=> {
        return `
            <div class="dice">
                <div class="dice-inset placeholder-dice">0</div>
            </div>
        `;
    }).join('')
}

function renderDefenseDicePlaceHolderArray(totalDiceCount) {
    return new Array(totalDiceCount).fill(0).map(()=> {
        return `
            <div class="dice defend-dice">
                <div class="dice-inset">0</div>
            </div>
        `;
    }).join('')
}

function diceAnimation(elClass) {
    const dices = document.querySelectorAll(elClass)
    for (const die of dices) {
        die.classList.add('roll-animation')
    }
}
export { diceAnimation, getDiceRollArray, renderDicePlaceHolderArray, renderDefenseDicePlaceHolderArray } 