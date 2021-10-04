const navLines = document.querySelector(".navLines");
const openNav = document.querySelector(".openNav");
const navWide = document.querySelector(".navWide");
const body = document.querySelector("body");

const parent = document.querySelector(".parentContainer");
const drkLgt = document.querySelector(".dayNight");

navLines.addEventListener("click", () => {
  openNav.classList.toggle("active");
  navLines.classList.toggle("active");
  body.classList.toggle("active");
});

drkLgt.addEventListener("click", () => {
  parent.classList.toggle("dark");
});

// ####### Temp issue media query ########
// const navLines = document.querySelector(".navLines");
// if (innerWidth > 700) {
//   navLines.style.display = "none";
// } else {
//   navWide.style.display = "none";
// }

// #######################################

// ####### Home ########

const hidden = document.querySelectorAll(".hidenHome");
const readBtn = document.querySelector(".readMore");
let btnStatus = false;

readBtn.addEventListener("click", () => {
  for (let hide of hidden) {
    hide.classList.toggle("reveal");
  }
  if (btnStatus == true) {
    readBtn.innerText = "Read more";
    btnStatus = false;
  } else {
    readBtn.innerText = "Read less";
    btnStatus = true;
  }
});

// #######################################

// ####### Gallery ########

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// ########################
