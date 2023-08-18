function getDiceRollArray(totalDiceCount, diceSides) {
    return new Array(totalDiceCount).fill(0).map(() => {
        return Math.floor((Math.random() * diceSides) + 1)
    })
    // new Array creates a new array with the length of dicecount, .fill fills each spot with the parameter provided (bad things happen if you fill an array with emptyness),
    // then immediately map over it to fill it with random values
}

function renderDicePlaceHolderArray(totalDiceCount, diceSides) {
    return new Array(totalDiceCount).fill(0).map(()=> {
        return `
            <div class="placeholder-dice">+</div>
        `;
    }).join('')
}

export {getDiceRollArray, renderDicePlaceHolderArray}