const header = document.querySelector(".header-end");
const logo = document.querySelector(".site-logo-img");
const headerNavLinks = document.querySelectorAll(".header-nav-link");
const headerModalLink = document.querySelectorAll(".header-modal-link");
const strategyFirstLink = document.querySelector(".strategy-first-link");
const strategySecondLink = document.querySelector(".strategy-second-link");
const strategyThirdLink = document.querySelector(".strategy-third-link");
const strategyText = document.querySelector(".strategy-text-value");
const headerNav = document.querySelector(".header-nav");
const openNavBtn = document.querySelector(".open-nav-btn");
const closeNavBtn = document.querySelector(".header-nav-close-btn");

window.addEventListener('resize', function () {
  if (window.innerWidth < 1024) {
    headerNavLinks.forEach(item => {
      item.classList.remove("text-white");
      item.classList.add("text-black");
    });
  }
});

// window.addEventListener('resize', function () {
//   if (window.innerWidth > 1024) {
//     window.addEventListener("scroll", function () {
//       if (window.pageYOffset > 0) {
//         header.classList.add("bg-white");
//         header.style.top = "0";
//         logo.src = "./assets/images/site-logo.png";
//         headerNavLinks.forEach(item => {
//           item.classList.remove("lg:text-white");
//           item.classList.add("lg:text-black");
//         });
//       } else {
//         header.classList.remove("bg-white");
//         header.classList
//         header.style.top = "44px"
//         logo.src = "./assets/images/site-logo-white.png"
//         headerNavLinks.forEach(item => {
//           item.classList.remove("lg:text-black");
//           item.classList.add("lg:text-white");
//         });
//       }
//     });
//   }
// });

if (window.innerWidth > 1024) {

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 0) {
      header.classList.add("bg-white");
      header.style.top = "0";
      logo.src = "./assets/images/site-logo.png";
      headerNavLinks.forEach(item => {
        item.classList.remove("lg:text-white");
        item.classList.add("lg:text-black");
      });
      headerModalLink.forEach(item => {
        item.classList.remove("lg:bg-red-800");
        item.classList.add("lg:bg-white");
      });
    } else {
      header.classList.remove("bg-white");
      header.style.top = "44px"
      logo.src = "./assets/images/site-logo-white.png"
      headerNavLinks.forEach(item => {
        item.classList.remove("lg:text-black");
        item.classList.add("lg:text-white");
      });
    }
  });
}

strategyFirstLink.addEventListener("click", () => {
  strategyText.textContent = "Here, our authors share the latest trends and tendencies in the world of marketing, digital products, and web design, as well as useful tips."
});

strategySecondLink.addEventListener("click", () => {
  strategyText.textContent = "The world authors share the latest trends and tendencies in the world of marketing, digital products, and web design, as well as useful tips."
});

strategyThirdLink.addEventListener("click", () => {
  strategyText.textContent = "Stay ahead authors share the latest trends and tendencies in the world of marketing, digital products, and web design, as well as useful tips."
});

openNavBtn.addEventListener("click", () => {
  headerNav.style.transition = "all 0.5s ease";
  headerNav.style.transform = "translateX(0)";
  document.body.style.overflow = "hidden";
});

closeNavBtn.addEventListener("click", () => {
  headerNav.style.transform = "translateX(100%)";
  document.body.style.overflow = "scroll";
});

// Carousel
$('.service-cards-list').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  // variableWidth: true,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

// Employees carousel
$('.employees-list').slick({
  centerMode: true,
  centerPadding: '90px',
  slidesToShow: 3,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1010,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 700,
      settings: {
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
});