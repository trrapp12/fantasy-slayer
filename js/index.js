(() => {

    class Character {
        constructor (_elId, _name, _avatar, _race, _health, _weapon, _skill, _speed, _strength, _distance, _backstory, _catchphrase, _weakness, _relationship, _intelligence) {
            console.log("character being created")
            this.elId = _elId;
            this.name = _name; 
            this.avatar = _avatar; 
            this.race = _race; 
            this.health = _health; 
            this.weapon = _weapon; 
            this.skill = _skill; 
            this.speed = _speed; 
            this.strength = _strength; 
            this.distance = _distance; 
            this.backstory = _backstory; 
            this.catchphrase = _catchphrase; 
            this.weakness = _weakness; 
            this.relationship = _relationship; 
            this.intelligence = _intelligence;
        }
    }
    
    let Conscript = new Character()
    let Mage = new Character();
    let Naqalk =  new Character();
    // Micmac word for Leave
    let SoulForge = new Character();
    let IgnisFatuus = new Character();
    // "foolish fire" etymological origin of will o' the wisp, jack o' latern
    let Vliecke = new Character();
    // Middle Dutch, etymological origin of flechier/fletcher, or arrow maker

    const player1Container = document.getElementById('character-1-art');
    const player2Container = document.getElementById('character-2-art');

    function renderCharacter (data) {
        player1Container.innerHTML = `
            <div class="hero c1">
                    <img src="assets/assets/soulforge.png"
                        alt="Elephant at sunset">
            </div>
            <div class="hero c2">
                    <img src="assets/assets/mage.png"
                        alt="Elephant at sunset">
            </div>
        `
    }

    renderCharacter()
})()