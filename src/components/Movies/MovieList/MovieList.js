import React from "react";

// Import component
import MovieItem from "../MovieItem/MovieItem";
import MovieDetail from "../MovieDetail/MovieDetail";

//  Import the CSS styles
import "./MovieList.css";

function MovieList(props) {
    const { arr, type, handleShowDetails, isOpenDetail, selectedMovie } = props;

    return (
        <div className="movie-container my-5">
            <div className="movie-type">{type}</div>
            <div className="movie-list scroll-bar">
                {/* Container for the movie list */}
                {arr.map((item, _index, currArr) => {
                    return (
                        // Render each MovieItem component in the list
                        <MovieItem
                            key={item.id}
                            id={item.id}
                            img_url={item.backdrop_path}
                            alt={item.name || item.title}
                            onClick={() => handleShowDetails(item, currArr)}
                        />
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
        </div>
    );
}

export default MovieList;
