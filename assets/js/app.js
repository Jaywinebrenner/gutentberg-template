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
        this.changeZIndexOfMobile = this.changeZIndexOfMobile.bind(this);
    }
    init() {
        this.changeZIndexOfMobile();   
        this.ensureSiteIsScrollable(); 
        this.hamburger();
        this.mobileMenuAccordion();
    }
    changeZIndexOfMobile() {
        let $ = jQuery;
        let mobileWrapper = $(".navigation-menu-wrapper-mobile .navigation-menu");
    }
    
    ensureSiteIsScrollable() {
        // This ensures scrollability if one were to open the hamburger and change from mobile view to desktop view
        // let $ = jQuery;
        // $(window).on('resize', function(){
        //     console.log("WHIE")
        //     if (screen.width > 800) { 
        //         $("body").css("overflow", "none");
        //         $("body").css("height", "unset");
        //         $(":root").css("overflow", "none");
        //         $(":root").css("height", "unset");
        //     }

        // });
    }
    hamburger() {
        // Transform Burger to X and make Mobile Menu active
        let open;
        let $ = jQuery;
        let hamburger = document.querySelector('.hamburger');

        hamburger.addEventListener('click', function() {
            this.classList.toggle('open');
            open = hamburger.classList.contains("open");
            let mobileWrapper = $(".navigation-menu-wrapper-mobile .navigation-menu");
            if(open && $( window ).width() < 800){
                mobileWrapper.css({"display": "block"});
                $(".mobile-container").css({"background-color": "white"});
            } else {
                mobileWrapper.css({"display": "none"});
                $(".mobile-container").css({"background-color": "transparent"});  
            }
        });

    }

    mobileMenuAccordion () {

        // OPEN CLOSE ACCORDION
        let $ = jQuery;
        // $('.menu-item-has-children').click(function() {
        //     console.log("has children")
        //     let submenu = $(this).find('.sub-menu');
        //     submenu.slideToggle();
        //     $(this).toggleClass('active');
        //   });
        let hasChildren = $(".navigation-menu-wrapper-mobile .navigation-menu .menu-item-has-children");
        console.log("has children", hasChildren)
        $('.menu-item-has-children').click(function(e) {
            console.log("click")
            e.preventDefault();
            let submenu = $(this).find('.sub-menu');
            console.log("submenu", submenu)
            submenu.slideToggle();
            $(this).parent().toggleClass('active');
            let subMenuATags = $('.sub-menu a');
            console.log("subMenuATags", subMenuATags)
            $('.sub-menu a').click(function(e) {
                e.stopPropagation();
            });
          });
        



        // ROTATE CHEVRON
        // $('.sub-menu').click(function() {
        //     let chevron = $(this).find('.chevron');
        //     chevron.toggleClass('rotate');
        // });


        // Make Title of Accordion red when active

        $('.menu-item-has-children').click(function() {
            let title = $(this).find('a:first');
            let container = $('.menu-item-has-children')

            // chevron.hasClass('rotate')
            if(container.hasClass('active')){
                title.css("color", "#D64936");
            }
            if(!container.hasClass('active')){
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
    [...document.querySelectorAll('.page')].forEach((el) => {
      new Navigation(el);
    })
}











// // All code in this file will be injected globally

// //smooth scroll
// import './smoothscroll';

// // Navigation
// class Navigation {
//     constructor() {
//         this.hamburger = this.hamburger.bind(this);
//         this.mobileMenuAccordion = this.mobileMenuAccordion.bind(this);
//         this.init();
//         this.ensureSiteIsScrollable = this.ensureSiteIsScrollable.bind(this);
//     }
//     init() {
//         let $ = jQuery;
//         console.log("Navigation")
//         this.hamburger();
//         this.mobileMenuAccordion();
//         this.ensureSiteIsScrollable();
//     }
//     ensureSiteIsScrollable() {
//         // This ensures scrollability if one were to open the hamburger and change from mobile view to desktop view
//         let $ = jQuery;
//         $(window).on('resize', function(){
//             console.log("WHIE")
//             if (screen.width > 800) { 
//                 $("body").css("overflow", "none");
//                 $("body").css("height", "unset");
//                 $(":root").css("overflow", "none");
//                 $(":root").css("height", "unset");
//             }

//         });
//     }
//     hamburger() {
//         // Transform Burger to X and make Mobile Menu active
//         let open;
//         let $ = jQuery;
//         let hamburger = document.querySelector('.hamburger');
//         let menuTop = document.querySelector('.navigation-mobile-wrapper-top')
//         let menu = document.querySelector(".navigation-mobile-wrapper-bottom")
//         hamburger.addEventListener('click', function() {
//             this.classList.toggle('open');
//             console.log("OPEN", open)
//             open = hamburger.classList.contains("open");
//             if(open && screen.width < 800){
//                 menu.style.display = "block";
//                 menuTop.style.backgroundColor = "#FFF";
//                 $(":root").css("overflow", "hidden");
//                 $(":root").css("height", "100%");
//                 $("body").css("overflow", "hidden");
//                 $("body").css("height", "100%");
//             } else {
//                 menu.style.display = "none"
//                 menuTop.style.backgroundColor = "transparent"
//                 $(":root").css("overflow", "none");
//                 $(":root").css("height", "unset");
//                 $("body").css("overflow", "none");
//                 $("body").css("height", "unset");
//             }
//         });

//     }

//     mobileMenuAccordion () {

//         // OPEN CLOSE ACCORDION
//         let $ = jQuery;
//         $('.mobile-link').click(function() {
//             let submenu = $(this).next('.nav-submenu');
//             submenu.slideToggle();
//         });

//         // ROTATE CHEVRON
//         $('.has-submenu').click(function() {
//             let chevron = $(this).find('.chevron');
//             chevron.toggleClass('rotate');
//         });

//         // Make Title of Accordion red when active
//         $('.has-submenu').click(function() {
//             let title = $(this).find('.mobile-link');
//             let chevron = $(this).find('.chevron');
//             let body = document.body;
//             console.log("BODY", body)

//             chevron.hasClass('rotate')
//             if(chevron.hasClass('rotate')){
//                 title.css("color", "#D64936");
//             }
//             if(!chevron.hasClass('rotate')){
//                 title.css("color", "#1D0800");
//             }
//         });
//     }
// }
  
//   document.addEventListener('DOMContentLoaded', initializeBlock)
  
//   if (window.acf) {
//     window.acf.addAction('render_block_preview', initializeBlock);
//     }
  
//   function initializeBlock() {
//     [...document.querySelectorAll('.navigation')].forEach((el) => {
//       new Navigation(el);
//     })
// }