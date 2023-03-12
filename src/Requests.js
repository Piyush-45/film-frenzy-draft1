const key = '48b7fd8eddafbd865f8799c3047acbc2'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=2&include_adult=true`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestRecommendations : `
    https://api.themoviedb.org/3/movie/3/recommendations?api_key=${key}&language=en-US&page=1`,
    requestLatest :`https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,


    requestSearchMovie:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=true`,
    requestMultiSearch:`https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&page=1&include_adult=false`
  };

  export default requests