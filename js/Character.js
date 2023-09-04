import { 
    calculateEnhancedScore, 
    getDiceRollArray, 
    hasDuplicates, 
    renderDicePlaceHolderArray, 
    renderDefenseDicePlaceHolderArray,
} from "./utils.js"

class Character {

    constructor(data) {
        Object.assign(this, data);
        this.diceArrayForRendering = renderDicePlaceHolderArray(this.totalDiceCount);
        this.defendDiceArray = renderDefenseDicePlaceHolderArray(1);
        this.defendDiceValue = ''
    }
    
    getIndexesOfDiceScoreMatches (arr) {
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

    setDefendDiceHTML () {
        this.defendDiceScore = getDiceRollArray(1, 10)
        // this is hard coded because each player will always only have 1 10-sided die
        this.defendDiceArray = this.defendDiceScore.map((num) => {
            this.defendDiceValue = num
            // defendDiceValue gets the same number printed out on the defend dice without rendering the dice
            return `
                <div class="dice defend-dice">
                    <div class="dice-inset">
                        ${num}
                    </div>
                </div>
            `
        })

    }

    getDiceHTML () {
        this.currentDiceScore = getDiceRollArray(this.totalDiceCount, 6);
        console.log(`this.currentDiceScore = getDiceRollArray(this.totalDiceCount, 6);`)
        console.log(this.characterName, this.currentDiceScore)
        this.renderBanner = hasDuplicates(this.currentDiceScore)
        this.indicesToChange = this.getIndexesOfDiceScoreMatches(this.currentDiceScore)
        this.diceArray = this.currentDiceScore.map((num) => {
            console.log(`dicearray creation`, num)
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


    renderMultiplesForFlyOutMessage (obj) {
        console.log('what is obj in renderMultiplesForFlyOutMessage', obj , 'for character' , this.characterName);
        let messagesArr = [];  
        for (const [key, value] of Object.entries(obj)) {
            // Repeat the key for value.length times
            let repeatedKey = Array(value.length).fill(key).join(" x ");
            messagesArr.push(`${repeatedKey}`);
        }
        // console.log(`[...messagesArr].join(' x ') is ${[...messagesArr].join(' x ')}`)
        this.messages = [...messagesArr].join(' x ');
        console.log('renderMultiplesForFlyOutMessage(this.duplicates, this.duplicates is' , this.characterName , ' this.messages is ' , this.messages)
        return [...messagesArr].join(' x ')
    }

    takeDamage (attackScoreArray, defendDiceScore) {
        // attackScoreArray begins here as an arbitrarily named parameter.  It is the opposite characters attack
        console.log(`character ${this.characterName}; attackScore (what he is being attacked with) ${attackScoreArray}, this.currentDiceScore ${this.currentDiceScore} defendDiceScore ${this.defendDiceScore}`)
        const valueToIndices = {};
        // this.totalDamage;
        // this.bufferedDamage;
            
        const findDuplicateIndices = (arr) => {
            // I decided not to make this a utility function because if you move it out of here, it can't find valueToIndices, and if I move valueToIndices
            // inside the function then it can't find this.duplicates.
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
            // currentDiceScore should not be used to calculate the attack, only to check for duplicates.  attackScoreArray is the opposite character, not the this character
            console.log(`if attackScoreArray(this.currentDiceScore)`);
            console.table([
                [ 'character name', this.characterName],
                [ 'defend dice array', this.defendDiceArray],
                [ 'attack score array (what they are being attacked with)', attackScoreArray],
                [ 'current dice score ', this.currentDiceScore]
             ])
            // totalDamage = calculateEnhancedScore(findDuplicateIndices(this.currentDiceScore), this.currentDiceScore)
            //  ^^^^^^^ ERROR IS HERE ^^^^^^^.  ALL THE NUMBERS ARE CORRECT UNTIL TOTALDAMAGE IS CALCULATED ON THIS LINE
            this.totalDamage = calculateEnhancedScore(findDuplicateIndices(attackScoreArray), attackScoreArray)
            // ^^^^^^^^^ ATTEMPT TO FIX ERROR ^^^^^^^^^^^^^^^
            console.log(`this.totalDamage = calculateEnhancedScore(findDuplicateIndices(attackScoreArray), attackScoreArray)`)
            console.table([
                [ 'character name', this.characterName],
                [ 'defend dice array', this.defendDiceArray],
                [ 'attack score array (what they are being attacked with)', attackScoreArray],
                [ 'current dice score ', this.currentDiceScore]
             ])
            // here we have detected there are multiples, so we are iterating over them to find which ones, 
            // what the values are, and then timesing them together instead of adding them
            this.bufferedDamage = this.totalDamage - (this.totalDamage * (this.defendDiceScore[0] * .10));
            console.log(`this.bufferedDamage = this.totalDamage - (this.totalDamage * (this.defendDiceScore[0] * .10));`)
            console.table([
                [ 'character name', this.characterName],
                [ 'defend dice array', this.defendDiceArray],
                [ 'attack score array (what they are being attacked with)', attackScoreArray],
                [ 'current dice score ', this.currentDiceScore]
             ])
            // the opponent is the percentage of the number they roll...i.e roll a 9 means you defended 90% of the attack, a 10 -> 10%
            this.health = this.health - Math.floor(this.bufferedDamage);
            console.log(`this.health = this.health - Math.floor(this.bufferedDamage);`)
            console.table([
                [ 'character name', this.characterName],
                [ 'defend dice array', this.defendDiceArray],
                [ 'attack score array (what they are being attacked with)', attackScoreArray],
                [ 'current dice score ', this.currentDiceScore]
             ])

            // this.messages = this.renderMultiplesForFlyOutMessage(this.duplicates)
            console.log(`this.messages = this.renderMultiplesForFlyOutMessage(this.duplicates)`)
                        console.table([
                [ 'character name', this.characterName],
                [ 'defend dice array', this.defendDiceArray],
                [ 'attack score array (what they are being attacked with)', attackScoreArray],
                [ 'current dice score ', this.currentDiceScore]
             ])
            // console.log('this.messages in hasDuplicates(attackScoreArray)', this.messages)
            // console.log(`${this.characterName} duplicates after takeDamage:`, this.duplicates, typeof(this.duplicates));
    
        } else {
            console.log(`ENTERED THE ELSE`)
            this.totalDamage = attackScoreArray.reduce((accumulator, currentVal) => {return accumulator + currentVal}, 0);
            console.log(`this.totalDamage = attackScoreArray.reduce((accumulator, currentVal) => {return accumulator + currentVal}, 0);`)
                        console.log(`this.messages = this.renderMultiplesForFlyOutMessage(this.duplicates)`)
                        console.table([
                [ 'character name', this.characterName],
                [ 'defend dice array', this.defendDiceArray],
                [ 'attack score array (what they are being attacked with)', attackScoreArray],
                [ 'current dice score ', this.currentDiceScore]
             ])
            // here .reduce can be used because if no dice are repeated we are simply adding them together
            this.bufferedDamage = this.totalDamage - (this.totalDamage * (this.defendDiceScore[0] * .10));
            console.log(`this.bufferedDamage = this.totalDamage - (this.totalDamage * (this.defendDiceScore[0] * .10));`)
                        console.log(`this.messages = this.renderMultiplesForFlyOutMessage(this.duplicates)`)
                        console.table([
                [ 'character name', this.characterName],
                [ 'defend dice array', this.defendDiceArray],
                [ 'attack score array (what they are being attacked with)', attackScoreArray],
                [ 'current dice score ', this.currentDiceScore]
             ])
            // the opponent is the percentage of the number they roll...i.e roll a 9 means you defended 90% of the attack, a 10 -> 10%
            this.health = this.health - Math.floor(this.bufferedDamage);
            console.log(`this.health = this.health - Math.floor(this.bufferedDamage);`)
            console.log(`this.messages = this.renderMultiplesForFlyOutMessage(this.duplicates)`)
            console.table([
                [ 'character name', this.characterName],
                [ 'defend dice array', this.defendDiceArray],
                [ 'attack score array (what they are being attacked with)', attackScoreArray],
                [ 'current dice score ', this.currentDiceScore]
             ])
    
        }
        if (this.health <= 0) {
            this.dead = true;
            this.health = 0;
        }
 }

    renderCharacter () {
        const { 
            alive, 
            avatar, 
            currentDiceScore,
            backstory, 
            catchphrase, 
            characterCardFlexDirection, 
            characterClass, 
            characterName, 
            cssOrder, 
            dead, 
            defendDiceArray,
            displayMessageObj,
            duplicates,
            diceArrayForRendering,
            distance, 
            elId, 
            defendDiceValue,
            health, 
            intelligence, 
            masterString,
            messages,
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

        // console.log(`${characterName} duplicates in renderCharacter:`, messages);
        // console.log(`characterClass ${characterClass}`)
        // console.log(this.currentDiceScore)

        let heroDisplayLogic;

        if (renderBanner === true && characterClass === 'hero') {
            // console.log(`#1characterClass ${characterClass}`)
            heroDisplayLogic = `<div class="power-hit-hero-container"><p class="power-hit-hero">The Spinner, the Giver, and the Inflexible looked warmly upon your fate and blessed your dice with matching pairs.  Your ${characterName}'s attack is increased to</p><div class="message">${(messages) ? messages : ''}</div></div>
            `} else {
            heroDisplayLogic =''
        }


        let villainDisplayLogic;

            if (renderBanner === true && characterClass === 'villain') {
                // console.log(`#2characterClass ${characterClass}`)
                villainDisplayLogic =  `<div class="power-hit-villain-container"><p class="power-hit-villain">The Furies, the Fates, the Death-Daimones and Thanatos himself have conspired for your demise.  ${characterName}'s attack is increased to</p><div class="message">${(messages) ? messages : ''}</div></div>`
            } else {
                villainDisplayLogic = ''
            }        
            // break out into full conditional block, if / else statements

            // console.log(heroDisplayLogic)
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
                            ${diceArrayForRendering}
                            </div>
                            <p class="attack-defend-label"> <strong>Feohtende  ( Attack ) </strong> </p>
                        </div>
                        <div class="dice-container">
                            <div class="real-dice-container">
                            ${defendDiceArray}
                            </div>
                            <p class="attack-defend-label"> <strong> Werede  ( Defend ): </strong> ${characterName === 'Zedfire, Hælend of darkness' ? 'The Dark Lord' : 'You'} defended ${defendDiceValue}0%</p>
                            <div class="elemental"></div>
                            ${heroDisplayLogic}
                            ${villainDisplayLogic}
                        </div>
                        </div>
                    </div>
                    
                </div>
                `
        }
    }

    export default Character