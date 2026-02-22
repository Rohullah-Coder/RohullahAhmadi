// navbar open and close
const navOpen = document.querySelector(".navopen");
const nav = document.querySelector("nav");
const closenav = document.querySelector(".closenav");
navOpen.addEventListener("click", () => {
  nav.classList.toggle("translate-x-[-150px]");
  navOpen.classList.toggle("hidden");
});
closenav.addEventListener("click", () => {
  nav.classList.toggle("translate-x-[-150px]");
  navOpen.classList.toggle("hidden");
});

const lodaer = document.querySelector("#loeader");
setTimeout(() => {
  lodaer.classList.add("hidden");
}, 400);

function openabout() {
  document.querySelector(".about").classList.toggle("hidden");
  document.querySelector(".project").classList.add("hidden");
  document.querySelector(".services").classList.add("hidden");
  document.querySelector(".contact").classList.add("hidden");
}
function openprojects() {
  document.querySelector(".project").classList.toggle("hidden");
  document.querySelector(".about").classList.add("hidden");
  document.querySelector(".services").classList.add("hidden");
  document.querySelector(".contact").classList.add("hidden");
}
function openservice() {
  document.querySelector(".services").classList.toggle("hidden");
  document.querySelector(".project").classList.add("hidden");
  document.querySelector(".about").classList.add("hidden");
  document.querySelector(".contact").classList.add("hidden");
}
function opencontact() {
  document.querySelector(".contact").classList.toggle("hidden");
  document.querySelector(".project").classList.add("hidden");
  document.querySelector(".about").classList.add("hidden");
  document.querySelector(".services").classList.add("hidden");
}

// form
