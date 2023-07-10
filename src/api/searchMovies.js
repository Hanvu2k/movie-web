// Api key
const API_KEY = "f3aece616e513f5e89642d1a45ddb5cf";
// Api link
const API_LINK = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`;

// Function to search movies using TMDB API based on provided keywords
const SearchMovies = async (keywords) => {
    try {
        // Fetch the movies based on the provided keywords using the TMDB API
        const res = await fetch(`${API_LINK}${keywords}`);
        const data = await res.json();

        const { results } = data;

        return results; // Return the movie search results
    } catch (error) {
        throw new Error(error.message);
    }
};

export default SearchMovies;
