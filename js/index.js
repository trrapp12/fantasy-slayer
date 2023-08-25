import characterData from './characterData.js'
import Character from './Character.js'

const player1Container = document.getElementById('character-1-art');
const player2Container = document.getElementById('character-2-art');
const characterChoiceButton = document.getElementById('character-choice--button')
const characterChoiceInput = document.getElementById('character-choice--input').value

let myArray = ['conscript', 'ignisfatuus', 'mage', 'naqualk', 'soulforge']

console.log(characterOrder(myArray))

const characterOrder = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    };
    return array
};


// window.addEventListener('load', setCharacter)

// function setCharacter() {
//     switch(characterChoiceInput) {
//         case 'conscript':
//             currentCharacter = 'conscript';
//             break;
//         case 'ignisfatuus':
//             currentCharacter = 'ignisfatuus';
//             break;
//         case 'mage':
//             currentCharacter = 'mage';
//             break;
//         case 'naqualk':
//             currentCharacter = 'naqualk';
//             break;
//         case 'conscript':
//             currentCharacter = 'soulforge';
//             break;
//         case 'conscript':
//             currentCharacter = 'soulforge';
//             break;
//         default:
//             currentCharacter = 'conscript'
//     }
//     return currentCharacter
// }

// characterChoiceButton.addEventListener('click', setCharacter)

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
    if (hero.dead || villain.dead) {
        if (characterOrder.length > 0) {
            setNextCharacter(characterOrder)
        } else {
            endGame()
        }
    }
    render()
}

function setNextCharacter() {
    const nextCharacterData = characterData[characterOrder.shift()]
    return nextCharacterData ? new Character(nextCharacterData) : {}
}

function endGame() {
    if (villain.health <=0 && hero.health <=0) {
        console.log('both are dead')
    } else if (villain.health <=0) {
        console.log('villain is dead')
    } else {
        console.log('all heroes are dead.  The Quest is lost.')
    }
}

document.getElementById('attack-button').addEventListener('click', attack)

// create characters
const hero = setNextCharacter()
const villain = new Character(characterData.zedfire)
console.log(villain)

render();