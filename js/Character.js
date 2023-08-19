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
                                <li>${alive}</li>
                                <li>${race}</li>
                                <li>${skill}</li>
                                <li>${speed}</li>
                                <li>${strength}</li>
                                <li>${intelligence}</li>
                                <li>${weakness}</li>
                                <li>${weapon}</li>
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