// Opening/Closing Hamburger Menu on Mobile Page
//Using JQuery for "toggle()"
let navMenuCounter = 2;

function openMenu(x, num) {
  const navMobile = document.querySelector(".navbar-mobile");

  navMenuCounter = navMenuCounter + num;
  if (navMenuCounter % 2 == 0) {
    navMobile.style.display = "none";
    navMenuCounter = 2;
    x.classList.toggle("change");
  } else {
    navMobile.style.display = "block";
    x.classList.toggle("change");
  }
}

//Close mobile menu on resize
window.addEventListener("resize", function() {
  const navMobile = document.querySelector(".navbar-mobile");
  if (window.innerWidth > 989) {
    navMobile.style.display = "none";
  }
});

// Bottom Popup Bar
window.onscroll = function() {
  let scrollPos = window.pageYOffset;
  if (scrollPos < 300) {
    document.getElementById("contact-bar").style.bottom = "-84px";
  } else {
    document.getElementById("contact-bar").style.bottom = "-10px";
  }
};

// Code from "Slick Carousel"
//http://kenwheeler.github.io/slick/
//"Center Mode" Slider

$(document).ready(function() {
  $(".center-slide").slick({
    centerMode: true,
    centerPadding: "50px",
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1
        }
      }
    ]
  });
});

// Load Both Intro Videos
const w = window.matchMedia("(max-width: 989px)");
const vid = document.getElementById("myVideo");
const source = document.getElementById("hvid");

window.addEventListener("load", function myfunction() {
  if (w.matches) {
    vid.pause();
    source.src = "img/BLOCK_Header_Mobile.mp4";
    vid.load();
    vid.play();
  } else {
    vid.pause();
    source.src = "img/BLOCK_Header_Desktop.mp4";
    vid.load();
    vid.play();
  }
});

window.addEventListener("resize", function myfunction() {
  if (w.matches) {
    vid.pause();
    source.removeAttribute("src");
    source.src = "img/BLOCK_Header_Mobile.mp4";
    vid.load();
  } else {
    vid.pause();
    source.removeAttribute("src");
    source.src = "img/BLOCK_Header_Desktop.mp4";
    vid.load();
  }
});
