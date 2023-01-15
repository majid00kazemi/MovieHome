const API_KEY = "api_key=04a874772b13520f53772f609285a97e";
const BASE_URL = "https://api.themoviedb.org/3";
const TOP_MOVIES_URL =
  BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const IMG_URL_ORIGINAL = "https://image.tmdb.org/t/p/original";

const LATEST_URL =
  BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

const LATEST_URL_SERIES =
  BASE_URL +
  "/discover/tv?" +
  API_KEY +
  "&language=en&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate&with_status=0&with_type=0";

const carouselContainer = document.querySelector(".carousel-inner");
const MoviesSection = document.querySelector(".movie-section");
const seriesSection = document.querySelector(".series-section");

getMovies(TOP_MOVIES_URL);
getLatestMovies(LATEST_URL);
getLatestSeries(LATEST_URL_SERIES);

async function getMovies(url) {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showTopMovieCarousel(data.results);
      // console.log(data.results);
    })
    .catch((error) => {
      console.log(error);
    });
}

function showTopMovieCarousel(data) {
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

    carouselImg.src = `${IMG_URL_ORIGINAL + poster_path}`;
    carousel.appendChild(carouselImg);
    carouselContainer.appendChild(carousel);

    carousel.addEventListener("click", () => {
      console.log(title);
    });
  });
}

function getLatestMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showLatestMovies(data.results);
      // console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function getLatestSeries(url) {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showLatestSeries(data.results);
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function showLatestMovies(data) {
  data.forEach((movie) => {
    const { title, poster_path, overview } = movie;
    if (poster_path == null) {
    } else {
      const card = document.createElement("div");
      const row = document.createElement("div");
      const col_img = document.createElement("div");
      const img = document.createElement("img");
      const col_detail = document.createElement("div");
      const cardBody = document.createElement("div");
      const cardTitle = document.createElement("h5");
      const cardText = document.createElement("p");
      const button = document.createElement("a");

      card.classList.add("card", "mb-3");
      row.classList.add("row", "g-0");
      col_img.classList.add("col-md-4");
      img.classList.add("img-fluid", "rounded-start");
      col_detail.classList.add("col-md-8");
      cardBody.classList.add("card-body", "d-flex", "flex-column");
      cardTitle.classList.add("card-title");
      cardText.classList.add("card-text", "summery-movies");
      button.classList.add("btn", "btn-primary", "align-self-end", "see-more");

      img.src = `${IMG_URL + poster_path}`;
      cardTitle.textContent = title;
      cardText.textContent = overview;
      button.textContent = "See More";

      col_img.appendChild(img);
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(button);
      col_detail.appendChild(cardBody);

      card.appendChild(row);
      row.appendChild(col_img);
      row.appendChild(col_detail);

      MoviesSection.appendChild(card);
    }
  });
}

function showLatestSeries(data) {
  data.forEach((series) => {
    const { original_name, poster_path, overview } = series;
    if (poster_path == null) {
    } else {
      const card = document.createElement("div");
      const row = document.createElement("div");
      const col_img = document.createElement("div");
      const img = document.createElement("img");
      const col_detail = document.createElement("div");
      const cardBody = document.createElement("div");
      const cardTitle = document.createElement("h5");
      const cardText = document.createElement("p");
      const button = document.createElement("a");

      card.classList.add("card", "mb-3");
      row.classList.add("row", "g-0");
      col_img.classList.add("col-md-4");
      img.classList.add("img-fluid", "rounded-start");
      col_detail.classList.add("col-md-8");
      cardBody.classList.add("card-body", "d-flex", "flex-column");
      cardTitle.classList.add("card-title");
      cardText.classList.add("card-text", "summery");
      button.classList.add("btn", "btn-primary", "align-self-end", "see-more");

      img.src = `${IMG_URL + poster_path}`;
      cardTitle.textContent = original_name;
      cardText.textContent = overview;
      button.textContent = "See More";

      col_img.appendChild(img);
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(button);
      col_detail.appendChild(cardBody);

      card.appendChild(row);
      row.appendChild(col_img);
      row.appendChild(col_detail);

      seriesSection.appendChild(card);
    }
  });
}

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.visibility = "visible";
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.visibility = "hidden";
    mybutton.style.visibility = "0";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
