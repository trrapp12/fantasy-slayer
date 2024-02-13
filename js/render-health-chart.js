/* 

28 OCT 2023: COMMENTING THESE OUT.  THEY ARE HERE FOR DYNAMICALLY CALCULATING SIZE OF CIRCLE COMPARED TO WINDOW ASPECT RATIO.  
MAY NEED WHEN MOVE TO A MOBILE RESPONSIVE DESIGN.  SEE LINES 58, 60, 65, 66, 67 FOR CORRESPONDING CODE

function getAspectRatio(windowWidth, windowHeight) {
   return windowWidth / windowHeight;
 }

 function getBoxHeight(boxWidth, aspectRatio) {
   return boxWidth / .4444
 }

 function findCenterCoordinates (windowWidth, boxWidth, windowHeight, boxHeight) {
   return `${(windowWidth / 2) - (boxWidth / 2)} ${(windowHeight / 2) - (boxHeight / 2)}`
 }
 
*/

// 2.355 is admittedly somewhat of a magical number.  It mostly worked at circumference x2, but I had to use some back 
// and forth to tease out the optimum number

function returnContainerWidth(containerElement) {
  return containerElement ? containerElement.clientWidth / 5000 : 0;
};

function glowEffectCodeBlock (health, originalHealth) {
  const glowOn = `url(#glow)`
  const glowOff = ''
  
  return health < originalHealth ? glowOff : glowOn
}


function findRadius (circumference) {
  if (isNaN(circumference) || circumference <= 0) {
    throw new Error("findRadius either received NaN, 0, or a negative number as an input")
  } 
  return circumference / (Math.PI * 2)
  
}

function setColor(health, originalHealth) {
  // short hands for if/ else statements, but have to put the first value it will hit (i.e. highest health level) first
  if (health > originalHealth) return "#FFFFFF";
  if (health >= 0.75 * originalHealth) return "#6D8BA6";
  if (health >= 0.5 * originalHealth) return "#F2A341";
  return "#BF0404";
}


function findCircumference (containerWidth) {
  if (isNaN(containerWidth) || containerWidth <= 0) {
    throw new Error("findCircumference either received NaN, 0, or a negative number as an input")
    
  } else {
    return containerWidth * Math.PI
  }
}

function getBoxWidth(r, percentage) {
  return (r * 2 * (percentage / 100))
}

function findDiameter (radius) {
  if (isNaN(radius) || radius < 0) {
    throw new Error("findDiameter either received NaN, 0, or a negative number as an input")
  } else {
    return radius * 2
  }
}

function setXInit (width) {
  if (width === Infinity) {
    return Infinity;
  } else if (width === -Infinity) {
    return -Infinity
  } else {
    return parseInt(width) / 2.03
  }
}

function setYInit(width) {
  if (width === Infinity) {
    return Infinity;
  } else if (width === -Infinity) {
    return -Infinity
  } else {
    return parseInt(width) / 10.25
  }
}

function renderHealthChart(currentHealthForBar, totalHealth, containerWidth) {

  const color = setColor(currentHealthForBar, totalHealth)
  const glow = glowEffectCodeBlock(currentHealthForBar, totalHealth)
  const healthPercentage = (currentHealthForBar / totalHealth)
    // let aspect = getAspectRatio(containerWidth, containerWidth)
    const c = findCircumference(containerWidth)
    if (c === 0) {
      throw new Error('renderHealthChart received a 0 value for containerWidth')
    }
    const w = containerWidth
    // let h = getBoxHeight(w, aspect)
    const nc = healthPercentage * c;
    const r = findRadius(c)
    const d = findDiameter(c)
    // let coord = findCenterCoordinates(containerWidth, w, containerWidth, h)
    const xInit = setXInit(containerWidth)
    const yInit = setYInit(containerWidth, c)
    
    const container = `<svg viewBox="0 0 ${w} ${w}">
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
          d="M${xInit} ${yInit}
            a ${r} ${r} 0 0 1 0 ${d}
            a ${r} ${r} 0 0 1 0 -${d}"
          fill="none"
          stroke="${color}"
          stroke-width=".01"
          stroke-dasharray="${nc}, ${c}"
          filter="${glow}"
        />
      </svg>
    `;
    return container
}

function updateHealthChart(currentHealthForBar, totalHealth, containerWidth) {

  const circumference = containerWidth * 2.669;
  console.log('updateHealthChart firing')
  const healthPercentage = (currentHealthForBar / totalHealth)
  const color = setColor(currentHealthForBar, totalHealth);
  const healthPath = document.querySelectorAll('.health-path');
  const glow = glowEffectCodeBlock(currentHealthForBar, totalHealth);
  const nc = healthPercentage * circumference;

  console.log('healthPath', healthPath)

  for (const paths of healthPath) {
    console.log('inside paths for of', paths, 'healthPath')
    if (currentHealthForBar > totalHealth) {
      console.log('inside paths for of if statement, ', currentHealthForBar, totalHealth, healthPath)
      paths.setAttribute('filter', `${glow}`)
    } else {
      console.log('inside paths for of else statement, ', currentHealthForBar, totalHealth, healthPath)
      paths.removeAttribute('filter')
    }
    console.log('outside paths for of else statement, ', currentHealthForBar, totalHealth, healthPath)
    paths.setAttribute('stroke', `${color}`);
    paths.setAttribute('stroke-dasharray', `${nc}, ${circumference}`);
    paths.setAttribute('stroke', `${color}`);
  }
  
}

export { glowEffectCodeBlock, findRadius, setColor, findCircumference, getBoxWidth, findDiameter, setXInit, setYInit, returnContainerWidth, renderHealthChart, updateHealthChart }

  