let containerWidth = 110;

function findRadius (circumference) {
  return circumference / Math.pow(Math.PI, 2)
}

function setColor(health, originalHealth) {
    let x = ''
    if (health >= .75 * originalHealth) {
        x = "#6D8BA6"
    } else if (health >= .5 * originalHealth) {
        x ="#F2A341"
    } else {
        x ="#BF0404"
    } 
    return x
}

function getAspectRatio(windowWidth, windowHeight) {
  return windowWidth / windowHeight;
}

function getBoxWidth(windowWidth, percentage) {
  return (windowWidth * (percentage / 100))
}

function getBoxHeight(boxWidth, aspectRatio) {
  return boxWidth / .4444
}

function findCircumference (containerWidth) {
    let r = containerWidth / 2;
  return (2 * (Math.PI * r))
}

function findDiameter (radius) {
  return radius * 2
}

function findCenterCoordinates (windowWidth, boxWidth, windowHeight, boxHeight) {

  return `${(windowWidth / 2) - (boxWidth / 2)} ${(windowHeight / 2) - (boxHeight / 2)}`
}

function setStrokeWidth (num) {
  return num
}

function setXInit (width) {
    return width / 2
}

function setYInit(width, diameter) {
    return ((width - diameter) / 2)
}

function renderHealthChart(currentHealthForBar, totalHealth) {
    let color = setColor(currentHealthForBar, totalHealth)
    let healthPercentage = (currentHealthForBar / totalHealth)
    let aspect = getAspectRatio(containerWidth, containerWidth)
    let w = getBoxWidth(containerWidth, 100)
    let h = getBoxHeight(w, aspect)
    let c = findCircumference(w, 2)
    let nc = healthPercentage * 220;
    let r = findRadius(c)
    let d = findDiameter(r)
    let coord = findCenterCoordinates(containerWidth, w, containerWidth, h)
    let strokeWidth = setStrokeWidth(20)
    // let currentHealth = 360;
    // let totalHealth = 1000;
    let xInit = setXInit(containerWidth)
    let yInit = setYInit(containerWidth, d)
    
    const container = `
      <svg viewBox="0 0 ${w} ${w}">
        <path
          d="M${xInit} ${yInit}
            a ${r} ${r} 0 0 1 0 ${d}
            a ${r} ${r} 0 0 1 0 -${d}"
          fill="none"
          stroke="${color}";
          stroke-width="8";
          stroke-dasharray="${nc}, ${220}"
          // so I previously had 220 represented by c, the circumference, but for some reason it was such a large number it drew itself
          // three or four loops and the player would get a ton of hits and never show any damage until suddenly they did.  So I had to 
          // test a number, albeit arbitrarily that stopped as soon as the number connected.  It was 220.
        />
      </svg>
    `
    console.log(container)
    return container
}

export { renderHealthChart }

  