/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {

  mobileMenu.classList.toggle("show");

  const icon = menuToggle.querySelector("i");

  if (mobileMenu.classList.contains("show")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }

});


document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("show");

    const icon = menuToggle.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  });

});


/* =========================================
   ANIMATED COUNTERS
========================================= */

const counters = document.querySelectorAll("[data-target]");

const counterObserver = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      const counter = entry.target;

      const target = Number(counter.dataset.target);

      let current = 0;

      const duration = 1500;

      const increment = target / (duration / 20);

      const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

          counter.textContent = target;
          clearInterval(timer);

        } else {

          counter.textContent = Math.floor(current);

        }

      }, 20);

      counterObserver.unobserve(counter);

    });

  },
  {
    threshold: 0.5
  }
);

counters.forEach(counter => {
  counterObserver.observe(counter);
});


/* =========================================
   PROPERTY FILTER
========================================= */

const locationFilter =
  document.getElementById("locationFilter");

const typeFilter =
  document.getElementById("typeFilter");

const searchBtn =
  document.getElementById("searchBtn");

const propertyCards =
  document.querySelectorAll(".property-card");

const noResults =
  document.getElementById("noResults");


function filterProperties() {

  const selectedLocation =
    locationFilter.value;

  const selectedType =
    typeFilter.value;

  let visibleCount = 0;


  propertyCards.forEach(card => {

    const location =
      card.dataset.location;

    const type =
      card.dataset.type;


    const locationMatch =
      selectedLocation === "all" ||
      location === selectedLocation;

    const typeMatch =
      selectedType === "all" ||
      type === selectedType;


    if (locationMatch && typeMatch) {

      card.style.display = "block";

      visibleCount++;

    } else {

      card.style.display = "none";

    }

  });


  if (visibleCount === 0) {

    noResults.style.display = "block";

  } else {

    noResults.style.display = "none";

  }

}


searchBtn.addEventListener(
  "click",
  filterProperties
);


/* =========================================
   FAVORITE BUTTONS
========================================= */

document.querySelectorAll(".favorite").forEach(button => {

  button.addEventListener("click", () => {

    button.classList.toggle("active");

    const icon = button.querySelector("i");

    if (button.classList.contains("active")) {

      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");

    } else {

      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");

    }

  });

});


/* =========================================
   TESTIMONIAL SLIDER
========================================= */

const testimonials = [

  {
    text:
      "Haven Estates made the entire home-buying process incredibly simple. They understood exactly what we wanted and helped us find a home we absolutely love.",

    name:
      "Arjun & Riya",

    role:
      "Homeowners · Chennai",

    initials:
      "AR"
  },

  {
    text:
      "The team was professional, transparent and extremely responsive. They guided us through every step of our property investment.",

    name:
      "Rahul Menon",

    role:
      "Investor · Bangalore",

    initials:
      "RM"
  },

  {
    text:
      "Selling our property felt effortless. The Haven Estates team handled everything professionally and helped us achieve a great result.",

    name:
      "Priya Krishnan",

    role:
      "Property Seller · Coimbatore",

    initials:
      "PK"
  }

];


let testimonialIndex = 0;


const testimonialText =
  document.getElementById("testimonialText");

const clientName =
  document.getElementById("clientName");

const clientRole =
  document.getElementById("clientRole");

const clientAvatar =
  document.querySelector(".client-avatar");


function showTestimonial(index) {

  const item =
    testimonials[index];

  testimonialText.textContent =
    item.text;

  clientName.textContent =
    item.name;

  clientRole.textContent =
    item.role;

  clientAvatar.textContent =
    item.initials;

}


document
  .getElementById("nextTestimonial")
  .addEventListener("click", () => {

    testimonialIndex++;

    if (
      testimonialIndex >=
      testimonials.length
    ) {

      testimonialIndex = 0;

    }

    showTestimonial(testimonialIndex);

  });


document
  .getElementById("prevTestimonial")
  .addEventListener("click", () => {

    testimonialIndex--;

    if (testimonialIndex < 0) {

      testimonialIndex =
        testimonials.length - 1;

    }

    showTestimonial(testimonialIndex);

  });


/* =========================================
   FAQ ACCORDION
========================================= */

const faqItems =
  document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

  const question =
    item.querySelector(".faq-question");


  question.addEventListener("click", () => {

    faqItems.forEach(otherItem => {

      if (otherItem !== item) {

        otherItem.classList.remove("active");

      }

    });


    item.classList.toggle("active");

  });

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
  document.getElementById("contactForm");

const formMessage =
  document.getElementById("formMessage");


contactForm.addEventListener("submit", event => {

  event.preventDefault();


  formMessage.textContent =
    "Thank you! Your enquiry has been received. Our advisor will contact you shortly.";


  contactForm.reset();

});


/* =========================================
   PROPERTY MODAL
========================================= */

const modal =
  document.getElementById("enquiryModal");

const modalClose =
  document.getElementById("modalClose");


document.querySelectorAll(".property-card").forEach(card => {

  card.addEventListener("dblclick", () => {

    modal.classList.add("show");

  });

});


modalClose.addEventListener("click", () => {

  modal.classList.remove("show");

});


modal.addEventListener("click", event => {

  if (event.target === modal) {

    modal.classList.remove("show");

  }

});


/* =========================================
   REVEAL ANIMATION
========================================= */

const revealElements =
  document.querySelectorAll(
    ".service-card, .property-card, .about-content, .about-images"
  );


const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";
          entry.target.style.transform =
            "translateY(0)";

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.1
    }
  );


revealElements.forEach(element => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(25px)";

  element.style.transition =
    "opacity 0.7s ease, transform 0.7s ease";

  revealObserver.observe(element);

  
});

function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    const button = document.getElementById("menu-btn");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        button.innerHTML = "✕";
        button.setAttribute("aria-label", "Close navigation menu");
    } else {
        button.innerHTML = "☰";
        button.setAttribute("aria-label", "Open navigation menu");
    }
}

function closeMenu() {
    const menu = document.getElementById("mobile-menu");
    const button = document.getElementById("menu-btn");

    menu.classList.remove("active");

    button.innerHTML = "☰";
    button.setAttribute("aria-label", "Open navigation menu");
}

/* Close menu when resizing to desktop */
window.addEventListener("resize", function () {
    if (window.innerWidth > 1000) {
        closeMenu();
    }
});

