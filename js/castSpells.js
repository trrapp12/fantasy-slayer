

class Spells {
    constructor(character, opponent) {
        this.character = character;
        this.opponent = opponent
    }

    cardClicked; 

    shuffleArr (arr) {
        for (let i = arr.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1)); 
            [arr[i], arr[j]] = [arr[j], arr[i]]; 
          } 
          return arr; 
    }
    
    // picks three cards and makes sure cards picked are removed from the deck

    pickThreeCards (arr) {
        return arr.splice(0,3)
    }


    // COME BACK AND GET CARDS SET UP WITH CLASS SO THEY ARE TURNED AROUND.
    
    renderCards(arr) {
        const rendering = arr.map((card) => {
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
    
    appendCards (cards) {
        let parentDiv = document.createElement('div')
        parentDiv.setAttribute('class', 'spells-container')
        parentDiv.setAttribute('id', 'spells-container')
        parentDiv.innerHTML = cards
        document.getElementById('main-container').appendChild(parentDiv)
    }

    handleCardChoice (char, arr, opp, func, evt) {

        return function (evt) {
            // console.log(document.querySelector('.spell-card-container'))
                console.log('handleCardChoice.  char is' , char, 'arr is' , arr , 'opp is' , opp, 'renderFunc is' , func, 'evt is' , evt, "evt.target" , evt.target, "evt.target.closest('spell-card-container')" , evt.target.closest('spell-card-container'))
                let cardClicked = evt.target.id || evt.target.closest('.spell-card-container').id
                console.log(cardClicked)
                    // XXXXXXX COME BACK AND FLIP THE CARD HERE, AND MAKE THE OTHERS DISAPPEAR XXXXXXXXX
                    // COME BACK AND FIX.  CHECKED HEALTH IS GOING UP, BUT NEED TO ADD A RENDER (PROB IN INDEX.JS) SO IT SHOWS IN THE DISPLAY
                    if (char.skill.filter(item => arr[cardClicked].spell_skills_it_magnifies.includes(item)).length > 0) {
                        // [cardClicked] is set as the id in the rendering earlier to the same index as the array it's in, so it was an easy way to grab that info again instead of creating a global variable
                        console.log("if statement, opp health before", opp.health)
                        opp.health = opp.health - (arr[cardClicked].spell_magnification + arr[cardClicked].spell_damage)
                        console.log("if statement, opp health after", opp.health)
                    } else {
                        console.log("else statement, opp health before", opp.health)
                        opp.health = opp.health - arr[cardClicked].spell_damage
                        console.log("else statement, opp health before", opp.health)
                    }
                    // apply damage to opponent
                    console.log("char health before", char.health)
                    char.health = (char.health + arr[cardClicked].spell_heal_effect) - arr[cardClicked].spell_drain_effect
                    console.log("char health before", char.health)
                    func()
        }
    }
    
    setCardChoiceHandler (handler) {
        document.querySelectorAll('.spell-card-container').forEach(el => el.addEventListener('click', (evt) => {
            handler(evt)
        }))
    }

    // FLIP CARD THAT IS CHOSEN

    // MAKE OTHER CARDS DISAPPEAR

    // AFTER DELAY, MAKE WHOLE CANVAS DISAPPEAR AND GO BACK TO PLAYING THE GAME

    returnToGame () {

    }

}

export default Spells

