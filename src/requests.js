const KEY = "83d1c1cb59f8c093148e232ab4714a1b"

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US&page=1`,
    requestActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=28`,
    requestComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=35`,
    requestHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=27`,
    requestRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=10749`,
    requestDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=99`,
    requestOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${KEY}&with_networks=213`,
    requestTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${KEY}&language=en-US`,
}

export default requests