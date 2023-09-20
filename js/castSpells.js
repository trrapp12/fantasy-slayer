class Spells {
    constructor(character, opponent) {
        this.character = character;
        this.opponent = opponent
    }

    cardClickedIndex; 

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
            <div class="card-front-back-container" id="${arr.indexOf(card)}">
                <div class="spell-card-front">
                </div>
                <div class="spell-card-container spell-card-back" data-card-number="${arr.indexOf(card)}">
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
                                <span class="description">${card.spell_description}
                                </span>
                        </li>
                    </ul>
                </div>
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

    removeAppendedCards() {
        let parentNode = document.getElementById('main-container')
        let childNode = document.getElementById('spells-container')
        parentNode.removeChild(childNode)
    }
    // create a function to unappend cards???? ^^^^^

    handleCardChoice (char, arr, opp, renderFunc) {
        return function(evt) {
            // console.log(evt , evt.target, evt.target.closest('.card-front-back-container').id)
            let cardClickedIndex = evt.target.id || evt.target.closest('.card-front-back-container').id
                if (char.skill.filter(item => arr[cardClickedIndex].spell_skills_it_magnifies.includes(item)).length > 0) {

                    // [cardClickedIndex] is set as the id in the rendering earlier to the same index as the array it's in, so it was an easy way to grab that info again instead of creating a global variable
                    opp.health = opp.health - (arr[cardClickedIndex].spell_magnification + arr[cardClickedIndex].spell_damage)
                } else {
                    opp.health = opp.health - arr[cardClickedIndex].spell_damage

                }
                char.health = (char.health + arr[cardClickedIndex].spell_heal_effect) - arr[cardClickedIndex].spell_drain_effect
                // func() is the render function that updates the characters new stats visually
                document.getElementById(`${cardClickedIndex}`).classList.toggle('flip')
                char.numberOfTurns = char.numberOfTurns + 1;
                renderFunc()
                setTimeout(() => {
                    document.getElementById(`${cardClickedIndex}`).classList.toggle('flip')
                },4000)
        }
    }
    
    setCardChoiceHandler (handler, callback) {
        const cards = document.querySelectorAll('.card-front-back-container')
        let isCardClicked = false;

        function cardClickListener(evt) {
            if (!isCardClicked) {
                handler(evt)
                isCardClicked = true;
                cards[0].classList.toggle('gather-left-cards');
                cards[2].classList.toggle('gather-right-cards')
                setTimeout( () => {
                    document.getElementById('spells-container').classList.toggle('disappear')
                },5500)
                setTimeout(callCallBack,7000)
            }
        }

        function callCallBack () {
            cards.forEach(el => el.removeEventListener('click', cardClickListener))
            callback();
        }
        cards.forEach(el => el.addEventListener('click', cardClickListener))
    }

    returnToGame () {

    }

}

export default Spells

