// testimonial
var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 1,
  rtl: true,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// MOBILE HEADER
let menuBtn = document.getElementById("menu");
let menuItems = document.getElementById("menu-items");

menuBtn.addEventListener("click", function () {
  menuItems.classList.toggle("transition-menu");
  menuItems.style.transition = "1s";
});
