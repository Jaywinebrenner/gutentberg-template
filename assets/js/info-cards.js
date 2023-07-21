class InfoCards {
    constructor() {
        this.init();
        this.addPaddingIfOneLine = this.addPaddingIfOneLine.bind(this);
    }
    init() {
        this.addPaddingIfOneLine();
        const h5Elements = document.querySelectorAll('.info-cards__content h5');
        const characterLimit = 20; // Adjust this value to set the character limit
      
        h5Elements.forEach(h5 => {
          const h5Text = h5.textContent.trim();
          const characterCount = h5Text.length;
          if (characterCount < characterLimit) {
            const paddingAmount = 1.7; // You can adjust this value as needed
            h5.style.paddingBottom = `${paddingAmount}rem`;
          }
        });
    }
    addPaddingIfOneLine () {
        $(window).resize(function() {
            h5Elements.forEach(h5 => {
                const h5Text = h5.textContent.trim();
                const characterCount = h5Text.length;
                if (characterCount < characterLimit) {
                  const paddingAmount = 1.7; // You can adjust this value as needed
                  h5.style.paddingBottom = `${paddingAmount}rem`;
                }
              });
          });
    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.info-cards')) {
        new InfoCards()
    }
});