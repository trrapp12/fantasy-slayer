import characterData from './characterData.js'
import Character from './Character.js'
import spellData from './spellsData.js'
import Spells from "./castSpells.js"

const player1Container = document.getElementById('character-1-art');
const player2Container = document.getElementById('character-2-art');
const mainContainer = document.getElementById('main-container');
const attackButton = document.getElementById('attack-button')

let isWaiting = false;
let hasNotDisplayedTheMessageBefore = true
let myArray = ['conscript', 'ignisfatuus', 'mage', 'naqualk', 'soulforge'];

function render() {
    console.log('inside render function', player1Container, player2Container, hero, villain)
    player1Container.innerHTML = hero.renderCharacter();
    player2Container.innerHTML = villain.renderCharacter();
    setTimeout(enableAttackButton, 3500)
}

function displayNoManaMessage () {
    hasNotDisplayedTheMessageBefore = false
    let messageDiv = document.createElement('div')
    messageDiv.setAttribute('class', 'no-more-spells')
    messageDiv.setAttribute('id', 'no-more-spells')
    messageDiv.innerHTML = `
    <div class="no-spells-message">
        <h1>Mana has been depleted</h1>
        <p>You must continue without any more magical prowess</p>
    </div>`
    mainContainer.appendChild(messageDiv)
    setTimeout(() => {
        console.log('entered set timeout inside displaynoManaMessage')
        document.getElementById('no-more-spells').classList.add('disappear');
        messageDiv.addEventListener('animationend', () => {
            messageDiv.style.display = "none"
            console.log("messageDiv", messageDiv)
        })
    }, 2500)
}

function handleFlyOuts() {
    hero.renderMultiplesForFlyOutMessage(villain.duplicates);
    villain.renderMultiplesForFlyOutMessage(hero.duplicates);
    hero.resetMultiplesForFlyOutMessage();
    villain.resetMultiplesForFlyOutMessage();
    disableAttackButton()
}

function handleSpellDeath (hero, villain) {

    console.log('checking if someone is dead after spells were cast', hero.health, villain.health)
    if (hero.health <= 0 || villain.health <= 0) {
        console.log('one of them has health less than 0')
        if (hero.health <= 0 && villain.health <= 0) {
            console.log('tie')
            setTimeout(() => {
                endGame()
            }, 2510)
        } else if (hero.health <= 0) {
            hero.dead = true;
            console.log('hero died from casting the spell') }
            console.log('hero is dead')
            isWaiting = true
            if (shuffledArray.length > 0) {
                console.log('new character available')
                setTimeout(() => {
                    console.log('in new character setTimeout')
                    hero = setNextCharacter();
                    console.log('setNextCharacter to: ', hero)
                    render()
                    isWaiting = false
                }, 2510)
            } else {
                villain.dead = true;
                console.log('villain died after casting the spell')
                endGame();
            }
    } 
    render()
}

function disableAttackButton () {
    console.log('attackButton.disabled', attackButton.disabled)
    attackButton.disabled = true;
    console.log('attackButton.disabled', attackButton.disabled)
}

function enableAttackButton () {
    console.log('attackButton.disabled', attackButton.disabled)
    attackButton.disabled = false
    console.log('attackButton.disabled', attackButton.disabled)
}

function castSpells (renderFunc) {
    let nextThreeCards = hero.spells.pickThreeCards(shuffledSpellArr) 
    console.log('nextThreeCard' , nextThreeCards)
    let cardRendering = hero.spells.renderCards(nextThreeCards).join('')
    hero.spells.appendCards(cardRendering)
    hero.spells.setCardChoiceHandler(hero.spells.handleCardChoice(hero, nextThreeCards, villain, render, handleSpellDeath), hero.spells.removeAppendedCards)
    // handleSpellDeath(hero, villain)
    // render()
}

function attack() {
    console.log(hero.numberOfTurns)
    console.log("attack function firing" , hero.numberOfTurns)
    if (!isWaiting) {
        console.log('is not waiting')
        // creates a pause
        if (hero.numberOfTurns % 5 === 0 && hero.numberOfTurns > 0) {
            hero.numberOfTurns = hero.numberOfTurns + 1;
            console.log('fifth turn, casting spells')
            // spell every 5th turn
            console.log('!hasNotDisplayedTheMessageBefore' , !hasNotDisplayedTheMessageBefore)
            if (!hasNotDisplayedTheMessageBefore) {
                return 
            } else if (shuffledSpellArr.length === 0) {
                console.log('mana has displayed before')
                displayNoManaMessage();
                return
            } else {
                console.log('entering else statement for casting spells')
                castSpells(render);
                console.log('after castSpells, before render')
            }

        } else {
            console.log('hitting the attack else statement')
            hero.getDiceHTML(hero.currentDiceScore);
            villain.getDiceHTML(villain.currentDiceScore);
            hero.setDefendDiceHTML();
            villain.setDefendDiceHTML();
            hero.takeDamage(villain.currentDiceScore, hero.currentDefendDiceScore);
            villain.takeDamage(hero.currentDiceScore, villain.currentDefendDiceScore);
            disableAttackButton();
            handleFlyOuts();
            render()
            if (villain.dead) {
                console.log('villain dead')
                endGame();
            } else if(hero.dead) {
                console.log('hero is dead')
                isWaiting = true
                if (shuffledArray.length > 0) {
                    console.log('new character available')
                    setTimeout(() => {
                        console.log('in new character setTimeout')
                        hero = setNextCharacter();
                        console.log('setNextCharacter to: ', hero)
                        render()
                        isWaiting = false
                    }, 2510)
                } else {
                    setTimeout(() => {
                        endGame()
                    }, 2510)
                }
            }
        }
    }
        
}

const characterOrder = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    };
    return array
};

let shuffledArray = characterOrder(myArray)

function setNextCharacter() {
    console.log('entered set next characters')
    const nextCharacterData = characterData[shuffledArray.shift()]
    console.log(nextCharacterData)
    return nextCharacterData ? new Character(nextCharacterData, new Spells()) : {}
}

function endGame() {
    isWaiting = true;
    
    const videoSource = document.getElementById('background-video')
    const villainMovieHTML = `<h1 style="margin: 4em auto auto auto; color: white; width: 70%; text-align: center;" >As Death descends from heights, and obscurity from the shadows, The hope of men has floundered and the memories of elves are no more...Zedfire has won!</h1><video id="background-video" autoplay muted>
    <source id="video-source" src="./assets/assets/AdobeStock_630909246.mov" type="video/mp4">
    </video>`
    const heroMovieHTML = `<h1 style="margin: 4em auto auto auto; color: white; width: 70%; text-align: center;" >Only the integrity and fielty of a hero, combined with the unforseeable but infatigable friendship of this group of misfits could have saved us from such evil.</h1><video id="background-video" autoplay muted>
    <source id="video-source" src="./assets/assets/AdobeStock_396656517.mov" type="video/mp4">
    </video>`
    const tieHTML = `<h1 style="margin: 4em auto auto auto; color: white; width: 70%; text-align: center;" >The Gods have not seen fit to determine how to which side to tip the scales of justice.  Both Hero and Villain have languised.  It seems it will lay with another to determine the outcome of this story.</h1><video id="background-video" autoplay muted>
    <source id="video-source" src="./assets/assets/AdobeStock_583211956.mov" type="video/mp4">
    </video>`
    
    if (villain.health <=0 && hero.health <=0) {
        mainContainer.innerHTML = tieHTML;
        videoSource.load()
    } else if (villain.health <=0) {
        mainContainer.innerHTML = heroMovieHTML;
        videoSource.load()
    } else {
        mainContainer.innerHTML = villainMovieHTML;
        videoSource.load()
    }
}

document.getElementById('attack-button').addEventListener('click', attack)



// create characters.  Don't move these up to the top or you get issues with initializing character's methods before characters are initialized

let hero = setNextCharacter()
const villain = new Character(characterData.zedfire)
// shuffledSpellArr has to be below hero
let shuffledSpellArr = hero.spells.shuffleArr(spellData);

render();