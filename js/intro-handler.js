//  ***************************** CONSTANTS *****************************
const title = document.getElementById('title');
const docBody = document.getElementsByTagName('body')[0];
const container = document.createElement('div');
const attackButton = document.getElementById('attack-button');
const timeToCloseIntroModalAfterClick = 3000;
const timeToCloseIntroModalIfReadingScroll = 110000;
const scrollHTML = `
<div class="intro-modal" id="intro-modal">
  <button id="skip-intro" class="quest-button">Skip</button>
  <div class="intro-modal-text-container" id="intro-modal-text-container">
    <p class="bold">In the Age Unremembered</p>

    <p>Before men, there were the Gods who created them.  Before the God's of Men, there were elves.  
    Before the Elves, there were the Gods who created them.  But before the Gods who spoke the the elven tongue 
    were heard beyond the border of the ancient lands, only magic held sway. 
    It was seen in the rise of the sun and the gathering of the clouds.  Magic democratized all, for
    even the lowliest of creatures bore magical fruit.  It was then there was peace.</p>

    <p class="bold">A Time Before Magic</p>

    <p>But there was a time even before magic.  A time of chaos and creation.

    <p class="bold">A Time of Song</p>

    Before the caliginous breath of stars bore fire and light into the belly of the three earths, 
    before skies blushed at the immensity of blackness the stars bathed in, ...yea, before even this, 
    the vibration of a a single harmonious song defined everything. In this moment, 
    betwixt the dawn of song and the expanse of pre-time, everything was 
    --in one measurable moment-- only a word on the lips of the first God.  The Creator.</p>

    <p class="bold">The Creators Brother</p>

    <p>Many stories tell of moments after creation. But few tell of the battle that occurred before. 
    Or the enigmatic shadow that lingered over Creation – 
    the ancient malevolence that whispered forgotten fears -- 
    The Creator's Brother. Zedfire.</p>

    <p>Today the shadow lies in the forgotten corridors of history. It once slumbered.  Now it stirs.</p>

    <p class="bold">A Memory Awakens</p>

    <p>But one witness lives. One of the original four brothers. 
    Though his memory lingers, it is obscured by time and darkness. 
    Can the mage remember what the Elves and Humans have forgotten?</p>

    <p>Can he, amidst the discord of wars between Elves and humans, rally a respite against the unending evil?</p>
  </div>
</div>`
const tutorialHTML = `
    <h1 id="game-rules">Welcome to Fantasy Slayer</h1>
    <br/>
    <div class="tutorial-sizing" aria-labelledby="game-rules" tabindex="0">
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

//  ***************************** FUNCTIONS *****************************

  function playAudio() {
    const introAudio = new Audio('./assets/assets/audio/Evil-Trailer_AdobeStock_354668525.mp3');
    introAudio.volume = 0.5;
    introAudio.play(); 
  }

/*
FUNCTION PURPOSE: this utility function will be used to create and insert the intro, the scrolling story, and the footer
REQUIRED INPUT: id and classname are strings, content is interpolated strings if any JS is involved
OUTPUT: a new section appended as the first child of the body
SIDE EFFECTS: it will definitely affect the DOM and layout, so be sure to CSS accordingly*/
function createModal(id, className, content) {

  if (typeof id === 'undefined') {
    throw new Error('createModal received a "null" or "undefined" value for "id"')
  }
  if (typeof className === 'undefined') {
    throw new Error('createModal received a "null" or "undefined" value for "className"')
  }
  if (typeof content === 'undefined') {
    throw new Error('createModal received a "null" or "undefined" value for "content"')
  }
  const container = document.createElement('div');
  container.setAttribute('id', id);
  container.classList.add(className);
  container.innerHTML = content;
  docBody.insertAdjacentElement('afterbegin', container);
  return container;
}

/*
FUNCTION PURPOSE: this function builds the tutorial modal
REQUIRED INPUT: id and classname are strings, content is interpolated strings if any JS is involved
OUTPUT: the tutorial section -- appended as the first child of the body
SIDE EFFECTS: alters the DOM.  Appends the tutorial, which will appear on top of everything else */
function buildTutorial() {
  createModal('tutorial-modal-container', 'tutorial-modal', tutorialHTML)
}

/* 
FUNCTION PURPOSE: this function builds the scroll intro, which comes right after the tutorial section
REQUIRED INPUT: id and classname are strings, content is interpolated strings if any JS is involved
OUTPUT: the scroll section -- appended as the first child of the body
SIDE EFFECTS: alters the DOM.  Appends the tutorial, which will appear on top of everything else */
function buildScrollHTML() {
  const container = createModal('tutorial-modal-container', 'tutorial-modal', scrollHTML);
  addScrollHTMLHandler(container)
}

/* 
FUNCTION PURPOSE: this function adds the backlighting behind the title 
REQUIRED INPUT: n/a
OUTPUT: n/a
SIDE EFFECTS: affects visual display*/

function addBackLight() {
  title.classList.add('backlight');
  setTimeout(() => {
      title.classList.add('title-disappear')
  }, 5350);
  setTimeout(()=> {
      title.style.display = 'none'
      attackButton.classList.remove('display-none')
  }, 8400);
}

/* 
FUNCTION PURPOSE: closes the Tutorial window and starts actions for scroll animation
REQUIRED INPUT: n/a
OUTPUT: n/a
SIDE EFFECTS: affects visual display and starts audio playing

*/
function closeTutorialStartScrollAnimation () {
  document.getElementById('quest-button').addEventListener('click', () => {
    const tutorialContainer = document.getElementById('tutorial-modal-container');
    tutorialContainer.style.display = 'none';
    playAudio();
    buildScrollHTML();
  })
}

/* 
FUNCTION PURPOSE: closes the Tutorial window and starts actions for scroll animation
REQUIRED INPUT: n/a
OUTPUT: n/a
SIDE EFFECTS: affects visual display and starts audio playing */

function addScrollHTMLHandler(container) {
  // these consts aren't set globally because they won't be present until after they have clicked the tutorial
  const skipIntroButton = document.getElementById('skip-intro');
  const introModal = document.getElementById('intro-modal');
  const introModalClose = document.getElementById('intro-modal-text-container');
  // const tutorialModalContainer = document.getElementById('tutorial-modal-container')

  skipIntroButton.addEventListener('click', (evt) => {
    introModal.style.display = "none"
    container.style.display = "none"
    setTimeout(addBackLight, timeToCloseIntroModalAfterClick)
  })
  // this repeats the same logic as the click, only after a longer timeout incase people read the whole content and the content needs to fade in
  setTimeout(() => {
    introModal.style.display = "none"
    introModal.style.animation = "none"
    container.style.display = "none"
    addBackLight();
  }, timeToCloseIntroModalIfReadingScroll)
}

function buildTutorialOnWindowLoadHandler() {
  buildTutorial();
  closeTutorialStartScrollAnimation()  
}

window.addEventListener('DOMContentLoaded', buildTutorialOnWindowLoadHandler);
window.removeEventListener('load', buildTutorialOnWindowLoadHandler)

// these exports statements are purely for JEST testing, which does not support ES6 syntax out-of-the-box
// therefore, do not update the syntax
module.exports = {
  createModal
}
