const e=document.getElementById("title"),t=document.getElementsByTagName("body")[0];document.createElement("div");const a=document.getElementById("attack-button"),i=`
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
    Or the enigmatic shadow that lingered over Creation \u{2013} 
    the ancient malevolence that whispered forgotten fears -- 
    The Creator's Brother. Zedfire.</p>

    <p>Today the shadow lies in the forgotten corridors of history. It once slumbered.  Now it stirs.</p>

    <p class="bold">A Memory Awakens</p>

    <p>But one witness lives. One of the original four brothers. 
    Though his memory lingers, it is obscured by time and darkness. 
    Can the mage remember what the Elves and Humans have forgotten?</p>

    <p>Can he, amidst the discord of wars between Elves and humans, rally a respite against the unending evil?</p>
  </div>
</div>`,o=`
    <h1 id="game-rules">Welcome to Fantasy Slayer</h1>
    <br/>
    <div class="tutorial-sizing" aria-labelledby="game-rules" tabindex="0">
        <div class="tutorial-inner-border">
            <p>This is a simple tutorial to acquaint you with gameplay</p>
            <br/>
            <ol>
                <li>You are the player on the left.</li>
                <li>The enemy will appear as the player on the right.</li>
                <li>You will play through 5 separate heroes, attempting to defeat the villain\u{2014}Zedfire.</li>
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
                <li>A loss is the inverse\u{2014}no more health, no more hero replacements, and the villain still has health points.</li>
                <li>A tie occurs when both the villain and all heroes reach 0 health points at the same time.</li>
            </ol>
        </div>
    </div>
    <button id="quest-button" class="quest-button">Begin Your Quest</button>`;function l(e,a,i){let o=document.createElement("div");return o.setAttribute("id",e),o.classList.add(a),o.innerHTML=i,t.insertAdjacentElement("afterbegin",o),o}function n(){e.classList.add("backlight"),setTimeout(()=>{e.classList.add("title-disappear")},5350),setTimeout(()=>{e.style.display="none",a.classList.remove("display-none")},8400)}function s(){l("tutorial-modal-container","tutorial-modal",o),document.getElementById("quest-button").addEventListener("click",()=>{document.getElementById("tutorial-modal-container").style.display="none",function(){let e=new Audio("./assets/assets/audio/Evil-Trailer_AdobeStock_354668525.mp3");e.volume=.5,e.play()}(),function(e){let t=document.getElementById("skip-intro"),a=document.getElementById("intro-modal");document.getElementById("intro-modal-text-container"),t.addEventListener("click",t=>{a.style.display="none",e.style.display="none",setTimeout(n,3e3)}),setTimeout(()=>{a.style.display="none",a.style.animation="none",e.style.display="none",n()},11e4)}(l("tutorial-modal-container","tutorial-modal",i))})}window.addEventListener("DOMContentLoaded",s),window.removeEventListener("load",s);
//# sourceMappingURL=index.78df6512.js.map
