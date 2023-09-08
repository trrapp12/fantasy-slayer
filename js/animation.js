(() => {
  const title = document.getElementById('title')
  const introModal = document.getElementById('intro-modal');
  
  const introModalClose = document.getElementById('intro-modal-text-container');


  window.addEventListener('load', () => {
    setTimeout(() => {
      title.classList.add('backlight');
    }, 66005)
    setTimeout(() => {
      introModal.style.display = "none"
    }, 66000)
    
  })
})();