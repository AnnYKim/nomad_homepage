var header = document.querySelector(".header");
var burger = header.querySelector(".burger");
var nav = header.querySelector(".nav");
var sectionTop = [];
var headerHeight = 64;

// ------------------
var fileName = "";
// 다운로드 파일네임 ("" 안에 확장자를 포함한 파일이름 전체를 넣어주세요)
// 예) var fileName = "introduction.pdf";
// ------------------

// 스크롤바 구하기
var getScrollBarWidth = function () {
  document.body.style.overflow = 'hidden';
  var width = document.body.clientWidth;
  document.body.style.overflow = 'scroll';
  width -= document.body.clientWidth;
  if (!width) width = document.body.offsetWidth - document.body.clientWidth;
  document.body.style.overflow = '';
  return width;
}

// 스크롤 방지
var $preventScroll = function () {
  $("body").css({
    "margin-right": getScrollBarWidth(),
    "width": "auto"
  }).addClass("no-scroll");
}

// 스크롤 허용
var $allowScroll = function () {
  $("body").removeAttr("style").removeClass("no-scroll");
}

// 메뉴 열기 (모바일)
var openMenu = function () {
  header.classList.add("active");
  setTimeout(function () {
    nav.classList.add("active");
  }, 50);
  setNavHeight();
  $preventScroll();

};

// 메뉴 닫기 (모바일)
var closeMenu = function () {
  nav.classList.remove("active");
  setTimeout(function () {
    header.classList.remove("active");
  }, 550);
  $allowScroll();
};


// 버거 클릭 이벤트 (헤더 여닫기)
var handleBugerClick = function () {
  if (header.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
};

// 각 section의 위치 구하기
var $getSectionTop = function () {
  $(".section-to-scroll").each(function (idx) {
    sectionTop[idx] = Math.ceil($(this).offset().top);
  });
};

// 스크롤 애니메이션
var $pageScroll = function (where) {
  var $body = $("html, body");
  $body.stop().animate({
      scrollTop: where
    },
    800
  );
};

// 로고 클릭 시
var logoClick = function (e) {
  if (e.target.className === "logo") {
    $pageScroll(0);
  }
}

// 헤더 높이값 구하기
var getHeaderHeight = function () {
  headerHeight = header.offsetHeight;
};

// 네비 높이 강제 지정 (모바일)
var setNavHeight = function () {
  var navContainer = header.querySelector(".nav-container");
  var windowHeight = window.innerHeight;
  navContainer.style.height = windowHeight - 209 + "px";
};

// 헤더 메뉴 클릭 시 해당 위치로 이동
var $headerMenuClick = function () {
  $(".nav a").on('click', function (e) {
    e.preventDefault();
    var idx = $(".nav a").index($(this));
    var position = sectionTop[idx];
    nav.classList.remove("active");
    header.classList.remove("active");
    $pageScroll(position);

  });
};

// 윈도 너비 체크
var checkScreenSize = function () {
  var windowWidth = window.innerWidth;
  if (windowWidth > 769) {
    if (header.classList.contains("active")) {
      nav.classList.remove("active");
      header.classList.remove("active");
    }
  }
};

// 파일 다운로드
var fileDownload = function (link) {
  var newWindow = window.open("about:blank");
  newWindow.location.href = link;
};

// 다운로드 버튼 클릭
var downloadIntroduction = function () {
  const downloadButton = document.querySelector(".button-download");
  downloadButton.addEventListener("click", function () {
    (fileName == "") ? alert("회사소개서를 준비 중입니다 :)"): fileDownload("files/" + fileName);
  });
};

var handleWindowResize = function () {
  $getSectionTop();
  getHeaderHeight();
  checkScreenSize();
  setNavHeight();
};

var init = function () {
  $getSectionTop();
  $headerMenuClick();
  downloadIntroduction();
  window.addEventListener("load", handleWindowResize);
  window.addEventListener("resize", handleWindowResize);
  burger.addEventListener("click", handleBugerClick);
  header.addEventListener("click", logoClick);
};


init();
//sosorryforpoorcodeifyourelookingthis