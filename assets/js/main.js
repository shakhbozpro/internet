const header = document.querySelector(".header-end");
const logo = document.querySelector(".site-logo-img");
const headerNavLinks = document.querySelectorAll(".header-nav-link");
const headerModalLink = document.querySelector(".header-modal-link");
const strategyFirstLink = document.querySelector(".strategy-first-link");
const strategySecondLink = document.querySelector(".strategy-second-link");
const strategyThirdLink = document.querySelector(".strategy-third-link");
const strategyText = document.querySelector(".strategy-text-value");
const headerNav = document.querySelector(".header-nav");
const openNavBtn = document.querySelector(".open-nav-btn");
const closeNavBtn = document.querySelector(".header-nav-close-btn");
const modalForm = document.querySelector(".modal-form");
const modalStart = document.querySelector(".modal-start");
const modalClosebtn = document.querySelector(".form-cansel-btn");

window.addEventListener('resize', function () {
  if (window.innerWidth < 1024) {
    headerNavLinks.forEach(item => {
      item.classList.remove("text-white");
      item.classList.add("text-black");
    });
  }
});

if (window.innerWidth > 1024) {
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 0) {
      header.classList.remove("lg:py-10");
      header.classList.add("bg-white", "lg:py-0");
      header.style.top = "0";
      logo.src = "./assets/images/site-logo.png";
      headerNavLinks.forEach(item => {
        item.classList.replace("lg:text-white", "lg:text-black");
      });
      headerModalLink.classList.add("text-white");
      headerModalLink.classList.replace("bg-white", "bg-slate-800");
    } else {
      header.classList.add("py-10");
      header.classList.remove("bg-white", "lg:py-0");
      header.style.top = "44px"
      logo.src = "./assets/images/site-logo-white.png"
      headerNavLinks.forEach(item => {
        item.classList.replace("lg:text-black", "lg:text-white");
      });
      headerModalLink.classList.remove("text-white");
      headerModalLink.classList.add("text-black");
      headerModalLink.classList.replace("bg-slate-800", "bg-white");
    }
  });
}

headerModalLink.addEventListener("click", () => {
  modalStart.style.transform = "translateY(0)";
  document.body.style.overflow = "hidden";
});

modalForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
})

modalClosebtn.addEventListener("click", () => {
  modalStart.style.transform = "translateY(-150%)";
  document.body.style.overflow = "scroll";
})

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

// Galery carousel
$('.galery-xl-images-list').slick({
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.galery-lg-images-list').slick({
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.galery-md-images-list').slick({
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.galery-sm-images-list').slick({
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

// Carousel
$('.service-cards-list').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
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
  autoplay: true,
  autoplaySpeed: 1500,
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