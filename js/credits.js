(()=> {
  const modal = document.getElementById('credit-modal-container')
  const textContainer = document.getElementById('credits-modal')

  document.getElementById('history').addEventListener('click', (evt) => {
    modal.classList.toggle('modal-height');
    textContainer.classList.toggle('display-none')
  })

  document.getElementById('exit-button').addEventListener('click', (evt) => {
    modal.classList.toggle('modal-height');
    textContainer.classList.toggle('display-none')
  })

  document.getElementById('footer').addEventListener('click', (evt) => {
    evt.stopPropagation();
    console.log(`evt.target ${evt.target}, classList ${evt.target.classList}`)
    if ( evt.target.classList.contains('footer-contents-container') || evt.target.classList.contains('footer-logo')) {
      modal.classList.toggle('modal-height');
      textContainer.classList.toggle('display-none')
    }
  })

})();