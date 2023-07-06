

class OurServices {
    constructor() {

      this.init();
    }
  
    init() {
        // ACCORDION
        let $ = jQuery;
        $('.accordion-item__content').hide();
        $('.accordion-item__title').click(function() {
            console.log("hello")
            $(this).next('.accordion-item__content').slideToggle();
            $(this).parent('.accordion-item').toggleClass('active');
        });

        // CHEVRON
        $('.accordion-item__title').click(function() {
            $(this).find('.chevron').toggleClass('down');
          });

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
  