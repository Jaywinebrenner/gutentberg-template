// All code in this file will be injected globally

//smooth scroll
import './smoothscroll';

// Navigation
class Navigation {
    constructor() {
        this.hamburger = this.hamburger.bind(this);
        this.mobileMenuAccordion = this.mobileMenuAccordion.bind(this);
        this.init();
        this.ensureSiteIsScrollable = this.ensureSiteIsScrollable.bind(this);
    }
    init() {
        let $ = jQuery;
        console.log("Navigation")
        this.hamburger();
        this.mobileMenuAccordion();
        this.ensureSiteIsScrollable();
    }
    ensureSiteIsScrollable() {
        // This ensures scrollability if one were to open the hamburger and change from mobile view to desktop view
        let $ = jQuery;
        $(window).on('resize', function(){
            console.log("WHIE")
            if (screen.width > 800) { 
                $("body").css("overflow", "none");
                $("body").css("height", "unset");
                $(":root").css("overflow", "none");
                $(":root").css("height", "unset");
            }

        });
    }
    hamburger() {
        // Transform Burger to X and make Mobile Menu active
        let open;
        let $ = jQuery;
        var hamburger = document.querySelector('.hamburger');
        var menuTop = document.querySelector('.navigation-mobile-wrapper-top')
        var menu = document.querySelector(".navigation-mobile-wrapper-bottom")
        hamburger.addEventListener('click', function() {
            this.classList.toggle('open');
            console.log("OPEN", open)
            open = hamburger.classList.contains("open");
            if(open && screen.width < 800){
                menu.style.display = "block";
                menuTop.style.backgroundColor = "#FFF";
                $(":root").css("overflow", "hidden");
                $(":root").css("height", "100%");
                $("body").css("overflow", "hidden");
                $("body").css("height", "100%");
            } else {
                menu.style.display = "none"
                menuTop.style.backgroundColor = "transparent"
                $(":root").css("overflow", "none");
                $(":root").css("height", "unset");
                $("body").css("overflow", "none");
                $("body").css("height", "unset");
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

        // Make Title of Accordion red when active
        $('.has-submenu').click(function() {
            var title = $(this).find('.mobile-link');
            var chevron = $(this).find('.chevron');
            var body = document.body;
            console.log("BODY", body)

            chevron.hasClass('rotate')
            if(chevron.hasClass('rotate')){
                title.css("color", "#D64936");
            }
            if(!chevron.hasClass('rotate')){
                title.css("color", "#1D0800");
            }
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