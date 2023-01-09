export default function() {
    const toggle = document.querySelector('.navigation__toggle');

    toggle.addEventListener('click', function() {
        let isOpen = this.getAttribute('aria-expanded');

        if (isOpen === 'false') {
            this.setAttribute('aria-expanded', 'true');
            this.setAttribute('aria-label', 'Close navigation menu');
        }

        else {
            this.setAttribute('aria-expanded', 'false');
            this.setAttribute('aria-label', 'Open navigation menu');
        }
    });
}