// token
const token = "8qlOkxz4wq";

// Function to search movies using TMDB API based on provided keywords
export const SearchMovies = async (keywords) => {
    try {
        // Fetch the movies based on the provided keywords using the TMDB API
        const res = await fetch(
            `https://movieweb-server.onrender.com/api/v1/movies/search/${keywords}?token=${token}`
        );
        const data = await res.json();

        const { results } = data;

        return results; // Return the movie search results
    } catch (error) {
        throw new Error(error.message);
    }
};

export const SearchMoviesGenre = async (genre) => {
    try {
        // Fetch the movies based on the provided keywords using the TMDB API
        const res = await fetch(
            `https://movieweb-server.onrender.com/api/v1/movies/search?genre=${genre}&token=${token}`
        );
        const data = await res.json();

        return data; // Return the movie search results
    } catch (error) {
        throw new Error(error.message);
    }
};

export const SearchMoviesYear = async (year) => {
    try {
        // Fetch the movies based on the provided keywords using the TMDB API
        const res = await fetch(
            `https://movieweb-server.onrender.com/api/v1/movies/search?year=${year}&token=${token}`
        );
        const data = await res.json();

        return data; // Return the movie search results
    } catch (error) {
        throw new Error(error.message);
    }
};

export const SearchMoviesMediaType = async (media_type) => {
    try {
        // Fetch the movies based on the provided keywords using the TMDB API
        const res = await fetch(
            `https://movieweb-server.onrender.com/api/v1/movies/search?media_type=${media_type}&token=${token}`
        );
        const data = await res.json();

        return data; // Return the movie search results
    } catch (error) {
        throw new Error(error.message);
    }
};

export const SearchMoviesLanguage = async (language) => {
    try {
        // Fetch the movies based on the provided keywords using the TMDB API
        const res = await fetch(
            `https://movieweb-server.onrender.com/api/v1/movies/search?language=${language}&token=${token}`
        );
        const data = await res.json();

        return data; // Return the movie search results
    } catch (error) {
        throw new Error(error.message);
    }
};
