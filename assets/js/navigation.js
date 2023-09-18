class Navigation {
	constructor() {
			this.init();
	}
	init() {

		//CHANGE COLOR OF DESKTOP NAV ITEM COLOR IF ACTIVE
		var menuItems = document.querySelectorAll('.navigation-menu li');
		var menuItemsMobile = document.querySelectorAll('.menu li');

		var currentPageURL = window.location.href;

		menuItems.forEach(function(item) {
			var link = item.querySelector('a');
			console.log("link", link.href)
			if (link && link.href === currentPageURL) {
				item.classList.add('active');
			}
		});

		menuItemsMobile.forEach(function(item) {
			var link = item.querySelector('a');
			console.log("link", link.href)
			if (link && link.href === currentPageURL) {
				item.classList.add('mobi-active');
			}
		});



		// SLIDE MOBILE NAVIGATION MENU IN FROM LEFT AND HAVE IT SLIDE OUT WHEN CLICKING THE X
		var hamburger = document.getElementById('myBtn');
		var xImage = document.querySelector('.x-img');
		var navMenuMobile = document.querySelector('.navigation-menu-mobile');
		hamburger.addEventListener('click', function() {
			navMenuMobile.classList.toggle('open');
		});
		xImage.addEventListener('click', function() {
			navMenuMobile.classList.remove('open');
		});


	}
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.navigation')) {
        new Navigation();
    }
});
