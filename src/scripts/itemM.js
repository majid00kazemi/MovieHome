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

const genresList = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

getMovie(MOVIE_URL);

async function getMovie(url) {
  try {
    loading.style.display = "flex";
    dummy.style.display = "block";

    const res = await axios.get(url);
    createDetails(res.data);
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
      <div class="country ">Country : US</div>
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
