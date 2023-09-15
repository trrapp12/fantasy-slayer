

class Spells {
    constructor(character) {
        this.character = character;
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
    
    // grab 3 items / remove three items from the deck
    pickThreeCards (arr) {
        return arr.splice(0,3)
    }
    
    // render 3 items
    renderCards(arr) {
        const rendering = arr.map((card) => {
            // console.log(card)
            return `
                <div class="spell-card-container" id="${arr.indexOf(card)}" data-card-number="${arr.indexOf(card)}">
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
    
    // cards = renderCards(nextThreeCards).join('') move this to function call inside index.js
    
    appendCards (cards) {
        let parentDiv = document.createElement('div')
        parentDiv.setAttribute('class', 'spells-container')
        parentDiv.setAttribute('id', 'spells-container')
        parentDiv.innerHTML = cards
        document.getElementById('main-container').appendChild(parentDiv)
    }


    // append cards into DOM
    
    // add choose card functionality
    
    
    // register click
    cardClicked; 

    handleCardChoice (char, arr) {
        document.getElementById("spells-container").addEventListener('click', (e) => {
            let cardClicked;
                e.stopPropagation();
                console.log("handleClick, character is" , char)
            // check to see if clicking on a card or on background
                if (e.target.dataset.cardNumber) {
                    // XXXXXXX COME BACK AND FLIP THE CARD HERE, AND MAKE THE OTHERS DISAPPEAR XXXXXXXXX
                    cardClicked = e.target.id
                    char.health = char.health + (arr[cardClicked].spell_heal_effect - arr[cardClicked].spell_drain_effect)
                    // checked health is going up, but doesn't show on card because the character and healthbar need a re-render

                    // if () logic check here for magnitude before applying damage to bad guy.  Possibly break this out?
                    // apply damage to opponent

                    // 
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

}

export default Spells

