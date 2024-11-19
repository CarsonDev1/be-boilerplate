const axios = require('axios');

const API_KEY = 'e5eb09f687278e08e2dfc9ba557fb7f3';
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// Lấy danh sách phim phổ biến
const getPopularMovies = async () => {
  const response = await tmdbApi.get('/movie/popular');
  return response.data.results;
};

// Tìm kiếm phim theo tên
const searchMovies = async (query) => {
  const response = await tmdbApi.get('/search/movie', {
    params: { query },
  });
  return response.data.results;
};

// Lấy thông tin chi tiết về một phim
const getMovieDetails = async (movieId) => {
  const response = await tmdbApi.get(`/movie/${movieId}`);
  return response.data;
};

// Lấy danh sách thể loại phim
const getMovieGenres = async () => {
  const response = await tmdbApi.get('/genre/movie/list');
  return response.data.genres;
};

module.exports = {
  getPopularMovies,
  searchMovies,
  getMovieDetails,
  getMovieGenres,
};
