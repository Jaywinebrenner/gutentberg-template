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
            this.disableScroll(modal);

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

            const validationMessageDiv = document.querySelector('.gfield .validation_message');

            if (validationMessageDiv) {
                const pseudoElement = document.createElement('span');
                pseudoElement.classList.add('pseudo-element');
                validationMessageDiv.appendChild(pseudoElement);
            }

            // Close modal when "Esc" key is pressed
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    event.preventDefault();
                    this.closeModal(modal);
                }
            });
        }
    }

    closeModal(modal) {
        modal.classList.remove('open');
        this.enableScroll(modal);
    }

    disableScroll() {
        document.body.classList.add('disable-scroll');
        document.documentElement.classList.add('disable-scroll');

        document.body.classList.remove('enable-scroll');
        document.documentElement.classList.remove('enable-scroll');
    }

    enableScroll() {
        document.body.classList.add('enable-scroll');
        document.documentElement.classList.add('enable-scroll');

        document.body.classList.remove('disable-scroll');
        document.documentElement.classList.remove('disable-scroll');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.modal')) {
        new Modal();
    }
});