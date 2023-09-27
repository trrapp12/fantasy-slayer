import { tutorial } from './tutorial.js'

  const title = document.getElementById('title')
  const introModal = document.getElementById('intro-modal');
  
  const introModalClose = document.getElementById('intro-modal-text-container');

  window.addEventListener('load', () => {
    setTimeout(() => {
      title.classList.add('backlight');
      
    }, 6900)
    setTimeout(() => {
      introModal.style.display = "none"
      introModal.style.animation = "none"
    }, 69000)
    
    const targetNode = introModal
    console.log('targetNode is ', targetNode)
    const observer = new MutationObserver((mutationList) => {
      console.log('mutationList is ', mutationList)
      for (const mutation of mutationList) {
        console.log('mutation is', mutation, "type is ", mutation.type, "attributeName is ", mutation.attributeName)
        if(mutation.type === 'attributes' && mutation.attributeName === 'style') {
          console.log('Class attribute style.');
          setTimeout(tutorial, 5)
        }
      }
    })

    const config = {
      attributes: true, // observe attribute changes
      attributeOldValue: true, // record the previous value of the modified attributes
    };
    
    // Start observing the target node
    observer.observe(targetNode, config);

    setTimeout(() => {
      targetNode.classList.add('new-class');
    }, 2000);
    
    
  })
