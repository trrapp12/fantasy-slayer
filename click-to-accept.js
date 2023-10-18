(() => {

    const acceptButton = document.querySelector('.accept-audio')
    const acceptScreen = document.querySelector('.accept-audio--container')
        acceptButton.addEventListener('click', () => {
            console.log('accept button being clicked')
            acceptScreen.style.display = 'none'
            const introAudio = new Audio('../assets/audio/Evil-Trailer_AdobeStock_354668525.wav');
            console.log(introAudio)
            introAudio.volume = 0.5;
            introAudio.play();
        })
})()