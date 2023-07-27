class InfoCards {
    constructor() {
        this.init();
    }
    init() {
        const currentPageUrl = window.location.href;
        if (currentPageUrl.includes('/employee-login')) {
            const btnRedElements = document.querySelectorAll('.info-cards .btn_red');
            btnRedElements.forEach((element) => {
            element.setAttribute('target', '_blank');
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.info-cards')) {
        new InfoCards();
    }
});