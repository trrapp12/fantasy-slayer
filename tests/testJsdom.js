// This file was created to rule out a bad installation of JSDOM as a cause of JEST tests breaking
// To test simply type 'node tests/testJsdom.js' into the CLI.  If the original html variable's 
// innerHTML has changed 'jsdom is working. Title was updated successfully' then you know JSDOM is working

// Import jsdom
const { JSDOM } = require('jsdom');

// Define a simple HTML structure
const html = `
<!DOCTYPE html>
<html>
<head><title>Test Page</title></head>
<body>
  <h1 id="title">Hello, jsdom!</h1>
  <p>This is a test paragraph.</p>
</body>
</html>
`;

// Load the HTML into jsdom
const dom = new JSDOM(html);

// Use jsdom's API to manipulate the DOM
const document = dom.window.document;
const titleElement = document.getElementById('title');
titleElement.textContent = 'jsdom is working. Title was updated successfully';

// Log the modified HTML
console.log('Modified HTML:', dom.serialize());
