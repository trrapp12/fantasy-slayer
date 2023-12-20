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

      it('should set the innerHTML of the created div element to the given content', () => {
        const id = 'test-id';
        const className = 'test-class';
        const content = 'test content';
  
        const result = createModal(id, className, content);
  
        expect(result.innerHTML).toBe(content);
      });

      it('should throw an error when content is not provided', () => {
        const id = 'test-id';
        const className = 'test-class';
  
        expect(() => {
          createModal(id, className, undefined);
        }).toThrow();
      });

      it('should throw an error when className is not provided', () => {
        const id = 'test-id';
        const content = 'test content';
  
        expect(() => {
          createModal(id, undefined, content);
        }).toThrow();
      });
})