var test = document.querySelector("form#test");

test.addEventListener("submit", function () {
  // alert("ddddddddd");
});

$(".owl-carousel").owlCarousel({
  rtl: false,
  loop: true,
  autoplay: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

var btn = document.querySelector(".scroll-top");

window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 100) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});
console.log();
window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};
btn.addEventListener("click", function () {
  scrollTo(document.body, document.body.offsetTop, 400);
});
