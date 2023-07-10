class OurServices {
  constructor(el) {
    this.el = el;
    this.init();
  }

  init() {
    // ACCORDION
    let $ = jQuery;
    $(this.el).find('.accordion-item__content').hide();
    $(this.el).find('.accordion-item__title').click(function () {
      $(this).next('.accordion-item__content').slideToggle();
      $(this).parent('.accordion-item').toggleClass('active');
    });

    // CHEVRON
    $(this.el).find('.accordion-item__title').click(function () {
      $(this).find('.chevron').toggleClass('down');
    });

  }
}

document.addEventListener('DOMContentLoaded', initializeBlock)

if (window.acf) {
  window.acf.addAction('render_block_preview/type=our-services', initializeBlock);
}

function initializeBlock() {
  [...document.querySelectorAll('.our-services')].forEach((el) => {
    new OurServices(el);
  })
}
