const API_KEY = "api_key=04a874772b13520f53772f609285a97e";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/original";

const carouselContainer = document.querySelector(".carousel-inner");

getMovies(API_URL);

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showMovies(data.results);
      console.log(data.results);
    });
}

function showMovies(data) {
  data.forEach((movie, index) => {
    const { title, poster_path } = movie;
    const carousel = document.createElement("div");
    const carouselImg = document.createElement("img");
    if (index == 0) {
      carousel.classList.add("active");
    }
    carousel.classList.add("carousel-item");
    carouselImg.classList.add("d-block", "w-100");
    carousel.setAttribute("data-bs-interval", 2000);

    carouselImg.src = `${IMG_URL + poster_path}`;
    carousel.appendChild(carouselImg);
    carouselContainer.appendChild(carousel);
  });
}
