import { API_KEY } from './../providers/ApiAuth';

export const Categories = [
    { id: 1, name: "Popular", url: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&append_to_response=videos&api_key=" + API_KEY },
    { id: 2, name: "Top rated", url: "https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&api_key=" + API_KEY },
    { id: 3, name: "Upcoming", url: "https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&append_to_response=video&api_key=" + API_KEY }
];

export const GENRES_URL = "https://api.themoviedb.org/3/genre/movie/list?"
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
export const CHARACTER_PROFILE_PHOTO_URL = "https://image.tmdb.org/t/p/w200";
export const VIDEOS_URL = "https://api.themoviedb.org/3/movie/%ID_VIDEO%/videos?api_key=";
export const SEARCH_ONLINE_URL = "https://api.themoviedb.org/3/search/movie?language=en-US&page=1&include_adult=false&api_key=" + API_KEY + "&query=";
export const CREDITS_URL = "https://api.themoviedb.org/3/movie/%ID_MOVIE%/credits?api_key=" + API_KEY;
