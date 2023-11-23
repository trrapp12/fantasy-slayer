# Fantasy Slayer

[![Netlify Status](https://api.netlify.com/api/v1/badges/1ef82717-63c6-4dba-8f18-bf85d08f1d90/deploy-status)](https://app.netlify.com/sites/fantasy-slayer/deploys?branch=production)
 
 ---

<br>

https://github.com/trrapp12/fantasy-slayer/assets/11747875/5c34ddfb-b261-438b-99e3-cdb1fa0c9020

<br>

[![Button60](https://user-images.githubusercontent.com/11747875/144651679-dc423f76-a98a-456d-8ca2-d913f0b7df12.png)](https://trrapp12.github.io/Product-Page/)

<br>
<br>


---

<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<br>
<br>

---

### Description:

<br/>


> “One day, you will be old enough to start reading fairytales again.”
> 
> -― C.S. Lewis, The Chronicles of Narnia

*For the user, this is a visually stunning fantasy quest to save the world from the grasp of an eternal threat.  You will cycle through 5 heroes and use your attack dice and your spell cards to try and conquer the evil ZedFire.*

*For prospective employers this is a portfolio project I have put together demonstrating Object constructors and classes in Javascript.  It utilizes classes to create separate types of characters (heroes and villains), and then another set of classes to create spell cards which get integrated into the character classes.*

*It is a great example of using JavaScript classes with complex game logic.*

---

### QUICKSTART GUIDE: 

<br/>


To use the app simply click on the ```View Project``` button or visit <a href="https://fantasy-slayer.com">https://fantasy-slayer.com/</a>. 

<br>

<details>
  <summary>Game Play</summary>
  
* You are the player on the left.

* The enemy will appear as the player on the right.

* You will play through 5 separate heroes, attempting to defeat the villain—Zedfire.

* Below each character are sets of dice. White dice are the hero attack dice, black dice are the villain attack dice, and red dice are rolled for defense.

* Clicking 'To Battle' will roll all the dice simultaneously for both you and the enemy.

* Attack dice are six-sided, and defense dice are ten-sided.

* Attack points are calculated by summing up all the dice. For example, a roll of 1, 2, 3 would result in 1 + 2 + 3 = 6.

* However, there is a chance for a boosted attack. If matching dice are rolled, all matches will be multiplied instead of added. All multiplicands will be calculated first, and remaining numbers will be added. For example, a roll of 1, 3, 3 would be (3 X 3) + 1 = 10. It's possible to get multiple sets of matches. For instance, a roll of 3, 3, 4, 4, 4 would be 3 X 3 X 4 X 4 X 4 = 576.

* The amount you roll for defense represents a percentage out of 100. For example, a roll of 9 would mean you defended 90% of the attack. So if your opponent's original attack was 100 points, you would only receive 10 points of damage.

* Every fifth turn, heroes earn enough mana to cast a spell. When this opportunity comes, three cards will be placed face down in front of you. Click to choose a spell. But choose wisely, as not all spells are created equally.

* Spells have a damage effect (how attacks are calculated), a healing effect (meaning heroes can regain life), and a drain effect (energy actually expended in casting the spell).

* This means several situations can become possible.

* Obviously, spells can inflict enough damage to defeat the villain.

* Spells can also heal the hero, even one that is at the brink of death.

* Spells come in different levels. From weakest to highest are Cantrips, Evocation Mastery, Spoken Arcana, Intermediate Elemental, Arcane Domain, and Cosmic.

* The higher the spell level, the more damage it inflicts on the enemy, but also the more drain effect it incurs.

* Casting a very powerful spell by a weakened hero may inflict great damage on the villain but simultaneously kill the hero.

* There is a limited amount of spells.  Once exhausted you must continue with only your dice.

* In both dice attacks and spells, a win is considered when at least one hero remains with at least 1 point of health when the villain is defeated.

* A loss is the inverse—no more health, no more hero replacements, and the villain still has health points.

* A tie occurs when both the villain and all heroes reach 0 health points at the same time.
</details>


---

### Project demonstrates the following:

<br/>


- [X] Javascript Classes
    
- [X] use of this

- [X] Use of call back functions to access the state of wrapper functions
    
- [X] method chaining of .reduce() and .filter()
    
- [X] use of utitility functions.
    
- [X] multiple logical step processes
    
- [X] setTimeOut()
    
- [X] use of import statements
    
- [X] use of spread operators
    
- [X] use of chained ternary operators

- [X] use of chaining javascript methods ``` new Array().filter(0).map().join() ```

---

### CHALLENGES I OVERCAME...

<br/>


- [X] working integrating one JavaScript Class into another (heroes each have a class which controls their functionality and rendering.  Spells also have the same.
But they were both 

- [X] using callback functions to make return values available in the correct scope

- [X] working with trigonometry and dynamic variables in SVG to create a health bar that resizes automatically and programmatically

- [X] code splitting to prevent delays on load and to make code much more manageable

- [X] using separation of concerns to keep complex logic functional, maintainable, and easy to understand

- [X] integrating multiple sound tracks without them overlapping

- [X] iterating through an object and outputting any matches that are found

- [X] creating complex calculations (i.e. taking numbers on a random roll, multiplying all the matches, but ONLY the matches, and then adding the rest)

- [X] working with conceptual 3D using standard CSS to get a card flip animation
---

### MY OWN PERSONAL CONTRIBUTIONS INCLUDED 

<br/>


- [X] Use JavaScript classes to create multiple players, multiple characters, and multiple spells that can be generated in random order.  
      
- [X] Use of Fisher-Yates shuffle algorithm for a truely random distribution in my array sorting.

- [X] A visually impressive health bar that both progress/decline and updates dynamically and in conjunction with the player status.
      
- [X] More play options (defend dice), and casting spells
      
- [X] I added the capability to detect when multiples of the same dice were rolled, detected which dice they belonged to, and differentiating if between multiples of multiples (i.e. pair of 3's and 3 5's rolled)
      
- [X] use of .replace()
      
- [X] use of powers ``` ** ```
      
- [X] use of Number()
      
- [X] use of Set to detect duplicates
      
- [X] use of .sort()
      
- [X] use of .shift()

---

### ATTRIBUTIONS

<br/>

#### Definitions:

* Definition of 'hæland': <a href="https://www.etymonline.com/search?q=haeland">Healer</a>, on <a href="https://www.etymonline.com/">etymonline</a>

* Defintiion of 'ignis fatuus': <a href="https://www.etymonline.com/search?q=ignis%20fatuus&ref=searchbar_searchhint">ignis fatuus</a>, on <a href="https://www.etymonline.com/">etymonline</a>

* Definition of 'Vliecke': <a href="https://www.etymonline.com/search?q=Vliecke">Vliecke</a>, on <a href="https://www.etymonline.com/">etymonline</a>

* Definition of 'Goyathlay': <a href="https://www.britannica.com/biography/Geronimo">Geronimo Apache leader</a>, on <a href="https://www.britannica.com/">Britannica</a>

* Definition of 'feohtende', 'werede', 'ofslægenne' from <a href="https://lrc.la.utexas.edu/eieol/engol/30">Old English Online: Lesson 3, Jonathan Slocum </a>, on <a href="https://liberalarts.utexas.edu/lrc/">Linguistics Research Center: College of Liberal Arts</a>

* Definition of 'התחלה': <a href="https://en.wiktionary.org/wiki/Wiktionary:Main_Page">Wiktionary</a></p>

* Definition of 'anræd': <a href="https://www.st-andrews.ac.uk/~cr30/vocabulary/">Old English Core Vocabulary</a>

* Character Images created by "Travel Dawn," licensed under Adobe Standard license.

<br/>

#### Quotes: 

* 'Choose not to be harmed—and you won't feel harmed. Don't feel harmed—and you haven't been.' --original quote by Marcus Aurelius.

* 'Death may be the greatest of all human blessings.' --original quote by Socrates.

<br/>

#### Fonts:

* Title font "Angars Ruins" created by <a href="http://www.mansgreback.com/">Mans Greback</a>. Used under non-profit license QF121285258G as this is a public facing site, but with no way nor desire of making a profit.

<br/>

#### Videos: 

* File # 583211956, Cinematic and Atmospheric Close-up Shot of Scales that Lady Justice is Holding by <a href="https://stock.adobe.com/contributor/210776841/im-imagery?load_type=author&prev_url=detail">IM Imagery</a>.  Used under Adobe Stock license.

* File # 396656517, a video of Powerful Female in medieval armor by <a href="https://stock.adobe.com/contributor/205110669/procinemastock?load_type=author&prev_url=detail">procinemastock</a>. Used under Adobe Stock license.

* File # 630909246, a faceless wraith lingers in the air, by <a href="https://stock.adobe.com/contributor/207618192/justlight?load_type=author&prev_url=detail">justlight</a>. Used under Adobe Stock license.

* File # 199937353, realistic dry ice smoke, by <a href="https://stock.adobe.com/contributor/206637170/mputsylo?load_type=author&prev_url=detail">myputsylo</a>. Used under Adobe Stock license.

* UIcons by <a href="https://www.flaticon.com/uicons">Flaticon</a>

<br/>

#### Audio 

* EPIC-TRAILER-ACTION-ADVENTURE-(TENSE-NERVE)_AdobeStock_637559773.mp3 by <a href="https://stock.adobe.com/search/audio?album=&attribution=381fc15d3525a9b8d1de5ec43272050f&current_page=1&duration_max=1200000&duration_min=0&keywords=&loop=false&order=relevance&page_limit=50&tempo_max=300&tempo_min=1">Summer Nights</a>.  Used under Adobe Stock License.

* Evil-Trailer_AdobeStock_354668525.mp3 by <a href="https://stock.adobe.com/search/audio?album=&attribution=0b7874d5914e4be600c4246fcac112db&current_page=1&duration_max=1200000&duration_min=0&keywords=&loop=false&order=relevance&page_limit=50&tempo_max=300&tempo_min=1">Stanislav Barantsov</a>.  Used under Adobe Stock License.

* fantasmi-dell-opera-a-loop_AdobeStock_526744294.mp3 by <a href="https://stock.adobe.com/search/audio?k=526744294">nikproteus</a>.  Used under Adobe Stock License.

* Under-Attack_AdobeStock_353737497.mp3 by <a href="https://stock.adobe.com/search/audio?k=353737497">Paul Werner</a>.  Used under Adobe Stock License.

<br/>

#### Illustrations on Spell Cards

* all illustrations on spells cards were done by <a href="https://stock.adobe.com/contributor/211075182/bubertart?load_type=author&prev_url=detail">BubertArt</a>.  Used under Adobe Stock License.

---

### YOU CAN FIND ME AT:
<br/>

*For more information see my [LinkedIn](https://www.linkedin.com/in/trevor-rapp-042a1037) or return to my [Github](https://github.com/trrapp12)*

