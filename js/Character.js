import { 
    diceAnimation, 
    calculateEnhancedScore, 
    getDiceRollArray, 
    hasDuplicates, 
    renderDicePlaceHolderArray, 
    renderDefenseDicePlaceHolderArray
} from "./utils.js"

function Character(data) {
    Object.assign(this, data);

    this.diceArrayForRendering = renderDicePlaceHolderArray(this.totalDiceCount);
    // this is part of the tutorial.  total totalDiceCount is different for each character, found on character data

    this.defendDiceArray = renderDefenseDicePlaceHolderArray(1);
    // this is my own function.  renderDicePlaceHolderArray 
    this.globalDefendDiceHTML = ''
    this.getDefendDiceHTML = () => {
        this.currentDefendDiceScore = getDiceRollArray(1, 10)
        // currentDefendDiceScore is internal to this function only.  
        this.defendDiceArray = this.currentDefendDiceScore.map((num) => {
            this.globalDefendDiceHTML = num
            return `
                <div class="dice defend-dice">
                    <div class="dice-inset">
                        ${num}
                    </div>
                </div>
            `
        })
        // console.log(`this.defendDiceArray ${this.defendDiceArray}`)

    }

    this.diceScoreIndexesOfMatches = (arr) => {
        const indexOfDuplicates = [];
        const seenIndexes = {};
    
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] in seenIndexes) {
            indexOfDuplicates.push(seenIndexes[arr[i]]);
            indexOfDuplicates.push(i);
          } else {
            seenIndexes[arr[i]] = i;
          }
        }
        return Array.from(new Set(indexOfDuplicates)).sort((a,b) => a-b);
    }

    this.getDiceHTML = () => {
        this.currentDiceScore = getDiceRollArray(this.totalDiceCount, 6);
        this.indicesToChange = this.diceScoreIndexesOfMatches(this.currentDiceScore)

        this.diceArray = this.currentDiceScore.map((num) => {
            return `
                    <div class="dice">
                        <div class="dice-inset">
                        ${num}
                        </div>
                    </div>
                `
        })
        
        this.indicesToChange.forEach((index) => {
            if (this.diceArray[index])
            this.diceArray[index] = this.diceArray[index].replace('<div class="dice">', '<div class="dice highlighted">');
        })
        this.diceArrayForRendering = this.diceArray.join('');
    }

    this.takeDamage = (attackScoreArray, currentDefendDiceScore) => {
        const initialDamage = 0;
        const valueToIndices = {};
        this.duplicates = {};
        let totalDamage;
        let bufferedDamage;

        const findDuplicateIndices = (arr) => {
                
            arr.forEach((value, index) => {
                if (!valueToIndices[value]) {
                    valueToIndices[value] = [index];
                } else if (valueToIndices[value].length === 1) {
                    valueToIndices[value].push(index);
                    this.duplicates[value] = valueToIndices[value];
                } else {
                    this.duplicates[value].push(index);
                }
            });   
            return this.duplicates;
        };

        if (hasDuplicates(attackScoreArray)) {
            this.duplicateCheck = true;
            totalDamage = calculateEnhancedScore(findDuplicateIndices(attackScoreArray), attackScoreArray)
            console.log(`has duplicates totalDamage = ${totalDamage} attackScoreArray is ${attackScoreArray}, findDuplicateIndices is ${findDuplicateIndices(attackScoreArray)}`)
            bufferedDamage = totalDamage - (totalDamage * (currentDefendDiceScore[0] * .10));
            this.health = this.health - Math.floor(bufferedDamage);
    
        } else {
            this.duplicateCheck = false;
            totalDamage = attackScoreArray.reduce((accumulator, currentVal) => {return accumulator + currentVal}, initialDamage);
            bufferedDamage = totalDamage - (totalDamage * (currentDefendDiceScore[0] * .10));
            this.health = this.health - Math.floor(bufferedDamage);
    
        }
        if (this.health <= 0) {
            this.dead = true;
            this.health = 0;
        }
 }

    this.renderCharacter = () => {
        const { 
            alive, 
            avatar, 
            backstory, 
            characterCardFlexDirection, 
            characterName, 
            cssOrder, 
            dead, 
            totalDiceCount, 
            distance, 
            elId, 
            catchphrase, 
            characterClass, 
            health, 
            originalHealth, 
            race, 
            relationship, 
            skill, 
            speed, 
            strength, 
            intelligence, 
            weakness, 
            weapon
        } = this;

            return `

            <h4>${characterName}</h4>
                <div class="character-card" style="flex-direction: ${characterCardFlexDirection}">
                    
                    <div class="character-stats--container" style="order: ${cssOrder}">
                        <ul>
                            <li class="attributes alive"><p class="attributes-key">Status: </p><p class="attributes-value ${health >= .75 * originalHealth ? 'Belligerent'
                            : health >= .5 * originalHealth ? 'unwielding'
                             : health >= 1 ? 'distraught'
                              : 'ofslægen-slain'}">${health >= .75 * originalHealth ? 'Belligerent'
                             : health >= .5 * originalHealth ? 'unwielding'
                              : health >= 1 ? 'distraught'
                               : 'ofslægen / slain'}</p>
                            </li>
                            <li class="attributes race"><p class="attributes-key">Race: </p><p class="attributes-value">${race}</p></li>
                            <li class="attributes skill"><p class="attributes-key">Skills: </p><p class="attributes-value"> ${skill}</p></li>
                            <li class="attributes speed"><p class="attributes-key">Speed: </p><p class="attributes-value"> ${speed}</p></li>
                            <li class="attributes strength"><p class="attributes-key">Strength: </p><p class="attributes-value"> ${strength}</p></li>
                            <li class="attributes intelligence"><p class="attributes-key">Intelligence: </p><p class="attributes-value"> ${intelligence}</p></li>
                            <li class="attributes weakness"><p class="attributes-key">Weakness: </p><p class="attributes-value"> ${weakness.join(', ')}</p></li>
                            <li class="attributes weapon">
                        </ul>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <div class="${characterClass}">
                                    <img src=${avatar} alt="sketch of ${characterName}, a ${race} character.">
                                </div>
                            </div>
                            <div class="flip-card-back">
                                <p class="backstory">${backstory}</p>
                            </div>
                        </div>
                    </div>
                    <div class="character-stats--health">
                    ${health}
                    </div>
                    <div class="both-dice-container">
                        <div class="dice-container">
                        <div class="real-dice-container">
                        ${this.diceArrayForRendering}
                        </div>
                        <p class="attack-defend-label"> <strong>Feohtende / Attack</strong> </p>
                        </div>
                        <div class="dice-container">
                        <div class="real-dice-container">
                        ${this.defendDiceArray}
                        </div>
                        <p class="attack-defend-label"> <strong> Werede / Defend:</strong> ${characterName === 'Zedfire, Hælend of darkness' ? 'The Dark Lord' : 'You'} defended ${this.globalDefendDiceHTML}0%</p>
                        <div class="elemental"></div>
                        <div class="power-hit">
                            ${
                             this.duplicateCheck && characterClass === 'hero' ? `<p class="power-hit-p">The Spinner, the Giver, and the Inflexible looked warmly upon your fate and blessed your dice with matching pairs.  Your ${characterName}'s attack is increased to${this.duplicates} </p>`
                                : this.duplicateCheck && characterClass === 'villain' ? `<p class="power-hit-p">The Furies, the Fates, the Death-Daimones and Thanatos himself have conspired for your demise.  ${characterName}'s attack is increased to ${this.duplicates} </p>` 
                                :  false && characterClass === 'hero' ? `<p></p>` 
                                :  false && characterClass === 'villain' ? `<p></p>`
                                : `<p></p>`
                            }
                        </div>
                        </div>
                    </div>
                    
                </div>
                `
        }
    }

    export default Character