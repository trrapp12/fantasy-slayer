import characterData from './characterData.js'
import Character from './Character.js'
import spellData from './spellsData.js'
import Spells from "./castSpells.js"

const player1Container = document.getElementById('character-1-art');
const player2Container = document.getElementById('character-2-art');


let isWaiting = false;

function render() {
    player1Container.innerHTML = hero.renderCharacter();
    player2Container.innerHTML = villain.renderCharacter();
}

function attack() {
    console.log(hero)
    if (!isWaiting) {
        if (hero.numberOfTurns % 5 === 0 && hero.numberOfTurns > 0) {
            // put spell logic in here
            let shuffledSpellArr = hero.spells.shuffleArr(spellData);
            // console.log(shuffledSpellArr)
            let nextThreeCards = hero.spells.pickThreeCards(shuffledSpellArr) 
            console.log(nextThreeCards)
            let cards = hero.spells.renderCards(nextThreeCards).join('')
            hero.spells.appendCards(cards)
            hero.spells.handleCardChoice(hero, nextThreeCards, villain)
            render()
            console.log('render()')
            if (villain.dead) {
                endGame();
            } else if(hero.dead) {
                isWaiting = true
                if (shuffledArray.length > 0) {
                    setTimeout(() => {
                        hero = setNextCharacter();
                        render()
                        isWaiting = false
                    }, 2510)
                } else {
                    setTimeout(() => {
                        endGame()
                    }, 2510)
                }
            }
        } else {
            hero.getDiceHTML(hero.currentDiceScore);
            villain.getDiceHTML(villain.currentDiceScore);
            hero.setDefendDiceHTML();
            villain.setDefendDiceHTML();
            hero.takeDamage(villain.currentDiceScore, hero.currentDefendDiceScore);
            villain.takeDamage(hero.currentDiceScore, villain.currentDefendDiceScore);
            hero.renderMultiplesForFlyOutMessage(villain.duplicates);
            villain.renderMultiplesForFlyOutMessage(hero.duplicates);
            hero.resetMultiplesForFlyOutMessage();
            villain.resetMultiplesForFlyOutMessage();
            render()
            if (villain.dead) {
                endGame();
            } else if(hero.dead) {
                isWaiting = true
                if (shuffledArray.length > 0) {
                    setTimeout(() => {
                        hero = setNextCharacter();
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

let myArray = ['conscript', 'ignisfatuus', 'mage', 'naqualk', 'soulforge']

const characterOrder = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    };
    return array
};

let shuffledArray = characterOrder(myArray)

function setNextCharacter() {
    const nextCharacterData = characterData[shuffledArray.shift()]
    return nextCharacterData ? new Character(nextCharacterData, new Spells()) : {}
}

function endGame() {
    isWaiting = true;
    const mainContainer = document.getElementById('main-container');
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

// create characters
let hero = setNextCharacter()
const villain = new Character(characterData.zedfire)

render();