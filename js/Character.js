import { getDiceRollArray, renderDicePlaceHolderArray} from "./utils.js"

function Character(data) {
    Object.assign(this, data);

    this.diceArray = renderDicePlaceHolderArray(this.totalDiceCount);

    this.getDiceHTML = function (totalDiceCount) {
        this.currentDiceScore = getDiceRollArray(this.totalDiceCount)
        this.diceArray = this.currentDiceScore.map((num) => {
            return `
                    <div class="dice">${num}</div>
                `
        }).join('')
    }

    this.takeDamage = function () {
        console.log(`{this.name} took damage`)
    }

    this.renderCharacter = function () {
        const { alive, avatar, backstory, characterName, totalDiceCount, distance, elId, catchphrase, characterClass, health, race, relationship, skill, speed, strength, intelligence, weakness, weapon} = this;

            let diceHTML = this.getDiceHTML(totalDiceCount)
            return `
                <div class="character-card">
                    <div class="${characterClass}">
                        <h4>${characterName}</h4>
                        <img src=${avatar} alt="sketch of ${characterName}, a ${race} character.">
                        <div class="character-stats--container">
                            <ul>
                                <li class="attributes alive"><p class="attributes-key">Status: </p><p class="attributes-value">${alive}</p>
                                </li>
                                <li class="attributes race"><p class="attributes-key">Race: </p><p class="attributes-value">${race}</p></li>
                                <li class="attributes skill"><p class="attributes-key">Skills: </p><p class="attributes-value"> ${skill}</p></li>
                                <li class="attributes speed"><p class="attributes-key">Speed: </p><p class="attributes-value"> ${speed}</p></li>
                                <li class="attributes strength"><p class="attributes-key">Strength: </p><p class="attributes-value"> ${strength}</p></li>
                                <li class="attributes intelligence"><p class="attributes-key">Intelligence: </p><p class="attributes-value"> ${intelligence}</p></li>
                                <li class="attributes weakness"><p class="attributes-key">Weakness: </p><p class="attributes-value"> ${weakness}</p></li>
                                <li class="attributes weapon">
                            </ul>
                            <div class="character-stats--health">
                                ${health}
                            </div>
                            <div class="dice-container">
                                ${this.diceArray}
                            </div>
                        </div>
                    </div>
                </div>
                `
        }
    }

    export default Character