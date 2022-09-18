import { conscript, ignisfatuus, soulforge, naqualk, mage, zedfire } from './characterInfo.js'

const player1Container = document.getElementById('character-1-art');
const player2Container = document.getElementById('character-2-art');

function Character (data) {
    
    Object.assign(this, data)

    this.renderCharacter = function () {
            const {elId, characterClass, characterName, avatar, race, health, weapon, skill, speed, strength, distance, backstory, catchphrase, weakness, relationship, intelligence, alive } = this;

            player1Container.innerHTML = `
                <div class="${characterClass} c1">
                <img src=${avatar}
                    alt="sketch of ${characterName}, a ${race} character.">
                </div>
            `
        }
    }

let Conscript = new Character(conscript);
// let IgnisFatuus = new Character(ignisfatuus);
// let SoulForge = new Character(soulforge);
// let Naqalk =  new CharacterFront(naqualk);
// let Mage = new Character(mage);
// let Zedfire = new Character(zedfire);

Conscript.renderCharacter()