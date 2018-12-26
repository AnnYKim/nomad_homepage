var header = document.querySelector(".header");
var burger = header.querySelector(".burger");
var nav = header.querySelector(".nav");
var sectionTop = []; //각 section의 위치
var headerHeight = 64; //header의 높이




function getScrollBarWidth() { //스크롤바 구하기
  document.body.style.overflow = 'hidden';
  var width = document.body.clientWidth;
  document.body.style.overflow = 'scroll';
  width -= document.body.clientWidth;
  if (!width) width = document.body.offsetWidth - document.body.clientWidth;
  document.body.style.overflow = '';
  return width;
}


var $preventScroll = function () {
  $("body").css({
    "margin-right": getScrollBarWidth(),
    "width": "auto"
  }).addClass("no-scroll");
}

var $allowScroll = function () {
  $("body").removeAttr("style").removeClass("no-scroll");
}


var openMenu = function () {
  header.classList.add("active");
  setTimeout(function () {
    nav.classList.add("active");
  }, 50);
  setNavHeight();
  $preventScroll();

};

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

//각 section의 위치 구하는 함수
var $getSectionTop = function () {
  $(".section-to-scroll").each(function (idx) {
    sectionTop[idx] = Math.ceil($(this).offset().top);
  });
};

var $pageScroll = function (where, anim) {
  var $body = $("html, body");
  $body.stop().animate({
      scrollTop: where
    },
    800
  );
};

var logoClick = function (e) {
  if (e.target.className === "logo") {
    $pageScroll(0);
  }
}

var getHeaderHeight = function () {
  headerHeight = header.offsetHeight;
};

var setNavHeight = function () {
  var navContainer = header.querySelector(".nav-container");
  var windowHeight = window.innerHeight;
  navContainer.style.height = windowHeight - 64 - 145 + "px";
};

var $headerMenuClick = function () {
  $(".nav a").on('click', function (e) {
    e.preventDefault();
    var idx = $(".nav a").index($(this));
    var position = sectionTop[idx];
    // var position = sectionTop[idx] - headerHeight;
    nav.classList.remove("active");
    header.classList.remove("active");
    $pageScroll(position);

  });
};

var checkScreenSize = function () {
  var windowWidth = window.innerWidth;
  if (windowWidth > 769) {
    if (header.classList.contains("active")) {
      nav.classList.remove("active");
      header.classList.remove("active");
    }
  }
};

var fileDownload = function (link) {
  var newWindow = window.open("about:blank");
  newWindow.location.href = link;
};

var downloadIntroduction = function () {
  const downloadButton = document.querySelector(".button-download");
  downloadButton.addEventListener("click", function () {
    // fileDownload("files/test.pdf");
    alert("파일 준비 중!")
  });
};

var handleWindowReszie = function () {
  $getSectionTop();
  getHeaderHeight();
  checkScreenSize();
};

var init = function () {
  $getSectionTop();
  $headerMenuClick();
  downloadIntroduction();
  window.addEventListener("load", handleWindowReszie);
  window.addEventListener("resize", handleWindowReszie);
  burger.addEventListener("click", handleBugerClick);
  header.addEventListener("click", logoClick);
};


init();
//sosorryforpoorcodeifyourelookingthis