

export const loadOutroAudio= () => {
    return new Audio('./assets/assets/audio/EPIC-TRAILER-ACTION-ADVENTURE-(TENSE-NERVE)_AdobeStock_637559773.wav');
}

export const loadBackGroundAudio= () => {
    return new Audio('./assets/assets/audio/fantasmi-dell-opera-a-loop_AdobeStock_526744294.wav')
}

export const loadSpellAudio= () => {
    return new Audio('./assets/assets/audio/Under-Attack_AdobeStock_353737497.wav')
}

export const playOutroAudio = () => {
    outroAudio.play();
}

export const playBackGroundAudio = () => {
    backgroundAudio.play();
}

export const playSpellAudio = () => {
    spellAudio.play()
}

export const setAudioVolume = function (audio, volume) {
    audio.volume = volume;
}

export default { playOutroAudio, playBackGroundAudio, loadOutroAudio, loadBackGroundAudio, setAudioVolume, loadSpellAudio, playSpellAudio }