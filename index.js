window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel-lista"), {
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: true,
    dots: ".carousel-indicadores",
    arrows: {
      prev: ".button-anterior",
      next: ".button-siguiente",
    },
  });
});

console.log("work");
