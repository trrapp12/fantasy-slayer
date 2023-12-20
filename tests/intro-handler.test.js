/**
 * @jest-environment jsdom
 */

const { createModal } = require('../js/intro-handler.js')

// future tests to consider: 
// playAudio() -> test false for paused if audio playing
// playAudio() -> test for corrupted file
// playAudio() -> test for large file
// playAudio() -> test for file with incorrect path

describe('createModal()', ()=> {
    // Creates a new div element with the given id and class name
    it('should create a new div element with the given id and class name', () => {
        const id = 'test-id';
        const className = 'test-class';
        const content = 'test content';
  
        const result = createModal(id, className, content);
  
        expect(result.tagName).toBe('DIV');
        expect(result.getAttribute('id')).toBe(id);
        expect(result.classList.contains(className)).toBe(true);
        expect(result.innerHTML).toBe(content);
      });
})