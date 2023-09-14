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

// render 3 items
function renderCards(arr) {
    console.log(arr[0].spell_damage)
    const rendering = arr.map((card) => {
        // console.log(card)
        return `
            <div class="spell-card-container">
                <img src="assets/${card.spell_asset_back}" alt="${card.spell_description}">
                <ul>
                    <li>
                        <div class="icon-container">
                            <span class="sword"></span>
                            <span class="information">${card.spell_damage}</span>
                            <span class="caduceus"></span>
                            <span class="information">${card.spell_heal_effect}</span>
                            <span class="skull"></span>
                            <span class="information information-border">${card.spell_drain_effect} </span>
                        </div>
                    </li>
                    <li>
                        <div class="xp-container">
                            <span class="xp">
                            </span>
                            <span class="xp-text">
                                ${card.spell_xp}
                            </span>
                        </div>
                        <span class="description">${card.spell_description}</span>
                    </li>
                </ul>
            </div>
        `
    })
    return rendering
}

const cards = renderCards(nextThreeCards).join('')
console.log(cards)

// append cards into DOM
const parentDiv = document.createElement('div')
parentDiv.setAttribute('class', 'spells-container')
parentDiv.innerHTML = cards
document.getElementById('main-container').appendChild(parentDiv)

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



