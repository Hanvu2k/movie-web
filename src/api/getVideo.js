// Api key
const API_KEY = "f3aece616e513f5e89642d1a45ddb5cf";

// Function to fetch videos for a specific movie from TMDB API
const getVideo = async (movie_id) => {
    try {
        // Fetch the videos for the given movie ID using the TMDB API
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`
        );

        const data = await res.json();

        const { results } = data;

        return results; //Return the video results
    } catch (error) {
        console.error(error);
    }
};

export default getVideo;
