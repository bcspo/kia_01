$(function () {
  const mainVisualSlide = new Swiper(".main_visual_slide", {
    parallax: true,
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: "#main_visual .arrows .next",
      prevEl: "#main_visual .arrows .prev",
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },

    on: {
      slideChangeTransitionEnd: function () {
        console.log(this.realIndex);
        let num = this.realIndex;

        $("#main_slide .inner .left .txt .a")
          .eq(num)
          .addClass("on")
          .siblings()
          .removeClass("on");
      },
    },
  });

  var swiper = new Swiper(".slide_swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $("#footer .to_top a").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1200);
  });
});
