const API_KEY = "api_key=04a874772b13520f53772f609285a97e";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/original";

const paramsMovie = new URLSearchParams(window.location.search);
const idItem = paramsMovie.get("id");

const MOVIE_URL = `${BASE_URL}/movie/${idItem}?${API_KEY}`;

const loading = document.querySelector(".loading");
const alertDialog = document.querySelector(".alert");
const dummy = document.querySelector(".dummy");
const container = document.querySelector(".movie-container");

if (idItem == null) {
  alertDialog.style.display = "flex";
  alertDialog.textContent = `404 Go back!`;
  setTimeout(() => {
    alertDialog.style.display = "none";
  }, 8000);
} else {
  getMovie(MOVIE_URL);
}

async function getMovie(url) {
  try {
    loading.style.display = "flex";
    dummy.style.display = "block";

    const res = await axios.get(url);
    createDetails(res.data);
    document.title = `MovieHome | ${res.data.title}`;
    dummy.style.display = "none";
    loading.style.display = "none";
  } catch (error) {
    alertDialog.style.display = "flex";
    loading.style.display = "none";
    alertDialog.textContent = `${error.message}. Please Refresh`;
    setTimeout(() => {
      alertDialog.style.display = "none";
    }, 8000);
    console.log(error);
  }
}

function createDetails(data) {
  const {
    id,
    genres,
    budget,
    original_title,
    overview,
    poster_path,
    production_companies,
    release_date,
    vote_average,
    spoken_languages,
    runtime,
  } = data;

  let imgUrl = ``;
  if (poster_path == null) {
    imgUrl = `src/imgs/not-found.webp`;
  } else {
    imgUrl = IMG_URL + poster_path;
  }

  const innerhtml = `<div class="row">
    <div class="col-md-4">
      <img
        src="${imgUrl}"
        alt="${original_title}"
        class="img-fluid"
      />
    </div>
    <div class="col-md-8">
      <div class="name mt-2"><h3>${original_title}</h3></div>
      <div class="about-movie mt-2">
      ${overview}
      </div>
      <div class="duration mt-2">Duration : ${runtime} min</div>
      <div class="release-date ">Release Date : ${release_date}</div>
      <div class="rate ">
        <div
          class="d-flex align-items-center justify-content-start flex-row imdb"
        >
          <img src="src/imgs/imdb-big.png" /><span class="text-muted"
            >${vote_average.toFixed(1)}/10</span
          >
        </div>
      </div>
      <div class="budget ">Budget : $${budget}</div>
      <div class="genres ">Genres : ${setGenre(genres)}</div>
      <div class="country ">Language : ${setLang(spoken_languages)}</div>
    </div>
  </div>`;

  container.innerHTML = innerhtml;
}
function setGenre(genreArr) {
  let found = "";
  genreArr.forEach((el) => {
    found += ` ${el.name},`;
  });
  return found.slice(0, -1);
}

function setLang(lang) {
  let found = ``;
  lang.forEach((el) => {
    found += ` ${el.english_name},`;
  });
  return found.slice(0, -1);
}
