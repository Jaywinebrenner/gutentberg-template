// All code in this file will be injected globally

//smooth scroll
import './smoothscroll';

// Navigation
export default class Navigation {
        constructor() {
            this.hamburger = this.hamburger.bind(this);
            this.mobileMenuAccordion = this.mobileMenuAccordion.bind(this);
            this.init();
            this.ensureSiteIsScrollable = this.ensureSiteIsScrollable.bind(this);
        }
        init() {
            this.ensureSiteIsScrollable(); 
            this.hamburger();
            this.mobileMenuAccordion();
        }

        ensureSiteIsScrollable() {
            // This ensures scrollability if one were to open the hamburger and change from mobile view to desktop view in browser
            let $ = jQuery;
            $(window).on('resize', function(){
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
            let hamburger = document.querySelector('.hamburger');

            hamburger.addEventListener('click', function() {

                let mobileColorBand = $('.background-color-band-mobile');
                let navigationMenu = $(".navigation-menu-wrapper-mobile .navigation-menu");
                let mobileWrapper = $(".navigation-menu-wrapper-mobile");
                let mobileContainer = $(".navigation-menu-wrapper-mobile .mobile-container");
                // Ensure these style props are added to squash a nasty z-index bug
                console.log("add css")
                // mobileWrapper.css({"height": "100vh;"});
                // mobileContainer.css({"padding-bottom": "20%;"});
                // mobileContainer.css({"min-height": "calc(100vh - 52px);"});
                this.classList.toggle('open');
                open = hamburger.classList.contains("open");
                console.log("open", open)
                if(open && $( window ).width() < 800){

                    navigationMenu.fadeIn();
                    mobileWrapper.css({"background-color": "#F7F4F0"})
                    mobileWrapper.css({"z-index": "1000"})
                    mobileColorBand.css({"display": "none"})
                    $(".mobile-container").css({"background-color": "white"});
                    $(":root").css("overflow", "hidden");
                    $(":root").css("height", "100%");
                    $("body").css("overflow", "hidden");
                    $("body").css("height", "100%");
                } else {

                    // mobileWrapper.css({"z-index": "1"});
                    // mobileWrapper.css({"height": "auto;"});
                    // mobileContainer.css({"padding-bottom": "0"});
                    // mobileContainer.css({"min-height": "auto;"});

                    navigationMenu.css({"display": "none"});
                    $(".mobile-container").css({"background-color": "transparent"});  
                    console.log("z INDEX 1")
                    mobileWrapper.css({"z-index": "1"})
                    mobileWrapper.css({"background-color": "transparent"})
                    mobileColorBand.css({"display": "block"})
                    $(":root").css("overflow", "none");
                    $(":root").css("height", "unset");
                    $("body").css("overflow", "none");
                    $("body").css("height", "unset");
                    console.log("remove css")
                }
                if(!open && $( window ).width() < 800){
                    mobileWrapper.css({"z-index": "1"});

                    // mobileWrapper.css({"height": "auto;"});
                    // mobileContainer.css({"padding-bottom": "0"});
                    // mobileContainer.css({"min-height": "auto;"});
                }
            });

        }

        mobileMenuAccordion () {

            // OPEN CLOSE ACCORDION
            let $ = jQuery;
            let hasChildren = $(".navigation-menu-wrapper-mobile .navigation-menu .menu-item-has-children");
            hasChildren.click(function(e) {
                e.preventDefault();
                let submenu = $(this).find('.sub-menu');
                submenu.slideToggle();
                $(this).toggleClass('active');
                let subMenuATags = $(".sub-menu *")
                console.log("subMenuATags", subMenuATags)
                subMenuATags.click(function(e) {
                    console.log("propagation")
                    e.stopPropagation();
                });
            });


            // Make Title of Accordion red when active and 
            hasChildren.click(function() {
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

    document.addEventListener('DOMContentLoaded', () => new Navigation());