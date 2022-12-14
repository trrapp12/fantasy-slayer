(()=> {
  const modal = document.getElementById('credits-modal');
  const footer = document.getElementById('footer');
  const creditsDefault = document.getElementById('credits-default')

  function toggleClass (el, className) {
    el.classList.toggle(className)
  }

  footer.addEventListener('click', () => {
    toggleClass(footer, 'modal-height');
    toggleClass(modal, 'display-none');
    toggleClass(creditsDefault, 'display-none');
  })

})();