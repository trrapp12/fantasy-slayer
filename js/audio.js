// All audio clips used, except audio that is native to video elements
export const spellAudio = new Audio('./assets/assets/audio/Under-Attack_AdobeStock_353737497.wav');
export const backGroundAudio = new Audio('./assets/assets/audio/fantasmi-dell-opera-a-loop_AdobeStock_526744294.wav');
export const outTroAudio = new Audio('./assets/assets/audio/EPIC-TRAILER-ACTION-ADVENTURE-(TENSE-NERVE)_AdobeStock_637559773.wav');

// FUNCTION PURPOSE: run this to check if audio is playing (as opposed to being in a paused, ended, or 0 length state)
// REQUIRED INPUT: the audio node (song), that you want to check to see is playing
// OUTPUT: T/F
// SIDE EFFECTS: call this for logic checks only.  Not intended to change state or UI.
export const isPlaying = (audio) => {
    return !audio.paused && !audio.ended && 0 < audio.currentTime;
}

// FUNCTION PURPOSE: call this function to play a certain audio node(song)
// REQUIRED INPUT: audio node you want to play and the current one you suspect might need to be switched off
// OUTPUT: no output
// SIDE EFFECTS: if audio node 'b' is playing, pauses 'b', plays the desired one ('a') instead, then starts 'b' again when 'a' complete
export const playAudio = (audioNodeToPlay, currentAudioNode) => {
    if(isPlaying(currentAudioNode)) {
        currentAudioNode.pause();
        const savedTime = currentAudioNode.currentTime;
        audioNodeToPlay.play();
        audioNodeToPlay.onended = () => {
            currentAudioNode.currentTime = savedTime;
            currentAudioNode.play()
        }
    } else {
        audioNodeToPlay.play();
    }
}

// FUNCTION PURPOSE: does a search for all audio nodes and pauses all sounds
// REQUIRED INPUT: n/a
// OUTPUT: n/a
// SIDE EFFECTS: will silence all audio events
export const stopAllAudio = () => {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
        audio.pause(); // Pause the audio
        audio.currentTime = 0; // Reset its time to the beginning
    });
}

// FUNCTION PURPOSE: allow to dynamically adjust volume
// REQUIRED INPUT: audio is the audio node (song), volume is a numeric value between 0 and 1 (ie. .5) that will set the volume
// OUTPUT: n/a
// SIDE EFFECTS: adjusts audio volume for audio nodes
export const setAudioVolume = function (audio, volume) {
    audio.volume = volume;
}

export default { spellAudio, backGroundAudio, outTroAudio, isPlaying, playAudio}