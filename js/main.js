const owl = $(".owl-carousel");

owl.owlCarousel({
  loop: true,
  items: 3,
  margin: 200,
  dotsContainer: ".dots",
  dotsEach: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// Go to the next item
$(".arrow-right").click(function () {
  owl.trigger("next.owl.carousel");
});
// Go to the previous item
$(".arrow-left").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger("prev.owl.carousel", [300]);
});

$(".dot").click(function () {
  owl.trigger("to.owl.carousel", [$(this).index(), 300]);
});

// const locationsMap = document.getElementById("locations-map");
// const circles = locationsMap.querySelectorAll("circle");

// for (circle of circles) {
//   circle.style.opacity = "0";
// }

$(window).on("scroll", function () {
  scroll_pos = $(window).scrollTop() + $(window).height();
  element_pos =
    $("#locations-map").offset().top + $("#locations-map").height() - 100;
  if (scroll_pos > element_pos) {
    $("#locations-map circle").addClass("circle--active");
  }
});
