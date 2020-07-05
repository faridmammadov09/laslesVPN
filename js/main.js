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
