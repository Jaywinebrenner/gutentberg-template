// All code in this file will be injected globally

//smooth scroll
import './smoothscroll';


// Navigation
class Navigation {
    constructor() {
        this.hamburger = this.hamburger.bind(this);
        this.mobileMenuAccordion = this.mobileMenuAccordion.bind(this);
        this.init();
    }
  
    init() {
        let $ = jQuery;
        console.log("Navigation")
        this.hamburger();
        this.mobileMenuAccordion();
    }

    hamburger() {
        // Transform Burger to X and make Mobile Menu active
        let open;
        var hamburger = document.querySelector('.hamburger');
        var menuTop = document.querySelector('.navigation-mobile-wrapper-top')
        var menu = document.querySelector(".navigation-mobile-wrapper-bottom")
        hamburger.addEventListener('click', function() {
            this.classList.toggle('open');
            console.log("OPEN", open)
            open = hamburger.classList.contains("open");
            if(open){
                menu.style.display = "block"
                menuTop.style.backgroundColor = "#FFF"
            } else {
                menu.style.display = "none"
                menuTop.style.backgroundColor = "transparent"
            }
        });

    }

    mobileMenuAccordion () {

        // OPEN CLOSE ACCORDION
        let $ = jQuery;
        $('.mobile-link').click(function() {
            var submenu = $(this).next('.nav-submenu');
            submenu.slideToggle();
        });

        // ROTATE CHEVRON
        $('.has-submenu').click(function() {
            var chevron = $(this).find('.chevron');
            chevron.toggleClass('rotate');
        });
    }

}
  
  document.addEventListener('DOMContentLoaded', initializeBlock)
  
  if (window.acf) {
    window.acf.addAction('render_block_preview', initializeBlock);
}
  
  function initializeBlock() {
    [...document.querySelectorAll('.navigation')].forEach((el) => {
      new Navigation(el);
    })
}