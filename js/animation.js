(() => {
  const title = document.getElementById('title')

  window.addEventListener('load', () => {
    setTimeout(() => {
      title.classList.add('backlight')
      console.log('animation.js fired')
    }, 5)
  })
})();