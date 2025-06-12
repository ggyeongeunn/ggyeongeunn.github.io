$(document).ready(function () {
  AOS.init({
    once: true,
  });
  // header aside 스크롤 감지
  $(window).scroll(function () {
    let posY = $(window).scrollTop();
    if (posY > 50) {
      $("header").addClass("on");
      $("aside").fadeIn();
    } else {
      $("header").removeClass("on");
      $("aside").fadeOut();
    }
  });
});

// scroll 클릭이벤트
function scrollSection(id) {
  const x = document.getElementById(id);
  x.scrollIntoView();
}
