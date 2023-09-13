// import the data file
import { spellData } from "./spellsData.js"


// randomize the data
function shuffleArr (arr) {
    for (let i = arr.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
      } 
      return arr; 
}

const shuffledSpellArr = shuffleArr(spellData);
console.log(shuffledSpellArr)

// grab 3 items / remove three items from the deck
function pickThreeCards (arr) {
    return arr.splice(0,3)
}

let nextThreeCards = pickThreeCards(shuffledSpellArr)
console.log(shuffledSpellArr)

// display 3 items

// let player choose card

// calculate spell

// calculate magnitude

// calculate healing

// change bad guy health

// change good guy health

// render display of total lost



// calculate final effect
// escape
// automatic win
// automatic lose
// reverse last play
// ressurect people?
// gain health
// lose health

// update player 1 health

// update player 2 health

// display messaage

// re-render characters 



