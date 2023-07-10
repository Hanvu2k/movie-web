import React from "react";

// Import the CSS styles
import "./MovieItem.css";

const MovieItem = (props) => {
    const { img_url, alt, onClick } = props;

    return (
        <div className="movie-item">
            <img
                className="movie-item-link"
                src={
                    img_url
                        ? `https://image.tmdb.org/t/p/original${img_url}`
                        : "https://image.tmdb.org/t/p/original/xOY2tKrep2ikGJsdRWyzbfLbjsX.jpg"
                }
                alt={alt}
                onClick={onClick}
            />
        </div>
    );
};

export default MovieItem;
