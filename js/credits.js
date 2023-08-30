(()=> {
  const modal = document.getElementById('credit-modal-container')
  const textContainer = document.getElementById('credits-modal')

  document.getElementById('history').addEventListener('click', () => {
    modal.classList.toggle('modal-height');
    textContainer.classList.toggle('display-none')
  })

  document.getElementById('exit-button').addEventListener('click', () => {
    modal.classList.toggle('modal-height');
    textContainer.classList.toggle('display-none')
  })

})();