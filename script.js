const location = document.querySelector(".location");
const genre = document.querySelector(".genre");
const date = document.querySelector(".date");
const locationMenu = document.querySelector("#location-menu");
const genreMenu = document.querySelector("#genre-menu");
const dateMenu = document.querySelector("#date-menu");

location.addEventListener("click", () =>  locationMenu.classList.toggle("hide"));
