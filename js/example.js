const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "images/wizard.png",
  health: 60,
  diceCount: 3
}

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "images/orc.png",
  health: 10,
  diceCount: 1
}
/*
Challenge 
1. Create a new constructor function called Character which
 takes our data as a paramenter.
2. Set up "this" for each of the 5 properties in our objects
 (eg: this.health = data.health).
*/

function Character (data) {
  this.elementId = data.elementId;
  this.name = data.name;
  this.avatar = data.avatar; 
  this.health = data.health; 
  this.diceCount = data.diceCount;
  this.getDiceRollArray = function (diceCount) { 
      return new Array(diceCount).fill(0).map(function(){
      return Math.floor(Math.random() * 6) + 1
  });   
  this.getDiceHtml = function(diceCount){
          return getDiceRollArray(diceCount).map(function(num){ 
              return  `<div class="dice">${num}</div>`
          }).join('')
      }
  }
  this.renderCharacter = function (data){
  const { elementId, name, avatar, health, diceCount } = data;
  const diceHtml = getDiceHtml(diceCount)

  document.getElementById(elementId).innerHTML =
      `<div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src="${avatar}" />
          <div class="health">health: <b> ${health} </b></div>
          <div class="dice-container">    
              ${diceHtml}
          </div>
      </div>`;
}
}



const heroC = new Character(hero).renderCharacter();
const villainA = new Character(monster).renderCharacter();