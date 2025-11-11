//    var myCarousel = document.querySelector('#heroCarousel');
//   var carousel = new bootstrap.Carousel(myCarousel, {
//     interval: 5000, // 5000ms = 5 seconds
//     ride: 'carousel',
//     pause: false,   // continue sliding even if mouse is over (change to 'hover' if you want pause on hover)
//     wrap: true      // loop back to first slide after last
//   });

//   // optional: safe check if buttons exist and fix their aria-controls (not strictly necessary)
//   document.querySelectorAll('[data-bs-target="#heroCarousel"]').forEach(btn=>{
//     btn.setAttribute('aria-controls','heroCarousel');
//   });



document.addEventListener("DOMContentLoaded", function() {
  const heroCarousel = document.querySelector('#heroCarousel');
  new bootstrap.Carousel(heroCarousel, {
    interval: 5000,
    ride: 'carousel',
    pause: false,
    wrap: true
  });
});