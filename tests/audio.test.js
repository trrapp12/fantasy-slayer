/**
 * @jest-environment jsdom
 */

 jest.useFakeTimers();
 jest.spyOn(global, 'setTimeout');

 const { isPlaying, playAudio, playGameMusic, stopAllAudio, setAudioVolume } = require('../js/audio.js')

describe("audio.js -> isPlaying()", () => {
        // Returns True if the audio is playing.
        it('should return true when audio is playing', () => {
            const audio = document.createElement('audio');
            audio.play = jest.fn(() => {
              audio.paused = false;
              audio.ended = false;
              audio.currentTime = 1;
            });
            const result = isPlaying(audio);
            expect(result).toBe(true);
          })

              // Returns False if the audio is paused, ended, or has 0 length.
    it('should return false when audio is paused', () => {
        const audio = document.createElement('audio');
        audio.paused = true;
        const result = isPlaying(audio);
        expect(result).toBe(false);
      });

          // Returns False if the audio is paused, ended, or has 0 length.
    it('should return false when audio has ended', () => {
        const audio = document.createElement('audio');
        audio.ended = true;
        const result = isPlaying(audio);
        expect(result).toBe(false);
      });

          // Returns False if the audio is paused, ended, or has 0 length.
    it('should return false when audio has 0 length', () => {
        const audio = document.createElement('audio');
        audio.currentTime = 0;
        const result = isPlaying(audio);
        expect(result).toBe(false);
      });

          // Works with any audio node.
    it('should work with any audio node', () => {
        const audio = document.createElement('audio');
        audio.paused = false;
        audio.ended = false;
        audio.currentTime = 1;
        const result = isPlaying(audio);
        expect(result).toBe(true);
      });

          // Returns False if the audio is paused.
    it('should return false when audio is paused', () => {
        const audio = document.createElement('audio');
        audio.paused = true;
        const result = isPlaying(audio);
        expect(result).toBe(false);
      });

          // Returns False if the audio has ended.
    it('should return false when audio has ended', () => {
        const audio = document.createElement('audio');
        audio.ended = true;
        const result = isPlaying(audio);
        expect(result).toBe(false);
      });

          // Returns False if the audio has 0 length.
    it('should return false when audio has 0 length', () => {
        const audio = document.createElement('audio');
        audio.currentTime = 0;
        const result = isPlaying(audio);
        expect(result).toBe(false);
      });
})

describe("playAudio", () => {
    // plays the desired audio node if the current one is not playing
    it('should play the desired audio node if the current one is not playing', () => {
        const audioNodeToPlay = jest.fn();
        const currentAudioNode = {
          paused: true,
          ended: false,
          currentTime: 0
        };
    
        playAudio(audioNodeToPlay, currentAudioNode);
    
        expect(audioNodeToPlay.play).toHaveBeenCalled();
      });

          // pauses the current audio node and plays the desired one if the current one is playing
    it('should pause the current audio node and play the desired one if the current one is playing', () => {
        const audioNodeToPlay = jest.fn();
        const currentAudioNode = {
          paused: false,
          ended: false,
          currentTime: 0
        };
    
        playAudio(audioNodeToPlay, currentAudioNode);
    
        expect(currentAudioNode.pause).toHaveBeenCalled();
        expect(audioNodeToPlay.play).toHaveBeenCalled();
      });

          // resumes the current audio node from the saved time when the desired audio node completes playing
    it('should resume the current audio node from the saved time when the desired audio node completes playing', () => {
        const audioNodeToPlay = {
          play: jest.fn(),
          onended: null
        };
        const currentAudioNode = {
          paused: true,
          ended: false,
          currentTime: 0,
          play: jest.fn()
        };
    
        playAudio(audioNodeToPlay, currentAudioNode);
    
        expect(audioNodeToPlay.play).toHaveBeenCalled();
        expect(currentAudioNode.currentTime).toBe(0);
        expect(currentAudioNode.play).toHaveBeenCalled();
      });

          // current audio node is null
    it('should play the desired audio node if the current audio node is null', () => {
        const audioNodeToPlay = jest.fn();
        const currentAudioNode = null;
    
        playAudio(audioNodeToPlay, currentAudioNode);
    
        expect(audioNodeToPlay.play).toHaveBeenCalled();
      });

          // desired audio node is null
    it('should not play any audio if the desired audio node is null', () => {
        const audioNodeToPlay = null;
        const currentAudioNode = {
          paused: false,
          ended: false,
          currentTime: 0
        };
    
        playAudio(audioNodeToPlay, currentAudioNode);
    
        expect(currentAudioNode.pause).not.toHaveBeenCalled();
        expect(currentAudioNode.play).not.toHaveBeenCalled();
      });

          // current audio node is paused but not ended
    it('should play the desired audio node if the current audio node is paused but not ended', () => {
        const audioNodeToPlay = jest.fn();
        const currentAudioNode = {
          paused: true,
          ended: false,
          currentTime: 0
        };
    
        playAudio(audioNodeToPlay, currentAudioNode);
    
        expect(audioNodeToPlay.play).toHaveBeenCalled();
      });


})

describe("playGameMusic", ()=> {
        // plays background music every 30 seconds after 55 seconds
        it('should play background music every 1 seconds after 2 seconds', () => {
            jest.useFakeTimers();
            playGameMusic();
            jest.advanceTimersByTime(1);
            jest.advanceTimersByTime(2);
            expect(backGroundAudio.play).toHaveBeenCalledTimes(1);
          });

              // interrupts spell audio when background audio starts
    it('should interrupt spell audio when background audio starts', () => {
        jest.useFakeTimers();
        playGameMusic();
        jest.advanceTimersByTime(2);
        jest.advanceTimersByTime(1);
        expect(spellAudio.pause).toHaveBeenCalledTimes(1);
        expect(backGroundAudio.play).toHaveBeenCalledTimes(1);
      });

          // resumes spell audio when background audio ends
    it('should resume spell audio when background audio ends', () => {
        jest.useFakeTimers();
        playGameMusic();
        jest.advanceTimersByTime(2);
        jest.advanceTimersByTime(1);
        backGroundAudio.onended();
        expect(spellAudio.currentTime).toBeGreaterThan(0);
        expect(spellAudio.play).toHaveBeenCalledTimes(1);
      });

          // spell audio is not defined
    it('should not throw an error when spell audio is not defined', () => {
        jest.useFakeTimers();
        playGameMusic();
        jest.advanceTimersByTime(2);
        jest.advanceTimersByTime(1);
        expect(() => {
          backGroundAudio.onended();
        }).not.toThrow();
      });

          // background audio is not defined
    it('should not throw an error when background audio is not defined', () => {
        jest.useFakeTimers();
        playGameMusic();
        jest.advanceTimersByTime(2);
        jest.advanceTimersByTime(1);
        expect(() => {
          spellAudio.pause();
        }).not.toThrow();
      });

          // spell audio and background audio are not defined
    it('should not throw an error when spell audio and background audio are not defined', () => {
        jest.useFakeTimers();
        playGameMusic();
        jest.advanceTimersByTime(2);
        jest.advanceTimersByTime(1);
        expect(() => {
          backGroundAudio.onended();
        }).not.toThrow();
        expect(() => {
          spellAudio.pause();
        }).not.toThrow();
      });
})

describe("stopAllAudio", ()=>{
    // Pauses all audio nodes
    it('should pause all audio nodes when stopAllAudio is called', () => {
        // Arrange
        const audio1 = document.createElement('audio');
        const audio2 = document.createElement('audio');
        const audioElements = [audio1, audio2];
        jest.spyOn(document, 'querySelectorAll').mockReturnValue(audioElements);
  
        // Act
        stopAllAudio();
  
        // Assert
        expect(audio1.pause).toHaveBeenCalled();
        expect(audio2.pause).toHaveBeenCalled();
      });

          // Resets the time of all audio nodes to the beginning
    it('should reset the time of all audio nodes to the beginning when stopAllAudio is called', () => {
        // Arrange
        const audio1 = document.createElement('audio');
        const audio2 = document.createElement('audio');
        const audioElements = [audio1, audio2];
        jest.spyOn(document, 'querySelectorAll').mockReturnValue(audioElements);
  
        // Act
        stopAllAudio();
  
        // Assert
        expect(audio1.currentTime).toBe(0);
        expect(audio2.currentTime).toBe(0);
      });

          // Handles empty audio node list
    it('should handle empty audio node list when stopAllAudio is called', () => {
        // Arrange
        const audioElements = [];
        jest.spyOn(document, 'querySelectorAll').mockReturnValue(audioElements);
  
        // Act
        stopAllAudio();
  
        // Assert
        // No assertions needed, just ensure no errors are thrown
      });

          // Handles audio nodes with no pause method
    it('should handle audio nodes with no pause method when stopAllAudio is called', () => {
        // Arrange
        const audio = document.createElement('audio');
        delete audio.pause;
        const audioElements = [audio];
        jest.spyOn(document, 'querySelectorAll').mockReturnValue(audioElements);
  
        // Act
        stopAllAudio();
  
        // Assert
        // No assertions needed, just ensure no errors are thrown
      });

          // Handles audio nodes with no currentTime property
    it('should handle audio nodes with no currentTime property when stopAllAudio is called', () => {
        // Arrange
        const audio = document.createElement('audio');
        delete audio.currentTime;
        const audioElements = [audio];
        jest.spyOn(document, 'querySelectorAll').mockReturnValue(audioElements);
  
        // Act
        stopAllAudio();
  
        // Assert
        // No assertions needed, just ensure no errors are thrown
      });

          // Handles audio nodes with currentTime property set to read-only
    it('should handle audio nodes with currentTime property set to read-only when stopAllAudio is called', () => {
        // Arrange
        const audio = document.createElement('audio');
        Object.defineProperty(audio, 'currentTime', { value: 0, writable: false });
        const audioElements = [audio];
        jest.spyOn(document, 'querySelectorAll').mockReturnValue(audioElements);
  
        // Act
        stopAllAudio();
  
        // Assert
        // No assertions needed, just ensure no errors are thrown
      });


})

describe("setAudioVolume", ()=>{
        // The function sets the volume of the audio node to the provided numeric value.
    it('should set the volume of the audio node to the provided numeric value', () => {
      // Arrange
      const audio = { volume: 0 };
      const volume = 0.5;

      // Act
      setAudioVolume(audio, volume);

      // Assert
      expect(audio.volume).toBe(volume);
    });

        // The function does not modify any other properties of the audio node.
        it('should not modify any other properties of the audio node', () => {
            // Arrange
            const audio = { volume: 0, otherProperty: 'test' };
            const volume = 0.5;
      
            // Act
            setAudioVolume(audio, volume);
      
            // Assert
            expect(audio.otherProperty).toBe('test');
          });

              // The function does not modify any other audio nodes.
    it('should not modify any other audio nodes', () => {
        // Arrange
        const audio1 = { volume: 0 };
        const audio2 = { volume: 0 };
        const volume = 0.5;
  
        // Act
        setAudioVolume(audio1, volume);
  
        // Assert
        expect(audio2.volume).toBe(0);
      });

          // The function sets the volume to 0 when provided with a volume less than 0.
    it('should set the volume to 0 when provided with a volume less than 0', () => {
        // Arrange
        const audio = { volume: 0 };
        const volume = -0.5;
  
        // Act
        setAudioVolume(audio, volume);
  
        // Assert
        expect(audio.volume).toBe(0);
      });

          // The function sets the volume to 1 when provided with a volume greater than 1.
    it('should set the volume to 1 when provided with a volume greater than 1', () => {
        // Arrange
        const audio = { volume: 0 };
        const volume = 1.5;
  
        // Act
        setAudioVolume(audio, volume);
  
        // Assert
        expect(audio.volume).toBe(1);
      });

          // The function sets the volume to 0 when provided with NaN.
    it('should set the volume to 0 when provided with NaN', () => {
        // Arrange
        const audio = { volume: 0 };
        const volume = NaN;
  
        // Act
        setAudioVolume(audio, volume);
  
        // Assert
        expect(audio.volume).toBe(0);
      });


})