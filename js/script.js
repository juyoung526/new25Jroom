$(function () {
  let top1 = $("#section1").offset().top - 10;
  let top2 = $("#section2").offset().top - 10;
  let top3 = $("#section3").offset().top - 10;
  let top4 = $("#section4").offset().top - 10;
  let top5 = $("#section5").offset().top - 10;

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    let menuOnOff = 0;

    if (scroll > menuOnOff) {
      $("#main").css("top", "-50px");
    } else {
      $("#main").css("top", "0px");
    }
    if (scroll >= top0 && scroll <= top1) {
      $(".navi li").removeClass("on");
      $(".navi li").eq(0).addClass("on");
      $("#section1 h2").addClass("embo");
    }
    if (scroll >= top1 && scroll <= top2) {
      $(".navi .on").stop().animate({ height: "192px;" });
      $(".navi li").removeClass("on");
      $(".navi li").eq(1).addClass("on");
      $("#section1 h2").removeClass("embo");
    }
    if (scroll >= top2 && scroll <= top3) {
      $(".navi li").removeClass("on");
      $(".navi li").eq(2).addClass("on");
      $("#section1 h2").removeClass("embo");
    }
    if (scroll >= top3 && scroll <= top4) {
      $(".navi li").removeClass("on");
      $(".navi li").eq(3).addClass("on");
      $("#section1 h2").removeClass("embo");
    }
  });

  $("header h1").on("click", function () {
    $("html,body").stop().animate({ scrollTop: 0 }, 500);
  });

  $("header h1").mouseover(function () {
    $(".h_1").css("opacity", "1").stop().animate({ right: 0 }, 100);
  });
  $("header h1").mouseleave(function () {
    $(".h_1").stop().animate({ right: "20px", opacity: 0 }, 100);
  });

  $(".mene_mob").click(function () {
    $(".mob").toggleClass("on");
    $(".RLine").toggleClass("Topmove");
    $(".LLine").toggleClass("Botmove");
  });

  $(".mob ul li").click(function () {
    $(".mob").toggleClass("on");
    $(".RLine").toggleClass("Topmove");
    $(".LLine").toggleClass("Botmove");
  });

  $(".navi li").on("click", function () {
    let upDown = $(this).index();
    let move = $("#container > div").eq(upDown).offset().top;
    $("html, body").stop().animate({ scrollTop: move });
  });

  $(".top").stop().animate({ height: "550px" }, 1000);
  $(".bottom").stop().animate({ height: "190px" }, 1000);
  $(".right").stop().animate({ width: "1300px" }, 2000);
  $(".left p")
    .stop()
    .animate({ height: "100%" }, 2000, function () {
      $("h2").addClass("embo");
    });

  //section3
  let currentIndex = 0; // 현재 슬라이드 인덱스
  let slideCount = $(".slide_wrap ul li").length; // 슬라이드 총 개수
  let slideWidth; // 슬라이드의 너비

  // 슬라이드 너비 계산 함수
  function SlideWidth() {
    slideWidth = $(".slide_wrap").width(); // 슬라이드 영역의 너비를 가져옴
    $(".slide_wrap ul li").width(slideWidth); // 각 슬라이드의 너비를 슬라이드 영역 너비로 설정
  }

  // 슬라이드 위치 업데이트
  function SlidePosition() {
    $(".slide_wrap ul").css(
      "transform",
      "translateX(" + -slideWidth * currentIndex + "px)"
    );
  }

  // 슬라이드 너비 계산 및 초기화
  SlideWidth();

  // 창 크기 변경 시 슬라이드 너비 재계산
  $(window).resize(function () {
    SlideWidth();
    SlidePosition();
  });

  // 다음 슬라이드로 이동
  $(".next").click(function () {
    if (currentIndex < slideCount - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // 마지막 슬라이드에서 첫 번째로 돌아감
    }
    SlidePosition();
  });

  // 이전 슬라이드로 이동
  $(".prev").click(function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slideCount - 1; // 첫 번째 슬라이드에서 마지막으로 돌아감
    }
    SlidePosition();
  });

  // section4
  $("#section4 .txt_wrap p").click(function () {
    $("#section4 .txt_wrap p").removeClass("on");
    $(this).addClass("on");
  });
  $("#oarP").click(function () {
    $(".back_img div").css({ opacity: "0" });
    $(".oar").css({ opacity: "1" });
  });
  $("#labP").click(function () {
    $(".back_img div").css({ opacity: "0" });
    $(".lab").css({ opacity: "1" });
  });
  $("#royP").click(function () {
    $(".back_img div").css({ opacity: "0" });
    $(".roy").css({ opacity: "1" });
  });

  // section5
  $("#section5 li a").css({ opacity: "0" });
  $("#section5 li p").on("click", function () {
    $("#section5 li p").removeClass("on");
    let i = $(this);
    let a = i.prev("a");
    $("#section5 li a").css({ opacity: "0" });
    a.css({ opacity: "1" });
  });
});
