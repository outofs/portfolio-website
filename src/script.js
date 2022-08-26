const navMenu = document.querySelector(".nav__menu");
const navToggle = document.querySelector(".nav__toggle");
const navClose = document.querySelector(".nav__close");

// console.log(navMenu, navToggle, navClose);

/// Show or close  menu
const showOrCloseMenu = function () {
  navMenu.classList.toggle("show-menu");
};

if (navToggle) {
  navToggle.addEventListener("click", showOrCloseMenu);
}

if (navClose) {
  navClose.addEventListener("click", showOrCloseMenu);
}

/// Remove menu mobile
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.querySelector(".nav__menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/// Accordion skills
const skillsContent = document.querySelectorAll(".skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/// Qualification Tabs
const tabs = document.querySelectorAll("[data-target]");
console.log("Tabs:", tabs);
const tabContents = document.querySelectorAll("[data-content]");
console.log("Tab contents:", tabContents);

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    const target = document.querySelector(tab.dataset.target);
    console.log(target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

// /// My variant
// const btnEducation = document.querySelectorAll('[data-target="#education"]');
// const btnWork = document.querySelectorAll('[data-target="#work"]');
// console.log(btnEducation);
// const education = document.querySelector("#education");
// const work = document.querySelector("#work");
// console.log(education);

// btnEducation.forEach((el) => {
//   el.addEventListener("click", function (e) {
//     education.classList.add("qualification__active");
//     work.classList.remove("qualification__active");
//   });
// });

// btnWork.forEach((el) => {
//   el.addEventListener("click", function (e) {
//     work.classList.add("qualification__active");
//     education.classList.remove("qualification__active");
//   });
// });

/// Services
//Services modal

const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.toggle("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", function (e) {
    modal(i);
  });
});

modalCloses.forEach((modalClose, i) => {
  modalClose.addEventListener("click", function (e) {
    modal(i);
  });
});

/// Portfolio
//Swiper
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// /// Testimonial
// //Swiper
// let swiperTestimonial = new Swiper(".testimonial__container", {
//   loop: true,
//   grabCursor: true,
//   spaceBetween: 48,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },
//   breakpoints: {
//     568: {
//       slidesPerView: 2,
//     },
//   },
// });

///Scroll Active
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;
  // console.log(scrollY);

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    // console.log("Section Height", sectionHeight);
    const sectionTop = current.offsetTop - 50;
    // console.log("Section Top", sectionTop);
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/// Change Background Header
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/// Show Scroll Up
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

///Dark Light theme
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

///Spinning img

document.querySelector(".about__img").addEventListener("click", function (e) {
  this.classList.toggle("spin");
});
