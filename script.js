let locations = document.querySelector(".location");
const genre = document.querySelector(".genre");
const date = document.querySelector(".date");
const locationMenu = document.querySelector("#location-menu");
const genreMenu = document.querySelector("#genre-menu");
const dateMenu = document.querySelector("#date-menu");

locations.addEventListener("click", () => {
    locationMenu.classList.toggle("hide");
    if (!genreMenu.classList.contains("hide")) {
        genreMenu.classList.add("hide");
    }
    if (!dateMenu.classList.contains("hide")) {
        dateMenu.classList.add("hide");
    }
});

genre.addEventListener("click", () => {
    genreMenu.classList.toggle("hide");
    if (!locationMenu.classList.contains("hide")) {
        locationMenu.classList.add("hide");
    }
    if (!dateMenu.classList.contains("hide")) {
        dateMenu.classList.add("hide");
    }
});

date.addEventListener("click", () => {
    dateMenu.classList.toggle("hide");
    if (!locationMenu.classList.contains("hide")) {
        locationMenu.classList.add("hide");
        if (!genreMenu.classList.contains("hide")) {
            genreMenu.classList.add("hide");
        }
    }
});
