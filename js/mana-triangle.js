// Create SVG element
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "400");
svg.setAttribute("height", "400");

// Create and append defs for gradient
const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
const linearGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
linearGradient.setAttribute("id", "myGradient");
linearGradient.setAttribute("x1", "0%");
linearGradient.setAttribute("y1", "0%");
linearGradient.setAttribute("x2", "100%");
linearGradient.setAttribute("y2", "0%");


const stops = [
  { offset: "0%", color: "rgb(59,45,89)", opacity: "1" },
  { offset: "50%", color: "rgb(162,160,217)", opacity: "1" },
  { offset: "100%", color: "rgb(247,247,247)", opacity: "1" }
];

stops.forEach(stopInfo => {
  const stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop.setAttribute("offset", stopInfo.offset);
  stop.setAttribute("stop-color", stopInfo.color);
  stop.setAttribute("stop-opacity", stopInfo.opacity);
  linearGradient.appendChild(stop);
});

defs.appendChild(linearGradient);
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

let triangles = createTriangle(numberOfSides, gradientFillColor, 'black', 1);

triangles.forEach(triangle => {
  svg.appendChild(triangle);
});

document.body.appendChild(svg);