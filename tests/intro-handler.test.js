/**
 * @jest-environment jsdom
 */


const { createModal, buildTutorial, addBackLight } = require('../js/intro-handler.js')

// future tests to consider: 
// playAudio() -> test false for paused if audio playing
// playAudio() -> test for corrupted file
// playAudio() -> test for large file
// playAudio() -> test for file with incorrect path

describe('intro-handler.js -> createModal()', ()=> {
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

// describe('buildTutorial()', (createModal)=> {
    // it('should build the tutorial modal with the correct id, classname, and content', () => {
    //     const container = buildTutorial();
    //     expect(container.getAttribute('id')).toBe('tutorial-modal-container');
    //     expect(container.classList.contains('tutorial-modal')).toBe(true);
    //     expect(container.innerHTML).toBe(tutorialHTML);
    //     expect(document.body.firstChild).toBe(container);
    //   });
    // it('should throw an error when classname is null or undefined', () => {
    //     expect(() => {
    //       createModal('tutorial-modal-container', null, tutorialHTML);
    //     }).toThrow('createModal received a "null" or "undefined" value for "className"');
    //   });

    //   it('should throw an error when id is null or undefined', () => {
    //     expect(() => {
    //       createModal(null, 'tutorial-modal', tutorialHTML);
    //     }).toThrow('createModal received a "null" or "undefined" value for "id"');
    //   });

    // it('should throw an error when content is null or undefined', () => {
    //     expect(() => {
    //       createModal('tutorial-modal-container', 'tutorial-modal', null);
    //     }).toThrow('createModal received a "null" or "undefined" value for "content"');
    //   });
// })

describe('intro-handler.js -> addBackLight()', () => {
    it('should add the "backlight" class to the "title" element', async () => {
        // Arrange
        const title = document.createElement('div');
        title.id = 'title';
        document.body.appendChild(title);
  
        // Act
        addBackLight();

          // Wait for the timeout to complete
        await new Promise(resolve => setTimeout(resolve, 5500));
  
        // Assert
        expect(title.classList.contains('backlight')).toBe(true);
      });

          // After 5350ms, adds the 'title-disappear' class to the 'title' element.
    it('should add the "title-disappear" class to the "title" element after 5350ms', (done) => {
        // Arrange
        const title = document.createElement('div');
        title.id = 'title';
        document.body.appendChild(title);
  
        // Act
        addBackLight();
  
        // Assert
        setTimeout(() => {
          expect(title.classList.contains('title-disappear')).toBe(true);
          done();
        }, 5350);
      });

          // After 8400ms, sets the 'display' property of the 'title' element to 'none'.
    it('should set the "display" property of the "title" element to "none" after 8400ms', (done) => {
        // Arrange
        const title = document.createElement('div');
        title.id = 'title';
        document.body.appendChild(title);
  
        // Act
        addBackLight();
  
        // Assert
        setTimeout(() => {
          expect(title.style.display).toBe('none');
          done();
        }, 8400);
      });

          // None found.
    it('should not have any additional side effects', () => {
        // Arrange
        const title = document.createElement('div');
        title.id = 'title';
        document.body.appendChild(title);
  
        // Act
        addBackLight();
  
        // Assert
        expect(title.classList.contains('backlight')).toBe(true);
        expect(title.classList.contains('title-disappear')).toBe(false);
        expect(title.style.display).not.toBe('none');
      });
})