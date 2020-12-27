//Dots
const diplayHeight = document.documentElement.clientHeight;
let dotsNumber = window.pageYOffset / diplayHeight;
const dotsItem = document.querySelectorAll(".wrapper-dots__item");
const dots = (e) => {
  if (e.deltaY > 0 && dotsNumber < 5) {
    dotsNumber++;
    dotsItem.forEach((el) => el.classList.remove("active-dots"));
    dotsItem[dotsNumber].classList.add("active-dots");
  } else if (e.deltaY < 0 && dotsNumber !== 0) {
    dotsNumber--;
    dotsItem.forEach((el) => el.classList.remove("active-dots"));
    dotsItem[dotsNumber].classList.add("active-dots");
  }
};

dotsItem[dotsNumber].classList.add("active-dots");
// FULLPAGE
const wrapper = document.querySelector(".wrapper");
function throttle(func, interval) {
  let lastCall = 0;
  return function () {
    let now = Date.now();
    if (lastCall + interval < now) {
      lastCall = now;
      return func.apply(this, arguments);
    }
  };
}
let funscroll = (e) => {
  // SCROLL
  let clientHeight = e.deltaY > 0 ? diplayHeight : -diplayHeight;
  window.scrollBy({
    top: clientHeight,
    behavior: "smooth",
  });
  // Dots
  dots(e);
};
let funclimit = throttle(funscroll, 600);
document.documentElement.clientWidth > 1200
  ? wrapper.addEventListener("wheel", funclimit)
  : false;

//Swiper
const button = document.querySelectorAll(".button");
let mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 100,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});
//Swiper2
let aa = new Swiper(".swiper-portfolio-container", {
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// ADAPTIVE MENU
const nav = document.querySelector(".section-header-nav");
nav.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("burger") ||
    e.target.classList.contains("close-menu")
  ) {
    nav.children[1].classList.toggle("nav-active");
    nav.children[2].classList.toggle("display-block");
    document.body.classList.toggle("body-hidden");
  }
});
// ItemClick
const navItem = document.querySelectorAll(".section-header-nav-list__item");
navItem.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    let i = index + 1;
    window.scrollBy({
      top: diplayHeight * i,
      behavior: "smooth",
    });
    nav.children[1].classList.remove("nav-active");
    nav.children[2].classList.remove("display-block");
    document.body.classList.remove("body-hidden");
    dotsNumber = i;
    dotsItem.forEach((el) => el.classList.remove("active-dots"));
    dotsItem[i].classList.add("active-dots");
  });
});
//Button
const buttonHeader = document.querySelector(
  ".section-header-content-container-block1__button"
);
buttonHeader.addEventListener("click", (e) => {
  window.scrollBy({
    top: diplayHeight * 5,
    behavior: "smooth",
  });
  dotsNumber = 5;
  dotsItem.forEach((el) => el.classList.remove("active-dots"));
  dotsItem[5].classList.add("active-dots");
});
