var ee=Object.defineProperty;var te=(t,e,s)=>e in t?ee(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var B=(t,e,s)=>(te(t,typeof e!="symbol"?e+"":e,s),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(l){if(l.ep)return;l.ep=!0;const o=s(l);fetch(l.href,o)}})();const q={conscript:{avatar:"assets/assets/conscript.webp",backstory:"Rose to the rank of captain during the Simerian wars.  In one night he saw his company run through with the arrows of the Naqalkuan archers.  To add to his shame they refused to take him prisoner, but sent him home to bear his shame in front of his land and people.  He vowed he would not return until his honor was restored.  So for ten years he lay in the wilderness, learning every type of war nature wages, from the persistence of the sun to the brutality of a hungry mother bear, to the coordination of an invading ant colony, to the stealth of moon-silk spider. Now he stands ready to complete his vow.",catchphrase:"Bravery only takes you so far.",characterCardFlexDirection:"row",characterClass:"hero",characterName:"Marcus anræd",cssOrder:-1,currentDiceScore:[],currentDefendDiceScore:[],dead:!1,duplicates:{},distance:67,elId:"conscript",health:200,numberOfTurns:0,originalHealth:200,intelligence:89,messages:"",race:"human",relationship:"hardened",skill:["hand-to-hand combat","survival","strategem","honor"],speed:50,strength:75,totalDiceCount:3,weakness:["hunger","non-magic race"],weapon:"Broad Sword"},ignisfatuus:{avatar:"assets/assets/ignisfatuus.webp",backstory:"For centuries humans have wondered about the jack-o-wisps that have wandered the edge of the Elven forests, never being able to discover the truth behind this Elvish secret, until one day Sid fell in love with a young human girl.  Once the secret slipped, he was banished forever, and his betrothed was so scared he never saw her again. Abandoned by his people, lost to his love, the only thing he had left was a smile, but all he could do with it was to give it away.",catchphrase:"Wanna hear a secret?",characterCardFlexDirection:"row",characterClass:"hero",characterName:"Sidney son of Slugabed",cssOrder:-1,currentDiceScore:[],currentDefendDiceScore:[],dead:!1,duplicates:{},distance:89,elId:"ignisfatuus",health:75,numberOfTurns:0,originalHealth:75,intelligence:100,messages:"",race:'"Fire-Fool" Elf',relationship:"loyal",skill:["foolery","levitation","elemental"],speed:80,strength:60,totalDiceCount:7,weakness:["rules","strength","secrets","greed"],weapon:"boughs and sparrows"},mage:{avatar:"assets/assets/mage.webp",backstory:"Though his memory reaches beyond life before the Shadow of the Great War brought upon the world the Trials of Dauus, and even the moment the first rays of light broke over the Great Mountains of Fire before they were tamed by the Ignis Fatuii, he cannot remember the face of a mother.  He was here before all other races. Only time, and magic, and nature are older than He.",catchphrase:"Choose not to be harmed—and you won't feel harmed. Don't feel harmed—and you haven't been.",characterClass:"hero",characterCardFlexDirection:"row",characterName:"Hatchala the ancient one",cssOrder:-1,currentDiceScore:[],currentDefendDiceScore:[],distance:10,dead:!1,duplicates:{},elId:"mage",health:300,numberOfTurns:0,originalHealth:300,intelligence:1e3,messages:"",race:"unknown",relationship:"patriarchal",skill:["cooking","magic","strategem"],speed:10,strength:75,totalDiceCount:4,weakness:["remembrance"],weapon:"magic"},naqualk:{avatar:"assets/assets/naqualk.webp",backstory:'Goyathlay emerged as a child from a land where scorching sun meets the unrelenting sands. She displayed an innate connection to the land. As a skilled tracker, she mastered the art of reading shifting dunes and deciphering desert secrets. Armed with his ancestral bow she became known as the "Sandborne Guardian." With the winds as her allies and the sun as her witness, Goyathlay stood as a beacon of hope against darkness in the heart of the scorching desert.',catchphrase:"Horizons are boundaries set by the mind, but broken by the heart",characterCardFlexDirection:"row",characterClass:"hero",characterName:"Goyathlay of the seering plains",cssOrder:-1,currentDiceScore:[],currentDefendDiceScore:[],distance:67,dead:!1,duplicates:{},elId:"naqualk",health:275,numberOfTurns:0,originalHealth:275,intelligence:89,messages:"",race:"Desert Elf",relationship:"extrovert",skill:["stealth","infiltration","elemental","honor","femininity"],speed:30,strength:75,totalDiceCount:3,weakness:["intransigence","rigid-fidelity"],weapon:"Staff"},ogre:{avatar:"",backstory:"",catchphrase:"",characterCardFlexDirection:"row-reverse",characterClass:"villain",characterName:"",cssOrder:0,currentDiceScore:[],currentDefendDiceScore:[],distance:10,dead:!1,duplicates:{},elId:"",health:1,numberOfTurns:0,originalHealth:1e3,intelligence:100,messages:"",race:"ogre",relationship:"",skill:"brute strength",speed:15,strength:80,totalDiceCount:3,weakness:["steel"],weapon:"battle axe"},soulforge:{avatar:"assets/assets/soulforge.webp",backstory:'To the priest the process is called dismorgrification.  To the commoner it is called "soul-tearing" and "soul-forging."  The first is the process that happened while yet alive.  The dismorgrified must have commited an act so insidiously horrible the anatomy of their soul is literally ripped apart.  The second part of the process is what most term as "hell."  It is the absolutely solitary act of stitching together their own soul, one act of redemption at time. No one knows if it can actually be done, but everyone has a tale of the screams of the Soul Forge stalking the late hours.',catchphrase:"Death may be the greatest of all human blessings",characterCardFlexDirection:"row",characterClass:"hero",characterName:"Isolwyn Stormbrand",cssOrder:-1,currentDiceScore:[],currentDefendDiceScore:[],distance:67,dead:!1,duplicates:{},elId:"soulforge",health:325,numberOfTurns:0,originalHealth:325,intelligence:89,messages:"",race:"dismorgrified soul",relationship:"empty",skill:["interworld perception","chaos","foolery","magic"],speed:5,strength:90,totalDiceCount:3,weakness:["rage"],weapon:"Broad Sword"},zedfire:{avatar:"assets/assets/zed-fire.webp",backstory:"The original darkness.  The one who opposed humanities creation.  Born in the flames of the Gods wrath. Existing before the existence, he is not all-powerful, but he is connected to everything.  He is the shadow to every light, the trance that consumes when the dream flees your eyelids.  He is the not to everything that is, the antecedal complement that consumes everything that is good.  And he hungers for you.",catchphrase:"I am the fire that scorcheth humanity",characterCardFlexDirection:"row-reverse",characterClass:"villain",characterName:"Zedfire, Hælend of darkness",cssOrder:0,currentDiceScore:[],currentDefendDiceScore:[],distance:10,dead:!1,duplicates:{},elId:"zedfire",health:2111,numberOfTurns:0,originalHealth:2111,intelligence:100,messages:"",race:"unknown",relationship:"adversarial",skill:[],speed:50,strength:80,totalDiceCount:5,weakness:["honor","magic","elemental"],weapon:"dark-magic, fire"}};function L(t,e){return new Array(t).fill(0).map(()=>Math.floor(Math.random()*e+1))}function se(t){return new Array(t).fill(0).map(()=>`
            <div class="dice">
                <div class="dice-inset placeholder-dice">0</div>
            </div>
        `).join("")}function ae(t){return new Array(t).fill(0).map(()=>`
            <div class="dice defend-dice">
                <div class="dice-inset">0</div>
            </div>
        `).join("")}function O(t){let e=new Set;for(const s in t)e.add(t[s]);return e.size!==Object.keys(t).length}function le(t,e){let s=0,a=Object.entries(t).map(([r,n])=>Number(r)**n.length).reduce((r,n)=>r*n,1),o=e.filter(r=>!t.hasOwnProperty(r)).reduce((r,n)=>r+n,0);return s=a+o,console.log("multiplicantTotal",a,"sumOfUniques",o,"total",s),s}let C=110;function ne(t){return t/Math.pow(Math.PI,2)}function ie(t,e){let s="";return t>=.75*e?s="#6D8BA6":t>=.5*e?s="#F2A341":s="#BF0404",s}function oe(t,e){return t*(e/100)}function re(t){let e=t/2;return 2*(Math.PI*e)}function ce(t){return t*2}function de(t){return t/2}function he(t,e){return(t-e)/2}function pe(t,e){let s=ie(t,e),a=t/e,l=oe(C,100),o=re(l),r=a*220,n=ne(o),d=ce(n),T=de(C),x=he(C,d);return`
      <svg viewBox="0 0 ${l} ${l}">
        <path
          d="M${T} ${x}
            a ${n} ${n} 0 0 1 0 ${d}
            a ${n} ${n} 0 0 1 0 -${d}"
          fill="none"
          stroke="${s}";
          stroke-width="8";
          stroke-dasharray="${r}, 220"
          // so I previously had 220 represented by c, the circumference, but for some reason it was such a large number it drew itself
          // three or four loops and the player would get a ton of hits and never show any damage until suddenly they did.  So I had to 
          // test a number, albeit arbitrarily that stopped as soon as the number connected.  It was 220.
        />
      </svg>
    `}class R{constructor(e,s=null){Object.assign(this,e),this.diceArrayForRendering=se(this.totalDiceCount),this.defendDiceArray=ae(1),this.defendDiceValue="",this.spells=s}getIndexesOfDiceScoreMatches(e){const s=[],a={};for(let l=0;l<e.length;l++)e[l]in a?(s.push(a[e[l]]),s.push(l)):a[e[l]]=l;return Array.from(new Set(s)).sort((l,o)=>l-o)}setDefendDiceHTML(){this.defendDiceScore=L(1,10),this.defendDiceArray=this.defendDiceScore.map(e=>(this.defendDiceValue=e,`
                <div class="dice defend-dice">
                    <div class="dice-inset">
                        ${e}
                    </div>
                </div>
            `))}getDiceHTML(){console.log("getDiceHTML() firing"),this.currentDiceScore=L(this.totalDiceCount,6),console.log("this.currentDiceScore",this.currentDiceScore),this.renderBanner=O(this.currentDiceScore),this.indicesToChange=this.getIndexesOfDiceScoreMatches(this.currentDiceScore),this.diceArray=this.currentDiceScore.map(e=>`
                    <div class="dice">
                        <div class="dice-inset">
                        ${e}
                        </div>
                    </div>
                `),this.indicesToChange.forEach(e=>{this.diceArray[e]&&(this.diceArray[e]=this.diceArray[e].replace('<div class="dice">','<div class="dice highlighted">'))}),this.diceArrayForRendering=this.diceArray.join("")}renderMultiplesForFlyOutMessage(e){let s=[];for(const[a,l]of Object.entries(e)){let o=Array(l.length).fill(a).join(" x ");s.push(`${o}`)}return this.messages=[...s].join(" x "),[...s].join(" x ")}resetMultiplesForFlyOutMessage(){this.duplicates={}}takeDamage(e,s){const a={},l=o=>(o.forEach((r,n)=>{a[r]?a[r].length===1?(a[r].push(n),this.duplicates[r]=a[r]):this.duplicates[r].push(n):a[r]=[n]}),this.duplicates);O(e)?(this.totalDamage=le(l(e),e),this.bufferedDamage=this.totalDamage-this.totalDamage*(this.defendDiceScore[0]*.1),this.health=this.health-Math.floor(this.bufferedDamage)):(this.totalDamage=e.reduce((o,r)=>o+r,0),this.bufferedDamage=this.totalDamage-this.totalDamage*(this.defendDiceScore[0]*.1),this.health=this.health-Math.floor(this.bufferedDamage)),this.health<=0&&(this.dead=!0,this.health=0,console.log("death logic in takeDamage",this.dead,this.health,this)),this.numberOfTurns=this.numberOfTurns+1}renderCharacter(){const{alive:e,avatar:s,currentDiceScore:a,backstory:l,catchphrase:o,characterCardFlexDirection:r,characterClass:n,characterName:d,cssOrder:T,dead:x,defendDiceArray:I,displayMessageObj:Oe,duplicates:$e,diceArrayForRendering:U,distance:Fe,elId:Ne,defendDiceValue:V,health:h,intelligence:X,masterString:qe,messages:v,originalHealth:f,race:M,relationship:Re,skill:J,speed:K,strength:Z,renderBanner:H,totalDiceCount:We,weakness:Q,weapon:Pe}=this;let D;H===!0&&n==="hero"?D=`<div class="power-hit-hero-container"><p class="power-hit-hero">The Spinner, the Giver, and the Inflexible looked warmly upon your fate and blessed your dice with matching pairs.  Your ${d}'s attack is increased to</p><div class="message">${v||""}</div></div>
            `:D="";let S;H===!0&&n==="villain"?S=`<div class="power-hit-villain-container"><p class="power-hit-villain">The Furies, the Fates, the Death-Daimones and Thanatos himself have conspired for your demise.  ${d}'s attack is increased to</p><div class="message">${v||""}</div></div>`:S="";let j=pe(h,f);return`

            <h4>${d}</h4>
                <div class="character-card" style="flex-direction: ${r}">
                    
                    <div class="character-stats--container" style="order: ${T}">
                        <ul>
                            <li class="attributes alive"><p class="attributes-key">Status: </p><p class="attributes-value ${h>=.75*f?"belligerent":h>=.5*f?"unwielding":h>=1?"distraught":"ofslægen-slain"}">${h>=.75*f?"Belligerent":h>=.5*f?"unwielding":h>=1?"distraught":"ofslægen / slain"}</p>
                            </li>
                            <li class="attributes race"><p class="attributes-key">Race: </p><p class="attributes-value">${M}</p></li>
                            <li class="attributes skill"><p class="attributes-key">Skills: </p><p class="attributes-value"> ${J.join(" ")}</p></li>
                            <li class="attributes speed"><p class="attributes-key">Speed: </p><p class="attributes-value"> ${K}</p></li>
                            <li class="attributes strength"><p class="attributes-key">Strength: </p><p class="attributes-value"> ${Z}</p></li>
                            <li class="attributes intelligence"><p class="attributes-key">Intelligence: </p><p class="attributes-value"> ${X}</p></li>
                            <li class="attributes weakness"><p class="attributes-key">Weakness: </p><p class="attributes-value"> ${Q.join(" ")}</p></li>
                            <li class="attributes weapon">
                        </ul>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <div class="${n}">
                                    <img src=${s} alt="sketch of ${d}, a ${M} character.">
                                </div>
                            </div>
                            <div class="flip-card-back">
                                <p class="backstory">${l}</p>
                            </div>
                        </div>
                    </div>
                    <div class="character-stats--health" id="character-stats-health">
                        <div class="character-stats--health-graph">
                        ${j||""}
                        </div>
                        <div class="character-stats--health-number">
                        ${h}
                        </div>
                    </div>
                    <div class="both-dice-container">
                        <div class="dice-container">
                            <div class="real-dice-container">
                            ${U}
                            </div>
                            <p class="attack-defend-label"> <strong>Feohtende  ( Attack ) </strong> </p>
                        </div>
                        <div class="dice-container">
                            <div class="real-dice-container">
                            ${I}
                            </div>
                            <p class="attack-defend-label"> <strong> Werede  ( Defend ): </strong> ${d==="Zedfire, Hælend of darkness"?"The Dark Lord":"You"} defended ${V}0%</p>
                            <div class="elemental"></div>
                            </div>
                            </div>
                            ${D}
                            ${S}
                    </div>
                    
                </div>
                `}}const me=[{spell_id:1,spell_name:"Strength",spell_meaning:"Courage, Inner Strength, Control",spell_type:"Honor",spell_damage:45,spell_magnification:25,spell_skills_it_magnifies:["honor","rage","survival"],spell_drain_effect:0,spell_heal_effect:25,spell_description:"Strength spells yield both courage and physical strength to the benefactor.  Extra 25 point damage if combined with skills of 'honor' or 'rage,' or 'survival'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/strength_small.jpg",spell_xp:"Evocation Mastery"},{spell_id:2,spell_name:"The Tower",spell_meaning:"Upheaval, chaos, revelation, disruption",spell_type:"Honor",spell_damage:119,spell_magnification:25,spell_skills_it_magnifies:["chaos","foolery"],spell_drain_effect:18,spell_heal_effect:0,spell_description:"'The Tower' instills chaos wherever it is called.  Extra 25 point damage if combined with skills of 'chaos' or 'foolery.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_tower_small.jpg",spell_xp:"Evocation Mastery"},{spell_id:3,spell_name:"The Hermit",spell_meaning:"Introspection, Solitude",spell_type:"Honor",spell_damage:25,spell_magnification:25,spell_skills_it_magnifies:["survical","magic"],spell_drain_effect:48,spell_heal_effect:300,spell_description:"Opposite of chaos, the hermit brings inner peace that cannot be touched by external forces.  Extra 25 point damage if combined with skills of 'survival' or 'magic.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_hermit_small.jpg",spell_xp:"Arcane Domain"},{spell_id:4,spell_name:"The Hierophant",spell_meaning:"Tradition, conformity, morality",spell_type:"Honor",spell_damage:32,spell_magnification:25,spell_skills_it_magnifies:["honor","infiltration"],spell_drain_effect:2,spell_heal_effect:0,spell_secondary_weaknesses_which_trigger_effect:[""],spell_description:"A debased magic used in thievery and priestcraft to instill belief or conformity.  Extra 25 point damage if combined with skills of 'honor' or 'infiltration.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_hierophant_small.jpg",spell_xp:"Cantrips"},{spell_id:5,spell_name:"The Star",spell_meaning:"Hope, Faith, Spirituality",spell_type:"Honor",spell_damage:0,spell_magnification:25,spell_skills_it_magnifies:["elemental","strategem"],spell_drain_effect:5,spell_heal_effect:150,spell_description:"Inspires subject with hope, faith, renewal.  Extra 25 point damage if combined with skills of 'elemental' or 'strategem.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_star_small.jpg",spell_xp:"Intermediate Elemental"},{spell_id:6,spell_name:"The Fool",spell_meaning:"New Beginnings, Innocence, Spontaneity",spell_type:"Honor",spell_damage:90,spell_magnification:25,spell_skills_it_magnifies:["foolery","chaos"],spell_drain_effect:25,spell_heal_effect:90,spell_description:"Represents a new beginning, spontaneity.  Increases faith, unfortunately it enhances neither wisdom or knowledge with it.  Extra 25 point damage if combined with skills of 'foolery' or 'chaos,' or 'infiltration'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_fool_small.jpg",spell_xp:"Spoken Arcana"},{spell_id:7,spell_name:"The Moon",spell_meaning:"Illusion, intuition, dreams",spell_type:"Honor",spell_damage:60,spell_magnification:25,spell_skills_it_magnifies:["elemental","stealth","infiltration"],spell_drain_effect:6,spell_heal_effect:25,spell_description:"When used with stealh or infiltration, creates an astral projection of oneself.  Can also have healing properties.  Extra 25 point damage if combined with skills of 'elemental', 'stealth,' or 'infiltration.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_moon_small.jpg",spell_xp:"Evocation Mastery"},{spell_id:8,spell_name:"Justice",spell_meaning:"Fairness, Truth, Balance",spell_type:"Honor",spell_damage:102,spell_magnification:25,spell_skills_it_magnifies:["honor"],spell_drain_effect:15,spell_heal_effect:0,spell_description:"Justice projects an understanding of truth within the mind of the caster and the bewitched, causing immense discomfort for anyone with evil intentions.  Extra 25 point damage if combined with skills of 'honor.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/justice_small.jpg",spell_xp:"Evocation Mastery"},{spell_id:9,spell_name:"The Magician",spell_meaning:"Manifestations, Resourcefulness, Power",spell_type:"Honor",spell_damage:164,spell_magnification:25,spell_skills_it_magnifies:["magic","chaos"],spell_drain_effect:41,spell_heal_effect:0,spell_description:"Has the ability to temporarily combine competing realities to create a blended, sometimes controllable outcome.  Extra 25 point damage if combined with skills of 'magic' or 'chaos.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_magician_small.jpg",spell_xp:"Arcane Domain"},{spell_id:10,spell_name:"Wheel of Fortune",spell_meaning:"Cycles, Luck, Fate, Destiny",spell_type:"Honor",spell_damage:134,spell_magnification:25,spell_skills_it_magnifies:["foolery","magic"],spell_drain_effect:27,spell_heal_effect:0,spell_description:"Represents a circle, or cycle, of unpredictable fate.  Extra 25 point damage if combined with skills of 'foolery' or 'magic.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/wheel_of_fortune_small.jpg",spell_xp:"Spoken Arcana"},{spell_id:11,spell_name:"The Sun",spell_meaning:"Joy, Access, Celebration",spell_type:"Honor",spell_damage:10,spell_magnification:25,spell_skills_it_magnifies:["honor","elemental"],spell_drain_effect:8,spell_heal_effect:68,spell_description:"To those who have walked the path of peace, it's light brings restorative life.  To the rest a burning consumption.  Extra 25 point damage if combined with skills of 'honor' or 'elemental.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_sun_small.jpg",spell_xp:"Intermediate Elemental"},{spell_id:12,spell_name:"The World",spell_meaning:"Integration, Accomplishment",spell_type:"Honor",spell_damage:15,spell_magnification:25,spell_skills_it_magnifies:["honor","foolery"],spell_drain_effect:1,spell_heal_effect:0,spell_description:"Represents completion.  Either increases subjects resoluteness, or blinds them to the consequences.  Either way, pushing them to decisive action.  Extra 25 point damage if combined with skills of 'honor' or 'rage.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_world_small.jpg",spell_xp:"Cantrips"},{spell_id:13,spell_name:"The Lovers",spell_meaning:"Love, Harmony, Alignment",spell_type:"Honor",spell_damage:143,spell_magnification:25,spell_skills_it_magnifies:["honor","foolery","survival"],spell_drain_effect:29,spell_heal_effect:0,spell_description:"Unites and enhances any relationship based on love, trust, passion, or fate.  Extra 25 point damage if combined with skills of 'honor' or 'foolery,' or 'survival.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_lovers_small.jpg",spell_xp:"Spoken Arcana"},{spell_id:14,spell_name:"Death",spell_meaning:"Ending, Beginnings, Transformations",spell_type:"Honor",spell_damage:1e3,spell_magnification:0,spell_skills_it_magnifies:[],spell_drain_effect:25,spell_heal_effect:0,spell_description:"The vessel of absolution and the ferrier to either judgement or peace.  Known as one of The Cosmic Pair, mastery can only be bestowed by a celestial power.",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/death_small.jpg",spell_xp:"Cosmic"},{spell_id:15,spell_name:"The High Priestess",spell_meaning:"Intuition, unconcious knowledge, feminity",spell_type:"Honor",spell_damage:178,spell_magnification:25,spell_skills_it_magnifies:["survival","femininity"],spell_drain_effect:45,spell_heal_effect:0,spell_description:"Summons the unconscious knowledge .  Extra 25 point damage if combined with skills of 'honor' or 'rage' or 'femininity'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/high_priestess_small.jpg",spell_xp:"Arcane Domain"},{spell_id:16,spell_name:"The Emperor",spell_meaning:"Authority, Structure",spell_type:"Honor",spell_damage:5,spell_magnification:25,spell_skills_it_magnifies:["honor","rage"],spell_drain_effect:0,spell_heal_effect:0,spell_description:"The Emperor spell influences all authorities within range to bring their armies to defend the spell caster, unfortunately it usually only influences the honorable or the insane.  Extra 25 point damage if combined with skills of 'honor' or 'rage.'",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/emperor_small.jpg",spell_xp:"Cantrips"},{spell_id:17,spell_name:"Judgment",spell_meaning:"Judgement, Rebirth, Inner Calling, Absolution",spell_type:"Honor",spell_damage:1e3,spell_magnification:0,spell_skills_it_magnifies:[],spell_drain_effect:25,spell_heal_effect:0,spell_description:"Represents total absolution and finality.  Known as one of The Cosmic Pair, mastery can only be bestowed by a celestial power.",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/judgement_small.jpg",spell_xp:"Cosmic"},{spell_id:18,spell_name:"Empress",spell_meaning:"Motherhood, nurturing, abundance",spell_type:"Honor",spell_damage:142,spell_magnification:25,spell_skills_it_magnifies:["survival","femininity","honor"],spell_drain_effect:85,spell_heal_effect:250,spell_description:"Represents fertility, nurturing and abundance. Signifies creation.",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/empress_small.jpg",spell_xp:"Arcane Domain"},{spell_id:19,spell_name:"The Chariot",spell_meaning:"Control, willpower, and victory",spell_type:"Honor",spell_damage:125,spell_magnification:0,spell_skills_it_magnifies:["elemental","foolery"],spell_drain_effect:25,spell_heal_effect:0,spell_description:"The chariot spell brings progression to the casters intentions.",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/the_chariot_small.jpg",spell_xp:"Intermediate Elemental"},{spell_id:20,spell_name:"Temperance",spell_meaning:"Balance, moderation and harmony",spell_type:"Honor",spell_damage:50,spell_magnification:25,spell_skills_it_magnifies:["chaos"],spell_drain_effect:100,spell_heal_effect:50,spell_description:"Temperance finds virtue in positioning itself exactly between evil and goodness, hence this spell deals exactly the same damage to the bearer as the enemy",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/temperance_small.jpg",spell_xp:"Cantrips"},{spell_id:21,spell_name:"The Hanged Man",spell_meaning:"Letting go, surrender",spell_type:"Honor",spell_damage:104,spell_magnification:0,spell_skills_it_magnifies:["survival","honor"],spell_drain_effect:100,spell_heal_effect:0,spell_description:"While this spell deals moderate damage, the act of surrender deals an exceptional toll on the caster.",spell_asset_front:"./assets/assets/cards_small/front.jpg",spell_asset_back:"./assets/cards_small/hanged_man_small.jpg",spell_xp:"Intermediate Elemental"}],W=new Audio("./assets/assets/audio/Under-Attack_AdobeStock_353737497.wav"),g=new Audio("./assets/assets/audio/fantasmi-dell-opera-a-loop_AdobeStock_526744294.wav"),E=new Audio("./assets/assets/audio/EPIC-TRAILER-ACTION-ADVENTURE-(TENSE-NERVE)_AdobeStock_637559773.wav"),fe=t=>!t.paused&&!t.ended&&0<t.currentTime,_=(t,e)=>{if(fe(e)){e.pause();const s=e.currentTime;t.play(),t.onended=()=>{e.currentTime=s,e.play()}}else t.play()},ue=()=>{setTimeout(()=>{setInterval(()=>{_(g,W)},3e4)},55e3)},ge=()=>{document.querySelectorAll("audio").forEach(e=>{e.pause(),e.currentTime=0})};class _e{constructor(e,s){B(this,"cardClickedIndex");this.character=e,this.opponent=s}shuffleArr(e){for(let s=e.length-1;s>0;s--){const a=Math.floor(Math.random()*(s+1));[e[s],e[a]]=[e[a],e[s]]}return e}pickThreeCards(e){return e.splice(0,3)}renderCards(e){return e.map(a=>`
            <div class="card-front-back-container" id="${e.indexOf(a)}">
                <div class="spell-card-front">
                </div>
                <div class="spell-card-container spell-card-back" data-card-number="${e.indexOf(a)}">
                    <img src="assets/${a.spell_asset_back}" alt="${a.spell_description}">
                    <ul>
                        <li>
                            <div class="icon-container">
                                <span class="sword"></span>
                                <span class="information">${a.spell_damage}</span>
                                <span class="caduceus"></span>
                                <span class="information">${a.spell_heal_effect}</span>
                                <span class="skull"></span>
                                <span class="information information-border">${a.spell_drain_effect} </span>
                            </div>
                        </li>
                        <li>
                            <div class="xp-container">
                                <span class="xp">
                                </span>
                                <span class="xp-text">
                                    ${a.spell_xp}
                                </span>
                            </div>
                                <span class="description">${a.spell_description}
                                </span>
                        </li>
                    </ul>
                </div>
            </div>
            `)}appendCards(e){let s=document.createElement("div");s.setAttribute("class","spells-container"),s.setAttribute("id","spells-container"),s.innerHTML=e,document.getElementById("main-container").appendChild(s)}removeAppendedCards(){let e=document.getElementById("main-container"),s=document.getElementById("spells-container");e.removeChild(s)}handleCardChoice(e,s,a,l,o){return console.log("entered handleCardChoice"),function(r){let n=r.target.id||r.target.closest(".card-front-back-container").id;e.skill.filter(d=>s[n].spell_skills_it_magnifies.includes(d)).length>0?a.health=a.health-(s[n].spell_magnification+s[n].spell_damage):a.health=a.health-s[n].spell_damage,e.health=e.health+s[n].spell_heal_effect-s[n].spell_drain_effect,e.health<=0?e.health=0:e.health=e.health,a.health<=0?a.health=0:a.health=a.health,e.health<=0?e.dead=!0:e.dead=!1,a.health<=0?a.dead=!0:a.dead=!1,console.log("inside handleCardChoice",e.health,a.health),e.health<=0||a.health<=0?(console.log("inside handleCardChoice, someone is dead"),setTimeout(()=>{l(),o(e,a)},8150)):(console.log("After Spells: no one is dead"),l()),document.getElementById(`${n}`).classList.toggle("flip"),setTimeout(()=>{document.getElementById(`${n}`).classList.toggle("flip"),console.log("inside set timeout that handles the card flip")},6e3)}}setCardChoiceHandler(e,s){const a=document.querySelectorAll(".card-front-back-container");let l=!1;function o(n){l||(e(n),_(W,g),l=!0,a[0].classList.toggle("gather-left-cards"),a[2].classList.toggle("gather-right-cards"),setTimeout(()=>{document.getElementById("spells-container").classList.toggle("disappear")},6500),setTimeout(r,7e3))}function r(){a.forEach(n=>n.removeEventListener("click",o)),s()}setTimeout(()=>{a.forEach(n=>n.addEventListener("click",o))},300)}returnToGame(){}}const $=document.getElementById("character-1-art"),F=document.getElementById("character-2-art"),w=document.getElementById("main-container"),p=document.getElementById("attack-button");let y=!1,A=!0,ye=["conscript","ignisfatuus","mage","naqualk","soulforge"];ue();function k(){console.log("inside render function",$,F,i,c),$.innerHTML=i.renderCharacter(),F.innerHTML=c.renderCharacter(),setTimeout(ke,3500)}function be(){A=!1;let t=document.createElement("div");t.setAttribute("class","no-more-spells"),t.setAttribute("id","no-more-spells"),t.innerHTML=`
    <div class="no-spells-message">
        <h1>Mana has been depleted</h1>
        <p>You must continue without any more magical prowess</p>
    </div>`,w.appendChild(t),setTimeout(()=>{console.log("entered set timeout inside displaynoManaMessage"),document.getElementById("no-more-spells").classList.add("disappear"),t.addEventListener("animationend",()=>{t.style.display="none",console.log("messageDiv",t)})},2500)}function ve(){i.renderMultiplesForFlyOutMessage(c.duplicates),c.renderMultiplesForFlyOutMessage(i.duplicates),i.resetMultiplesForFlyOutMessage(),c.resetMultiplesForFlyOutMessage(),G()}function m(){setTimeout(()=>{Ce()},2500)}function P(){console.log("in new character setTimeout"),i=Y(),console.log("setNextCharacter to: ",i),k(),y=!1}function we(t,e){console.log("checking if someone is dead after spells were cast",t.health,e.health),console.log("someone is dead after spells were cast"),(t.dead||e.dead)&&(t.dead&&e.dead?(console.log("After Spells: both dead"),m()):t.dead?(console.log("After Spells: hero is dead"),y=!0,b.length>0?(console.log("new character available"),setTimeout(P,2510)):(console.log("After Spells: all heroes are dead, no more characters left"),m())):(console.log("After Spells: villain dead"),m()))}function G(){console.log("attackButton.disabled",p.disabled),p.disabled=!0,console.log("attackButton.disabled",p.disabled)}function ke(){console.log("attackButton.disabled",p.disabled),p.disabled=!1,console.log("attackButton.disabled",p.disabled)}function Te(){let t=i.spells.pickThreeCards(z);console.log("nextThreeCard",t);let e=i.spells.renderCards(t).join("");i.spells.appendCards(e),i.spells.setCardChoiceHandler(i.spells.handleCardChoice(i,t,c,k,we),i.spells.removeAppendedCards),console.log("right before if statement, hero.health, villain.health",i.health,c.health)}function De(){if(console.log(i.numberOfTurns),console.log("attack function firing",i.numberOfTurns),!y)if(console.log("is not waiting"),i.numberOfTurns%5===0&&i.numberOfTurns>0)if(i.numberOfTurns=i.numberOfTurns+1,console.log("fifth turn, casting spells"),console.log("!hasNotDisplayedTheMessageBefore",!A),A)if(z.length===0){console.log("mana has displayed before"),be();return}else console.log("entering else statement for casting spells"),Te();else{console.log("hasNotDisplayedTheMessageBefore is false");return}else console.log("hitting the attack else statement"),i.getDiceHTML(i.currentDiceScore),c.getDiceHTML(c.currentDiceScore),i.setDefendDiceHTML(),c.setDefendDiceHTML(),i.takeDamage(c.currentDiceScore,i.currentDefendDiceScore),c.takeDamage(i.currentDiceScore,c.currentDefendDiceScore),G(),ve(),k(),(c.dead||i.dead)&&(c.dead&&i.dead?(console.log("Both are dead"),m()):c.dead?(console.log("villain dead"),m()):i.dead&&(console.log("hero is dead"),y=!0,console.log(b),b.length>0?(console.log("new character available"),setTimeout(P,2510)):m()))}const Se=t=>{for(let e=t.length-1;e>0;e--){const s=Math.floor(Math.random()*(e+1));[t[e],t[s]]=[t[s],t[e]]}return t};let b=Se(ye);function Y(){console.log("entered set next characters");const t=q[b.shift()];return console.log(t),t?new R(t,new _e):{}}function Ce(){y=!0;const t=`
        <div class="ending-message-container">
        <h1>Fantasy Slayer</h1>
            <h2>As Death descends from heights, and obscurity from the shadows, The hope of men has floundered and the memories of elves are no more...<span class="ending-message">You have lost and Zedfire has won!</span></h2>
            <video id="background-video" autoplay muted>
                <source id="video-source" src="./assets/assets/AdobeStock_630909246.mov" type="video/mp4">
            </video>
            <button class="quest-button" id="reset-button">Play Again</button>
        </div>`,e=`
        <div class="ending-message-container">
        <h1>Fantasy Slayer</h1>
            <h2><span class="ending-message">You win!</span>  Only the integrity and fielty of a hero, combined with the unforseeable but infatigable friendship of this group of misfits could have saved us from such evil.</h2>
            <video id="background-video" autoplay muted>
                <source id="video-source" src="./assets/assets/AdobeStock_396656517.mov" type="video/mp4">
            </video>
            <button class="quest-button" id="reset-button">Play Again</button>
        </div>`,s=`
        <div class="ending-message-container">
        <h1>Fantasy Slayer</h1>
            <h2>The Gods have not seen fit to determine how to which side to tip the scales of justice.  Both Hero and Villain have languised.  <span class="ending-message">It is a draw</span>It seems it will lay with another to determine the outcome of this story.</h2>
            <video id="background-video" autoplay muted>
                <source id="video-source" src="./assets/assets/AdobeStock_583211956.mov" type="video/mp4">
            </video>
            <button class="quest-button" id="reset-button">Play Again</button>
        </div>`;c.dead&&i.dead&&b.length===0?(w.innerHTML=s,document.getElementById("background-video").load(),_(E,g)):c.dead?(w.innerHTML=e,document.getElementById("background-video").load(),_(E,g)):(w.innerHTML=t,document.getElementById("background-video").load(),_(E,g)),document.getElementById("reset-button").addEventListener("click",()=>{ge(),location.reload()})}document.getElementById("attack-button").addEventListener("mousedown",De);let i=Y();console.log("HERO: ",i);const c=new R(q.zedfire);let z=i.spells.shuffleArr(me);k();console.log("intro-handler.js fired");document.getElementById("title");const Ee=document.getElementsByTagName("body")[0],u=document.createElement("div"),Ae=document.getElementById("attack-button"),xe=`
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
</div>`,Ie=`
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
    <button id="quest-button" class="quest-button">Begin Your Quest</button>`;function Me(){const t=new Audio("./assets/assets/audio/Evil-Trailer_AdobeStock_354668525.wav");t.volume=.5,t.play()}function He(){u.setAttribute("id","tutorial-modal-container"),u.classList.add("tutorial-modal"),u.innerHTML=Ie,Ee.insertAdjacentElement("afterbegin",u)}function je(){document.getElementById("quest-button").addEventListener("click",()=>{console.log("quest button pushed"),u.style.display="none",Me(),Be()})}function Be(){const t=document.getElementsByTagName("body")[0],e=document.createElement("div");document.getElementById("attack-button"),e.setAttribute("id","tutorial-modal-container"),e.classList.add("tutorial-modal"),e.innerHTML=xe,t.insertAdjacentElement("afterbegin",e),Le()}function N(){const t=document.getElementById("title");console.log("add back light fired. Title classlist is:",t.classList),console.log("title is",t),t.classList.add("backlight"),console.log("title classlist is: ",t.classList),setTimeout(()=>{t.classList.add("title-disappear")},5350),setTimeout(()=>{t.style.display="none",Ae.classList.remove("display-none")},8400)}function Le(){const t=document.getElementById("skip-intro");console.log(t);const e=document.getElementById("intro-modal");document.getElementById("intro-modal-text-container");const s=document.getElementById("tutorial-modal-container");t.addEventListener("click",a=>{e.style.display="none",s.style.display="none",setTimeout(N,3e3)}),setTimeout(()=>{e.style.display="none",e.style.animation="none",s.style.display="none",N()},69e3)}window.addEventListener("load",()=>{console.log("intro-handler window load event fired"),He(),je()});
