window.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title')
    const docBody = document.getElementsByTagName('body')[0];
    const container = document.createElement('div')
    const attackButton = document.getElementById('attack-button')
    container.setAttribute('id', 'tutorial-modal-container')
    const content = `
        <h1>Welcome to Fantasy Slayer</h1>
        <br/>
        <div class="tutorial-sizing">
            <div class="tutorial-inner-border">
                <p>This is a simple tutorial to acquaint you with gameplay</p>
                <br/>
                <ol>
                    <li>You are the player on the left.</li>
                    <li>The enemy will appear as the player on the right.</li>
                    <li>You will play through 5 separate heroes, attempting to defeat the villain—Zedfire.</li>
                    <li>Below each character are sets of dice. White dice are the hero attack dice, black dice are the villain attack dice, and red dice are rolled for defense.</li>
                    <li>Clicking 'To Battle' will roll all the dice simultaneously for both you and the enemy.</li>
                    <li>Attack dice are six-sided, and defense dice are ten-sided.</li>
                    <li>Attack points are calculated by summing up all the dice. For example, a roll of 1, 2, 3 would result in 1 + 2 + 3 = 6.</li>
                    <li>However, there is a chance for a boosted attack. If matching dice are rolled, all matches will be multiplied instead of added. All multiplicands will be calculated first, and remaining numbers will be added. For example, a roll of 1, 3, 3 would be (3 X 3) + 1 = 10. It's possible to get multiple sets of matches. For instance, a roll of 3, 3, 4, 4, 4 would be 3 X 3 X 4 X 4 X 4 = 576.</li>
                    <li>The amount you roll for defense represents a percentage out of 100. For example, a roll of 9 would mean you defended 90% of the attack. So if your opponent's original attack was 100 points, you would only receive 10 points of damage.</li>
                    <li>Every fifth turn, heroes earn enough mana to cast a spell. When this opportunity comes, three cards will be placed face down in front of you. Click to choose a spell. But choose wisely, as not all spells are created equally.</li>
                    <li>Spells have a damage effect (how attacks are calculated), a healing effect (meaning heroes can regain life), and a drain effect (energy actually expended in casting the spell).</li>
                    <li>This means several situations can become possible.</li>
                    <li>Obviously, spells can inflict enough damage to defeat the villain.</li>
                    <li>Spells can also heal the hero, even one that is at the brink of death.</li>
                    <li>Spells come in different levels. From weakest to highest are Cantrips, Evocation Mastery, Spoken Arcana, Intermediate Elemental, Arcane Domain, and Cosmic.</li>
                    <li>The higher the spell level, the more damage it inflicts on the enemy, but also the more drain effect it incurs.</li>
                    <li>Casting a very powerful spell by a weakened hero may inflict great damage on the villain but simultaneously kill the hero.</li>
                    <li>There is a limited amount of spells.  Once exhausted you must continue with only your dice.</li>
                    <li>In both dice attacks and spells, a win is considered when at least one hero remains with at least 1 point of health when the villain is defeated.</li>
                    <li>A loss is the inverse—no more health, no more hero replacements, and the villain still has health points.</li>
                    <li>A tie occurs when both the villain and all heroes reach 0 health points at the same time.</li>
                </ol>
            </div>
        </div>
        <button id="quest-button" class="quest-button">Begin Your Quest</button>`
    container.classList.add('tutorial-modal')
    container.innerHTML = content
    docBody.insertAdjacentElement("afterbegin", container)
//     document.getElementById('quest-button').addEventListener('click', () => {
//         container.style.display = 'none';
//         title.classList.add('backlight');
//         setTimeout(() => {
//             title.classList.add('title-disappear')
//         }, 5350)
//         setTimeout(()=> {
//             title.style.display = 'none'
//             attackButton.classList.remove('display-none')
//         }, 8400)
// })
};
    
