$(document).ready(function () {
  $(window).scroll(function () {
      var scroll = $(this).scrollTop();
      if (scroll >= 50) {
          $(".sticky").addClass("nav-sticky");
      } else {
          $(".sticky").removeClass("nav-sticky");
      }
      if (scroll > 100) {
          $(".back-to-top").fadeIn();
      } else {
          $(".back-to-top").fadeOut();
      }
  });
});