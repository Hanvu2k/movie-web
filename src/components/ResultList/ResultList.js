import React from "react";

// Import component
import Loading from "../Loading/Loading";
import MovieDetail from "../Movies/MovieDetail/MovieDetail";

//  Import the CSS styles
import "./ResultList.css";

function ResultList(props) {
    const {
        isLoading,
        resultSearch,
        handleShowDetails,
        isOpenDetail,
        selectedMovie,
    } = props;
    return (
        <div className="search-results mt-4">
            <h2>Search Results</h2>
            <Loading Loading={isLoading}>
                <div className=" my-4 ">
                    {/* Render MovieDetail component  */}
                    {isOpenDetail && selectedMovie && (
                        <MovieDetail
                            selectedMovie={selectedMovie}
                            id={selectedMovie.id}
                            title={selectedMovie.name}
                            release_date={selectedMovie.release_date}
                            vote_average={selectedMovie.vote_average}
                            description={selectedMovie.overview}
                            handleShowDetails={handleShowDetails}
                        />
                    )}
                    {/* Render the list of search results */}
                    <div className="search-result-movie d-flex">
                        {resultSearch?.map((item, _index, currArr) => {
                            return (
                                <div
                                    className="search-result-img"
                                    key={item?.id + item?.name}
                                    onClick={() =>
                                        handleShowDetails(item, currArr)
                                    }
                                >
                                    <img
                                        className="search-result-img-link"
                                        src={
                                            item?.poster_path
                                                ? `https://image.tmdb.org/t/p/original${item?.poster_path}`
                                                : "https://cdn.wallpapersafari.com/92/30/mTAv8s.jpeg"
                                        }
                                        alt="img"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Loading>
        </div>
    );
}

export default ResultList;
