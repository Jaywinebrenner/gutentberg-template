class InfoCards {
    constructor() {
        this.init();
        this.addPaddingIfOneLine = this.addPaddingIfOneLine.bind(this);
    }
    init() {
        this.addPaddingIfOneLine();
        const h5Elements = document.querySelectorAll('.info-cards__content h5');
        h5Elements.forEach(h5 => {
            const h5Height = h5.offsetHeight;
            const lineHeight = parseInt(window.getComputedStyle(h5).lineHeight);
            console.log("lineHeight", lineHeight)
            // Check if the h5 spans over two lines
            if (h5Height <= lineHeight || h5Height <= lineHeight+1) {
                console.log("h5 bigger than line height")
              const paddingAmount = 25; 
              h5.style.paddingBottom = `${paddingAmount}px`;
            }
          });
    }
    addPaddingIfOneLine () {
        $(window).resize(function() {
            const h5Elements = document.querySelectorAll('.info-cards__content h5');
            h5Elements.forEach(h5 => {
                const h5Height = h5.offsetHeight;
                console.log("h5height", h5Height)
                const lineHeight = parseInt(window.getComputedStyle(h5).lineHeight);
                console.log("lineHeight", lineHeight)
                if (h5Height === lineHeight) {
                    console.log("h5 bigger than line height")
                  const paddingAmount = 20; 
                  h5.style.paddingBottom = `${paddingAmount}px`;
                  h5.style.backgroundColor = "red";
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