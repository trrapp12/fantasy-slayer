
/* ************************************** CREATE THE HEPTAGON ************************************** */

// Create SVG element
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "400");
svg.setAttribute("height", "400");
svg.setAttribute("id", "mana")

function createGradient(id, angle, defs) {
  const linearGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
  linearGradient.setAttribute("id", id);
  // Calculate the direction of the gradient
  const x1 = Math.round(50 + 50 * Math.cos(angle - Math.PI / 2));
  const y1 = Math.round(50 + 50 * Math.sin(angle - Math.PI / 2));
  const x2 = Math.round(50 + 50 * Math.cos(angle + Math.PI / 2));
  const y2 = Math.round(50 + 50 * Math.sin(angle + Math.PI / 2));

  linearGradient.setAttribute("x1", x1 + "%");
  linearGradient.setAttribute("y1", y1 + "%");
  linearGradient.setAttribute("x2", x2 + "%");
  linearGradient.setAttribute("y2", y2 + "%");

  const stops = [
  { offset: "0%", color: "rgba(30,98,176,73)", opacity: ".95" },
  { offset: "70%", color: "rgba(109, 139, 166, .5)", opacity: ".15" },
  { offset: "100%", color: "rgba(109, 139, 166, .5)", opacity: ".15" }
];
  
  stops.forEach(stopInfo => {
  const stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop.setAttribute("offset", stopInfo.offset);
  stop.setAttribute("stop-color", stopInfo.color);
  stop.setAttribute("stop-opacity", stopInfo.opacity);
  linearGradient.appendChild(stop);
});

  defs.appendChild(linearGradient);
}

const highlight = '#433626'

const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
svg.appendChild(defs);

const numberOfSides = 7;
const centerX = 200;
const centerY = 200;
const radius = 100; // Adjust as needed

function createTriangleVertices(centerX, centerY, radius, index, totalSides) {
    const angle = 2 * Math.PI / totalSides;
    const x1 = centerX + radius * Math.cos(angle * index);
    const y1 = centerY + radius * Math.sin(angle * index);
    const x2 = centerX + radius * Math.cos(angle * (index + 1));
    const y2 = centerY + radius * Math.sin(angle * (index + 1));

    return `${centerX},${centerY} ${x1},${y1} ${x2},${y2}`;
}

// Create a triangle
function createTriangle(number, fillColor, strokeColor, strokeWidth) {
  let triangleArray = []
  for (let i = 0; i < number; i++) {
    const points = createTriangleVertices(centerX, centerY, radius, i, number);
        const triangle= document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    triangle.setAttribute("points", points); // Example points
    triangle.setAttribute("fill", fillColor);
    triangle.setAttribute("stroke", strokeColor);
    triangle.setAttribute("stroke-width", strokeWidth);

    triangleArray.push(triangle)
}
  return triangleArray
}

const gradientFillColor = `url(#myGradient)`

let triangles = createTriangle(numberOfSides, gradientFillColor, highlight, .5);

triangles.forEach(triangle => {
  svg.appendChild(triangle);
});

for (let i = 0; i < numberOfSides; i++) {
  const angle = 2 * Math.PI / numberOfSides * i;
  const gradientId = `gradient-${i}`;
  createGradient(gradientId, angle, defs);

  const points = createTriangleVertices(centerX, centerY, radius, i, numberOfSides);
  const triangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  triangle.setAttribute("points", points);
  triangle.setAttribute("fill", `url(#${gradientId})`);
  triangle.setAttribute("stroke", highlight);
  triangle.setAttribute("stroke-width", "1");

  svg.appendChild(triangle);
}

document.body.appendChild(svg);

/* ************************************** CREATE FUNCTIONALITY OF HEPTAGON ************************************** */

/* CREATE AN ARRAY OF THE 'PIE SLICES' THAT WILL NEED TO APPEAR/DISAPPEAR.  
HEPTAGON HAS 13 CONSTITUENT POLYGONS.  NUMBERS 7 - 13 ARE THE VISIBLE PIE SLICES */

const heptagonNode = document.querySelectorAll("#mana > polygon")

function parseHeptagonArray (obj) {
  let heptagonArray = []

  Object.values(heptagonNode).forEach((value) => {
    heptagonArray.push(value)
  })
  return heptagonArray.slice(7,14)
}

function hideAPolygon (arr) {
  console.log('inside hideAPolygon, arr is: ', arr, "arr[-1] is: ", arr[-1])
  arr[arr.length - 1].style.display = 'none';
}

function removeAPolygon (arr) {
  arr.pop()
  return arr
}



// onlySevenPolygons = parseHeptagonArray(heptagonNode)


export { heptagonNode, parseHeptagonArray, hideAPolygon, removeAPolygon }
