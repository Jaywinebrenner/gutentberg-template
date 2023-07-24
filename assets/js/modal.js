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

            $(":root").css("overflow", "hidden");
            $(":root").css("height", "100%");
            $("body").css("overflow", "hidden");
            $("body").css("height", "100%");

            exits.forEach(function (exit) {
            exit.addEventListener('click', function (event) {
                event.preventDefault();
                modal.classList.remove('open');
                $(":root").css("overflow", "auto");
                $(":root").css("height", "auto");
                $("body").css("overflow", "auto");
                $("body").css("height", "auto");
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