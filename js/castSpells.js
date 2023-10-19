import {
    spellAudio, 
    backGroundAudio, 
    isPlaying, 
    playAudio
} from './audio.js'

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

    handleCardChoice (hero, arr, villain, render, handleSpellDeath) {
        console.log('entered handleCardChoice')
        return function(evt) {
            let cardClickedIndex = evt.target.id || evt.target.closest('.card-front-back-container').id
                if (hero.skill.filter(item => arr[cardClickedIndex].spell_skills_it_magnifies.includes(item)).length > 0) {
                    // [cardClickedIndex] is set as the id in the rendering earlier to the same index as the array it's in, so it was an easy way to grab that info again instead of creating a global variable
                    villain.health = villain.health - (arr[cardClickedIndex].spell_magnification + arr[cardClickedIndex].spell_damage)
                } else {
                    villain.health = villain.health - arr[cardClickedIndex].spell_damage
                }
                hero.health = (hero.health + arr[cardClickedIndex].spell_heal_effect) - arr[cardClickedIndex].spell_drain_effect
                hero.health <= 0 ? hero.health = 0 : hero.health = hero.health;
                villain.health <= 0 ? villain.health = 0 : villain.health = villain.health;
                // prevents character health from displaying a negative number
                console.log('inside handleCardChoice', hero.health, villain.health)
                if (hero.health <= 0 || villain.health <= 0) {
                    console.log('inside handleCardChoice, someone is dead')
                    setTimeout(() => {
                        render()
                        handleSpellDeath(hero, villain)
                    }, 8150)
                } else {
                    console.log('After Spells: no one is dead')
                    render()
                }
                document.getElementById(`${cardClickedIndex}`).classList.toggle('flip')
                setTimeout(() => {
                    document.getElementById(`${cardClickedIndex}`).classList.toggle('flip')
                    console.log('inside set timeout that handles the card flip')
                },6000) 
        }
    }
    
    setCardChoiceHandler (handler, callback) {
        const cards = document.querySelectorAll('.card-front-back-container')
        let isCardClicked = false;

        function cardClickListener(evt) {
            if (!isCardClicked) {
                handler(evt)
                // playAudio(spellAudio, backGroundAudio)
                isCardClicked = true;
                cards[0].classList.toggle('gather-left-cards');
                cards[2].classList.toggle('gather-right-cards')
                setTimeout( () => {
                    document.getElementById('spells-container').classList.toggle('disappear')
                },6500)
                setTimeout(callCallBack,7000)
            }
        }
        
        
        function callCallBack () {
            cards.forEach(el => el.removeEventListener('click', cardClickListener))
            callback();
        }
      
        setTimeout(() => {
  // remove setTimout.  Just putting it here so I can fix a CSS issue without them disappearing on me
            cards.forEach(el => el.addEventListener('click', cardClickListener))
        }, 300)
        
    }

    returnToGame () {

    }

}

export default Spells

