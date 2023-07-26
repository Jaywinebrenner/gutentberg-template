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

        hamburger = () => {
            let open;
            let $ = jQuery;

            //Elements
            let hamburger = document.querySelector('.hamburger');
            let mobileColorBand = $('.background-color-band-mobile');
            let navigationMenu = $(".navigation-menu-wrapper-mobile .navigation-menu");
            let mobileWrapper = $(".navigation-menu-wrapper-mobile");
            let mobileContainer = $(".navigation-menu-wrapper-mobile .mobile-container");
            hamburger.addEventListener('click', function() {

            //Toggle Menu
            hamburger.classList.toggle('open');
            open = hamburger.classList.contains("open");

                if(open){
                    // These styles need to be injected in order to make the opened menu scrollable. These styles can't be on the style sheet as they interfere with the clickability of elements on the site.
                    mobileWrapper.addClass( "add-100-vh" );
                    mobileContainer.addClass("add-padding-and-min-height");

                    // CSS necessary to open the Nav Menu
                    navigationMenu.fadeIn();
                    // mobileWrapper.css({"background-color": "#F7F4F0"})
                    mobileWrapper.css({"z-index": "1000"})
                    mobileColorBand.css({"display": "none"})
                    $(".mobile-container").css({"background-color": "white"});
                    $(":root").css("overflow", "hidden");
                    $(":root").css("height", "100%");
                    $("body").css("overflow", "hidden");
                    $("body").css("height", "100%");
                }
                if(!open){
                    // Remove these styles added to make the content on the site clickable after the mobile nav has been closed.
                    mobileWrapper.removeClass( "add-100-vh" );
                    mobileContainer.removeClass("add-padding-and-min-height");

                    // CSS necessary to close menu
                    navigationMenu.css({"display": "none"});
                    $(".mobile-container").css({"background-color": "transparent"});
                    mobileWrapper.css({"z-index": "1"})
                    // mobileWrapper.css({"background-color": "transparent"})
                    mobileColorBand.css({"display": "block"})
                    $(":root").css("overflow", "visible");
                    $(":root").css("height", "unset");
                    $("body").css("overflow", "visible");
                    $("body").css("height", "unset");
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
                subMenuATags.click(function(e) {
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