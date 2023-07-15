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
      const accordionItem = $(this).closest('.accordion-item');
      const accordionContent = accordionItem.find('.accordion-item__content');
      const otherAccordionItems = accordionItem.siblings('.accordion-item');
      const otherAccordionContents = otherAccordionItems.find('.accordion-item__content');

      if (accordionItem.hasClass('active')) {
        // Close the currently open accordion item
        accordionContent.slideUp();
        accordionItem.removeClass('active');
      } else {
        // Close other open accordion items
        otherAccordionContents.slideUp();
        otherAccordionItems.removeClass('active');

        // Open the clicked accordion item
        accordionContent.slideDown();
        accordionItem.addClass('active');
      }
    });

    // CHEVRON
    $(this.el).find('.accordion-item__title').click(function () {
      $(this).find('.chevron').toggleClass('down');
    });
  }
}

document.addEventListener('DOMContentLoaded', initializeBlock);

if (window.acf) {
  window.acf.addAction('render_block_preview/type=our-services', initializeBlock);
}

function initializeBlock() {
  [...document.querySelectorAll('.our-services')].forEach((el) => {
    new OurServices(el);
  });
}