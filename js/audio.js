export const spellAudio = new Audio('./assets/assets/audio/Under-Attack_AdobeStock_353737497.wav');
export const backGroundAudio = new Audio('./assets/assets/audio/fantasmi-dell-opera-a-loop_AdobeStock_526744294.wav');
export const outTroAudio = new Audio('./assets/assets/audio/EPIC-TRAILER-ACTION-ADVENTURE-(TENSE-NERVE)_AdobeStock_637559773.wav');
// intro audio is self-contained in intro.js.  Going to let that be a separate beast for the moment

export const isPlaying = (audio) => {
    return !audio.paused && !audio.ended && 0 < audio.currentTime;
}

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

export const setAudioVolume = function (audio, volume) {
    audio.volume = volume;
}

export default { spellAudio, backGroundAudio, outTroAudio, isPlaying, playAudio}