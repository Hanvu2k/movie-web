// token
const token = "8qlOkxz4wq";

// Function to fetch videos for a specific movie from TMDB API
const getVideo = async (movie_id) => {
    try {
        // Fetch the videos for the given movie ID using the TMDB API
        const res = await fetch(
            `http://localhost:8080/api/v1/movies/video/${movie_id}?token=${token}`
        );

        const data = await res.json();

        const { results } = data;

        return results; //Return the video results
    } catch (error) {
        console.error(error);
    }
};

export default getVideo;
