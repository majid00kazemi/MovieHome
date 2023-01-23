const API_KEY = "api_key=04a874772b13520f53772f609285a97e";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

let PAGE = 1;

let LATEST_URL = `${BASE_URL}/discover/tv?sort_by=first_air_date.desc&include_adult=false&${API_KEY}`;
function updateLink(page) {
  LATEST_URL += `&page=${page}`;
}
function filterLink(url) {
  LATEST_URL = url;
}
const genresList = [
  {
    id: 10759,
    name: "Action & Adventure",
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
    id: 10762,
    name: "Kids",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10763,
    name: "News",
  },
  {
    id: 10764,
    name: "Reality",
  },
  {
    id: 10765,
    name: "Sci-Fi & Fantasy",
  },
  {
    id: 10766,
    name: "Soap",
  },
  {
    id: 10767,
    name: "Talk",
  },
  {
    id: 10768,
    name: "War & Politics",
  },
  {
    id: 37,
    name: "Western",
  },
];

const langList = [
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

let found = [];

const pageContainer = document.querySelector(".pagination");
const loading = document.querySelector(".loading");
const alertDialog = document.querySelector(".alert");
const paginationContainer = document.querySelector(".pagination-container");
const dummy = document.querySelector(".dummy");
const genreContainer = document.querySelector(".genre-container");
const langFilter = document.querySelector(".form-select");
const filterBtn = document.querySelector(".btn-search");
const movieContainer = document.querySelector(".series-container");
const filterContainer = document.querySelector(".filter-container");
const yearInput = document.querySelector(".year-number");
dummy.style.display = "none";
getMovies(LATEST_URL);

async function getMovies(url) {
  try {
    loading.style.display = "flex";
    filterContainer.style.display = "none";
    pageContainer.style.display = "none";
    dummy.style.display = "block";
    const res = await axios.get(url);
    dummy.style.display = "none";
    loading.style.display = "none";
    createMovieCards(res.data.results);
    getPges(res.data.page, res.data.total_pages);
    if (found.length == 0) {
      alertDialog.style.display = "flex";
      alertDialog.textContent = `Nothing Found!`;
      setTimeout(() => {
        alertDialog.style.display = "none";
      }, 8000);
    }
    pageContainer.style.display = "flex";
    filterContainer.style.display = "block";
  } catch (error) {
    loading.style.display = "none";
    pageContainer.style.display = "none";
    filterContainer.style.display = "none";
    alertDialog.style.display = "flex";
    alertDialog.textContent = `${error.message}. Please Refresh`;
    setTimeout(() => {
      alertDialog.style.display = "none";
    }, 8000);
    console.log(error);
  }
}
createGenreChips();
createLangSelect();

filterBtn.addEventListener("click", () => {
  const chips = document.querySelectorAll(".btn-check:checked");
  let filterUrl = `${BASE_URL}/discover/tv?${API_KEY}&sort_by=popularity.desc`;
  let genre = ``;
  const language = langFilter.value;
  const year = yearInput.value;
  chips.forEach((chip) => {
    genre += `${chip.id},`;
  });
  genre = genre.slice(0, -1);
  if (!genre == "") {
    filterUrl += `&with_genres=${genre}`;
  }
  if (!year == "") {
    filterUrl += `&first_air_date_year=${year}`;
  }
  if (language == "Choose...") {
  } else {
    filterUrl += `&with_original_language=${language}`;
  }
  filterLink(filterUrl);
  movieContainer.innerHTML = "";
  getMovies(LATEST_URL);
});

function createGenreChips() {
  genresList.forEach((genre) => {
    const chip = `<input
    type="checkbox"
    class="btn-check"
    id="${genre.id}"
    autocomplete="off"
  />
  <label
    class="btn mb-2 me-1 btn-outline-primary genre-button"
    for="${genre.id}"
    >${genre.name}</label
  >`;
    genreContainer.innerHTML += chip;
  });
}

function createLangSelect() {
  langList.forEach((lang) => {
    const select = `<option value="${lang.iso_639_1}">${lang.english_name}</option>`;

    langFilter.innerHTML += select;
  });
}

function createMovieCards(data) {
  found = data.map((movie) => {
    const { id, name, poster_path, overview } = movie;

    if (poster_path == null) {
      const innerHtml = `<div class="card mb-3" style="width: 18rem">
      <img src="src/imgs/not-found.webp" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text summery ">
          ${overview}
        </p>
        <a href="itemS.html?id=${id}" class="btn btn-outline-primary">See More</a>
      </div>
    </div>`;

      movieContainer.innerHTML += innerHtml;
    } else {
      const innerHtml = `<div class="card mb-3" style="width: 18rem">
      <img src="${IMG_URL + poster_path}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text summery ">
          ${overview}
        </p>
        <a href="itemS.html?id=${id}" class="btn btn-outline-primary">See More</a>
      </div>
    </div>`;

      movieContainer.innerHTML += innerHtml;
    }
    return { id: id };
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
    movieContainer.innerHTML = "";
    getMovies(LATEST_URL);
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
      movieContainer.innerHTML = "";
      getMovies(LATEST_URL);
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
      movieContainer.innerHTML = "";
      getMovies(LATEST_URL);
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
  if (current === 1 && total === 0) {
    pageLinkNext.classList.add("disabled");
  }

  pageLinkNext.textContent = "Next";
  pageItemNext.appendChild(pageLinkNext);
  pageContainer.appendChild(pageItemNext);

  pageItemNext.addEventListener("click", () => {
    PAGE++;
    updateLink(PAGE);
    movieContainer.innerHTML = "";
    getMovies(LATEST_URL);
    backToTopp();
  });
}
function backToTopp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
