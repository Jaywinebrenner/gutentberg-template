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


            // Add icon
            // const divs = document.querySelectorAll('.gfield');
            // divs.forEach((div) => {
            //   if (checkAllChildrenHaveClass(div, "validation_message")) {
            //     let input = div.querySelector(".ginput_container input")
            //     const errorIcon = document.createElement('span');
            //     errorIcon.classList.add('error-icon');
            //     errorIcon.textContent = '⚠️';
            //     input.parentNode.appendChild(errorIcon);
            //   }
            // });

            // function checkAllChildrenHaveClass(parentElement, className) {
            //     const children = parentElement.querySelectorAll('*');
            //     for (const child of children) {
            //         if (!child.classList.contains(className)) {
            //             return false;
            //         }
            //     }
            //     return true;
            // }


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
