'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


// portfolio
const portfolioItem = document.querySelectorAll("[data-portfolio-item]");
const portfolioContainer = document.querySelector("[data-portfolio-modal-container]");
const portfolioCloseBtn = document.querySelector("[data-portfolio-modal-close-btn]");
const portfolioOverlay = document.querySelector("[data-portfolio-overlay]");

// modal variable
const portfolioModalImg = document.querySelector("[data-portfolio-modal-img]");
const portfolioModalTitle = document.querySelector("[data-portfolio-modal-title]");
const portfolioModalText = document.querySelector("[data-portfolio-modal-text]");

// modal toggle function
const PortfolioModalFunc = function () {
  portfolioContainer.classList.toggle("active");
  portfolioOverlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < portfolioItem.length; i++) {

  portfolioItem[i].addEventListener("click", function () {
    portfolioModalText.innerHTML = this.querySelector("[data-portfolio-modal-inner-text]").innerHTML;
    PortfolioModalFunc();
  });

}

// add click event to modal close button
portfolioCloseBtn.addEventListener("click", PortfolioModalFunc);
portfolioOverlay.addEventListener("click", PortfolioModalFunc);
