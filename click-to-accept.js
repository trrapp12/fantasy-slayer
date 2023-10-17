(() => {

    const acceptButton = document.querySelector('.accept-audio')
    
    if (acceptButton) {
        acceptButton.addEventListener('click', () => {
            const introAudio = new Audio('./assets/assets/audio/Evil-Trailer_AdobeStock_354668525.wav');
            introAudio.volume = 0.5;
            introAudio.play();
        })
    } else {
        console.log('Fantasy Slayer: Accept button not found')
    }

})()