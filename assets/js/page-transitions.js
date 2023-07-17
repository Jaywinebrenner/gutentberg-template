document.addEventListener("DOMContentLoaded", () => {
  setTimeout(function () {
    document.body.classList.remove('fade');
  }, 230);

  [...document.querySelectorAll('a')].forEach((el) => {
    if(el.href != '#') {
      el.addEventListener('click', () => {
        document.body.classList.add('fade')
      });
    }
  })
});