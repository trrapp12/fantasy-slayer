import characterData from './character-data.js'
import Character from './character.js'
import spellData from './spells-data.js'
import Spells from "./spells-class.js"
import { updateHealthChart } from "./render-health-chart.js"
import {
    spellAudio, 
    backGroundAudio, 
    outTroAudio, 
    isPlaying, 
    playAudio,
    stopAllAudio,
    playGameMusic
} from './audio.js'

// **********************  REGISTER SERVICE WORKER **********************

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/js/sw.js').then(function(reg) {
      console.log('Yey!', reg);
    }).catch(function(err) {
      console.log('Boo!', err);
    });
  }
// **********************  CONTAINER ELEMENTS **********************

const player1Container = document.getElementById('character-1-art');
const player2Container = document.getElementById('character-2-art');
const mainContainer = document.getElementById('main-container');
const attackButton = document.getElementById('attack-button')

// **********************  GLOBAL VARIABLES **********************

let isWaiting = false;
// this variable is for the message about running out of Mana
let hasNotDisplayedTheMessageBefore = true

// **********************  LOGIC FOR BUILDING ARRAY OF HEROES **********************
let heroArray = ['conscript', 'ignisfatuus', 'mage', 'naqualk', 'soulforge'];
const characterOrder = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    };
    return array
};
let shuffledArray = characterOrder(heroArray)

// **********************  LOGIC FOR RENDERING CHARACTERS **********************

let hero = setNextCharacter()
console.log('HERO: ', hero)
const villain = new Character(characterData.zedfire)
// shuffledSpellArr has to be below hero
let shuffledSpellArr = hero.spells.shuffleArr(spellData);

function render() {
    console.log('inside render function', player1Container, player2Container, hero, villain)
    player1Container.innerHTML = hero.renderCharacter();
    player2Container.innerHTML = villain.renderCharacter();
    setTimeout(enableAttackButton, 3500)
}

render();

// **********************  LOGIC FOR PLAYING MUSIC **********************

playGameMusic()

// **********************  LOGIC FOR SPELLS **********************

function importSpellCSS () {
    if (document.getElementById('spellCSS')) {
        return
    } else {
        const link = document.createElement('link');
        link.rel = 'stylesheet',
        link.type = 'text/css'
        link.href = 'css/spell.css'
        link.id = 'spellCss'
    
        document.head.appendChild(link)
    }
}
function castSpells () {
    // import spells here to prevent heavy load on first page load
    importSpellCSS()
    // set timeout gives imperceptible space to let CSS load before DOM refreshes, or else there is glitchiness
    setTimeout(() => {
        let nextThreeCards = hero.spells.pickThreeCards(shuffledSpellArr) 
        console.log('nextThreeCard' , nextThreeCards)
        let cardRendering = hero.spells.renderCards(nextThreeCards).join('')
        hero.spells.appendCards(cardRendering);
        hero.spells.setCardChoiceHandler(hero.spells.handleCardChoice(hero, nextThreeCards, villain, render, handleSpellDeath), hero.spells.removeAppendedCards)
        console.log('right before if statement, hero.health, villain.health', hero.health, villain.health)
        // can't put the if statement here because it is getting set as a handler on an event listener.  Have to do the logic on the event listener
    }, 100)
}

function handleSpellDeath (hero, villain) {
    console.log('checking if someone is dead after spells were cast', hero.health, villain.health)
            console.log('someone is dead after spells were cast')
            // at this point someone is dead.  Options are: hero and villain, just hero, just villain
            if (hero.dead || villain.dead) {
                if (hero.dead && villain.dead) {
                    // both are dead
                    console.log('After Spells: both dead')
                    endGameWithDelay()
                } else if (hero.dead) {
                    // hero is dead, are there more heroes?
                    console.log('After Spells: hero is dead')
                    isWaiting = true
                    if (shuffledArray.length > 0) {
                        // there are still characters left
                        console.log('new character available')
                        setTimeout(handleCharacterDeathTiming, 2510)
                    } else {
                        // no more characters left
                        console.log('After Spells: all heroes are dead, no more characters left')
                        endGameWithDelay()
                    }
                } else {
                    // villain is dead
                    console.log('After Spells: villain dead')
                    endGameWithDelay()
                } 

            }
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


// **********************  LOGIC FOR BASIC ATTACKS **********************

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
                console.log('hasNotDisplayedTheMessageBefore is false')
                return 
            } else if (shuffledSpellArr.length === 0) {
                console.log('mana has displayed before')
                displayNoManaMessage();
                return
            } else {
                console.log('entering else statement for casting spells')
                castSpells();
                // can't put if logic after this because it evaluates before the event listener
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
            updateHealthChart();
            render()
            if (villain.dead || hero.dead) {
                if (villain.dead && hero.dead) {
                    console.log('Both are dead');
                    endGameWithDelay();
                } else if (villain.dead) {
                    console.log('villain dead');
                    endGameWithDelay();
                } else if (hero.dead) {
                    console.log('hero is dead');
                    isWaiting = true;
                    console.log(shuffledArray);
                    if (shuffledArray.length > 0) {
                        console.log('new character available');
                        setTimeout(handleCharacterDeathTiming, 2510)
                    } else {
                        endGameWithDelay();
                    }
                }
            }
        }
    }
        
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

function handleFlyOuts() {
    hero.renderMultiplesForFlyOutMessage(villain.duplicates);
    villain.renderMultiplesForFlyOutMessage(hero.duplicates);
    hero.resetMultiplesForFlyOutMessage();
    villain.resetMultiplesForFlyOutMessage();
    disableAttackButton()
}

function handleCharacterDeathTiming() {
    console.log('in new character setTimeout')
    hero = setNextCharacter();
    console.log('setNextCharacter to: ', hero)
    render()
    isWaiting = false
}

function setNextCharacter() {
    console.log('entered set next characters')
    const nextCharacterData = characterData[shuffledArray.shift()]
    console.log(nextCharacterData)
    return nextCharacterData ? new Character(nextCharacterData, new Spells()) : {}
}

// **********************  LOGIC FOR ENDING GAME **********************

function endGame() {
    isWaiting = true;
    const villainMovieHTML = `
        <div class="ending-message-container">
        <h1>Fantasy Slayer</h1>
            <h2>As Death descends from heights, and obscurity from the shadows, The hope of men has floundered and the memories of elves are no more...<span class="ending-message">You have lost and Zedfire has won!</span></h2>
            <video id="background-video" autoplay muted>
                <source id="video-source" src="./assets/assets/AdobeStock_630909246.mov" type="video/mp4">
                <track src="./assets/assets/defeat_captions.vtt" kind="captions" srclang="en" label="english_captions" type="text/vtt" default>
            </video>
            <button class="quest-button" id="reset-button">Play Again</button>
        </div>`

    const heroMovieHTML = `
        <div class="ending-message-container">
        <h1>Fantasy Slayer</h1>
            <h2><span class="ending-message">You win!</span>  Only the integrity and fielty of a hero, combined with the unforseeable but infatigable friendship of this group of misfits could have saved us from such evil.</h2>
            <video id="background-video" autoplay muted>
                <source id="video-source" src="./assets/assets/AdobeStock_396656517.mov" type="video/mp4">
                <track src="./assets/assets/victory_captions.vtt" kind="captions" srclang="en" label="english_captions" type="text/vtt" default>
            </video>
            <button class="quest-button" id="reset-button">Play Again</button>
        </div>`
    const tieHTML = `
        <div class="ending-message-container">
        <h1>Fantasy Slayer</h1>
            <h2>The Gods have not seen fit to determine how to which side to tip the scales of justice.  Both Hero and Villain have languised.  <span class="ending-message">It is a draw</span>It seems it will lay with another to determine the outcome of this story.</h2>
            <video id="background-video" autoplay muted>
                <source id="video-source" src="./assets/assets/AdobeStock_583211956.mov" type="video/mp4">
                <track src="./assets/assets/tie_captions.vtt" kind="captions" srclang="en" label="english_captions" type="text/vtt" default>
            </video>
            <button class="quest-button" id="reset-button">Play Again</button>
        </div>`
    
    if (villain.dead && hero.dead && shuffledArray.length === 0) {
        mainContainer.innerHTML = tieHTML;
        const videoSource = document.getElementById('background-video')
        videoSource.load();
        playAudio(outTroAudio,backGroundAudio)
    } else if (villain.dead) {
        mainContainer.innerHTML = heroMovieHTML;
        const videoSource = document.getElementById('background-video')
        videoSource.load();
        playAudio(outTroAudio,backGroundAudio)
    } else {
        mainContainer.innerHTML = villainMovieHTML;
        const videoSource = document.getElementById('background-video')
        videoSource.load();
        playAudio(outTroAudio,backGroundAudio)
    }
    document.getElementById('reset-button').addEventListener('click', () => {
        stopAllAudio();
        location.reload();
    })
}

function endGameWithDelay() {
    setTimeout(() => {
        endGame()
    }, 2500)
}

document.getElementById('attack-button').addEventListener('mousedown', attack)



