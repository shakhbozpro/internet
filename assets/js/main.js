const header = document.querySelector(".header-end");
const aboutHeader = document.querySelector(".about-header");
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
const aboutHeaderBrandsLink = document.querySelectorAll(".about-header-brands-link");
const modalForm = document.querySelector(".modal-form");
const modalStart = document.querySelector(".modal-start");
const modalClosebtn = document.querySelector(".form-cansel-btn");

// Header onscroll event
window.addEventListener('resize', function () {
  if (window.innerWidth < 1024) {
    headerNavLinks.forEach(item => {
      item.classList.remove("text-white");
      item.classList.add("text-black");
    });
  }
});

window.addEventListener("scroll", function () {
  if (window.innerWidth > 1024) {
    if (header) {
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
        header.classList.remove("bg-white", "lg:py-0");
        header.classList.add("py-10");
        header.style.top = "44px";
        logo.src = "./assets/images/site-logo-white.png";
        headerNavLinks.forEach(item => {
          item.classList.replace("lg:text-black", "lg:text-white");
        });
        headerModalLink.classList.remove("text-white");
        headerModalLink.classList.add("text-black");
        headerModalLink.classList.replace("bg-slate-800", "bg-white");
      };
    }
    else {
      aboutHeader.classList.remove("py-10");
      aboutHeader.style.top = "0";
    }
  }
});

// Navbar opening and closing
openNavBtn.addEventListener("click", () => {
  headerNav.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeNavBtn.addEventListener("click", () => {
  headerNav.style.display = "none";
  document.body.style.overflow = "scroll";
});

window.addEventListener("scroll", () => {
  headerNav.style.display = "none";
});

// Modal opening and closing
headerModalLink.addEventListener("click", () => {
  modalStart.style.transform = "translateY(0)";
  document.body.style.overflow = "hidden";
});

modalForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  modalStart.style.transform = "translateY(-150%)";
  document.body.style.overflow = "scroll";
  modalForm.reset()
});

modalClosebtn.addEventListener("click", () => {
  modalStart.style.transform = "translateY(-150%)";
  document.body.style.overflow = "scroll";
});

if (header) {
  // Strategy links onclick events
  strategyFirstLink.addEventListener("click", () => {
    strategyText.textContent = "Here, our authors share the latest trends and tendencies in the world of marketing, digital products, and web design, as well as useful tips."
  });

  strategySecondLink.addEventListener("click", () => {
    strategyText.textContent = "The world authors share the latest trends and tendencies in the world of marketing, digital products, and web design, as well as useful tips."
  });

  strategyThirdLink.addEventListener("click", () => {
    strategyText.textContent = "Stay ahead authors share the latest trends and tendencies in the world of marketing, digital products, and web design, as well as useful tips."
  });
}

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

// Service carousel
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
        autoplay: true,
        autoplaySpeed: 1500,
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

// ! blog page's codes
// get the category filter buttons
const filterBtns = document.querySelectorAll('.filter-btn');

// get the container for the blog posts
const blogPostsContainer = document.getElementById('blog-posts');

// get all the blog posts
const blogPosts = blogPostsContainer.querySelectorAll('.blog-post');

// loop through each filter button and add a click event listener
filterBtns.forEach(button => {
  button.addEventListener('click', () => {
    // remove the "active" class from all buttons
    filterBtns.forEach(btn => btn.classList.remove('active'));
    // add the "active" class to the clicked button
    button.classList.add('active');
    // get the selected category from the button's data-category attribute
    const category = button.dataset.category;
    // loop through each blog post and hide/show based on the selected category
    blogPosts.forEach(post => {
      if (category === 'all' || post.dataset.category === category) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  });
});
