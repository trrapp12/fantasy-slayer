var ge=Object.defineProperty;var _e=(t,e,a)=>e in t?ge(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var F=(t,e,a)=>(_e(t,typeof e!="symbol"?e+"":e,a),a);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=a(l);fetch(l.href,i)}})();const $=document.getElementById("title"),ye=document.getElementsByTagName("body")[0];document.createElement("div");const be=document.getElementById("attack-button"),ve=3e3,we=11e4,ke=`
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
</div>`,Te=`
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
    <button id="quest-button" class="quest-button">Begin Your Quest</button>`;function Ce(){const t=new Audio("./assets/assets/audio/Evil-Trailer_AdobeStock_354668525.mp3");t.volume=.5,t.play()}function R(t,e,a){const s=document.createElement("div");return s.setAttribute("id",t),s.classList.add(e),s.innerHTML=a,ye.insertAdjacentElement("afterbegin",s),s}function Ae(){R("tutorial-modal-container","tutorial-modal",Te)}function De(){const t=R("tutorial-modal-container","tutorial-modal",ke);Ee(t)}function N(){$.classList.add("backlight"),setTimeout(()=>{$.classList.add("title-disappear")},5350),setTimeout(()=>{$.style.display="none",be.classList.remove("display-none")},8400)}function Se(){document.getElementById("quest-button").addEventListener("click",()=>{const t=document.getElementById("tutorial-modal-container");t.style.display="none",Ce(),De()})}function Ee(t){const e=document.getElementById("skip-intro"),a=document.getElementById("intro-modal");document.getElementById("intro-modal-text-container"),e.addEventListener("click",s=>{a.style.display="none",t.style.display="none",setTimeout(N,ve)}),setTimeout(()=>{a.style.display="none",a.style.animation="none",t.style.display="none",N()},we)}function W(){Ae(),Se()}window.addEventListener("DOMContentLoaded",W);window.removeEventListener("load",W);const Y={conscript:{avatar:"assets/assets/conscript2.webp",backstory:"Rose to the rank of captain during the Simerian wars.  In one night he saw his company run through with the arrows of the Naqalkuan archers.  To add to his shame they refused to take him prisoner, but sent him home to bear his shame in front of his land and people.  He vowed he would not return until his honor was restored.  So for ten years he lay in the wilderness, learning every type of war nature wages, from the persistence of the sun to the brutality of a hungry mother bear, to the coordination of an invading ant colony, to the stealth of moon-silk spider. Now he stands ready to complete his vow.",catchphrase:"Bravery only takes you so far.",characterCardFlexDirection:"row",characterClass:"hero",characterName:"Marcus anræd",cssOrder:-1,currentDiceScore:[],currentDefendDiceScore:[],dead:!1,duplicates:{},distance:67,elId:"conscript",health:200,numberOfTurns:0,originalHealth:200,intelligence:89,messages:"",race:"human",relationship:"hardened",skill:["hand-to-hand combat","survival","strategem","honor"],speed:50,strength:75,totalDiceCount:3,weakness:["hunger","non-magic race"],weapon:"Broad Sword"},ignisfatuus:{avatar:"assets/assets/ignisfatuus2.webp",backstory:"For centuries humans have wondered about the jack-o-wisps that have wandered the edge of the Elven forests, never being able to discover the truth behind this Elvish secret, until one day Sid fell in love with a young human girl.  Once the secret slipped, he was banished forever, and his betrothed was so scared he never saw her again. Abandoned by his people, lost to his love, the only thing he had left was a smile, but all he could do with it was to give it away.",catchphrase:"Wanna hear a secret?",characterCardFlexDirection:"row",characterClass:"hero",characterName:"Sidney son of Slugabed",cssOrder:-1,currentDiceScore:[],currentDefendDiceScore:[],dead:!1,duplicates:{},distance:89,elId:"ignisfatuus",health:75,numberOfTurns:0,originalHealth:75,intelligence:100,messages:"",race:'"Fire-Fool" Elf',relationship:"loyal",skill:["foolery","levitation","elemental"],speed:80,strength:60,totalDiceCount:7,weakness:["rules","strength","secrets","greed"],weapon:"boughs and sparrows"},mage:{avatar:"assets/assets/mage2.webp",backstory:"Though his memory reaches beyond life before the Shadow of the Great War brought upon the world the Trials of Dauus, and even the moment the first rays of light broke over the Great Mountains of Fire before they were tamed by the Ignis Fatuii, he cannot remember the face of a mother.  He was here before all other races. Only time, and magic, and nature are older than He.",catchphrase:"Choose not to be harmed—and you won't feel harmed. Don't feel harmed—and you haven't been.",characterClass:"hero",characterCardFlexDirection:"row",characterName:"Hatchala the ancient one",cssOrder:-1,currentDiceScore:[],currentDefendDiceScore:[],distance:10,dead:!1,duplicates:{},elId:"mage",health:300,numberOfTurns:0,originalHealth:300,intelligence:1e3,messages:"",race:"unknown",relationship:"patriarchal",skill:["cooking","magic","strategem"],speed:10,strength:75,totalDiceCount:4,weakness:["remembrance"],weapon:"magic"},naqualk:{avatar:"assets/assets/naqualk2.webp",backstory:'Goyathlay emerged as a child from a land where scorching sun meets the unrelenting sands. She displayed an innate connection to the land. As a skilled tracker, she mastered the art of reading shifting dunes and deciphering desert secrets. Armed with his ancestral bow she became known as the "Sandborne Guardian." With the winds as her allies and the sun as her witness, Goyathlay stood as a beacon of hope against darkness in the heart of the scorching desert.',catchphrase:"Horizons are boundaries set by the mind, but broken by the heart",characterCardFlexDirection:"row",characterClass:"hero",characterName:"Goyathlay of the seering plains",cssOrder:-1,currentDiceScore:[],currentDefendDiceScore:[],distance:67,dead:!1,duplicates:{},elId:"naqualk",health:275,numberOfTurns:0,originalHealth:275,intelligence:89,messages:"",race:"Desert Elf",relationship:"extrovert",skill:["stealth","infiltration","elemental","honor","femininity"],speed:30,strength:75,totalDiceCount:3,weakness:["intransigence","rigid-fidelity"],weapon:"Staff"},ogre:{avatar:"",backstory:"",catchphrase:"",characterCardFlexDirection:"row-reverse",characterClass:"villain",characterName:"",cssOrder:0,currentDiceScore:[],currentDefendDiceScore:[],distance:10,dead:!1,duplicates:{},elId:"",health:1,numberOfTurns:0,originalHealth:1e3,intelligence:100,messages:"",race:"ogre",relationship:"",skill:"brute strength",speed:15,strength:80,totalDiceCount:3,weakness:["steel"],weapon:"battle axe"},soulforge:{avatar:"assets/assets/soulforge2.webp",backstory:'To the priest the process is called dismorgrification.  To the commoner it is called "soul-tearing" and "soul-forging."  The first is the process that happened while yet alive.  The dismorgrified must have commited an act so insidiously horrible the anatomy of their soul is literally ripped apart.  The second part of the process is what most term as "hell."  It is the absolutely solitary act of stitching together their own soul, one act of redemption at time. No one knows if it can actually be done, but everyone has a tale of the screams of the Soul Forge stalking the late hours.',catchphrase:"Death may be the greatest of all human blessings",characterCardFlexDirection:"row",characterClass:"hero",characterName:"Isolwyn Stormbrand",cssOrder:-1,currentDiceScore:[],currentDefendDiceScore:[],distance:67,dead:!1,duplicates:{},elId:"soulforge",health:325,numberOfTurns:0,originalHealth:325,intelligence:89,messages:"",race:"dismorgrified soul",relationship:"empty",skill:["interworld perception","chaos","foolery","magic"],speed:5,strength:90,totalDiceCount:3,weakness:["rage"],weapon:"Styx Battle Axe"},zedfire:{avatar:"assets/assets/zedfire2.webp",backstory:"The original darkness.  The one who opposed humanities creation.  Born in the flames of the Gods wrath. Existing before the existence, he is not all-powerful, but he is connected to everything.  He is the shadow to every light, the trance that consumes when the dream flees your eyelids.  He is the not to everything that is, the antecedal complement that consumes everything that is good.  And he hungers for you.",catchphrase:"I am the fire that scorcheth humanity",characterCardFlexDirection:"row-reverse",characterClass:"villain",characterName:"Zedfire, Hælend of darkness",cssOrder:0,currentDiceScore:[],currentDefendDiceScore:[],distance:10,dead:!1,duplicates:{},elId:"zedfire",health:2,numberOfTurns:0,originalHealth:2111,intelligence:100,messages:"",race:"unknown",relationship:"adversarial",skill:[],speed:50,strength:80,totalDiceCount:5,weakness:["honor","magic","elemental"],weapon:"dark-magic, fire"}};function P(t,e){return new Array(t).fill(0).map(()=>Math.floor(Math.random()*e+1))}function Me(t){return new Array(t).fill(0).map(()=>`
            <div class="dice">
                <div class="dice-inset placeholder-dice">0</div>
            </div>
        `).join("")}function xe(t){return new Array(t).fill(0).map(()=>`
            <div class="dice defend-dice">
                <div class="dice-inset">0</div>
            </div>
        `).join("")}function q(t){let e=new Set;for(const a in t)e.add(t[a]);return e.size!==Object.keys(t).length}function k(t){t.style.display="none"}function Ie(t,e){let a=0,s=Object.entries(t).map(([o,n])=>Number(o)**n.length).reduce((o,n)=>o*n,1),i=e.filter(o=>!t.hasOwnProperty(o)).reduce((o,n)=>o+n,0);return a=s+i,console.log("multiplicantTotal",s,"sumOfUniques",i,"total",a),a}let H=155;const D=310;function z(t,e){const a="url(#glow)",s="";return t>e?a:s}function je(t){return t/Math.pow(Math.PI,2)}function U(t,e){return t>e?"#FFFFFF":t>=.75*e?"#6D8BA6":t>=.5*e?"#F2A341":"#BF0404"}function $e(t){let e=t/2;return 2*(Math.PI*e)}function He(t,e){return t*(e/100)}function Be(t){return t*2}function Oe(t){return t/2}function Le(t,e){return(t-e)/2}function Fe(t,e){const a=U(t,e),s=z(t,e),l=t/e,i=He(H,100),o=$e(i),n=l*D,c=je(o),h=Be(c),f=Oe(H),M=Le(H,h);return`
      <svg viewBox="0 0 ${i} ${i}">
      <defs>
        <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
        <style>
          path {
            transition: stroke-dasharray 5s ease, stroke 5s ease;
          }
        </style>
      </defs>
        <path
          id="path"
          class="health-path"
          d="M${f} ${M}
            a ${c} ${c} 0 0 1 0 ${h}
            a ${c} ${c} 0 0 1 0 -${h}"
          fill="none"
          stroke="${a}"
          stroke-width="9.125"
          stroke-dasharray="${n}, ${D}"
          filter="${s}"
        />
      </svg>
    `}function Ne(t,e){console.log("updateHealthChart firing");const a=t/e,s=U(t,e),l=document.querySelectorAll(".health-path"),i=z(t,e),o=a*D;console.log("healthPath",l);for(const n of l)console.log("inside paths for of",n,"healthPath"),t>e?(console.log("inside paths for of if statement, ",t,e,l),n.setAttribute("filter",`${i}`)):(console.log("inside paths for of else statement, ",t,e,l),n.removeAttribute("filter")),console.log("outside paths for of else statement, ",t,e,l),n.setAttribute("stroke",`${s}`),n.setAttribute("stroke-dasharray",`${o}, ${D}`),n.setAttribute("stroke",`${s}`)}class V{constructor(e,a=null){Object.assign(this,e),this.diceArrayForRendering=Me(this.totalDiceCount),this.defendDiceArray=xe(1),this.defendDiceValue="",this.spells=a}getIndexesOfDiceScoreMatches(e){const a=[],s={};for(let l=0;l<e.length;l++)e[l]in s?(a.push(s[e[l]]),a.push(l)):s[e[l]]=l;return Array.from(new Set(a)).sort((l,i)=>l-i)}setDefendDiceHTML(){this.defendDiceScore=P(1,10),this.defendDiceArray=this.defendDiceScore.map(e=>(this.defendDiceValue=e,`
                <div class="dice defend-dice">
                    <div class="dice-inset">
                        ${e}
                    </div>
                </div>
            `))}getDiceHTML(){console.log("getDiceHTML() firing"),this.currentDiceScore=P(this.totalDiceCount,6),console.log("this.currentDiceScore",this.currentDiceScore),this.renderBanner=q(this.currentDiceScore),this.indicesToChange=this.getIndexesOfDiceScoreMatches(this.currentDiceScore),this.diceArray=this.currentDiceScore.map(e=>`
                    <div class="dice">
                        <div class="dice-inset">
                        ${e}
                        </div>
                    </div>
                `),this.indicesToChange.forEach(e=>{this.diceArray[e]&&(this.diceArray[e]=this.diceArray[e].replace('<div class="dice">','<div class="dice highlighted">'))}),this.diceArrayForRendering=this.diceArray.join("")}renderMultiplesForFlyOutMessage(e){let a=[];for(const[s,l]of Object.entries(e)){let i=Array(l.length).fill(s).join(" x ");a.push(`${i}`)}return this.messages=[...a].join(" x "),[...a].join(" x ")}resetMultiplesForFlyOutMessage(){this.duplicates={}}takeDamage(e,a){const s={},l=i=>(i.forEach((o,n)=>{s[o]?s[o].length===1?(s[o].push(n),this.duplicates[o]=s[o]):this.duplicates[o].push(n):s[o]=[n]}),this.duplicates);q(e)?(this.totalDamage=Ie(l(e),e),this.bufferedDamage=this.totalDamage-this.totalDamage*(this.defendDiceScore[0]*.1),this.health=this.health-Math.floor(this.bufferedDamage)):(this.totalDamage=e.reduce((i,o)=>i+o,0),this.bufferedDamage=this.totalDamage-this.totalDamage*(this.defendDiceScore[0]*.1),this.health=this.health-Math.floor(this.bufferedDamage)),this.health<=0&&(this.dead=!0,this.health=0,console.log("death logic in takeDamage",this.dead,this.health,this)),this.numberOfTurns=this.numberOfTurns+1}renderCharacter(){const{alive:e,avatar:a,currentDiceScore:s,backstory:l,catchphrase:i,characterCardFlexDirection:o,characterClass:n,characterName:c,cssOrder:h,dead:f,defendDiceArray:M,displayMessageObj:re,duplicates:ut,diceArrayForRendering:ce,distance:ft,elId:mt,defendDiceValue:de,health:p,intelligence:he,masterString:gt,messages:w,originalHealth:m,race:O,relationship:_t,skill:pe,speed:ue,strength:fe,renderBanner:L,totalDiceCount:yt,weakness:me,weapon:bt}=this;let x;L===!0&&n==="hero"?x=`<div class="power-hit-hero-container"><p class="power-hit-hero">The Spinner, the Giver, and the Inflexible looked warmly upon your fate and blessed your dice with matching pairs.  Your ${c}'s attack is increased to</p><div class="message">${w||""}</div></div>
            `:x="";let I;L===!0&&n==="villain"?I=`<div class="power-hit-villain-container"><p class="power-hit-villain">The Furies, the Fates, the Death-Daimones and Thanatos himself have conspired for your demise.  ${c}'s attack is increased to</p><div class="message">${w||""}</div></div>`:I="";const j=document.querySelectorAll(".character-stats--health-graph");console.log("graphContainers are ",j);let g;return console.log("graph",g),j.length<3&&(console.log("inside graphContainer.length < 3",g),g=Fe(p,m),console.log("after renderHealthChart, graphContainers are",j,"and graph is ",g)),`

            <h2>${c}</h2>
                <div class="character-card" style="flex-direction: ${o}">
                    
                    <div class="character-stats--container" style="order: ${h}">
                        <ul>
                            <li class="attributes alive"><p class="attributes-key">Status: </p><p class="attributes-value ${p>1*m?"empowered":p>=.75*m?"belligerent":p>=.5*m?"unwielding":p>=1?"distraught":"ofslægen-slain"}">${p>1*m?"empowered":p>=.75*m?"Belligerent":p>=.5*m?"unwielding":p>=1?"distraught":"ofslægen / slain"}</p>
                            </li>
                            <li class="attributes race"><p class="attributes-key">Race: </p><p class="attributes-value">${O}</p></li>
                            <li class="attributes skill"><p class="attributes-key">Skills: </p><p class="attributes-value"> ${pe.join(" ")}</p></li>
                            <li class="attributes speed"><p class="attributes-key">Speed: </p><p class="attributes-value"> ${ue}</p></li>
                            <li class="attributes strength"><p class="attributes-key">Strength: </p><p class="attributes-value"> ${fe}</p></li>
                            <li class="attributes intelligence"><p class="attributes-key">Intelligence: </p><p class="attributes-value"> ${he}</p></li>
                            <li class="attributes weakness"><p class="attributes-key">Weakness: </p><p class="attributes-value"> ${me.join(" ")}</p></li>
                            <li class="attributes weapon">
                        </ul>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <div class="${n}">
                                    <img src=${a} alt="sketch of ${c}, a ${O} character.">
                                </div>
                            </div>
                            <div class="flip-card-back">
                                <p class="backstory">${l}</p>
                            </div>
                        </div>
                    </div>
                    <div class="character-stats--health" id="character-stats-health">
                        <div class="character-stats--health-graph">
                        ${g||""}
                        </div>
                        <div class="character-stats--health-number">
                        ${p}
                        </div>
                    </div>
                    <div class="both-dice-container">
                        <div class="dice-container">
                            <div class="real-dice-container">
                            ${ce}
                            </div>
                            <p class="attack-defend-label"> <strong>Feohtende  ( Attack ) </strong> </p>
                        </div>
                        <div class="dice-container">
                            <div class="real-dice-container">
                            ${M}
                            </div>
                            <p class="attack-defend-label"> <strong> Werede  ( Defend ): </strong> ${c==="Zedfire, Hælend of darkness"?"The Dark Lord":"You"} defended ${de}0%</p>
                            <div class="elemental"></div>
                            </div>
                            </div>
                            ${x}
                            ${I}
                    </div>
                    
                </div>
                `}}const Pe=[{spell_id:1,spell_name:"Strength",spell_meaning:"Courage, Inner Strength, Control",spell_type:"Honor",spell_damage:45,spell_magnification:25,spell_skills_it_magnifies:["honor","rage","survival"],spell_drain_effect:0,spell_heal_effect:25,spell_description:"Strength spells yield both courage and physical strength to the benefactor.  Extra 25 point damage if combined with skills of 'honor' or 'rage,' or 'survival'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/strength_small.jpg",spell_xp:"Evocation Mastery"},{spell_id:2,spell_name:"The Tower",spell_meaning:"Upheaval, chaos, revelation, disruption",spell_type:"Honor",spell_damage:119,spell_magnification:25,spell_skills_it_magnifies:["chaos","foolery"],spell_drain_effect:18,spell_heal_effect:0,spell_description:"'The Tower' instills chaos wherever it is called.  Extra 25 point damage if combined with skills of 'chaos' or 'foolery.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_tower_small.jpg",spell_xp:"Evocation Mastery"},{spell_id:3,spell_name:"The Hermit",spell_meaning:"Introspection, Solitude",spell_type:"Honor",spell_damage:25,spell_magnification:25,spell_skills_it_magnifies:["survical","magic"],spell_drain_effect:48,spell_heal_effect:300,spell_description:"Opposite of chaos, the hermit brings inner peace that cannot be touched by external forces.  Extra 25 point damage if combined with skills of 'survival' or 'magic.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_hermit_small.jpg",spell_xp:"Arcane Domain"},{spell_id:4,spell_name:"The Hierophant",spell_meaning:"Tradition, conformity, morality",spell_type:"Honor",spell_damage:32,spell_magnification:25,spell_skills_it_magnifies:["honor","infiltration"],spell_drain_effect:2,spell_heal_effect:0,spell_secondary_weaknesses_which_trigger_effect:[""],spell_description:"A debased magic used in thievery and priestcraft to instill belief or conformity.  Extra 25 point damage if combined with skills of 'honor' or 'infiltration.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_hierophant_small.jpg",spell_xp:"Cantrips"},{spell_id:5,spell_name:"The Star",spell_meaning:"Hope, Faith, Spirituality",spell_type:"Honor",spell_damage:0,spell_magnification:25,spell_skills_it_magnifies:["elemental","strategem"],spell_drain_effect:5,spell_heal_effect:150,spell_description:"Inspires subject with hope, faith, renewal.  Extra 25 point damage if combined with skills of 'elemental' or 'strategem.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_star_small.jpg",spell_xp:"Intermediate Elemental"},{spell_id:6,spell_name:"The Fool",spell_meaning:"New Beginnings, Innocence, Spontaneity",spell_type:"Honor",spell_damage:90,spell_magnification:25,spell_skills_it_magnifies:["foolery","chaos"],spell_drain_effect:25,spell_heal_effect:90,spell_description:"Represents a new beginning, spontaneity.  Increases faith, unfortunately it enhances neither wisdom or knowledge with it.  Extra 25 point damage if combined with skills of 'foolery' or 'chaos,' or 'infiltration'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_fool_small.jpg",spell_xp:"Spoken Arcana"},{spell_id:7,spell_name:"The Moon",spell_meaning:"Illusion, intuition, dreams",spell_type:"Honor",spell_damage:60,spell_magnification:25,spell_skills_it_magnifies:["elemental","stealth","infiltration"],spell_drain_effect:6,spell_heal_effect:25,spell_description:"When used with stealh or infiltration, creates an astral projection of oneself.  Can also have healing properties.  Extra 25 point damage if combined with skills of 'elemental', 'stealth,' or 'infiltration.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_moon_small.jpg",spell_xp:"Evocation Mastery"},{spell_id:8,spell_name:"Justice",spell_meaning:"Fairness, Truth, Balance",spell_type:"Honor",spell_damage:102,spell_magnification:25,spell_skills_it_magnifies:["honor"],spell_drain_effect:15,spell_heal_effect:0,spell_description:"Justice projects an understanding of truth within the mind of the caster and the bewitched, causing immense discomfort for anyone with evil intentions.  Extra 25 point damage if combined with skills of 'honor.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/justice_small.jpg",spell_xp:"Evocation Mastery"},{spell_id:9,spell_name:"The Magician",spell_meaning:"Manifestations, Resourcefulness, Power",spell_type:"Honor",spell_damage:164,spell_magnification:25,spell_skills_it_magnifies:["magic","chaos"],spell_drain_effect:41,spell_heal_effect:0,spell_description:"Has the ability to temporarily combine competing realities to create a blended, sometimes controllable outcome.  Extra 25 point damage if combined with skills of 'magic' or 'chaos.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_magician_small.jpg",spell_xp:"Arcane Domain"},{spell_id:10,spell_name:"Wheel of Fortune",spell_meaning:"Cycles, Luck, Fate, Destiny",spell_type:"Honor",spell_damage:134,spell_magnification:25,spell_skills_it_magnifies:["foolery","magic"],spell_drain_effect:27,spell_heal_effect:0,spell_description:"Represents a circle, or cycle, of unpredictable fate.  Extra 25 point damage if combined with skills of 'foolery' or 'magic.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/wheel_of_fortune_small.jpg",spell_xp:"Spoken Arcana"},{spell_id:11,spell_name:"The Sun",spell_meaning:"Joy, Access, Celebration",spell_type:"Honor",spell_damage:10,spell_magnification:25,spell_skills_it_magnifies:["honor","elemental"],spell_drain_effect:8,spell_heal_effect:68,spell_description:"To those who have walked the path of peace, it's light brings restorative life.  To the rest a burning consumption.  Extra 25 point damage if combined with skills of 'honor' or 'elemental.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_sun_small.jpg",spell_xp:"Intermediate Elemental"},{spell_id:12,spell_name:"The World",spell_meaning:"Integration, Accomplishment",spell_type:"Honor",spell_damage:15,spell_magnification:25,spell_skills_it_magnifies:["honor","foolery"],spell_drain_effect:1,spell_heal_effect:0,spell_description:"Represents completion.  Either increases subjects resoluteness, or blinds them to the consequences.  Either way, pushing them to decisive action.  Extra 25 point damage if combined with skills of 'honor' or 'rage.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_world_small.jpg",spell_xp:"Cantrips"},{spell_id:13,spell_name:"The Lovers",spell_meaning:"Love, Harmony, Alignment",spell_type:"Honor",spell_damage:143,spell_magnification:25,spell_skills_it_magnifies:["honor","foolery","survival"],spell_drain_effect:29,spell_heal_effect:0,spell_description:"Unites and enhances any relationship based on love, trust, passion, or fate.  Extra 25 point damage if combined with skills of 'honor' or 'foolery,' or 'survival.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_lovers_small.jpg",spell_xp:"Spoken Arcana"},{spell_id:14,spell_name:"Death",spell_meaning:"Ending, Beginnings, Transformations",spell_type:"Honor",spell_damage:1e3,spell_magnification:0,spell_skills_it_magnifies:[],spell_drain_effect:25,spell_heal_effect:0,spell_description:"The vessel of absolution and the ferrier to either judgement or peace.  Known as one of The Cosmic Pair, mastery can only be bestowed by a celestial power.",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/death_small.jpg",spell_xp:"Cosmic"},{spell_id:15,spell_name:"The High Priestess",spell_meaning:"Intuition, unconcious knowledge, feminity",spell_type:"Honor",spell_damage:178,spell_magnification:25,spell_skills_it_magnifies:["survival","femininity"],spell_drain_effect:45,spell_heal_effect:0,spell_description:"Summons the unconscious knowledge .  Extra 25 point damage if combined with skills of 'honor' or 'rage' or 'femininity'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/high_priestess_small.jpg",spell_xp:"Arcane Domain"},{spell_id:16,spell_name:"The Emperor",spell_meaning:"Authority, Structure",spell_type:"Honor",spell_damage:5,spell_magnification:25,spell_skills_it_magnifies:["honor","rage"],spell_drain_effect:0,spell_heal_effect:0,spell_description:"The Emperor spell influences all authorities within range to bring their armies to defend the spell caster, unfortunately it usually only influences the honorable or the insane.  Extra 25 point damage if combined with skills of 'honor' or 'rage.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/emperor_small.jpg",spell_xp:"Cantrips"},{spell_id:17,spell_name:"Judgment",spell_meaning:"Judgement, Rebirth, Inner Calling, Absolution",spell_type:"Honor",spell_damage:1e3,spell_magnification:0,spell_skills_it_magnifies:[],spell_drain_effect:25,spell_heal_effect:0,spell_description:"Represents total absolution and finality.  Known as one of The Cosmic Pair, mastery can only be bestowed by a celestial power.",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/judgement_small.jpg",spell_xp:"Cosmic"},{spell_id:18,spell_name:"Empress",spell_meaning:"Motherhood, nurturing, abundance",spell_type:"Honor",spell_damage:142,spell_magnification:25,spell_skills_it_magnifies:["survival","femininity","honor"],spell_drain_effect:85,spell_heal_effect:250,spell_description:"Represents fertility, nurturing and abundance. Signifies creation.",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/empress_small.jpg",spell_xp:"Arcane Domain"},{spell_id:19,spell_name:"The Chariot",spell_meaning:"Control, willpower, and victory",spell_type:"Honor",spell_damage:125,spell_magnification:0,spell_skills_it_magnifies:["elemental","foolery"],spell_drain_effect:25,spell_heal_effect:0,spell_description:"The chariot spell brings progression to the casters intentions.",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_chariot_small.jpg",spell_xp:"Intermediate Elemental"},{spell_id:20,spell_name:"Temperance",spell_meaning:"Balance, moderation and harmony",spell_type:"Honor",spell_damage:50,spell_magnification:25,spell_skills_it_magnifies:["chaos"],spell_drain_effect:100,spell_heal_effect:50,spell_description:"Temperance finds virtue in positioning itself exactly between evil and goodness, hence this spell deals exactly the same damage to the bearer as the enemy",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/temperance_small.jpg",spell_xp:"Cantrips"},{spell_id:21,spell_name:"The Hanged Man",spell_meaning:"Letting go, surrender",spell_type:"Honor",spell_damage:104,spell_magnification:0,spell_skills_it_magnifies:["survival","honor"],spell_drain_effect:100,spell_heal_effect:0,spell_description:"While this spell deals moderate damage, the act of surrender deals an exceptional toll on the caster.",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/hanged_man_small.jpg",spell_xp:"Intermediate Elemental"}],J=new Audio("./assets/assets/audio/Under-Attack_AdobeStock_353737497.mp3"),y=new Audio("./assets/assets/audio/fantasmi-dell-opera-a-loop_AdobeStock_526744294.mp3"),B=new Audio("./assets/assets/audio/EPIC-TRAILER-ACTION-ADVENTURE-(TENSE-NERVE)_AdobeStock_637559773.mp3"),qe=t=>!t.paused&&!t.ended&&0<t.currentTime,b=(t,e)=>{if(qe(e)){e.pause();const a=e.currentTime;t.play(),t.onended=()=>{e.currentTime=a,e.play()}}else t.play()},Ge=()=>{setTimeout(()=>{setInterval(()=>{b(y,J)},3e4)},55e3)},Re=()=>{document.querySelectorAll("audio").forEach(e=>{e.pause(),e.currentTime=0})};class We{constructor(e,a){F(this,"cardClickedIndex");this.character=e,this.opponent=a}shuffleArr(e){for(let a=e.length-1;a>0;a--){const s=Math.floor(Math.random()*(a+1));[e[a],e[s]]=[e[s],e[a]]}return e}pickThreeCards(e){return e.splice(0,3)}renderCards(e){return e.map(s=>`
            <div class="card-front-back-container" id="${e.indexOf(s)}">
            
                <div class="spell-card-front">
                </div>
                <div class="spell-card-container spell-card-back" data-card-number="${e.indexOf(s)}">
                    <img src="assets/${s.spell_asset_back}" alt="${s.spell_description}">
                    <ul>
                        <li>
                            <div class="icon-container">
                                <span class="sword"></span>
                                <span class="information">${s.spell_damage}</span>
                                <span class="caduceus"></span>
                                <span class="information">${s.spell_heal_effect}</span>
                                <span class="skull"></span>
                                <span class="information information-border">${s.spell_drain_effect} </span>
                            </div>
                        </li>
                        <li>
                            <div class="xp-container">
                                <span class="xp">
                                </span>
                                <span class="xp-text">
                                    ${s.spell_xp}
                                </span>
                            </div>
                                <span class="description">${s.spell_description}
                                </span>
                        </li>
                    </ul>
                </div>
            </div>
            `)}appendCardsTitle(e){let a="Select a spell",s=document.createElement("h2");s.setAttribute("id","spellTitle"),s.setAttribute("class","spellTitle"),s.innerHTML=a,document.getElementById(e).prepend(s)}appendCards(e){let a=document.createElement("div");a.setAttribute("class","spells-container"),a.setAttribute("id","spells-container"),a.innerHTML=e,document.getElementById("main-container").appendChild(a)}removeAppendedCards(){let e=document.getElementById("main-container"),a=document.getElementById("spells-container");e.removeChild(a)}handleCardChoice(e,a,s,l,i){return console.log("entered handleCardChoice"),function(o){let n=o.target.id||o.target.closest(".card-front-back-container").id;e.skill.filter(c=>a[n].spell_skills_it_magnifies.includes(c)).length>0?s.health=s.health-(a[n].spell_magnification+a[n].spell_damage):s.health=s.health-a[n].spell_damage,e.health=e.health+a[n].spell_heal_effect-a[n].spell_drain_effect,e.health<=0?e.health=0:e.health=e.health,s.health<=0?s.health=0:s.health=s.health,e.health<=0?e.dead=!0:e.dead=!1,s.health<=0?s.dead=!0:s.dead=!1,console.log("inside handleCardChoice",e.health,s.health),e.health<=0||s.health<=0?(console.log("inside handleCardChoice, someone is dead"),setTimeout(()=>{l(),i(e,s)},8150)):(console.log("After Spells: no one is dead"),l()),document.getElementById(`${n}`).classList.toggle("flip"),setTimeout(()=>{document.getElementById(`${n}`).classList.toggle("flip"),console.log("inside set timeout that handles the card flip")},6e3)}}setCardChoiceHandler(e,a){const s=document.querySelectorAll(".card-front-back-container");let l=!1;function i(n){l||(e(n),b(J,y),l=!0,s[0].classList.toggle("gather-left-cards"),s[2].classList.toggle("gather-right-cards"),setTimeout(()=>{document.getElementById("spells-container").classList.toggle("disappear")},6500),setTimeout(o,7e3))}function o(){s.forEach(n=>n.removeEventListener("click",i)),a()}setTimeout(()=>{s.forEach(n=>n.addEventListener("click",i))},300)}}const u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.setAttribute("width","400");u.setAttribute("height","400");u.setAttribute("id","heptagon");function Ye(t,e,a){const s=document.createElementNS("http://www.w3.org/2000/svg","linearGradient");s.setAttribute("id",t);const l=Math.round(50+50*Math.cos(e-Math.PI/2)),i=Math.round(50+50*Math.sin(e-Math.PI/2)),o=Math.round(50+50*Math.cos(e+Math.PI/2)),n=Math.round(50+50*Math.sin(e+Math.PI/2));s.setAttribute("x1",l+"%"),s.setAttribute("y1",i+"%"),s.setAttribute("x2",o+"%"),s.setAttribute("y2",n+"%"),[{offset:"0%",color:"rgba(242,169,34,1)",opacity:"1"},{offset:"16%",color:"rgba(242,123,19,1)",opacity:"1"},{offset:"35%",color:"rgba(242,93,7,1)",opacity:"1"},{offset:"62%",color:"rgba(191,4,38,1)",opacity:"1"},{offset:"89%",color:"rgba(89,18,2,1)",opacity:"1"}].forEach(h=>{const f=document.createElementNS("http://www.w3.org/2000/svg","stop");f.setAttribute("offset",h.offset),f.setAttribute("stop-color",h.color),f.setAttribute("stop-opacity",h.opacity),s.appendChild(f)}),a.appendChild(s)}const X="#f2e3d520",Z=document.createElementNS("http://www.w3.org/2000/svg","defs");u.appendChild(Z);const T=7,K=200,Q=200,ee=100;function te(t,e,a,s,l){const i=2*Math.PI/l,o=t+a*Math.cos(i*s),n=e+a*Math.sin(i*s),c=t+a*Math.cos(i*(s+1)),h=e+a*Math.sin(i*(s+1));return`${t},${e} ${o},${n} ${c},${h}`}function ze(t,e,a,s){let l=[];for(let i=0;i<t;i++){const o=te(K,Q,ee,i,t),n=document.createElementNS("http://www.w3.org/2000/svg","polygon");n.setAttribute("points",o),n.setAttribute("fill",e),n.setAttribute("stroke",a),n.setAttribute("stroke-width",s),l.push(n)}return l}const Ue="url(#myGradient)";let Ve=ze(T,Ue,X,.5);Ve.forEach(t=>{u.appendChild(t)});for(let t=0;t<T;t++){const e=2*Math.PI/T*t,a=`gradient-${t}`;Ye(a,e,Z);const s=te(K,Q,ee,t,T),l=document.createElementNS("http://www.w3.org/2000/svg","polygon");l.setAttribute("points",s),l.setAttribute("fill",`url(#${a})`),l.setAttribute("stroke",X),l.setAttribute("stroke-width","1"),u.appendChild(l)}const Je=document.getElementById("mana-container");Je.appendChild(u);const Xe=document.querySelectorAll("#heptagon > polygon");function Ze(t){let e=[];return Object.values(Xe).forEach(a=>{e.push(a)}),e.slice(7,14)}function Ke(t){console.log("inside hideAPolygon, arr is: ",t,"arr[-1] is: ",t[-1]),t[t.length-1].style.display="none"}function Qe(t){return t.pop(),t}function et(){const t=document.createElement("div");t.setAttribute("id","ringContainer"),u.appendChild(t)}et();"serviceWorker"in navigator&&navigator.serviceWorker.register("/js/sw.js").then(function(t){console.log("Yey!",t)}).catch(function(t){console.log("Boo!",t)});const tt=document.getElementById("character-1-art"),st=document.getElementById("character-2-art"),C=document.getElementById("main-container"),se=document.getElementById("attack-button"),A=document.getElementById("mana-rotate");let v=!1,ae=!0,G=Ze(),at=["conscript","ignisfatuus","mage","naqualk","soulforge"];const lt=t=>{for(let e=t.length-1;e>0;e--){const a=Math.floor(Math.random()*(e+1));[t[e],t[a]]=[t[a],t[e]]}return t};let S=lt(at),r=oe();const d=new V(Y.zedfire);let le=r.spells.shuffleArr(Pe);function E(){tt.innerHTML=r.renderCharacter(),st.innerHTML=d.renderCharacter(),setTimeout(dt,3500)}E();Ge();function nt(){if(!document.getElementById("spellCSS")){const t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href="css/spell.css",t.id="spellCss",document.head.appendChild(t)}}function it(){nt(),setTimeout(()=>{let t=r.spells.pickThreeCards(le),e=r.spells.renderCards(t).join("");r.spells.appendCards(e),r.spells.appendCardsTitle("spells-container"),r.spells.setCardChoiceHandler(r.spells.handleCardChoice(r,t,d,E,ot),r.spells.removeAppendedCards),Ke(G),Qe(G)},100)}function ot(t,e){(t.dead||e.dead)&&(t.dead&&e.dead?_():t.dead?(v=!0,S.length>0?setTimeout(ie,2510):_()):_())}function rt(){ae=!1;let t=document.createElement("div");t.setAttribute("class","no-more-spells"),t.setAttribute("id","no-more-spells"),t.innerHTML=`
    <div class="no-spells-message">
        <h1>Mana has been depleted</h1>
        <p>You must continue without any more magical prowess</p>
    </div>`,C.appendChild(t),setTimeout(()=>{document.getElementById("no-more-spells").classList.add("disappear"),t.addEventListener("animationend",()=>{t.style.display="none"})},2500)}function ct(){if(!v)if(r.numberOfTurns%1===0&&r.numberOfTurns>0)if(r.numberOfTurns=r.numberOfTurns+1,ae)if(le.length===0){rt(),k(A);return}else it();else return;else r.getDiceHTML(r.currentDiceScore),d.getDiceHTML(d.currentDiceScore),r.setDefendDiceHTML(),d.setDefendDiceHTML(),r.takeDamage(d.currentDiceScore,r.currentDefendDiceScore),d.takeDamage(r.currentDiceScore,d.currentDefendDiceScore),ne(),ht(),Ne(),E(),(d.dead||r.dead)&&(d.dead&&r.dead||d.dead?_():r.dead&&(v=!0,S.length>0?setTimeout(ie,2510):_()))}function ne(){se.disabled=!0}function dt(){se.disabled=!1}function ht(){r.renderMultiplesForFlyOutMessage(d.duplicates),d.renderMultiplesForFlyOutMessage(r.duplicates),r.resetMultiplesForFlyOutMessage(),d.resetMultiplesForFlyOutMessage(),ne()}function ie(){r=oe(),E(),v=!1}function oe(){const t=Y[S.shift()];return t?new V(t,new We):{}}function pt(){v=!0;const t=`
        <div class="ending-message-container">
        <h1>Fantasy Slayer</h1>
            <h2>As Death descends from heights, and obscurity from the shadows, The hope of men has floundered and the memories of elves are no more...<span class="ending-message">You have lost and Zedfire has won!</span></h2>
            <video id="background-video" autoplay muted>
                <source id="video-source" src="./assets/assets/AdobeStock_630909246.mov" type="video/mp4">
                <track src="./assets/assets/defeat_captions.vtt" kind="captions" srclang="en" label="english_captions" type="text/vtt" default>
            </video>
            <button class="quest-button" id="reset-button">Play Again</button>
        </div>`,e=`
        <div class="ending-message-container">
        <h1>Fantasy Slayer</h1>
            <h2><span class="ending-message">You win!</span>  Only the integrity and fielty of a hero, combined with the unforseeable but infatigable friendship of this group of misfits could have saved us from such evil.</h2>
            <video id="background-video" autoplay muted>
                <source id="video-source" src="./assets/assets/AdobeStock_396656517.mov" type="video/mp4">
                <track src="./assets/assets/victory_captions.vtt" kind="captions" srclang="en" label="english_captions" type="text/vtt" default>
            </video>
            <button class="quest-button" id="reset-button">Play Again</button>
        </div>`,a=`
        <div class="ending-message-container">
        <h1>Fantasy Slayer</h1>
            <h2>The Gods have not seen fit to determine how to which side to tip the scales of justice.  Both Hero and Villain have languised.  <span class="ending-message">It is a draw</span>It seems it will lay with another to determine the outcome of this story.</h2>
            <video id="background-video" autoplay muted>
                <source id="video-source" src="./assets/assets/AdobeStock_583211956.mov" type="video/mp4">
                <track src="./assets/assets/tie_captions.vtt" kind="captions" srclang="en" label="english_captions" type="text/vtt" default>
            </video>
            <button class="quest-button" id="reset-button">Play Again</button>
        </div>`;d.dead&&r.dead&&S.length===0?(k(A),C.innerHTML=a,document.getElementById("background-video").load(),b(B,y)):d.dead?(k(A),C.innerHTML=e,document.getElementById("background-video").load(),b(B,y)):(k(A),C.innerHTML=t,document.getElementById("background-video").load(),b(B,y)),document.getElementById("reset-button").addEventListener("click",()=>{Re(),location.reload()})}function _(){setTimeout(()=>{pt()},2500)}document.getElementById("attack-button").addEventListener("mousedown",ct);
