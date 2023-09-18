class Navigation {
    constructor() {
        this.init();
    }
    init() {
        var openBtn = document.getElementById('open-button');
        var closeBtn = document.getElementById('close-button');
        var navDrawer = document.querySelector('.nav-drawer');
      
        function openDrawer() {
          navDrawer.style.transform = 'translateX(0)';
        }
        function closeDrawer() {
          navDrawer.style.transform = 'translateX(-100%)';
        }
        openBtn.addEventListener('click', openDrawer);

        closeBtn.addEventListener('click', closeDrawer);
      
        // Initially, close the drawer
        closeDrawer();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.navigation')) {
        new Navigation();
    }
});
