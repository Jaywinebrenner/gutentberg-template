class Modal {
    constructor() {
        this.init();
        this.disableScroll = this.disableScroll.bind(this);
        this.enableScroll = this.enableScroll.bind(this);
    }

    init() {
        const modalHash = window.location.hash;

        if (modalHash === "#contact-modal") {
            const modal = document.querySelector('.modal');
            modal.classList.add('open');
            this.disableScroll();

            const modalContainer = document.querySelector('.modal-container');
            modalContainer.addEventListener('click', (event) => {
                // Stop event propagation if clicking inside the modal container
                event.stopPropagation();
            });

            // Close when clicking outside of modal container or X button
            modal.addEventListener('click', (event) => {
                if (event.target.classList.contains('modal-exit')) {
                    event.preventDefault();
                    this.closeModal(modal);
                }
            });

            // Close when clicking X
            let xButton = document.querySelector(".modal-close");
            xButton.addEventListener('click', (event) => {
                event.preventDefault();
                this.closeModal(modal);
            });

            // Change '(Required)' to '*'
            const requiredTextElements = document.querySelectorAll('.gfield_required_text');
            requiredTextElements.forEach((element) => {
                element.textContent = element.textContent.replace('(Required)', '*');
            });

            // Disable scrolling again when the browser is resized
            window.addEventListener('resize', this.disableScroll);
        }
    }

    closeModal(modal) {
        modal.classList.remove('open');
        this.enableScroll();
        // Remove the resize event listener when the modal is closed
        window.removeEventListener('resize', this.disableScroll);
    }

    disableScroll() {
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.height = '100%';
    }

    enableScroll() {
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
        document.documentElement.style.overflow = 'auto';
        document.documentElement.style.height = 'auto';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.modal')) {
        new Modal();
    }
});
