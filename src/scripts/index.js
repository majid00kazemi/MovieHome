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

const langList = [
  {
    iso_639_1: "xx",
    english_name: "No Language",
    name: "No Language",
  },
  {
    iso_639_1: "aa",
    english_name: "Afar",
    name: "",
  },
  {
    iso_639_1: "af",
    english_name: "Afrikaans",
    name: "Afrikaans",
  },
  {
    iso_639_1: "ak",
    english_name: "Akan",
    name: "",
  },
  {
    iso_639_1: "an",
    english_name: "Aragonese",
    name: "",
  },
  {
    iso_639_1: "as",
    english_name: "Assamese",
    name: "",
  },
  {
    iso_639_1: "av",
    english_name: "Avaric",
    name: "",
  },
  {
    iso_639_1: "ae",
    english_name: "Avestan",
    name: "",
  },
  {
    iso_639_1: "ay",
    english_name: "Aymara",
    name: "",
  },
  {
    iso_639_1: "az",
    english_name: "Azerbaijani",
    name: "Azərbaycan",
  },
  {
    iso_639_1: "ba",
    english_name: "Bashkir",
    name: "",
  },
  {
    iso_639_1: "bm",
    english_name: "Bambara",
    name: "Bamanankan",
  },
  {
    iso_639_1: "bi",
    english_name: "Bislama",
    name: "",
  },
  {
    iso_639_1: "bo",
    english_name: "Tibetan",
    name: "",
  },
  {
    iso_639_1: "br",
    english_name: "Breton",
    name: "",
  },
  {
    iso_639_1: "ca",
    english_name: "Catalan",
    name: "Català",
  },
  {
    iso_639_1: "cs",
    english_name: "Czech",
    name: "Český",
  },
  {
    iso_639_1: "ce",
    english_name: "Chechen",
    name: "",
  },
  {
    iso_639_1: "cu",
    english_name: "Slavic",
    name: "",
  },
  {
    iso_639_1: "cv",
    english_name: "Chuvash",
    name: "",
  },
  {
    iso_639_1: "kw",
    english_name: "Cornish",
    name: "",
  },
  {
    iso_639_1: "co",
    english_name: "Corsican",
    name: "",
  },
  {
    iso_639_1: "cr",
    english_name: "Cree",
    name: "",
  },
  {
    iso_639_1: "cy",
    english_name: "Welsh",
    name: "Cymraeg",
  },
  {
    iso_639_1: "da",
    english_name: "Danish",
    name: "Dansk",
  },
  {
    iso_639_1: "de",
    english_name: "German",
    name: "Deutsch",
  },
  {
    iso_639_1: "dv",
    english_name: "Divehi",
    name: "",
  },
  {
    iso_639_1: "dz",
    english_name: "Dzongkha",
    name: "",
  },
  {
    iso_639_1: "eo",
    english_name: "Esperanto",
    name: "Esperanto",
  },
  {
    iso_639_1: "et",
    english_name: "Estonian",
    name: "Eesti",
  },
  {
    iso_639_1: "eu",
    english_name: "Basque",
    name: "euskera",
  },
  {
    iso_639_1: "fo",
    english_name: "Faroese",
    name: "",
  },
  {
    iso_639_1: "fj",
    english_name: "Fijian",
    name: "",
  },
  {
    iso_639_1: "fi",
    english_name: "Finnish",
    name: "suomi",
  },
  {
    iso_639_1: "fr",
    english_name: "French",
    name: "Français",
  },
  {
    iso_639_1: "fy",
    english_name: "Frisian",
    name: "",
  },
  {
    iso_639_1: "ff",
    english_name: "Fulah",
    name: "Fulfulde",
  },
  {
    iso_639_1: "gd",
    english_name: "Gaelic",
    name: "",
  },
  {
    iso_639_1: "ga",
    english_name: "Irish",
    name: "Gaeilge",
  },
  {
    iso_639_1: "gl",
    english_name: "Galician",
    name: "Galego",
  },
  {
    iso_639_1: "gv",
    english_name: "Manx",
    name: "",
  },
  {
    iso_639_1: "gn",
    english_name: "Guarani",
    name: "",
  },
  {
    iso_639_1: "gu",
    english_name: "Gujarati",
    name: "",
  },
  {
    iso_639_1: "ht",
    english_name: "Haitian; Haitian Creole",
    name: "",
  },
  {
    iso_639_1: "ha",
    english_name: "Hausa",
    name: "Hausa",
  },
  {
    iso_639_1: "sh",
    english_name: "Serbo-Croatian",
    name: "",
  },
  {
    iso_639_1: "hz",
    english_name: "Herero",
    name: "",
  },
  {
    iso_639_1: "ho",
    english_name: "Hiri Motu",
    name: "",
  },
  {
    iso_639_1: "hr",
    english_name: "Croatian",
    name: "Hrvatski",
  },
  {
    iso_639_1: "hu",
    english_name: "Hungarian",
    name: "Magyar",
  },
  {
    iso_639_1: "ig",
    english_name: "Igbo",
    name: "",
  },
  {
    iso_639_1: "io",
    english_name: "Ido",
    name: "",
  },
  {
    iso_639_1: "ii",
    english_name: "Yi",
    name: "",
  },
  {
    iso_639_1: "iu",
    english_name: "Inuktitut",
    name: "",
  },
  {
    iso_639_1: "ie",
    english_name: "Interlingue",
    name: "",
  },
  {
    iso_639_1: "ia",
    english_name: "Interlingua",
    name: "",
  },
  {
    iso_639_1: "id",
    english_name: "Indonesian",
    name: "Bahasa indonesia",
  },
  {
    iso_639_1: "ik",
    english_name: "Inupiaq",
    name: "",
  },
  {
    iso_639_1: "is",
    english_name: "Icelandic",
    name: "Íslenska",
  },
  {
    iso_639_1: "it",
    english_name: "Italian",
    name: "Italiano",
  },
  {
    iso_639_1: "jv",
    english_name: "Javanese",
    name: "",
  },
  {
    iso_639_1: "ja",
    english_name: "Japanese",
    name: "日本語",
  },
  {
    iso_639_1: "kl",
    english_name: "Kalaallisut",
    name: "",
  },
  {
    iso_639_1: "kn",
    english_name: "Kannada",
    name: "?????",
  },
  {
    iso_639_1: "ks",
    english_name: "Kashmiri",
    name: "",
  },
  {
    iso_639_1: "kr",
    english_name: "Kanuri",
    name: "",
  },
  {
    iso_639_1: "kk",
    english_name: "Kazakh",
    name: "қазақ",
  },
  {
    iso_639_1: "km",
    english_name: "Khmer",
    name: "",
  },
  {
    iso_639_1: "ki",
    english_name: "Kikuyu",
    name: "",
  },
  {
    iso_639_1: "rw",
    english_name: "Kinyarwanda",
    name: "Kinyarwanda",
  },
  {
    iso_639_1: "ky",
    english_name: "Kirghiz",
    name: "??????",
  },
  {
    iso_639_1: "kv",
    english_name: "Komi",
    name: "",
  },
  {
    iso_639_1: "kg",
    english_name: "Kongo",
    name: "",
  },
  {
    iso_639_1: "ko",
    english_name: "Korean",
    name: "한국어/조선말",
  },
  {
    iso_639_1: "kj",
    english_name: "Kuanyama",
    name: "",
  },
  {
    iso_639_1: "ku",
    english_name: "Kurdish",
    name: "",
  },
  {
    iso_639_1: "lo",
    english_name: "Lao",
    name: "",
  },
  {
    iso_639_1: "la",
    english_name: "Latin",
    name: "Latin",
  },
  {
    iso_639_1: "lv",
    english_name: "Latvian",
    name: "Latviešu",
  },
  {
    iso_639_1: "li",
    english_name: "Limburgish",
    name: "",
  },
  {
    iso_639_1: "ln",
    english_name: "Lingala",
    name: "",
  },
  {
    iso_639_1: "lt",
    english_name: "Lithuanian",
    name: "Lietuvių",
  },
  {
    iso_639_1: "lb",
    english_name: "Letzeburgesch",
    name: "",
  },
  {
    iso_639_1: "lu",
    english_name: "Luba-Katanga",
    name: "",
  },
  {
    iso_639_1: "lg",
    english_name: "Ganda",
    name: "",
  },
  {
    iso_639_1: "mh",
    english_name: "Marshall",
    name: "",
  },
  {
    iso_639_1: "ml",
    english_name: "Malayalam",
    name: "",
  },
  {
    iso_639_1: "mr",
    english_name: "Marathi",
    name: "",
  },
  {
    iso_639_1: "mg",
    english_name: "Malagasy",
    name: "",
  },
  {
    iso_639_1: "mt",
    english_name: "Maltese",
    name: "Malti",
  },
  {
    iso_639_1: "mo",
    english_name: "Moldavian",
    name: "",
  },
  {
    iso_639_1: "mn",
    english_name: "Mongolian",
    name: "",
  },
  {
    iso_639_1: "mi",
    english_name: "Maori",
    name: "",
  },
  {
    iso_639_1: "ms",
    english_name: "Malay",
    name: "Bahasa melayu",
  },
  {
    iso_639_1: "my",
    english_name: "Burmese",
    name: "",
  },
  {
    iso_639_1: "na",
    english_name: "Nauru",
    name: "",
  },
  {
    iso_639_1: "nv",
    english_name: "Navajo",
    name: "",
  },
  {
    iso_639_1: "nr",
    english_name: "Ndebele",
    name: "",
  },
  {
    iso_639_1: "nd",
    english_name: "Ndebele",
    name: "",
  },
  {
    iso_639_1: "ng",
    english_name: "Ndonga",
    name: "",
  },
  {
    iso_639_1: "ne",
    english_name: "Nepali",
    name: "",
  },
  {
    iso_639_1: "nl",
    english_name: "Dutch",
    name: "Nederlands",
  },
  {
    iso_639_1: "nn",
    english_name: "Norwegian Nynorsk",
    name: "",
  },
  {
    iso_639_1: "nb",
    english_name: "Norwegian Bokmål",
    name: "Bokmål",
  },
  {
    iso_639_1: "no",
    english_name: "Norwegian",
    name: "Norsk",
  },
  {
    iso_639_1: "ny",
    english_name: "Chichewa; Nyanja",
    name: "",
  },
  {
    iso_639_1: "oc",
    english_name: "Occitan",
    name: "",
  },
  {
    iso_639_1: "oj",
    english_name: "Ojibwa",
    name: "",
  },
  {
    iso_639_1: "or",
    english_name: "Oriya",
    name: "",
  },
  {
    iso_639_1: "om",
    english_name: "Oromo",
    name: "",
  },
  {
    iso_639_1: "os",
    english_name: "Ossetian; Ossetic",
    name: "",
  },
  {
    iso_639_1: "pi",
    english_name: "Pali",
    name: "",
  },
  {
    iso_639_1: "pl",
    english_name: "Polish",
    name: "Polski",
  },
  {
    iso_639_1: "pt",
    english_name: "Portuguese",
    name: "Português",
  },
  {
    iso_639_1: "qu",
    english_name: "Quechua",
    name: "",
  },
  {
    iso_639_1: "rm",
    english_name: "Raeto-Romance",
    name: "",
  },
  {
    iso_639_1: "ro",
    english_name: "Romanian",
    name: "Română",
  },
  {
    iso_639_1: "rn",
    english_name: "Rundi",
    name: "Kirundi",
  },
  {
    iso_639_1: "ru",
    english_name: "Russian",
    name: "Pусский",
  },
  {
    iso_639_1: "sg",
    english_name: "Sango",
    name: "",
  },
  {
    iso_639_1: "sa",
    english_name: "Sanskrit",
    name: "",
  },
  {
    iso_639_1: "si",
    english_name: "Sinhalese",
    name: "සිංහල",
  },
  {
    iso_639_1: "sk",
    english_name: "Slovak",
    name: "Slovenčina",
  },
  {
    iso_639_1: "sl",
    english_name: "Slovenian",
    name: "Slovenščina",
  },
  {
    iso_639_1: "se",
    english_name: "Northern Sami",
    name: "",
  },
  {
    iso_639_1: "sm",
    english_name: "Samoan",
    name: "",
  },
  {
    iso_639_1: "sn",
    english_name: "Shona",
    name: "",
  },
  {
    iso_639_1: "sd",
    english_name: "Sindhi",
    name: "",
  },
  {
    iso_639_1: "so",
    english_name: "Somali",
    name: "Somali",
  },
  {
    iso_639_1: "st",
    english_name: "Sotho",
    name: "",
  },
  {
    iso_639_1: "es",
    english_name: "Spanish",
    name: "Español",
  },
  {
    iso_639_1: "sq",
    english_name: "Albanian",
    name: "shqip",
  },
  {
    iso_639_1: "sc",
    english_name: "Sardinian",
    name: "",
  },
  {
    iso_639_1: "sr",
    english_name: "Serbian",
    name: "Srpski",
  },
  {
    iso_639_1: "ss",
    english_name: "Swati",
    name: "",
  },
  {
    iso_639_1: "su",
    english_name: "Sundanese",
    name: "",
  },
  {
    iso_639_1: "sw",
    english_name: "Swahili",
    name: "Kiswahili",
  },
  {
    iso_639_1: "sv",
    english_name: "Swedish",
    name: "svenska",
  },
  {
    iso_639_1: "ty",
    english_name: "Tahitian",
    name: "",
  },
  {
    iso_639_1: "ta",
    english_name: "Tamil",
    name: "தமிழ்",
  },
  {
    iso_639_1: "tt",
    english_name: "Tatar",
    name: "",
  },
  {
    iso_639_1: "te",
    english_name: "Telugu",
    name: "తెలుగు",
  },
  {
    iso_639_1: "tg",
    english_name: "Tajik",
    name: "",
  },
  {
    iso_639_1: "tl",
    english_name: "Tagalog",
    name: "",
  },
  {
    iso_639_1: "th",
    english_name: "Thai",
    name: "ภาษาไทย",
  },
  {
    iso_639_1: "ti",
    english_name: "Tigrinya",
    name: "",
  },
  {
    iso_639_1: "to",
    english_name: "Tonga",
    name: "",
  },
  {
    iso_639_1: "tn",
    english_name: "Tswana",
    name: "",
  },
  {
    iso_639_1: "ts",
    english_name: "Tsonga",
    name: "",
  },
  {
    iso_639_1: "tk",
    english_name: "Turkmen",
    name: "",
  },
  {
    iso_639_1: "tr",
    english_name: "Turkish",
    name: "Türkçe",
  },
  {
    iso_639_1: "tw",
    english_name: "Twi",
    name: "",
  },
  {
    iso_639_1: "ug",
    english_name: "Uighur",
    name: "",
  },
  {
    iso_639_1: "uk",
    english_name: "Ukrainian",
    name: "Український",
  },
  {
    iso_639_1: "ur",
    english_name: "Urdu",
    name: "اردو",
  },
  {
    iso_639_1: "uz",
    english_name: "Uzbek",
    name: "ozbek",
  },
  {
    iso_639_1: "ve",
    english_name: "Venda",
    name: "",
  },
  {
    iso_639_1: "vi",
    english_name: "Vietnamese",
    name: "Tiếng Việt",
  },
  {
    iso_639_1: "vo",
    english_name: "Volapük",
    name: "",
  },
  {
    iso_639_1: "wa",
    english_name: "Walloon",
    name: "",
  },
  {
    iso_639_1: "wo",
    english_name: "Wolof",
    name: "Wolof",
  },
  {
    iso_639_1: "xh",
    english_name: "Xhosa",
    name: "",
  },
  {
    iso_639_1: "yi",
    english_name: "Yiddish",
    name: "",
  },
  {
    iso_639_1: "za",
    english_name: "Zhuang",
    name: "",
  },
  {
    iso_639_1: "zu",
    english_name: "Zulu",
    name: "isiZulu",
  },
  {
    iso_639_1: "ab",
    english_name: "Abkhazian",
    name: "",
  },
  {
    iso_639_1: "zh",
    english_name: "Mandarin",
    name: "普通话",
  },
  {
    iso_639_1: "ps",
    english_name: "Pushto",
    name: "پښتو",
  },
  {
    iso_639_1: "am",
    english_name: "Amharic",
    name: "",
  },
  {
    iso_639_1: "ar",
    english_name: "Arabic",
    name: "العربية",
  },
  {
    iso_639_1: "bg",
    english_name: "Bulgarian",
    name: "български език",
  },
  {
    iso_639_1: "cn",
    english_name: "Cantonese",
    name: "广州话 / 廣州話",
  },
  {
    iso_639_1: "mk",
    english_name: "Macedonian",
    name: "",
  },
  {
    iso_639_1: "el",
    english_name: "Greek",
    name: "ελληνικά",
  },
  {
    iso_639_1: "fa",
    english_name: "Persian",
    name: "فارسی",
  },
  {
    iso_639_1: "he",
    english_name: "Hebrew",
    name: "עִבְרִית",
  },
  {
    iso_639_1: "hi",
    english_name: "Hindi",
    name: "हिन्दी",
  },
  {
    iso_639_1: "hy",
    english_name: "Armenian",
    name: "",
  },
  {
    iso_639_1: "en",
    english_name: "English",
    name: "English",
  },
  {
    iso_639_1: "ee",
    english_name: "Ewe",
    name: "Èʋegbe",
  },
  {
    iso_639_1: "ka",
    english_name: "Georgian",
    name: "ქართული",
  },
  {
    iso_639_1: "pa",
    english_name: "Punjabi",
    name: "ਪੰਜਾਬੀ",
  },
  {
    iso_639_1: "bn",
    english_name: "Bengali",
    name: "বাংলা",
  },
  {
    iso_639_1: "bs",
    english_name: "Bosnian",
    name: "Bosanski",
  },
  {
    iso_639_1: "ch",
    english_name: "Chamorro",
    name: "Finu' Chamorro",
  },
  {
    iso_639_1: "be",
    english_name: "Belarusian",
    name: "беларуская мова",
  },
  {
    iso_639_1: "yo",
    english_name: "Yoruba",
    name: "Èdè Yorùbá",
  },
];

const carouselContainer = document.querySelector(".carousel-inner");
const MoviesSection = document.querySelector(".movie-section");
const seriesSection = document.querySelector(".series-section");
const pageContainer = document.querySelector(".pagination");
const loading = document.querySelector(".loading");
const alertDialog = document.querySelector(".alert");
const paginationContainer = document.querySelector(".pagination-container");
const dummy = document.querySelector(".dummy");

getMovies(TOP_MOVIES_URL);
getLatestMovies(LATEST_URL);
getLatestSeries(LATEST_URL_SERIES);

async function getMovies(url) {
  loading.style.display = "flex";
  MoviesSection.style.display = "none";
  seriesSection.style.display = "none";
  paginationContainer.style.display = "none";
  alertDialog.style.display = "none";
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dummy.style.display = "none";
      loading.style.display = "none";
      MoviesSection.style.display = "block";
      seriesSection.style.display = "block";
      showTopMovieCarousel(data.results);
      // console.log(data.results);
    })
    .catch((error) => {
      loading.style.display = "none";
      alertDialog.style.display = "flex";
      alertDialog.textContent = `${error.message}. Please Refresh`;
      setTimeout(() => {
        alertDialog.style.display = "none";
      }, 8000);
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

async function getLatestMovies(url) {
  loading.style.display = "flex";
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      loading.style.display = "none";
      paginationContainer.style.display = "block";
      showLatestMovies(data.results);
      getPges(data.page);
    })
    .catch((error) => {
      loading.style.display = "none";
      alertDialog.style.display = "flex";
      alertDialog.textContent = `${error.message}. Please Refresh`;
      setTimeout(() => {
        alertDialog.style.display = "none";
      }, 8000);
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
      alertDialog.style.display = "flex";
      alertDialog.textContent = `${error.message}. Please Refresh`;
      setTimeout(() => {
        alertDialog.style.display = "none";
      }, 8000);
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
      langContainer.textContent = `Language: ${setLang(original_language)}`;

      genresContainer.textContent = `Genres: ${setGenre(genre_ids)}`;

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

function setGenre(genreArr) {
  let found = "";
  genreArr.forEach((el) => {
    genresList.forEach((genre) => {
      if (genre.id == el) found += ` ${genre.name},`;
    });
  });
  return found.slice(0, -1);
}

function setLang(lang) {
  let found = "";
  langList.forEach((el) => {
    if (el.iso_639_1 == lang) {
      found = el.english_name;
    }
  });
  return found;
}
