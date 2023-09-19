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
		var body = document.body;

		function reset() {
			console.log("reset")
			// navMenuMobile.classList.remove('reset');
			// navMenuMobile.style.display = 'none;'
			// navMenuMobile.style.transform = 'translate(100%, -107px)'
			setTimeout(() => {
				navMenuMobile.style.background = 'red;'
			}, 300);
		}
	
		function disableScroll() {
			navMenuMobile.style.transform = 'translate(0, -107px)';
			body.style.overflow = 'hidden';
			navMenuMobile.style.visiblity = 'visible';
		}
	
		function enableScroll() {
			console.log("enableScroll")
			body.style.overflow = 'auto';
			navMenuMobile.style.visiblity = 'hidden';
			setTimeout(function() {

				setTimeout(function() {
					navMenuMobile.style.transform = 'translate(-100%, -107px)';
					navMenuMobile.style.visiblity = 'visible';
				}, 300);
			}, 300);
			
		}
	
		hamburger.addEventListener('click', function() {
			navMenuMobile.classList.toggle('open');
	
			if (navMenuMobile.classList.contains('open')) {
				disableScroll();
			} else {
				enableScroll();
				navMenuMobile.style.transform = 'translate(100%, -107px)';
				reset();
			}
		});
	
		// Add a click event listener to the X image
		xImage.addEventListener('click', function() {
			navMenuMobile.style.transform = 'translate(100%, -107px)';
			enableScroll();
			setTimeout(function() {
				navMenuMobile.classList.remove('open');
			}, 300);

	}
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.navigation')) {
        new Navigation();
    }
});
