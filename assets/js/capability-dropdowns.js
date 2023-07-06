

class CapabilityDropdowns {
    constructor() {
        this.setColumnsHeight = this.setColumnsHeight.bind(this);
        this.init();
    }
  
    init() {
        let $ = jQuery;
        // ACCORDION
        $('.accordion-item__title').click(function() {
            $(this).next('.accordion-item__content').slideToggle();
            $(this).parent('.accordion-item').toggleClass('active');
        });
        this.setColumnsHeight();
        window.addEventListener('resize', this.setColumnsHeight);

        // CHEVRON
        $('.accordion-item__title').click(function() {
            $(this).find('.chevron').toggleClass('down');
          });

    }

    setColumnsHeight() {
        const columns = document.querySelectorAll('.column-top-wrapper');
        columns.forEach(function (column) {
          column.style.height = 'auto';
        });
        let maxHeight = 0;
        columns.forEach(function (column) {
          const height = column.offsetHeight;
          if (height > maxHeight) {
            maxHeight = height;
          }
        });
        columns.forEach(function (column) {
          column.style.height = maxHeight + 'px';
        });
      }
  }
  
  document.addEventListener('DOMContentLoaded', initializeBlock)
  
  if (window.acf) {
    window.acf.addAction('render_block_preview', initializeBlock);
  }
  
  function initializeBlock() {
    [...document.querySelectorAll('.capability-dropdowns')].forEach((el) => {
      new CapabilityDropdowns(el);
    })
  }