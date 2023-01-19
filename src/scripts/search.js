const API_KEY = "api_key=04a874772b13520f53772f609285a97e";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

let PAGE = 1;

const params = new URLSearchParams(window.location.search);
const nameItem = params.get("name");
const itemContainer = document.querySelector(".item-container");
const loading = document.querySelector(".loading");
const alertDialog = document.querySelector(".alert");
const dummy = document.querySelector(".dummy");
const pageContainer = document.querySelector(".pagination");
const paginationContainer = document.querySelector(".pagination-container");
const searchItem = document.querySelector(".search-item");

searchItem.value = nameItem;
console.log(nameItem);
searchItem.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    let params = new URLSearchParams();
    params.append("name", searchItem.value);
    location.href = "search.html?" + params.toString();
  }
});
if (nameItem == "") {
} else {
  let SEARCH_URL_MOVIE = `${BASE_URL}/search/movie?include_adult=false&${API_KEY}&query=${nameItem}`;
  let SEARCH_URL_SERIES = `${BASE_URL}/search/tv?include_adult=false&${API_KEY}&query=${nameItem}`;

  function updateLink(page) {
    SEARCH_URL_MOVIE += `&page=${page}`;
    SEARCH_URL_SERIES += `&page=${page}`;
  }

  getMovies(SEARCH_URL_MOVIE);
  getSeries(SEARCH_URL_SERIES);

  async function getMovies(url) {
    try {
      loading.style.display = "flex";
      dummy.style.display = "block";
      pageContainer.style.display = "none";
      const res = await axios.get(url);

      createMovieCards(res.data.results);
      getPges(res.data.page, res.data.total_pages);
      dummy.style.display = "none";
      loading.style.display = "none";
      pageContainer.style.display = "flex";
    } catch (error) {
      loading.style.display = "none";
      pageContainer.style.display = "none";
      alertDialog.style.display = "flex";
      alertDialog.textContent = `${error.message}. Please Refresh`;
      setTimeout(() => {
        alertDialog.style.display = "none";
      }, 8000);
      console.log(error);
    }
  }

  async function getSeries(url) {
    try {
      const res = await axios.get(url);
      createSeriesCard(res.data.results);
    } catch (error) {
      alertDialog.style.display = "flex";
      alertDialog.textContent = `${error.message}. Please Refresh`;
      setTimeout(() => {
        alertDialog.style.display = "none";
      }, 8000);
      console.log(error);
    }
  }

  function createMovieCards(data) {
    data.forEach((movie) => {
      const { id, title, poster_path, overview } = movie;
      if (poster_path == null) {
        const innerhtml = `<div class="card mb-3" style="width: 18rem">
    <img
      src="src/imgs/not-found.webp"
      class="card-img-top"
      alt="${title}"
    />
    <div class="card-body">
      <span class="badge text-bg-primary mb-2">Movie</span>
      <h5 class="card-title">${title}</h5>
      <p class="card-text summery">
        ${overview}
      </p>
      <a href="#" class="btn btn-outline-primary">See More</a>
    </div>
  </div>`;

        itemContainer.innerHTML += innerhtml;
      } else {
        const innerhtml = `<div class="card mb-3" style="width: 18rem">
    <img
      src="${IMG_URL + poster_path}"
      class="card-img-top"
      alt="${title}"
    />
    <div class="card-body">
      <span class="badge text-bg-primary mb-2">Movie</span>
      <h5 class="card-title">${title}</h5>
      <p class="card-text summery">
        ${overview}
      </p>
      <a href="#" class="btn btn-outline-primary">See More</a>
    </div>
  </div>`;

        itemContainer.innerHTML += innerhtml;
      }
    });
  }

  function createSeriesCard(data) {
    data.forEach((series) => {
      const { id, name, poster_path, overview } = series;

      if (poster_path == null) {
        const innerhtml = `<div class="card mb-3" style="width: 18rem">
  <img
    src="src/imgs/not-found.webp"
    class="card-img-top"
    alt="${name}"
  />
  <div class="card-body">
  <span class="badge text-bg-success mb-2">Series</span>
    <h5 class="card-title">${name}</h5>
    <p class="card-text summery">
      ${overview}
    </p>
    <a href="#" class="btn btn-outline-primary">See More</a>
  </div>
</div>`;

        itemContainer.innerHTML += innerhtml;
      } else {
        const innerhtml = `<div class="card mb-3" style="width: 18rem">
          <img
            src="${IMG_URL + poster_path}"
            class="card-img-top"
            alt="${name}"
          />
          <div class="card-body">
            <span class="badge text-bg-success mb-2">Series</span>
            <h5 class="card-title">${name}</h5>
            <p class="card-text summery">
              ${overview}
            </p>
            <a href="#" class="btn btn-outline-primary">See More</a>
          </div>
        </div>`;

        itemContainer.innerHTML += innerhtml;
      }
    });
  }

  function getPges(current, total) {
    pageContainer.innerHTML = "";

    let nextPages = current + 5 > total ? total : current + 5;

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
      itemContainer.innerHTML = "";
      getMovies(SEARCH_URL_MOVIE);
      getSeries(SEARCH_URL_SERIES);
      backToTopp();
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
        itemContainer.innerHTML = "";
        getMovies(SEARCH_URL_MOVIE);
        getSeries(SEARCH_URL_SERIES);
        backToTopp();
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
        itemContainer.innerHTML = "";
        getMovies(SEARCH_URL_MOVIE);
        getSeries(SEARCH_URL_SERIES);
        backToTopp();
      });
    }
    const pageItemNext = document.createElement("li");
    const pageLinkNext = document.createElement("a");

    pageItemNext.classList.add("page-item");
    pageLinkNext.classList.add("page-link");
    if (current === total) {
      pageLinkNext.classList.add("disabled");
    }

    pageLinkNext.textContent = "Next";
    pageItemNext.appendChild(pageLinkNext);
    pageContainer.appendChild(pageItemNext);

    pageItemNext.addEventListener("click", () => {
      PAGE++;
      updateLink(PAGE);
      itemContainer.innerHTML = "";
      getMovies(SEARCH_URL_MOVIE);
      getSeries(SEARCH_URL_SERIES);
      backToTopp();
    });
  }

  function backToTopp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
