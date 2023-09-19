import gsap from "gsap";


class Navigation {
	constructor() {
			this.init();
	}
	init() {


		// Ensure page is scrollable if a user opens the hamburger on mobile width disabling scroll, then resizing browswer to desktop
		function handleWindowResize() {
			if (window.innerWidth >= 800) {
				document.body.style.overflow = 'auto';
				document.documentElement.style.overflow = 'visible';
				document.documentElement.style.height = 'unset';
			}
		}
		window.addEventListener('resize', handleWindowResize);
		handleWindowResize();

		//CHANGE COLOR OF DESKTOP NAV ITEM COLOR IF ACTIVE
		let menuItems = document.querySelectorAll('.navigation-menu li');
		let menuItemsMobile = document.querySelectorAll('.menu li');
		let currentPageURL = window.location.href;
		menuItems.forEach(function(item) {
			let link = item.querySelector('a');
			if (link && link.href === currentPageURL) {
				item.classList.add('active');
			}
		});
		menuItemsMobile.forEach(function(item) {
			let link = item.querySelector('a');
			console.log("link", link.href)
			if (link && link.href === currentPageURL) {
				item.classList.add('mobi-active');
			}
		});

		// SLIDE MOBILE NAVIGATION MENU IN FROM LEFT AND HAVE IT SLIDE OUT WHEN CLICKING THE X
		let hamburger = document.getElementById('myBtn');
		let xImage = document.querySelector('.x-img');
		let navMenuMobile = document.querySelector('.navigation-menu-mobile');
		let body = document.body;
		function disableScroll() {
			body.style.overflow = 'hidden';
			document.documentElement.style.overflow = 'hidden';
			document.documentElement.style.height = '100%';
		}
	
		function enableScroll() {
			body.style.overflow = 'auto';
			document.documentElement.style.overflow = 'visible';
			document.documentElement.style.height = 'unset';
			const allLis = document.querySelectorAll("li");
			allLis.forEach(function(li) {
				li.style.visibility = 'hidden';
			});
			setTimeout(() => {
				navMenuMobile.style.visibility = 'hidden';
				navMenuMobile.style.transform = 'translate(-80%, -107px)';
			}, 500);
		}

		// ANIMATING TEXT REVEAL 
		function animateNavLinks() {
			let menuLinks = document.querySelectorAll('.menu a');
			menuLinks.forEach(function(link) {
				console.log(link.textContent); 
				link.classList.add("animate-text")
				link.classList.remove("finished")
			})
		}
		function resetTextTextRevealAnimation() {
			let menuLinks = document.querySelectorAll('.menu a');
			menuLinks.forEach(function(link) {
				console.log(link.textContent); 
				link.classList.add("finished")
			})

		}
	
		hamburger.addEventListener('click', function() {
			const allLis = document.querySelectorAll("li");
			navMenuMobile.classList.add('open');
			navMenuMobile.style.visibility = 'visible';
			navMenuMobile.style.transform = 'translate(0, -107px)';
			animateNavLinks()
			allLis.forEach(function(li) {
				li.style.visibility = 'visible';
			});
			if (navMenuMobile.classList.contains('open')) {
				disableScroll();
			} 
		});
	
		// CLICKING X
		xImage.addEventListener('click', function() {
			navMenuMobile.classList.remove('open');
			navMenuMobile.style.transform = 'translate(100%, -107px)';
			enableScroll();
			setTimeout(function() {
				navMenuMobile.classList.remove('open');
				resetTextTextRevealAnimation()
			}, 300);
		})
	}

}


document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.navigation')) {
        new Navigation();
    }
});
