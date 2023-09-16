

class Spells {
    constructor(character, opponent) {
        this.character = character;
        this.opponent = opponent
    }

    shuffleArr (arr) {
        for (let i = arr.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1)); 
            [arr[i], arr[j]] = [arr[j], arr[i]]; 
          } 
          return arr; 
    }
    
    pickThreeCards (arr) {
        return arr.splice(0,3)
    }
    
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


    // append cards into DOM
    
    // add choose card functionality
    
    
    // register click
    cardClicked; 

    handleCardChoice (char, arr, opp) {
        document.querySelectorAll(".spell-card-container").forEach(el => el.addEventListener('click', (evt) => {
            let cardClicked = el.id
                // XXXXXXX COME BACK AND FLIP THE CARD HERE, AND MAKE THE OTHERS DISAPPEAR XXXXXXXXX
                // COME BACK AND FIX.  CHECKED HEALTH IS GOING UP, BUT NEED TO ADD A RENDER (PROB IN INDEX.JS) SO IT SHOWS IN THE DISPLAY
                if (char.skill.filter(item => arr[cardClicked].spell_skills_it_magnifies.includes(item)).length > 0) {
                    // [cardClicked] is set as the id in the rendering earlier to the same index as the array it's in, so it was an easy way to grab that info again instead of creating a global variable
                    console.log("need to increase magnitude")
                    // make sure all health additions applied before subtractions
                    console.log('opp.health is ', opp.health, 'arr[cardClicked].spell is', arr[cardClicked].spell_damage, "")
                    opp.health = opp.health - (arr[cardClicked].spell_magnification + arr[cardClicked].spell_damage)
                } else {
                    console.log('dont need to increase magnitude')
                    console.log('opp.health is ', opp.health, 'arr[cardClicked].spell is', "")
                    opp.health = opp.health - arr[cardClicked].spell_damage
                }
                // apply damage to opponent
                char.health = (char.health + arr[cardClicked].spell_heal_effect) - arr[cardClicked].spell_drain_effect
            evt.stopPropagation();
        }, {capture : true}))
    }
    
    // calculate spell
    
    // calculate magnitude
    
    // calculate healing
    
    // change bad guy health
    
    // change good guy health
    
    // render display of total lost

}

export default Spells

