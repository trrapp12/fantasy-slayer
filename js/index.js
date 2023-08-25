import characterData from './characterData.js'
import Character from './Character.js'

const player1Container = document.getElementById('character-1-art');
const player2Container = document.getElementById('character-2-art');
const characterChoiceButton = document.getElementById('character-choice--button')
const characterChoiceInput = document.getElementById('character-choice--input').value

function render() {
    player1Container.innerHTML = hero.renderCharacter();
    player2Container.innerHTML = villain.renderCharacter();
}

function attack() {
    hero.getDiceHTML();
    villain.getDiceHTML();
    hero.getDefendDiceHTML();
    villain.getDefendDiceHTML();
    hero.takeDamage(villain.currentDiceScore, hero.currentDefendDiceScore);
    villain.takeDamage(hero.currentDiceScore, villain.currentDefendDiceScore);
    if (villain.dead) {
        setTimeout(() => {endGame()}, 1000)
    } else if(hero.dead) {
        if (shuffledArray.length > 0) {
            hero = setNextCharacter();
            setTimeout(() => {render()}, 1999)
        }
        else {
            setTimeout(() => {endGame()}, 1000)
        }
    }
    render()
}

let myArray = ['conscript', 'ignisfatuus', 'mage', 'naqualk', 'soulforge']

const characterOrder = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    };
    console.log(array)
    return array
};

let shuffledArray = characterOrder(myArray)

function setNextCharacter() {
    console.log(characterOrder)
    const nextCharacterData = characterData[shuffledArray.shift()]
    return nextCharacterData ? new Character(nextCharacterData) : {}
}


console.log(typeof characterOrder(myArray))

function endGame() {
    const mainContainer = document.getElementById('main-container');
    const videoSource = document.getElementById('background-video')
    const villainMovieHTML = `<h1 style="padding: 2em" >As Death descends from heights, and obscurity from the shadows, The hope of men has floundered and the memories of elves are no more...Zedfire has won!</h1><video id="background-video" autoplay muted>
    <source id="video-source" src="./assets/assets/AdobeStock_630909246.mov" type="video/mp4">
  </video>`
    const heroMovieHTML = `<video id="background-video" autoplay muted>
    <source id="video-source" src="./assets/assets/AdobeStock_396656517.mov" type="video/mp4">
  </video>`

        console.log(videoSource)
    if (villain.health <=0 && hero.health <=0) {
        console.log('both are dead')
    } else if (villain.health <=0) {
        console.log('villain is dead')
        mainContainer.innerHTML = heroMovieHTML;
        videoSource.load()
    } else {
        mainContainer.innerHTML = villainMovieHTML;
        console.log('all heroes are dead.  The Quest is lost.')
        videoSource.load()
    }
}

document.getElementById('attack-button').addEventListener('click', attack)

// create characters
let hero = setNextCharacter()
const villain = new Character(characterData.zedfire)
console.log(villain)

render();