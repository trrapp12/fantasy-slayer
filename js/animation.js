(() => {
  const title = document.getElementById('title')
  const introModal = document.getElementById('intro-modal');
  
  const introModalClose = document.getElementById('intro-modal-text-container');


  window.addEventListener('load', () => {
    setTimeout(() => {
      title.classList.add('backlight');
      console.log('animation.js fired')
    }, 66005)
    setTimeout(() => {
      introModal.style.display = "none"
      console.log('animation.js fired')
    }, 66000)
    
  })
})();