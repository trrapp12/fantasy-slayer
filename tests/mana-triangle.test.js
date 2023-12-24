/**
 * @jest-environment jsdom
 */

 const { createGradient } = require('../js/mana-triangle.js')


describe("createGradient", () => {
        // Creates a linearGradient element with the given id and appends it to the defs element
        it('should create linearGradient element with given id and append it to defs element', () => {
            // Arrange
            const id = "gradient1";
            const angle = 0;
            const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        
            // Act
            createGradient(id, angle, defs);
        
            // Assert
            const linearGradient = defs.querySelector(`#${id}`);
            expect(linearGradient).toBeDefined();
            expect(linearGradient.tagName).toBe("linearGradient");
          });
})