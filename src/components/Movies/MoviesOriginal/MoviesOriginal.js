import React from "react";

// Import component
import MovieDetail from "../MovieDetail/MovieDetail";

//  Import the CSS styles
import "./MoviesOriginal.css";

function MoviesOriginal(props) {
    const { originalData, selectedMovie, handleShowDetails, isOpenDetail } =
        props;

    return (
        <>
            {/* Container for the original movies */}
            <div className="watching-movie">
                {/* Render each original movie */}
                {originalData?.map((item, _index, currArr) => {
                    return (
                        <div
                            key={item.id}
                            className=" watching-movie-img"
                            onClick={() => handleShowDetails(item, currArr)}
                        >
                            {/* Display the image of the movie */}
                            <img
                                className="watching-movie-img-link"
                                src={
                                    item.poster_path
                                        ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                                        : `https://cdn.wallpapersafari.com/92/30/mTAv8s.jpeg`
                                }
                                alt="img"
                            />
                        </div>
                    );
                })}
            </div>
            {/* Render the MovieDetail component  */}
            {isOpenDetail && selectedMovie && (
                <MovieDetail
                    id={selectedMovie.id}
                    title={selectedMovie.name}
                    release_date={selectedMovie.release_date}
                    vote_average={selectedMovie.vote_average}
                    description={selectedMovie.overview}
                    img_url={selectedMovie.backdrop_path}
                    isCloseBtn={false}
                />
            )}
        </>
    );
}

export default MoviesOriginal;
