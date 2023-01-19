let params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log(id);

const API_KEY = "api_key=04a874772b13520f53772f609285a97e";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
