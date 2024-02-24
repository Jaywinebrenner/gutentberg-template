


class Hero {
	constructor() {
			this.init();
	}
	init() {
        console.log("Hero.js")
	}

}


document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.hero')) {
        new Hero();
    }
});
