export function tutorial() {
    console.log('tutorial.js fired')
    const docBody = document.getElementsByTagName('body')[0];
    console.log(docBody)
    const container = document.createElement('div')
    container.setAttribute('id', 'tutorial-modal-container')
    console.log(container)
    const content = `
        <h1>Welcome to Fantasy Slayer</h1>
        <br/>
        <div class="tutorial-inner-border">
        <p>This is a simple tutorial to acquaint you with gameplay</p>
        <br/>
            <ol>
                <li>You are the player on the left.</li>
                <li>You will play through 5 separate characters attempting to kill the villain -- Zedfire.</li>
                <li>Clicking 'To Battle' will roll for both you and the enemy.</li>
                <li>Attack dice are 6 sided.  Defense dice are 10 sided.</li>
                <li>Attack points are calculated by summing up all dice.  For example: a roll of 1, 2, 3 would be 1 + 2 + 3 = 6.</li>
                <li>If you roll matches, all matches will be multiplied together first. Then the remaining numbers will be added. For example, a roll of 1, 3, 3 would be (3 X 3) + 1 = 10. It's possible to get multiple sets of matches. For instance, a roll of 3, 3, 4, 4, 4 would be 3 X 3 X 4 X 4 X 4 = 576.</li>
                <li>Red dice are for defense.</li>
                <li>The amount you roll for defense represents a percentage out of 100.  For example: a roll of 9 would mean you defended 90% of the attack.  So if your opponent's original attack was 100 points, you would only receive 10 points of damage.</li>
                <li>Each character has 1 opportunity for a specialized attack, represented by the icons on the left. The icon will become highlighted when it can be used. Some attacks can only be used by certain characters. It is not required to use these, but conquering without them will be very challenging. A good roll can turn the tide of the game, but be cautious: a bad roll can be disastrous for you.</li>
            </ol>
            <button id="quest-button" class="quest-button">Begin Your Quest</button>
        </div>`
    container.classList.add('tutorial-modal')
    container.innerHTML = content
    console.log('container', container)
    docBody.insertAdjacentElement("afterbegin", container)
    document.getElementById('quest-button').addEventListener('click', () => {
        container.style.display = 'none'
})
};
    
