const API_KEY = "api_key=04a874772b13520f53772f609285a97e";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/original";

const paramsSeries = new URLSearchParams(window.location.search);
const idItem = paramsSeries.get("id");

const Series_URL = `${BASE_URL}/tv/${idItem}?${API_KEY}`;

const loading = document.querySelector(".loading");
const alertDialog = document.querySelector(".alert");
const dummy = document.querySelector(".dummy");
const container = document.querySelector(".series-container");

getSeries(Series_URL);

async function getSeries(url) {
  try {
    loading.style.display = "flex";
    dummy.style.display = "block";

    const res = await axios.get(url);
    createDetails(res.data);
    document.title = `MovieHome | ${res.data.original_name}`;
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
    original_name,
    overview,
    poster_path,
    first_air_date,
    vote_average,
    runtime,
    number_of_seasons,
    number_of_episodes,
    spoken_languages,
    status,
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
        alt="${original_name}"
        class="img-fluid"
      />
    </div>
    <div class="col-md-8">
      <div class="name mt-2"><h3>${original_name}</h3></div>
      <div class="about-movie mt-2">
      ${overview}
      </div>
      <div class="duration mt-2">Status : ${status}</div>
      <div class="release-date ">Release Date : ${first_air_date}</div>
      <div class="rate ">
        <div
          class="d-flex align-items-center justify-content-start flex-row imdb"
        >
          <img src="src/imgs/imdb-big.png" /><span class="text-muted"
            >${vote_average.toFixed(1)}/10</span
          >
        </div>
      </div>
      <div class="genres ">Genres : ${setGenre(genres)}</div>
      <div class="country ">Language : ${setLang(spoken_languages)}</div>
      <div class="total-season">Total seasons : ${number_of_seasons}</div>
      <div class="total-episodes">Total episodes : ${number_of_episodes}</div>
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
