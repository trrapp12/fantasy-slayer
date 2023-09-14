// import the data file
import { spellData } from "./spellsData.js"
import characterData from './characterData.js'

class Spells {
    constructor(card) {
        this.card = card;
        // not this.hero, because then you're making the hero a child to the card
    }

    // randomize the data
    shuffleArr (arr) {
        for (let i = arr.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1)); 
            [arr[i], arr[j]] = [arr[j], arr[i]]; 
          } 
          return arr; 
    }
    
    shuffledSpellArr = shuffleArr(spellData);
    
    // grab 3 items / remove three items from the deck
    pickThreeCards (arr) {
        return arr.splice(0,3)
    }
    
    nextThreeCards = pickThreeCards(shuffledSpellArr)
    
    // render 3 items
    renderCards(arr) {
        let place = 0;
        console.log(arr[0].spell_damage)
        const rendering = arr.map((card) => {
            place ++;
            // console.log(card)
            return `
                <div class="spell-card-container" id="spell-card-container${place}" data-card-number="${place}">
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
    
    cards = renderCards(nextThreeCards).join('')
    
    appendCards () {
        parentDiv = document.createElement('div')
        parentDiv.setAttribute('class', 'spells-container')
        parentDiv.setAttribute('id', 'spells-container')
        parentDiv.innerHTML = cards
        document.getElementById('main-container').appendChild(parentDiv)
    }


    // append cards into DOM
    
    // add choose card functionality
    
    
    // register click
    cardClicked; 

    handleCardChoice () {
        document.getElementById("spells-container").addEventListener('click', (e) => {
                e.stopPropagation();
                console.log(characterData)
            // check to see if clicking on a card or on background
                if (e.target.dataset.cardNumber) {
                    // console.log(e.target.id)
                    cardClicked = e.target.id
                } else {
                    // console.log("outside of card")
                }
                console.log(cardClicked)
            })
    }
    
    
    
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
}

export default Spells

