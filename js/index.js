import characterData from './characterData.js'
import Character from './Character.js'
import { diceAnimation } from './utils.js';

const player1Container = document.getElementById('character-1-art');
const player2Container = document.getElementById('character-2-art');

let isWaiting = false;

function render() {
    player1Container.innerHTML = hero.renderCharacter();
    player2Container.innerHTML = villain.renderCharacter();
}

function attack() {
    if (!isWaiting) {
        hero.getDiceHTML();
        villain.getDiceHTML();
        hero.getDefendDiceHTML();
        villain.getDefendDiceHTML();
        diceAnimation('.dice')
        hero.takeDamage(villain.currentDiceScore, hero.currentDefendDiceScore);
        villain.takeDamage(hero.currentDiceScore, villain.currentDefendDiceScore);
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
                }, 1000)
            } else {
                setTimeout(() => {
                    endGame()
                }, 1000)
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
    return nextCharacterData ? new Character(nextCharacterData) : {}
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

    if (villain.health <=0 && hero.health <=0) {
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