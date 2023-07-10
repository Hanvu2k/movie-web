// Api link
const API_URL = "https://api.themoviedb.org/3";
// Api key
const API_KEY = "f3aece616e513f5e89642d1a45ddb5cf";

// Define different API endpoints for fetching movies based on categories or genres
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

// Function to fetch movie data from The Movie Database (TMDB) API based on different types
const getData = async (type) => {
    try {
        let res;

        // Construct the appropriate API endpoint based on the provided type
        switch (type) {
            case "Original":
                res = await fetch(
                    `${API_URL}${requests.fetchNetflixOriginals}`
                );
                break;
            case "Trending":
                res = await fetch(`${API_URL}${requests.fetchTrending}`);
                break;
            case "TopRated":
                res = await fetch(`${API_URL}${requests.fetchTopRated}`);
                break;
            case "Action":
                res = await fetch(`${API_URL}${requests.fetchActionMovies}`);
                break;
            case "Comedy":
                res = await fetch(`${API_URL}${requests.fetchComedyMovies}`);
                break;
            case "Horror":
                res = await fetch(`${API_URL}${requests.fetchHorrorMovies}`);
                break;
            case "Romance":
                res = await fetch(`${API_URL}${requests.fetchRomanceMovies}`);
                break;
            case "Documentaries":
                res = await fetch(`${API_URL}${requests.fetchDocumentaries}`);
                break;
            default:
                throw new Error("Invalid type");
        }

        const data = await res.json();
        const { results } = data;

        return results; // Return the movie results
    } catch (error) {
        throw new Error(error.message);
    }
};

export default getData;
