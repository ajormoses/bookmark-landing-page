const toggle = document.querySelector(".icon-toggle");
const hamburger = document.querySelector(".icon-hamburger");
const close = document.querySelector(".icon-close");
const menu = document.querySelector(".menu");
const slideOne = document.querySelector(".slideOne");
const slideTwo = document.querySelector(".slideTwo");
const slideThree = document.querySelector(".slideThree");
const slider = document.querySelector(".slider-flex");
const RedOne = document.querySelector(".slideRed1");
const RedTwo = document.querySelector(".slideRed2");
const RedThree = document.querySelector(".slideRed3");
const qtn = document.querySelectorAll(".qtn");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const btn = document.querySelector(".contact-btn");
const email = document.querySelector("#email");
const iconErr = document.querySelector(".icon-error");
const contactBtn = document.querySelector(".contact-btn");

toggle.addEventListener("click", () => {
  hamburger.classList.toggle("show");
  close.classList.toggle("show");
  menu.classList.toggle("show");
});

// // slider

const sliderMove = [slideOne, slideTwo, slideThree];

sliderMove[0].addEventListener("click", () => {
  slider.style.transform = "translate(0px)";
  slider.style.transition = "1s";
  RedOne.style.display = "block";
  slideOne.style.fontWeight = "700";
  slideTwo.style.fontWeight = "normal";
  slideThree.style.fontWeight = "normal";
  RedTwo.style.display = "none";
  RedThree.style.display = "none";
});

sliderMove[1].addEventListener("click", () => {
  slider.style.transform = "translate(-34%)";
  slider.style.transition = "1s";
  slideTwo.style.fontWeight = "700";
  slideOne.style.fontWeight = "normal";
  slideThree.style.fontWeight = "normal";
  RedOne.style.display = "none";
  RedTwo.style.display = "block";
  RedThree.style.display = "none";
});

sliderMove[2].addEventListener("click", () => {
  slider.style.transform = "translate(-68%)";
  slider.style.transition = "1s";
  slideThree.style.fontWeight = "700";
  slideOne.style.fontWeight = "normal";
  slideTwo.style.fontWeight = "normal";
  RedOne.style.display = "none";
  RedTwo.style.display = "none";
  RedThree.style.display = "block";
});

// survey questions and answers

qtn.forEach((qtn) => {
  qtn.addEventListener("click", (e) => {
    var id = e.target.id;
    var content = document.querySelector(`.${id}-content`);
    var arrow = document.querySelector(`.${id}-arrow`);
    content.classList.toggle("show");
    arrow.classList.toggle("show");
  });
});

// Email validation

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (email.value.match(pattern)) {
    success(email);
  } else {
    error(email);
  }
});

// function for email validation

const error = (element) => {
  const parent = element.parentElement;
  const err = parent.querySelector("p");
  parent.style.border = "2px solid $SoftRed";
  parent.style.background = "hsl(0, 94%, 66%)";
  err.style.display = "block";
  iconErr.style.display = "block";
  contactBtn.style.background = "white";
  contactBtn.style.border = "1px solid hsl(0, 94%, 66%)";
  contactBtn.style.color = "hsl(0, 94%, 66%)";
};

const success = (element) => {
  const parent = element.parentElement;
  const err = parent.querySelector("p");
  parent.style.border = "1px solid transparent";
  parent.style.background = "none";
  err.style.display = "none";
  iconErr.style.display = "none";
  contactBtn.style.background = "hsl(0, 94%, 66%)";
  contactBtn.style.border = "1px solid transparent";
  contactBtn.style.color = "white";
};
