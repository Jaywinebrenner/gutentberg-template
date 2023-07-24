class Modal {
    constructor() {
        this.init();
    }
    init() {

        console.log("modal");
        const modals = document.querySelectorAll('[data-modal]');

        modals.forEach(function (trigger) {
        trigger.addEventListener('click', function (event) {
            console.log("click")
            event.preventDefault();
            const modal = document.getElementById(trigger.dataset.modal);
            modal.classList.add('open');
            const exits = modal.querySelectorAll('.modal-exit');
            exits.forEach(function (exit) {
            exit.addEventListener('click', function (event) {
                event.preventDefault();
                modal.classList.remove('open');
            });
            });
        });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.modal')) {
        new Modal()
    }
});