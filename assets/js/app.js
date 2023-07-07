// All code in this file will be injected globally

//smooth scroll
import './smoothscroll';


// Navigation
class Navigation {
    constructor() {
        this.submenuHover = this.submenuHover.bind(this);
        this.init();
    }
  
    init() {
        let $ = jQuery;
        console.log("Navigation")
        this.submenuHover()
    }

    submenuHover() {
        // Get the parent list item with submenu
        var menuItems = document.querySelector('.navigation-wrapper__link-with-submenu');
        console.log("menuitems", menuItems);
        var submenu = menuItems.querySelector('.submenu');
        console.log("submenus", submenu);
        menuItems.addEventListener('mouseover', function() {
        submenu.style.display = 'block';
        });
        menuItems.addEventListener('mouseout', function() {
            submenu.style.display = 'none';
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