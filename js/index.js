(() => {

    const player1Container = document.getElementById('character-1-art');
    const player2Container = document.getElementById('character-2-art');

    function Character (data){
            this.elId = elId;
            this.characterClass = characterClass;
            this.characterName = characterName; 
            this.avatar = avatar; 
            this.race = race; 
            this.health = health; 
            this.weapon = weapon; 
            this.skill = skill; 
            this.speed = speed; 
            this.strength = strength; 
            this.distance = distance; 
            this.backstory = backstory; 
            this.catchphrase = catchphrase; 
            this.weakness = weakness; 
            this.relationship = relationship; 
            this.intelligence = intelligence;

            this.renderCharacter = function () {
                const {elId, characterClass, characterName, avatar, race, health, weapon, skill, speed, strength, distance, backstory, catchphrase, weakness, relationship, intelligence} = this;

                player1Container.innerHTML = `
                    <div class="${characterClass} c1">
                    <img src=${avatar}
                        alt="sketch of ${characterName}, a ${race} character.">
                    </div>
                `
            }
        }
    
    let Conscript = new Character();
    let Mage = new Character();
    let Naqalk =  new Character();
    // Micmac word for Leave
    let SoulForge = new Character();
    let IgnisFatuus = new Character();
    // "foolish fire" etymological origin of will o' the wisp, jack o' latern
    let Vliecke = new Character();
    // Middle Dutch, etymological origin of flechier/fletcher, or arrow maker

    renderCharacter()
})()