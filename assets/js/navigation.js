class Navigation {
	constructor() {
			this.init();
	}
	init() {
		
		var menuItems = document.querySelectorAll('.navigation-menu li');

		var currentPageURL = window.location.href;

		menuItems.forEach(function(item) {
			var link = item.querySelector('a');
			if (link && link.href === currentPageURL) {
				item.classList.add('active');
			}
		});

	}
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.navigation')) {
        new Navigation();
    }
});
