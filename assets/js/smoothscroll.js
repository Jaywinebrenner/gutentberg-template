import Lenis from '@studio-freight/lenis'

document.addEventListener('DOMContentLoaded', () => {
  //only load smooth scroll on front end
  if (!document.body.classList.contains('wp-admin')) {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }
})