// document.addEventListener("DOMContentLoaded", function () {
//   const heroCarousel = document.querySelector("#heroCarousel");
//   new bootstrap.Carousel(heroCarousel, {
//     interval: 5000,
//     ride: "carousel",
//     pause: false,
//     wrap: true,
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const heroCarousel = document.querySelector("#heroCarousel");
  if (heroCarousel) {
    new bootstrap.Carousel(heroCarousel, {
      interval: 5000,
      ride: "carousel",
      pause: false,
      wrap: true,
    });
  }

  const shopLink = document.querySelector("#shopMenu");
  const megaMenu = document.querySelector(".mega-menu");

  if (shopLink && megaMenu) {
    shopLink.addEventListener("click", function (e) {

      // Mobile only (screen < 992px)
      if (window.innerWidth < 992) {
        e.preventDefault();

        // Toggle mega menu visibility
        megaMenu.style.display =
          megaMenu.style.display === "block" ? "none" : "block";
      }
    });

    // When resizing back to desktop, reset state
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 992) {
        megaMenu.style.display = "";
      }
    });
  }

});
