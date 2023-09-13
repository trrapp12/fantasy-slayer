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

// grab 3 items
function pickThreeCards(arr) {
    console.log(arr.slice(0,3))
    return arr.slice(0,3)
}

pickThreeCards(shuffledSpellArr)

// remove those 3 items from the deck

// display 3 items

// let player position items

// let player hit button to confirm selection

// calculate spell

// calculate ????

// calculate magnitude

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



