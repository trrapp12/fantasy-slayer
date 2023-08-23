import { getDiceRollArray, renderDicePlaceHolderArray, renderDefenseDicePlaceHolderArray} from "./utils.js"

function Character(data) {
    Object.assign(this, data);

    this.diceArray = renderDicePlaceHolderArray(this.totalDiceCount);
    // this is part of the tutorial.  total totalDiceCount is different for each character, found on character data

    this.defendDiceArray = renderDefenseDicePlaceHolderArray(1);
    // this is my own function.  renderDicePlaceHolderArray 

    this.getDefendDiceHTML = function(){
        this.currentDefendDiceScore = getDiceRollArray(1, 10)
        // currentDefendDiceScore is internal to this function only.  
        this.defendDiceArray = this.currentDefendDiceScore.map((num) => {
            return `
                <div class="dice defend-dice">
                    <div class="dice-inset">
                        ${num}
                    </div>
                </div>
            `
        })

    }

    this.getDiceHTML = function () {
        this.currentDiceScore = getDiceRollArray(this.totalDiceCount, 6)
        this.diceArray = this.currentDiceScore.map((num) => {
            return `
                    <div class="dice">
                        <div class="dice-inset">
                        ${num}
                        </div>
                    </div>
                `
        }).join('')
    }

    this.takeDamage = function(attackScoreArray, currentDefendDiceScore) {
        const initialDamage = 0;
        const totalDamage = attackScoreArray.reduce((accumulator, currentVal) => {return accumulator + currentVal}, initialDamage);
        console.log(`totaldamage is ${totalDamage}`)
        const bufferedDamage = totalDamage - (totalDamage * (currentDefendDiceScore[0] * .10));
        console.log(`${this.characterName} took damage, Attack array was ${attackScoreArray}, defendDiceArray was ${currentDefendDiceScore}.Total damage was ${bufferedDamage}`)
    }

    this.renderCharacter = function () {
        const { alive, avatar, backstory, characterCardFlexDirection, characterName, cssOrder, totalDiceCount, distance, elId, catchphrase, characterClass, health, race, relationship, skill, speed, strength, intelligence, weakness, weapon} = this;


            return `
            <h4>${characterName}</h4>
                <div class="character-card" style="flex-direction: ${characterCardFlexDirection}">
                    
                    <div class="character-stats--container" style="order: ${cssOrder}">
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
                    </div>
                    <div class="${characterClass}">
                        <img src=${avatar} alt="sketch of ${characterName}, a ${race} character.">
                    </div>
                    <div class="character-stats--health">
                    ${health}
                    </div>
                    <div class="dice-container">
                    ${this.diceArray}
                    </div>
                    <div class="dice-container">
                    ${this.defendDiceArray}
                    </div>
                    
                </div>
                `
        }
    }

    export default Character