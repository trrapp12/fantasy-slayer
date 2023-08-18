import characterData from './characterData.js'
import Character from './Character.js'

const player1Container = document.getElementById('character-1-art');
const player2Container = document.getElementById('character-2-art');
const characterChoiceButton = document.getElementById('character-choice--button')
const characterChoiceInput = document.getElementById('character-choice--input').value

let currentCharacter = '';

window.addEventListener('load', setCharacter)

function setCharacter() {
    switch(characterChoiceInput) {
        case 'conscript':
            currentCharacter = 'conscript';
            break;
        case 'ignisfatuus':
            currentCharacter = 'ignisfatuus';
            break;
        case 'mage':
            currentCharacter = 'mage';
            break;
        case 'naqualk':
            currentCharacter = 'naqualk';
            break;
        case 'conscript':
            currentCharacter = 'soulforge';
            break;
        case 'conscript':
            currentCharacter = 'soulforge';
            break;
        default:
            currentCharacter = 'conscript'
    }
    return currentCharacter
}

characterChoiceButton.addEventListener('click', setCharacter)

function render(currentCharacter, villian) {
    player1Container.innerHTML = hero.getCharacterHTML();
    player2Container.innerHTML = villain.getCharacterHTML();
}

function attack() {
    console.log('attack happened')
    render()
}

document.getElementById('attack-button').addEventListener('click', attack)

const hero = new Character(characterData.${currentCharacter})
const villian = new Character(characterData.zedfire)

render();