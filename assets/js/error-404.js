class Error {
    constructor(el) {
      this.el = el;
      this.init();
    }
    init() {
        var el = document.querySelector('.count'),
        total = el.innerHTML,
        timeinterval = setInterval(function () {
            total = --total;
            el.textContent = total;
            if (total <= 0) {
                clearInterval(timeinterval);
                window.location = '/';
            }
        }, 1000);
    }
}
  
  document.addEventListener('DOMContentLoaded', () => new Error());