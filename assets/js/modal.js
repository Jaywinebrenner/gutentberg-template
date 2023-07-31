class Modal {
    constructor() {
        this.init();
        this.disableScroll = this.disableScroll.bind(this);
        this.enableScroll = this.enableScroll.bind(this);
    }

    init() {
        const modal = document.querySelector('.modal');

        // Event listener for URL changes
        window.addEventListener("popstate", (event) => {
            if (window.location.href.includes("#contact-modal")) {

                modal.classList.add('open');
                this.disableScroll();

                // Ensure you can click inside modal without closing it
                const modalContainer = document.querySelector('.modal-container');
                modalContainer.addEventListener('click', (event) => {
                    if (
                        event.target === modalContainer ||
                        event.target.classList.contains('modal-content')
                    ) {
                        // Stop event propagation if clicking inside the modal container or modal content
                        event.stopPropagation();
                    } else {
                        this.closeModal(modal);
                        this.removeHashFromURL();
                    }
                });

                modal.addEventListener('click', (event) => {
                    if (event.target.classList.contains('modal-exit') || event.target.classList.contains('modal-close')) {
                        event.preventDefault();
                        this.closeModal(modal);
                        this.removeHashFromURL(); 
                    }
                });

                // Close modal when "Esc" key is pressed
                document.addEventListener('keydown', (event) => {
                    if (event.key === 'Escape') {
                        event.preventDefault();
                        this.closeModal(modal);
                    }
                });

            } else {
                this.closeModal();
            }
        });

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
    }

    closeModal(modal) {
        modal.classList.remove('open');
        this.enableScroll(modal);
        this.removeHashFromURL();
    }

    removeHashFromURL() {
        history.replaceState('', document.title, window.location.pathname + window.location.search);
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


