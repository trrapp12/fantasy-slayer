import characterData from './character-data.js'
import Character from './character.js'
import spellData from './spells-data.js'
import Spells from "./spells-class.js"
import { hasNotDisplayedTheMessageBefore,
    mainContainer,
    displayNoManaMessage
 } from "./utils.js"
import { hideElement } from "./utils.js"
import {
    heptagonNode, 
    parseHeptagonArray, 
    hideAPolygon, 
    removeAPolygon,
    polygonArr,
    onSpellCast
} from "./mana-triangle.js"
import { 
    updateHealthChart,
    returnContainerWidth
 } from "./render-health-chart.js"
import {
    spellAudio, 
    backGroundAudio, 
    outTroAudio, 
    isPlaying, 
    playAudio,
    stopAllAudio,
    playGameMusic
} from './audio.js'


console.log('hasNotDisplayedTheMessageBefore is: ', hasNotDisplayedTheMessageBefore, "and displayNoManaMessage is: ", displayNoManaMessage)

// **********************  REGISTER SERVICE WORKER **********************

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/js/sw.js', { type: 'module' })
      .then(function (reg) {
        console.log('Yey!', reg);
      })
      .catch(function (err) {
        console.log('Boo!', err);
      });
  }
  

// ********************** LOCK THE SCREEN ORIENTATION TO LANDSCAPE ******

if (screen.orientation) {
    console.log('screen.orientation true')
    screen.orientation.lock('landscape')
    .then(() => {
        console.log('screen orientation locked to landscape');
    })
    .catch((error)=> {
        console.error('Failed to lock screen orientation: ', error)
    });
} else {
    console.log('Screen orientation api not supported')
}

// **********************  CONTAINER ELEMENTS **********************

const player1Container = document.getElementById('character-1-art');
const player2Container = document.getElementById('character-2-art');
const attackButton = document.getElementById('attack-button')
const manaRotateContainer = document.getElementById('mana-rotate')

// **********************  GLOBAL VARIABLES **********************

let isWaiting = false;
let numberOfSpellsCast = 0
// this variable is for the message about running out of Mana

// this variable will create an array of the polygons that combine to form the Mana Heptagon

// **********************  LOGIC FOR BUILDING ARRAY OF HEROES **********************
let heroArray = ['conscript', 'ignisfatuus', 'mage', 'naqualk', 'soulforge'];
const characterOrder = (array) => {
    if (!Array.isArray(array)) {
        throw new Error ("characterOrder received an input that is not an array")
    }
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    };
    return array
};
let shuffledArray = characterOrder(heroArray)

// **********************  LOGIC FOR RENDERING CHARACTERS **********************

let hero = setNextCharacter()
const villain = new Character(characterData.zedfire)
// shuffledSpellArr has to be below hero
let shuffledSpellArr = hero.spells.shuffleArr(spellData);

function render() {
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
    
    console.log('inside castSpells(), numberOfSpellsCast is: ', numberOfSpellsCast)
    // set timeout gives imperceptible space to let CSS load before DOM refreshes, or else there is glitchiness
    setTimeout(() => {
        let nextThreeCards = hero.spells.pickThreeCards(shuffledSpellArr) 
        let cardRendering = hero.spells.renderCards(nextThreeCards).join('')
        hero.spells.appendCards(cardRendering);
        hero.spells.appendCardsTitle('spells-container');
        hero.spells.setCardChoiceHandler(hero.spells.handleCardChoice(hero, nextThreeCards, villain, render, handleSpellDeath, numberOfSpellsCast), hero.spells.removeAppendedCards)
        // parseHeptagonArray manages the heptagon and subtracts a section each time
        numberOfSpellsCast++
        // can't put the if statement here because it is getting set as a handler on an event listener.  Have to do the logic on the event listener
    }, 100)
}

function handleSpellDeath (hero, villain) {
            // at this point someone is dead.  Options are: hero and villain, just hero, just villain
            if (hero.dead || villain.dead) {
                if (hero.dead && villain.dead) {
                    // both are dead
                    endGameWithDelay()
                } else if (hero.dead) {
                    // hero is dead, are there more heroes?
                    isWaiting = true
                    if (shuffledArray.length > 0) {
                        // there are still characters left
                        setTimeout(handleCharacterDeathTiming, 2510)
                    } else {
                        // no more characters left
                        endGameWithDelay()
                    }
                } else {
                    // villain is dead
                    endGameWithDelay()
                } 

            }
        } 
// **********************  LOGIC FOR BASIC ATTACKS **********************

function attack() {

    if (!isWaiting) {
        // creates a pause
        if (hero.numberOfTurns % 1 === 0 && hero.numberOfTurns > 0 && shuffledSpellArr.length !== 0) {
            hero.numberOfTurns = hero.numberOfTurns + 1;
            // spell every 5th turn
            if (!hasNotDisplayedTheMessageBefore) {
                return 
            } else {
                castSpells();
                // can't put if logic after this because it evaluates before the event listener
            }
        } else {
            hero.getDiceHTML(hero.currentDiceScore);
            villain.getDiceHTML(villain.currentDiceScore);
            hero.setDefendDiceHTML();
            villain.setDefendDiceHTML();
            hero.takeDamage(villain.currentDiceScore, hero.currentDefendDiceScore);
            villain.takeDamage(hero.currentDiceScore, villain.currentDefendDiceScore);
            disableAttackButton();
            handleFlyOuts();
            let containerWidth = returnContainerWidth(document.querySelector('#main-container > div.middle-third > div.middle-third-left-column'))
            updateHealthChart(containerWidth);
            render()
            if (villain.dead || hero.dead) {
                if (villain.dead && hero.dead) {
                    endGameWithDelay();
                } else if (villain.dead) {
                    endGameWithDelay();
                } else if (hero.dead) {
                    isWaiting = true;
                    if (shuffledArray.length > 0) {
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
    attackButton.disabled = true;
}

function enableAttackButton () {
    attackButton.disabled = false
}

function handleFlyOuts() {
    hero.renderMultiplesForFlyOutMessage(villain.duplicates);
    villain.renderMultiplesForFlyOutMessage(hero.duplicates);
    hero.resetMultiplesForFlyOutMessage();
    villain.resetMultiplesForFlyOutMessage();
    disableAttackButton()
}

function handleCharacterDeathTiming() {
    hero = setNextCharacter();
    render()
    isWaiting = false
}

function setNextCharacter() {
    const nextCharacterData = characterData[shuffledArray.shift()]
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
                <source id="video-source" src="./assets/assets/AdobeStock_630909246.webm" type="video/webm">
                <track src="./assets/assets/defeat_captions.vtt" kind="captions" srclang="en" label="english_captions" type="text/vtt" default>
            </video>
            <button class="quest-button" id="reset-button">Play Again</button>
        </div>`

    const heroMovieHTML = `
        <div class="ending-message-container">
        <h1>Fantasy Slayer</h1>
            <h2><span class="ending-message">You win!</span>  Only the integrity and fielty of a hero, combined with the unforseeable but infatigable friendship of this group of misfits could have saved us from such evil.</h2>
            <video id="background-video" autoplay muted>
                <source id="video-source" src="./assets/assets/AdobeStock_396656517.webm" type="video/webm">
                <track src="./assets/assets/victory_captions.vtt" kind="captions" srclang="en" label="english_captions" type="text/vtt" default>
            </video>
            <button class="quest-button" id="reset-button">Play Again</button>
        </div>`
    const tieHTML = `
        <div class="ending-message-container">
        <h1>Fantasy Slayer</h1>
            <h2>The Gods have not seen fit to determine how to which side to tip the scales of justice.  Both Hero and Villain have languised.  <span class="ending-message">It is a draw</span>It seems it will lay with another to determine the outcome of this story.</h2>
            <video id="background-video" autoplay muted>
                <source id="video-source" src="./assets/assets/AdobeStock_583211956.webm" type="video/webm">
                <track src="./assets/assets/tie_captions.vtt" kind="captions" srclang="en" label="english_captions" type="text/vtt" default>
            </video>
            <button class="quest-button" id="reset-button">Play Again</button>
        </div>`
    
    if (villain.dead && hero.dead && shuffledArray.length === 0) {
        hideElement(manaRotateContainer)
        mainContainer.innerHTML = tieHTML;
        const videoSource = document.getElementById('background-video')
        videoSource.load();
        playAudio(outTroAudio,backGroundAudio)
    } else if (villain.dead) {
        hideElement(manaRotateContainer)
        mainContainer.innerHTML = heroMovieHTML;
        const videoSource = document.getElementById('background-video')
        videoSource.load();
        playAudio(outTroAudio,backGroundAudio)
    } else {
        hideElement(manaRotateContainer)
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

module.exports = { characterOrder, importSpellCSS, disableAttackButton, enableAttackButton, endGameWithDelay, handleFlyOuts, handleCharacterDeathTiming, setNextCharacter }