import React, { useEffect, useState } from "react";

// Import getData from Api
import getData from "../../api/getData";

// Import component
import MoviesOriginal from "./MoviesOriginal/MoviesOriginal";
import MovieList from "./MovieList/MovieList";
import Loading from "../Loading/Loading";
import Wrapper from "../Wrapper/Wrapper";

function MoivesWrapper() {
    // State variables
    const [movieData, setMovieData] = useState({
        originalData: [], // Stores data for original movies
        trendingData: [], // Stores data for trending movies
        topRatedData: [], // Stores data for top rated movies
        actionData: [], // Stores data for action movies
        comedyData: [], // Stores data for comedy movies
        horrorData: [], // Stores data for horror movies
        romanceData: [], // Stores data for romance movies
        documentaryData: [], // Stores data for documentary movies
    });

    const [selectedMovie, setSelectedMovie] = useState(null); // Stores the currently selected movie
    const [isOpenDetail, setIsOpenDetail] = useState(false); // Indicates whether the movie detail section is open or closed
    const [isCurrentArr, setIsCurrentArr] = useState(); // Represents the currently displayed movie array
    const [error, setError] = useState(null); // Stores the error message, if any
    const [isLoading, setIsLoading] = useState(false); // Indicates whether the data is currently being loaded

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                // Fetch data for each category of movies
                const [
                    originalArr,
                    trendingArr,
                    topRatedArr,
                    actionArr,
                    comedyArr,
                    horrorArr,
                    romanceArr,
                    documentaryArr,
                ] = await Promise.all([
                    getData("Original"),
                    getData("Trending"),
                    getData("TopRated"),
                    getData("Action"),
                    getData("Comedy"),
                    getData("Horror"),
                    getData("Romance"),
                    getData("Documentaries"),
                ]);
                // Check if any of the fetched data is not an array
                if (
                    !Array.isArray(originalArr) ||
                    !Array.isArray(trendingArr) ||
                    !Array.isArray(topRatedArr) ||
                    !Array.isArray(actionArr) ||
                    !Array.isArray(comedyArr) ||
                    !Array.isArray(horrorArr) ||
                    !Array.isArray(romanceArr) ||
                    !Array.isArray(documentaryArr)
                ) {
                    throw new Error("Failed to fe get movie");
                }

                // Set the fetched data in the state
                setMovieData({
                    originalData: originalArr,
                    trendingData: trendingArr,
                    topRatedData: topRatedArr,
                    actionData: actionArr,
                    comedyData: comedyArr,
                    horrorData: horrorArr,
                    romanceData: romanceArr,
                    documentaryData: documentaryArr,
                });
                setTimeout(() => {
                    setIsLoading(false);
                }, 100);
            } catch (error) {
                setIsLoading(false); // Set loading state to false
                setError(error.message); // Set the error state with the error message
            }
        };

        fetchData();
    }, []);

    // Combine data and add type
    const arrData = [
        { arr: movieData.trendingData, type: "Xu hướng" },
        { arr: movieData.topRatedData, type: "Xếp Hạng Cao" },
        { arr: movieData.actionData, type: "Hành động" },
        { arr: movieData.comedyData, type: "Hài" },
        { arr: movieData.horrorData, type: "Kinh dị" },
        { arr: movieData.romanceData, type: "Lãng mạn" },
        { arr: movieData.documentaryData, type: "Tài liệu" },
    ];

    // handle show detail info movie
    const handleShowDetails = (item, arr) => {
        setIsCurrentArr(arr);
        if (selectedMovie?.id === item.id) {
            setIsOpenDetail(!isOpenDetail);
        } else {
            setSelectedMovie(item);
            setIsOpenDetail(true);
        }
    };

    return (
        <Wrapper>
            <Loading Loading={isLoading}>
                {!isLoading && error && <p>{error}</p>}
                <MoviesOriginal
                    originalData={movieData.originalData}
                    handleShowDetails={handleShowDetails}
                    isOpenDetail={
                        isOpenDetail &&
                        isCurrentArr[0] === movieData.originalData[0]
                    }
                    selectedMovie={selectedMovie}
                />
                {arrData.map((item, index) => {
                    return (
                        <MovieList
                            key={index}
                            arr={item?.arr}
                            type={item.type}
                            handleShowDetails={handleShowDetails}
                            isOpenDetail={
                                isOpenDetail && isCurrentArr[0] === item.arr[0]
                            }
                            selectedMovie={selectedMovie}
                        />
                    );
                })}
            </Loading>
        </Wrapper>
    );
}

export default MoivesWrapper;
