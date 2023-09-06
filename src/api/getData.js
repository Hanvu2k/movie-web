// Api link
const API_URL = "https://movieweb-server.onrender.com/";
// token
const token = "8qlOkxz4wq";

// Define different API endpoints for fetching movies based on categories or genres
const requests = {
    fetchTrending: `trending?token=${token}`,
    fetchTopRated: `/top-rate?token=${token}`,
    fetchNetflixOriginals: `/discover/12?token=${token}`,
    fetchActionMovies: `/discover/28?token=${token}`,
    fetchComedyMovies: `/discover/35?token=${token}`,
    fetchHorrorMovies: `/discover/27?token=${token}`,
    fetchRomanceMovies: `/discover/10749?token=${token}`,
    fetchDocumentaries: `/discover/99?token=${token}`,
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
