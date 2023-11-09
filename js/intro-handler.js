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

    <p>In an era preceding the dominion of mankind, a realm once thrived under the sovereign grace of Elves. But ere
      the age of Elves, yea &apos;een before elven tongue was heard beyond the border of the ancient lands, magic held
      sway.
      In the rise of the sun and the gathering of the clouds it could be seen. Even the lowliest of creatures bore
      magical fruit.</p>

    <p>Yet even the magic was not always here. Before the calignious breathe of stars bore fire and light into the
      belly of the
      three earths,
      before the vastness of the skies blushed before the immensity of blackness the stars bathed in, before even
      this, there was a single
      harmonious song whose vibration was defined the existence of everything. </p>

    <p>Yet even that was not the beginning, yea betwoxt the dawn of song and the expanse of pre-time, the world
      existed as naught but a mere Word—a concept, a notion, awaiting
      its moment of realization. And antecedent to the conception of the Word, the universe was a canvas of pure
      thought and radiant light, an epoch of purity and boundless potential.</p>

    <p>But in the recesses of time, prior to the advent of all ages, both Elven and human, before the epochs of magic
      and song could coalesce into the Word, an enigmatic shadow lingered. It cast a veil over existence, embodying an
      ancient malevolence that whispered forgotten fears.</p>

    <p>The shadow, with the maleficence it concealed, faded into the forgotten corridors of history. Yet now, its
      patience wears thin, and its slumbering malevolence stirs.</p>

    <p class="bold">A Memory Awakens</p>

    <p>Yet one being holds the fragments of memory, as ancient as the universe and as enduring as light itself. He
      bore witness to creation's genesis, standing sentinel at the threshold of time. Though his mind now dances on
      the edges of obscurity, the shadow of that bygone memory lingers. Yet, will this remnant be sufficient?</p>

    <p>Can he, amidst the discord of wars between Elves and humans, rally a respite against an unending evil?</p>

    <p class="bold">A Symphony of Redemption</p>

    <p>The symphony of destiny plays on, as an eternal question beckons. Can the cacophony of strife be silenced, if
      only momentarily, to confront an evil that defies finite understanding? Or shall the world confront the revival
      of an ancient malevolence, a malevolence it labored millennia to consign to oblivion?</p>

    <p>Amidst the whispering winds of time, the answers echo, as the tapestry of existence unravels in the hands of an
      immortal guardian. The journey unfolds, in a tale where forgotten echoes collide with the inevitability of
      eternity.</p>
  </div>
</div>`
const tutorialHTML = `
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

//  ***************************** FUNCTIONS *****************************

  function playAudio() {
    const introAudio = new Audio('./assets/assets/audio/Evil-Trailer_AdobeStock_354668525.wav');
    introAudio.volume = 0.5;
    introAudio.play(); 
  }

/*
FUNCTION PURPOSE: this utility function will be used to create and insert the intro, the scrolling story, and the footer
REQUIRED INPUT: id and classname are strings, content is interpolated strings if any JS is involved
OUTPUT: a new section appended as the first child of the body
SIDE EFFECTS: it will definitely affect the DOM and layout, so be sure to CSS accordingly*/
function createModal(id, className, content) {
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


      
