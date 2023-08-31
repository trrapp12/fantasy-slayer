import { 
    calculateEnhancedScore, 
    getDiceRollArray, 
    hasDuplicates, 
    renderDicePlaceHolderArray, 
    renderDefenseDicePlaceHolderArray,
} from "./utils.js"

function Character(data) {
    Object.assign(this, data);

    this.diceArrayForRendering = renderDicePlaceHolderArray(this.totalDiceCount);

    this.defendDiceArray = renderDefenseDicePlaceHolderArray(1);
    this.globalDefendDiceHTML = ''
    this.getDefendDiceHTML = () => {
        this.currentDefendDiceScore = getDiceRollArray(1, 10)
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

    this.getDiceHTML = (attackScoreArray) => {

        this.currentDiceScore = getDiceRollArray(this.totalDiceCount, 6);
        this.renderBanner = hasDuplicates(this.currentDiceScore)
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

    // this.specialAttack = (elId, turns) => {
    //     let wait;
    //     if (turns % 5 === 0) {
    //         wait = false;
    //     } else {
    //         wait = true
    //     }
    // }

    this.takeDamage = (attackScoreArray, currentDefendDiceScore) => {
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

         const renderMultiplesForFlyOutMessage = (obj) => {
            console.log('what is obj in renderMultiplesForFlyOutMessage' , obj)
            // 
            let phrase = ''
            // numOfKeys says if there are one or two pairs to be worried about
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    let numTimesRepeated = obj[Object.keys(obj)].length
                    // obj[Object.keys(obj)].map( phrase => phrase += ` X ${key}`)
                    return `what is obj in renderMultiplesForFlyOutMessage in for loop ${numTimesRepeated}. Object.keys(obj) ${key}, phrase ${phrase}`
                }
            }


        }


        if (hasDuplicates(attackScoreArray)) {
            totalDamage = calculateEnhancedScore(findDuplicateIndices(attackScoreArray), attackScoreArray)
            bufferedDamage = totalDamage - (totalDamage * (currentDefendDiceScore[0] * .10));
            this.health = this.health - Math.floor(bufferedDamage);
            console.log(this.duplicates)
            console.log(renderMultiplesForFlyOutMessage(this.duplicates))
    
        } else {
            totalDamage = attackScoreArray.reduce((accumulator, currentVal) => {return accumulator + currentVal}, 0);
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
            catchphrase, 
            characterCardFlexDirection, 
            characterClass, 
            characterName, 
            cssOrder, 
            dead, 
            distance, 
            elId, 
            health, 
            intelligence, 
            originalHealth, 
            race, 
            relationship, 
            skill, 
            speed, 
            strength, 
            renderBanner,
            totalDiceCount, 
            turns,
            weakness, 
            weapon
        } = this;

            return `

            <h4>${characterName}</h4>
                <div class="character-card" style="flex-direction: ${characterCardFlexDirection}">
                    
                    <div class="character-stats--container" style="order: ${cssOrder}">
                        <ul>
                            <li class="attributes alive"><p class="attributes-key">Status: </p><p class="attributes-value ${health >= .75 * originalHealth ? 'belligerent'
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
                        <p class="attack-defend-label"> <strong>Feohtende  ( Attack ) </strong> </p>
                        </div>
                        <div class="dice-container">
                        <div class="real-dice-container">
                        ${this.defendDiceArray}
                        </div>
                        <p class="attack-defend-label"> <strong> Werede  ( Defend ): </strong> ${characterName === 'Zedfire, Hælend of darkness' ? 'The Dark Lord' : 'You'} defended ${this.globalDefendDiceHTML}0%</p>
                        <div class="elemental"></div>
                        <div class="power-hit-hero-container">
                            ${
                                this.renderBanner === true && characterClass === 'hero' ? `<p class="power-hit-hero">The Spinner, the Giver, and the Inflexible looked warmly upon your fate and blessed your dice with matching pairs.  Your ${characterName}'s attack is increased to${this.duplicates} </p>` : `<p></p>`
                            }
                        </div>
                        <div class="power-hit-villain-container">
                            ${
                                this.renderBanner === true && characterClass === 'villain' ? `<p class="power-hit-villain">The Furies, the Fates, the Death-Daimones and Thanatos himself have conspired for your demise.  ${characterName}'s attack is increased to ${this.duplicates} </p>` : `<p></p>`
                            }
                        </div>
                        </div>
                    </div>
                    
                </div>
                `
        }
    }

    export default Character