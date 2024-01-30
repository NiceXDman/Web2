let navdiv = document.querySelector(".navdiv");
let navinput = document.querySelector(".hamburgermenu a i");
let hambutton = document.querySelector(".hamburgermenu");
let navbarmobile = document.querySelector(".navmobile");
let haminput = document.querySelector(".hamburgermenu input");
haminput.onclick = () => {
  navdiv.classList.toggle("slide");
};

haminput.addEventListener("click", () => {
  navdiv.classList.toggle("slide");
  navbarmobile.classList.toggle("slide");
});
