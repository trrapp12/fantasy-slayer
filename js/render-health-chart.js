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


let containerWidth = 110;
const circumference = 220;
/*

so I previously had 220 represented by c, the circumference, but for some reason it was such a large number it drew itself 
three or four loops and the player would get a ton of hits and never show any damage until suddenly they did.  So I had to 
test a number, albeit arbitrarily that stopped as soon as the number connected.  It turned out to be 220.

*/


function findRadius (circumference) {
  return circumference / Math.pow(Math.PI, 2)
}

function setColor(health, originalHealth) {
  // short hands for if/ else statements, but have to put the first value it will hit (i.e. highest health level) first
  if (health >= 0.75 * originalHealth) return "#6D8BA6";
  if (health >= 0.5 * originalHealth) return "#F2A341";
  return "#BF0404";
}


function findCircumference (containerWidth) {
    let r = containerWidth / 2;
  return (2 * (Math.PI * r))
}

function getBoxWidth(windowWidth, percentage) {
  return (windowWidth * (percentage / 100))
}

function findDiameter (radius) {
  return radius * 2
}

function setXInit (width) {
    return width / 2
}

function setYInit(width, diameter) {
    return ((width - diameter) / 2)
}

function renderHealthChart(currentHealthForBar, totalHealth) {
    const color = setColor(currentHealthForBar, totalHealth)
    const healthPercentage = (currentHealthForBar / totalHealth)
    // let aspect = getAspectRatio(containerWidth, containerWidth)
    const w = getBoxWidth(containerWidth, 100)
    // let h = getBoxHeight(w, aspect)
    const c = findCircumference(w, 2)
    const nc = healthPercentage * circumference;
    const r = findRadius(c)
    const d = findDiameter(r)
    // let coord = findCenterCoordinates(containerWidth, w, containerWidth, h)
    // let currentHealth = 360;
    // let totalHealth = 1000;
    const xInit = setXInit(containerWidth)
    const yInit = setYInit(containerWidth, d)
    
    const container = `
      <svg viewBox="0 0 ${w} ${w}">
        <path
          d="M${xInit} ${yInit}
            a ${r} ${r} 0 0 1 0 ${d}
            a ${r} ${r} 0 0 1 0 -${d}"
          fill="none"
          stroke="${color}";
          stroke-width="8";
          stroke-dasharray="${nc}, ${circumference}"

        />
      </svg>
    `
    return container
}

export { renderHealthChart }

  