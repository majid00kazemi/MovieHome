const API_KEY = "api_key=04a874772b13520f53772f609285a97e";
const BASE_URL = "https://api.themoviedb.org/3";
const TOP_MOVIES_URL =
  BASE_URL +
  "/discover/movie?sort_by=popularity.desc&include_adult=false&" +
  API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const IMG_URL_ORIGINAL = "https://image.tmdb.org/t/p/original";

let PAGE = 1;

let LATEST_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&include_adult=false&page=${PAGE}&${API_KEY}`;

function updateLink(page) {
  LATEST_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&include_adult=false&page=${page}&${API_KEY}`;
}

const LATEST_URL_SERIES =
  BASE_URL +
  "/discover/tv?" +
  API_KEY +
  "&language=en&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate&with_status=0&with_type=0";

const carouselContainer = document.querySelector(".carousel-inner");
const MoviesSection = document.querySelector(".movie-section");
const seriesSection = document.querySelector(".series-section");
const pageContainer = document.querySelector(".pagination");

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
      getPges(data.page);
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
      // console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function showLatestMovies(data) {
  data.forEach((movie) => {
    const {
      title,
      poster_path,
      overview,
      vote_average,
      release_date,
      original_language,
      genre_ids,
    } = movie;
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
      const detailsContainer = document.createElement("div");
      const imdbContainer = document.createElement("div");
      const imdbImg = document.createElement("img");
      const imdbRate = document.createElement("span");
      const releaseContainer = document.createElement("div");
      const langContainer = document.createElement("div");
      const genresContainer = document.createElement("div");
      const type = document.createElement("span");

      card.classList.add("card", "mb-3");
      row.classList.add("row", "g-0");
      col_img.classList.add("col-md-4");
      img.classList.add("img-fluid", "rounded-start", "card-images");
      col_detail.classList.add("col-md-8");
      cardBody.classList.add("card-body", "d-flex", "flex-column");
      cardTitle.classList.add("card-title");
      cardText.classList.add("card-text", "summery-movies");
      button.classList.add(
        "btn",
        "btn-primary",
        "align-self-end",
        "see-more",
        "mt-xl-5"
      );
      detailsContainer.classList.add("details");
      imdbRate.classList.add("text-muted");
      type.classList.add("badge", "text-bg-primary", "mt-2", "ms-2");
      imdbContainer.classList.add(
        "d-flex",
        "align-items-center",
        "justify-content-start",
        "flex-row",
        "imdb"
      );
      releaseContainer.classList.add("release-date", "text-muted");
      langContainer.classList.add("lang", "text-muted");
      genresContainer.classList.add("genres", "text-muted");

      imdbImg.src = "src/imgs/imdb-big.png";
      type.textContent = "Movie";

      img.src = `${IMG_URL + poster_path}`;
      cardTitle.textContent = title;
      cardText.textContent = overview;
      button.textContent = "See More";
      imdbRate.textContent = `${vote_average}/10`;
      releaseContainer.textContent = `Release Date: ${release_date}`;
      langContainer.textContent = `Language: ${original_language}`;
      genresContainer.textContent = `Genres: ${genre_ids}`;

      detailsContainer.appendChild(imdbContainer);
      detailsContainer.appendChild(releaseContainer);
      detailsContainer.appendChild(langContainer);
      detailsContainer.appendChild(genresContainer);
      imdbContainer.appendChild(imdbImg);
      imdbContainer.appendChild(imdbRate);
      col_img.appendChild(img);
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(detailsContainer);
      cardBody.appendChild(button);
      col_detail.appendChild(type);
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
      const type = document.createElement("span");

      card.classList.add("card", "mb-3");
      row.classList.add("row", "g-0");
      col_img.classList.add("col-md-4");
      img.classList.add("img-fluid", "rounded-start", "card-images");
      col_detail.classList.add("col-md-8");
      cardBody.classList.add("card-body", "d-flex", "flex-column");
      cardTitle.classList.add("card-title");
      cardText.classList.add("card-text", "summery");
      button.classList.add("btn", "btn-primary", "align-self-end", "see-more");
      type.classList.add("badge", "text-bg-success", "mt-2", "ms-2");

      img.src = `${IMG_URL + poster_path}`;
      cardTitle.textContent = original_name;
      cardText.textContent = overview;
      button.textContent = "See More";
      type.textContent = "Series";

      col_img.appendChild(img);
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(button);
      col_detail.appendChild(type);
      col_detail.appendChild(cardBody);

      card.appendChild(row);
      row.appendChild(col_img);
      row.appendChild(col_detail);

      seriesSection.appendChild(card);
    }
  });
}

function getPges(current) {
  pageContainer.innerHTML = "";
  let nextPages = current + 5 > 500 ? 500 : current + 5;

  let prevPages = current - 5 < 1 ? 1 : current - 5;

  const pageItemPrev = document.createElement("li");
  const pageLinkPrev = document.createElement("a");

  pageItemPrev.classList.add("page-item");
  pageLinkPrev.classList.add("page-link");

  pageLinkPrev.textContent = "Prev";
  pageItemPrev.appendChild(pageLinkPrev);
  pageContainer.appendChild(pageItemPrev);

  if (current > 1) {
    pageItemPrev.classList.remove("disabled");
  } else {
    pageItemPrev.classList.add("disabled");
  }
  pageLinkPrev.addEventListener("click", () => {
    PAGE--;
    updateLink(PAGE);
    MoviesSection.innerHTML = "<h2>Movies</h2>";
    getLatestMovies(LATEST_URL);
    backToTop();
  });

  for (let i = prevPages; i < current; i++) {
    const pageItem = document.createElement("li");
    const pageLink = document.createElement("a");

    pageItem.classList.add("page-item");
    pageLink.classList.add("page-link");

    pageLink.textContent = i;
    pageItem.appendChild(pageLink);
    pageContainer.appendChild(pageItem);

    pageLink.addEventListener("click", () => {
      PAGE = i;
      updateLink(PAGE);
      MoviesSection.innerHTML = "<h2>Movies</h2>";
      getLatestMovies(LATEST_URL);
      backToTop();
    });
  }

  for (let i = current; i <= nextPages; i++) {
    const pageItem = document.createElement("li");
    const pageLink = document.createElement("a");
    if (i === current) {
      pageItem.classList.add("active");
    }
    pageItem.classList.add("page-item");
    pageLink.classList.add("page-link");

    pageLink.textContent = i;
    pageItem.appendChild(pageLink);
    pageContainer.appendChild(pageItem);

    pageLink.addEventListener("click", () => {
      PAGE = i;
      updateLink(PAGE);
      MoviesSection.innerHTML = "<h2>Movies</h2>";
      getLatestMovies(LATEST_URL);
      backToTop();
    });
  }

  const pageItemNext = document.createElement("li");
  const pageLinkNext = document.createElement("a");

  pageItemNext.classList.add("page-item");
  pageLinkNext.classList.add("page-link");
  if (current === 500) {
    pageLinkNext.classList.add("disabled");
  }

  pageLinkNext.textContent = "Next";
  pageItemNext.appendChild(pageLinkNext);
  pageContainer.appendChild(pageItemNext);

  pageItemNext.addEventListener("click", () => {
    PAGE++;
    updateLink(PAGE);
    MoviesSection.innerHTML = "<h2>Movies</h2>";
    getLatestMovies(LATEST_URL);
    backToTop();
  });
}

let mybutton = document.getElementById("btn-back-to-top");

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

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
