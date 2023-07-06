

class OurServices {
    constructor() {

      this.init();
    }
  
    init() {
        console.log("our Sevices")
  

    }
  
  }
  
  document.addEventListener('DOMContentLoaded', initializeBlock)
  
  if (window.acf) {
    window.acf.addAction('render_block_preview', initializeBlock);
  }
  
  function initializeBlock() {
    [...document.querySelectorAll('.our-services')].forEach((el) => {
      new OurServices(el);
    })
  }
  