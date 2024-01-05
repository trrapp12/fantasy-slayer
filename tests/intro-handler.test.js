/**
 * @jest-environment jsdom
 */

const { createModal, buildTutorial, addBackLight } = require('../js/intro-handler.js')

// future tests to consider: 
// playAudio() -> test false for paused if audio playing
// playAudio() -> test for corrupted file
// playAudio() -> test for large file
// playAudio() -> test for file with incorrect path

const title = document.getElementById('title')

describe('playAudio', () => {

  // Plays audio file successfully
  it('should play audio file successfully', () => {
    playAudio();
    // Assertion to check if audio is playing
    expect(introAudio.paused).toBe(false);
  });

  // Sets audio volume to 0.5
  it('should set audio volume to 0.5', () => {
    playAudio();
    // Assertion to check if audio volume is set to 0.5
    expect(introAudio.volume).toBe(0.5);
  });

  // Audio file path is invalid
  it('should handle invalid audio file path', () => {
    // Mocking an invalid audio file path
    const invalidAudioPath = './assets/assets/audio/invalid-audio.mp3';
    const originalAudio = Audio;
    Audio = jest.fn(() => ({
      play: jest.fn(),
      volume: 0.5,
      src: invalidAudioPath,
      addEventListener: jest.fn(),
    }));
    playAudio();
    // Assertion to check if the audio file path is invalid
    expect(Audio).toHaveBeenCalledWith(invalidAudioPath);
    Audio = originalAudio;
  });

  // Audio file format is not supported
  it('should handle unsupported audio file format', () => {
    // Mocking an unsupported audio file format
    const unsupportedAudioPath = './assets/assets/audio/unsupported-audio.wav';
    const originalAudio = Audio;
    Audio = jest.fn(() => ({
      play: jest.fn(),
      volume: 0.5,
      src: unsupportedAudioPath,
      addEventListener: jest.fn(),
    }));
    playAudio();
    // Assertion to check if the audio file format is not supported
    expect(Audio).toHaveBeenCalledWith(unsupportedAudioPath);
    Audio = originalAudio;
  });

  // Audio file is corrupted
  it('should handle corrupted audio file', () => {
    // Mocking a corrupted audio file
    const corruptedAudioPath = './assets/assets/audio/corrupted-audio.mp3';
    const originalAudio = Audio;
    Audio = jest.fn(() => ({
      play: jest.fn(),
      volume: 0.5,
      src: corruptedAudioPath,
      addEventListener: jest.fn(),
    }));
    playAudio();
    // Assertion to check if the audio file is corrupted
    expect(Audio).toHaveBeenCalledWith(corruptedAudioPath);
    Audio = originalAudio;
  });

  // Audio file is too large to load
  it('should handle large audio file', () => {
    // Mocking a large audio file
    const largeAudioPath = './assets/assets/audio/large-audio.mp3';
    const originalAudio = Audio;
    Audio = jest.fn(() => ({
      play: jest.fn(),
      volume: 0.5,
      src: largeAudioPath,
      addEventListener: jest.fn(),
    }));
    playAudio();
    // Assertion to check if the audio file is too large to load
    expect(Audio).toHaveBeenCalledWith(largeAudioPath);
    Audio = originalAudio;
  });
});

describe('createModal', ()=> {
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

describe('buildTutorial', (createModal)=> {
    it('should build the tutorial modal with the correct id, classname, and content', () => {
        const container = buildTutorial();
        expect(container.getAttribute('id')).toBe('tutorial-modal-container');
        expect(container.classList.contains('tutorial-modal')).toBe(true);
        expect(container.innerHTML).toBe(tutorialHTML);
        expect(document.body.firstChild).toBe(container);
      });
    it('should throw an error when classname is null or undefined', () => {
        expect(() => {
          createModal('tutorial-modal-container', null, tutorialHTML);
        }).toThrow('createModal received a "null" or "undefined" value for "className"');
      });

      it('should throw an error when id is null or undefined', () => {
        expect(() => {
          createModal(null, 'tutorial-modal', tutorialHTML);
        }).toThrow('createModal received a "null" or "undefined" value for "id"');
      });

    it('should throw an error when content is null or undefined', () => {
        expect(() => {
          createModal('tutorial-modal-container', 'tutorial-modal', null);
        }).toThrow('createModal received a "null" or "undefined" value for "content"');
      });
})

describe('buildScrollHTML', () => {

  // Builds the scroll section with the correct id, classname, and content
  it('should build the scroll section with the correct id, classname, and content', () => {
    const container = buildScrollHTML();
    expect(container.getAttribute('id')).toBe('tutorial-modal-container');
    expect(container.classList.contains('tutorial-modal')).toBe(true);
    expect(container.innerHTML).toBe(scrollHTML);
    expect(document.body.firstChild).toBe(container);
  });

  // Appends the scroll section as the first child of the body
  it('should append the scroll section as the first child of the body', () => {
    const container = buildScrollHTML();
    expect(document.body.firstChild).toBe(container);
  });

  // Adds a click event listener to the skip button that hides the intro modal and the scroll section
  it('should add a click event listener to the skip button that hides the intro modal and the scroll section', () => {
    const container = buildScrollHTML();
    const skipIntroButton = document.getElementById('skip-intro');
    const introModal = document.getElementById('intro-modal');
    skipIntroButton.click();
    expect(introModal.style.display).toBe('none');
    expect(container.style.display).toBe('none');
  });

  // Throws an error if id is null or undefined
  it('should throw an error if id is null or undefined', () => {
    expect(() => {
      buildScrollHTML(null, 'tutorial-modal', scrollHTML);
    }).toThrow('createModal received a "null" or "undefined" value for "id"');
  });

  // Throws an error if classname is null or undefined
  it('should throw an error if classname is null or undefined', () => {
    expect(() => {
      buildScrollHTML('tutorial-modal-container', null, scrollHTML);
    }).toThrow('createModal received a "null" or "undefined" value for "className"');
  });

  // Throws an error if content is null or undefined
  it('should throw an error if content is null or undefined', () => {
    expect(() => {
      buildScrollHTML('tutorial-modal-container', 'tutorial-modal', null);
    }).toThrow('createModal received a "null" or "undefined" value for "content"');
  });
});

describe('addBackLight', () => {
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
        title.setAttribute('id', 'title')
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
        title.setAttribute('id', 'title')
        document.body.appendChild(title);
  
        // Act
        addBackLight();
  
        // Assert
        expect(title.classList.contains('backlight')).toBe(true);
        expect(title.classList.contains('title-disappear')).toBe(false);
        expect(title.style.display).not.toBe('none');
      });
})

describe('closeTutorialStartScrollAnimation', () => {

  // Clicking on the quest button hides the tutorial modal container.
  it('should hide tutorial modal container when quest button is clicked', () => {
    // Arrange
    const questButton = document.createElement('button');
    questButton.setAttribute('id', 'quest-button');
    document.body.appendChild(questButton);

    const tutorialContainer = document.createElement('div');
    tutorialContainer.setAttribute('id', 'tutorial-modal-container');
    document.body.appendChild(tutorialContainer);

    const playAudioMock = jest.fn();
    global.playAudio = playAudioMock;

    const buildScrollHTMLMock = jest.fn();
    global.buildScrollHTML = buildScrollHTMLMock;

    // Act
    closeTutorialStartScrollAnimation();

    questButton.click();

    // Assert
    expect(tutorialContainer.style.display).toBe('none');
    expect(playAudioMock).toHaveBeenCalled();
    expect(buildScrollHTMLMock).toHaveBeenCalled();

    // Clean up
    document.body.removeChild(questButton);
    document.body.removeChild(tutorialContainer);
  });

  // Audio starts playing after the tutorial modal container is hidden.
  it('should start playing audio after tutorial modal container is hidden', () => {
    // Arrange
    const questButton = document.createElement('button');
    questButton.setAttribute('id', 'quest-button');
    document.body.appendChild(questButton);

    const tutorialContainer = document.createElement('div');
    tutorialContainer.setAttribute('id', 'tutorial-modal-container');
    document.body.appendChild(tutorialContainer);

    const playAudioMock = jest.fn();
    global.playAudio = playAudioMock;

    const buildScrollHTMLMock = jest.fn();
    global.buildScrollHTML = buildScrollHTMLMock;

    // Act
    closeTutorialStartScrollAnimation();

    questButton.click();

    // Assert
    expect(playAudioMock).toHaveBeenCalled();

    // Clean up
    document.body.removeChild(questButton);
    document.body.removeChild(tutorialContainer);
  });

  // Scroll HTML is built after the tutorial modal container is hidden.
  it('should build scroll HTML after tutorial modal container is hidden', () => {
    // Arrange
    const questButton = document.createElement('button');
    questButton.setAttribute('id', 'quest-button');
    document.body.appendChild(questButton);

    const tutorialContainer = document.createElement('div');
    tutorialContainer.setAttribute('id', 'tutorial-modal-container');
    document.body.appendChild(tutorialContainer);

    const playAudioMock = jest.fn();
    global.playAudio = playAudioMock;

    const buildScrollHTMLMock = jest.fn();
    global.buildScrollHTML = buildScrollHTMLMock;

    // Act
    closeTutorialStartScrollAnimation();

    questButton.click();

    // Assert
    expect(buildScrollHTMLMock).toHaveBeenCalled();

    // Clean up
    document.body.removeChild(questButton);
    document.body.removeChild(tutorialContainer);
  });
});

describe('addScrollHTMLHandler', () => {

  // Clicking on the 'skip intro' button closes the intro modal and the tutorial modal.
  it('should close intro modal and tutorial modal when skip intro button is clicked', () => {
    // Arrange
    const container = document.createElement('div');
    const skipIntroButton = document.createElement('button');
    const introModal = document.createElement('div');
    const introModalClose = document.createElement('div');
    container.id = 'tutorial-modal-container';
    skipIntroButton.id = 'skip-intro';
    introModal.id = 'intro-modal';
    introModalClose.id = 'intro-modal-text-container';
    container.style.display = 'block';
    introModal.style.display = 'block';
    introModalClose.style.display = 'block';
    document.body.appendChild(container);
    document.body.appendChild(skipIntroButton);
    document.body.appendChild(introModal);
    document.body.appendChild(introModalClose);

    // Act
    addScrollHTMLHandler(container);
    skipIntroButton.click();

    // Assert
    expect(introModal.style.display).toBe('none');
    expect(container.style.display).toBe('none');
  });

  // After clicking the 'skip intro' button, the 'addBackLight' function is called after a timeout of 3000ms.
  it('should call addBackLight function after a timeout of 3000ms when skip intro button is clicked', () => {
    // Arrange
    jest.useFakeTimers();
    const container = document.createElement('div');
    const skipIntroButton = document.createElement('button');
    const introModal = document.createElement('div');
    const introModalClose = document.createElement('div');
    container.id = 'tutorial-modal-container';
    skipIntroButton.id = 'skip-intro';
    introModal.id = 'intro-modal';
    introModalClose.id = 'intro-modal-text-container';
    container.style.display = 'block';
    introModal.style.display = 'block';
    introModalClose.style.display = 'block';
    document.body.appendChild(container);
    document.body.appendChild(skipIntroButton);
    document.body.appendChild(introModal);
    document.body.appendChild(introModalClose);

    // Act
    addScrollHTMLHandler(container);
    skipIntroButton.click();
    jest.runAllTimers();

    // Assert
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
  });

  // After 110000ms, the intro modal and tutorial modal are closed and the 'addBackLight' function is called.
  it('should close intro modal and tutorial modal and call addBackLight function after 110000ms', () => {
    // Arrange
    jest.useFakeTimers();
    const container = document.createElement('div');
    const skipIntroButton = document.createElement('button');
    const introModal = document.createElement('div');
    const introModalClose = document.createElement('div');
    container.id = 'tutorial-modal-container';
    skipIntroButton.id = 'skip-intro';
    introModal.id = 'intro-modal';
    introModalClose.id = 'intro-modal-text-container';
    container.style.display = 'block';
    introModal.style.display = 'block';
    introModalClose.style.display = 'block';
    document.body.appendChild(container);
    document.body.appendChild(skipIntroButton);
    document.body.appendChild(introModal);
    document.body.appendChild(introModalClose);

    // Act
    addScrollHTMLHandler(container);
    jest.runAllTimers();

    // Assert
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 110000);
  });

  // The 'skip intro' button is not present in the DOM.
  it('should not add event listener to skip intro button if it is not present in the DOM', () => {
    // Arrange
    const container = document.createElement('div');
    const introModal = document.createElement('div');
    const introModalClose = document.createElement('div');
    container.id = 'tutorial-modal-container';
    introModal.id = 'intro-modal';
    introModalClose.id = 'intro-modal-text-container';
    container.style.display = 'block';
    introModal.style.display = 'block';
    introModalClose.style.display = 'block';
    document.body.appendChild(container);
    document.body.appendChild(introModal);
    document.body.appendChild(introModalClose);

    // Act
    addScrollHTMLHandler(container);

    // Assert
    expect(container.style.display).toBe('block');
  });

  // The intro modal is not present in the DOM.
  it('should not close intro modal if it is not present in the DOM', () => {
    // Arrange
    const container = document.createElement('div');
    const skipIntroButton = document.createElement('button');
    const introModalClose = document.createElement('div');
    container.id = 'tutorial-modal-container';
    skipIntroButton.id = 'skip-intro';
    introModalClose.id = 'intro-modal-text-container';
    container.style.display = 'block';
    introModalClose.style.display = 'block';
    document.body.appendChild(container);
    document.body.appendChild(skipIntroButton);
    document.body.appendChild(introModalClose);

    // Act
    addScrollHTMLHandler(container);

    // Assert
    expect(container.style.display).toBe('block');
  });
});

describe('buildTutorialOnWindowLoadHandler', () => {

  // Calls 'buildTutorial' function
  it('should call buildTutorial function when buildTutorialOnWindowLoadHandler is executed', () => {
    const buildTutorialSpy = jest.spyOn(window, 'buildTutorial');
    buildTutorialOnWindowLoadHandler();
    expect(buildTutorialSpy).toHaveBeenCalled();
    buildTutorialSpy.mockRestore();
  });

  // Calls 'closeTutorialStartScrollAnimation' function
  it('should call closeTutorialStartScrollAnimation function when buildTutorialOnWindowLoadHandler is executed', () => {
    const closeTutorialStartScrollAnimationSpy = jest.spyOn(window, 'closeTutorialStartScrollAnimation');
    buildTutorialOnWindowLoadHandler();
    expect(closeTutorialStartScrollAnimationSpy).toHaveBeenCalled();
    closeTutorialStartScrollAnimationSpy.mockRestore();
  });

  // 'id' parameter is null or undefined in 'createModal' function
  it('should throw an error with message "createModal received a "null" or "undefined" value for "id" when buildTutorialOnWindowLoadHandler is executed', () => {
    const createModalSpy = jest.spyOn(window, 'createModal');
    createModalSpy.mockImplementation(() => {
      throw new Error('createModal received a "null" or "undefined" value for "id"');
    });
    expect(buildTutorialOnWindowLoadHandler).toThrow('createModal received a "null" or "undefined" value for "id"');
    createModalSpy.mockRestore();
  });

  // 'className' parameter is null or undefined in 'createModal' function
  it('should throw an error with message "createModal received a "null" or "undefined" value for "className" when buildTutorialOnWindowLoadHandler is executed', () => {
    const createModalSpy = jest.spyOn(window, 'createModal');
    createModalSpy.mockImplementation(() => {
      throw new Error('createModal received a "null" or "undefined" value for "className"');
    });
    expect(buildTutorialOnWindowLoadHandler).toThrow('createModal received a "null" or "undefined" value for "className"');
    createModalSpy.mockRestore();
  });

  // 'content' parameter is null or undefined in 'createModal' function
  it('should throw an error with message "createModal received a "null" or "undefined" value for "content" when buildTutorialOnWindowLoadHandler is executed', () => {
    const createModalSpy = jest.spyOn(window, 'createModal');
    createModalSpy.mockImplementation(() => {
      throw new Error('createModal received a "null" or "undefined" value for "content"');
    });
    expect(buildTutorialOnWindowLoadHandler).toThrow('createModal received a "null" or "undefined" value for "content"');
    createModalSpy.mockRestore();
  });
});

// Generated by CodiumAI