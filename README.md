# Product-Page
 
 ---

<br>


https://user-images.githubusercontent.com/11747875/171573424-95a2743b-8939-4103-b501-a3dad1ee7640.mp4

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

>“This is the land of Narnia,'
>said the Faun,
>'where we are now; all that lies between the lamp-post
>and the great castle of Cair Paravel on the eastern sea.”
― C.S. Lewis, The Chronicles of Narnia


This is an example of using Object constructors and classes in Javascript.  

---

### QUICKSTART GUIDE: 

To use the app simply click on the ```View Project``` button or visit <a href="https://trrapp12.github.io/Product-Page/">https://trrapp12.github.io/Product-Page/</a>. 

---

### Project demonstrates the following:

- [X] Javascript Classes
    
- [X] use of this
    
- [X] use of .reduce
    
- [X] use of utitility functions.
    
- [X] multiple logical step processes
    
- [X] setTimeOut()
    
- [X] use of import statements
    
- [X] use of spread operators
    
- [X] use of chained ternary operators

- [X] use of chaining javascript methods ``` new Array().filter(0).map().join() ```

---

### CHALLENGES I OVERCAME...

So while I was using this I needed to create an eventlistener that would change the size and color of the text once the navbar got a certain distance down.  This created a number of interesting issues.  

1) How do you prevent an expensive DOM traversal every time the smallest pixel is scrolled?

* to fix this I had to come up with code that would throttle the the event calls to every 200ms and I had to use a closure so I could access the scope of a parent function to do it.  See below:

```javascript  

(() => {
    // set constants
    const elementHeight = `${document.body.clientHeight}px`;
    const scrollableElement = window;
    const elementToChange = document.querySelectorAll('.nav-link-2')
    const elementColor = 'var(--prussian-blue)';
    const logo = document.getElementById('header-img');

    // check to see if object is window object
    function isElementWindow(element) {
        console.log(`isElementWindow() fired. Element is ${element}, logical comparison returns ${element === window}`)
        return element === window;
    }
    // define scroll event handler
    function scrollHandler(height, scrollableEl, element, color) {
        // when the top of the window is equal to height of the header, turn header background opaque
        for (const item in element) {
            if (isElementWindow(scrollableEl)) {
                // future improvement would take the window height/ window width to get an aspect ratio and then times that by the height to get a more dynamic response, instead of guesstimating 10% scroll down
                if (scrollableEl.scrollY >= (parseInt(height) - (parseInt(height) * .9))) {
                    element[item].style.backgroundColor = `${color}`;
                    element[item].style.letterSpacing = "2px";
                    element[item].style.borderRadius = "0px";
                    logo.style.display = "none"
                }
                // had to create a cumbersome else if instead of just a else statement because the logo would come back after CSS had removed it if you scrolled back up to the top
                else if (window.innerWidth >= 950 && scrollableEl.scrollY <= (parseInt(height) - (parseInt(height) * .9))) {
                    console.log('entering logo resize else if')
                    element[item].style.backgroundColor = 'transparent';
                    element[item].style.letterSpacing = "";
                    element[item].style.borderRadius = "8px";
                    logo.style.display = "block"
                }
            }
        }
    }

    // create throttle handler
    function throttleHandler(func, delay) {
        let lastCall = 0;
        return function(...args) {
            let currentTime = Date.now();
            if (lastCall - currentTime >= delay) {
                func(...args);
                lastCall = currentTime;
            } 
        }
    }

    // call scroll eventhandler in throttle handler
    window.addEventListener('scroll', () => {

        // tableData is only for use of console.table
        let tableData = [
            {
                name: "elementHeight",
                value: elementHeight
            },
            {
                name: "scrollableElement",
                value: scrollableElement
            },
            {
                name: "elementToChange",
                value: elementToChange
            },
            {
                name: "elementColor",
                value: elementColor
            }
        ];

        console.table(tableData)

        // attach handler to window.scroll event
        throttleHandler(scrollHandler(elementHeight, scrollableElement, elementToChange, elementColor))
    })
})();
    
```
    
2) I decided I wanted to create an animation

```javascript

(() => {
  window.addEventListener('load', () => {
    console.log('window loaded');
       
    const lineObject = document.getElementsByClassName('line');
    const secondLineObject = document.getElementsByClassName('straight');
    const displayWindow = document.getElementById('count');
    
    for (const [key, value] of Object.entries(lineObject)) {
      value.classList.add('spin-animation')
    }
    
    for (const [key, value] of Object.entries(secondLineObject)) {
      value.classList.add('spin-animation')
    }
    
    function counter() {
     count = 10;   

     setInterval(depricateTime, "1000")     
      
     function depricateTime() {  
       if (count >= 0) {
         displayTime(count); 
         count--;
       } else {
         clearInterval(depricateTime);
         closeWindow();
       }                       
       
       
     } 
     
      function displayTime(count) {
        displayWindow.innerHTML = count;
      }
      
      function closeWindow() {
        document.getElementById('counter-container').style.display = "none"
      }
    }
    
    counter();
        
  })
})()

```

---

### MY OWN PERSONAL CONTRIBUTIONS INCLUDED 

- [X] Use of multiple players
      
- [X] Use of Fisher-Yates shuffle algorithm
      
- [X] More play options (defend dice)
      
- [X] detecting when multiples of the same dice were rolled, detected which dice they belonged to, and differentiating if between multiples of multiples (i.e. pair of 3's and 3 5's rolled)
      
- [X] use of .replace()
      
- [X] use of powers ``` ** ```
      
- [X] use of Number()
      
- [X] use of Set to detect duplicates
      
- [X] use of .sort()
      
- [X] use of .shift()

---

### ATTRIBUTIONS

* Character Images created by "Travel Dawn," licensed under Adobe Standard license.

* 'Choose not to be harmed—and you won't feel harmed. Don't feel harmed—and you haven't been.' --original quote by Marcus Aurelius.

* 'Death may be the greatest of all human blessings.' --original quote by Socrates.

* Definition of 'hæland': <a href="https://www.etymonline.com/search?q=haeland">Healer</a>, on <a href="https://www.etymonline.com/">etymonline</a>

* Defintiion of 'ignis fatuus': <a href="https://www.etymonline.com/search?q=ignis%20fatuus&ref=searchbar_searchhint">ignis fatuus</a>, on <a href="https://www.etymonline.com/">etymonline</a>

* Definition of 'Vliecke': <a href="https://www.etymonline.com/search?q=Vliecke">Vliecke</a>, on <a href="https://www.etymonline.com/">etymonline</a>

* Definition of 'Goyathlay': <a href="https://www.britannica.com/biography/Geronimo">Geronimo Apache leader</a>, on <a href="https://www.britannica.com/">Britannica</a>

* Definition of 'feohtende', 'werede', 'ofslægenne' from <a href="https://lrc.la.utexas.edu/eieol/engol/30">Old English Online: Lesson 3, Jonathan Slocum </a>, on <a href="https://liberalarts.utexas.edu/lrc/">Linguistics Research Center: College of Liberal Arts</a>

* Definition of 'התחלה': <a href="https://en.wiktionary.org/wiki/Wiktionary:Main_Page">Wiktionary</a></p>

* Definition of 'anræd': <a href="https://www.st-andrews.ac.uk/~cr30/vocabulary/">Old English Core Vocabulary</a>

* itle font "Angars Ruins" created by <a href="http://www.mansgreback.com/">Mans Greback</a>. Used under non-profit license QF121285258G as this is a public facing site, but with no way nor desire of making a profit.

* File # 396656517, a video of Powerful Female in medieval armor by <a href="https://stock.adobe.com/contributor/205110669/procinemastock?load_type=author&prev_url=detail">procinemastock</a>. Used under Adobe Stock license.

* File # 630909246, a faceless wraith lingers in the air, by <a href="https://stock.adobe.com/contributor/207618192/justlight?load_type=author&prev_url=detail">justlight</a>. Used under Adobe Stock license.

* File # 199937353, realistic dry ice smoke, by <a href="https://stock.adobe.com/contributor/206637170/mputsylo?load_type=author&prev_url=detail">myputsylo</a>. Used under Adobe Stock license.

* UIcons by <a href="https://www.flaticon.com/uicons">Flaticon</a>

---

### YOU CAN FIND ME AT:

*For more information see my [LinkedIn](https://www.linkedin.com/in/trevor-rapp-042a1037) or return to my [Github](https://github.com/trrapp12)*

