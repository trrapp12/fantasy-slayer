(()=> {
  const modalContainer = document.getElementById('credit-modal-container');
  const modal = document.getElementById('credits-modal');
  const footer = document.getElementById('footer');

  function toggleFooterHeight () {
    footer.classList.toggle('modal-height')
  }

  function toggleModalDisplay () {
    modal.classList.toggle('display-none')
  }

  modalContainer.addEventListener('click', () => {
    toggleFooterHeight();
    toggleModalDisplay();
  })

})();