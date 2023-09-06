import React, { useCallback, useRef, useState } from "react";

// Import SearchMovies from Api
import {
    SearchMovies,
    SearchMoviesGenre,
    SearchMoviesYear,
    SearchMoviesMediaType,
    SearchMoviesLanguage,
} from "../../api/searchMovies";

// Import component
import NavBar from "../../components/navBar/NavBar";
import Wrapper from "../../components/Wrapper/Wrapper";
import SearchForm from "../../components/SearchForm/SearchForm";
import ResultList from "../../components/ResultList/ResultList";
import SearchFormOption from "../../components/SearchForm/SearchFormOption";

// Import Css style
import "./Search.css";

const Search = () => {
    // State variables
    const [keySearch, setKeySearch] = useState(""); // Stores the search keyword
    const [resultSearch, setResultSearch] = useState([]); // Stores the search results
    const [isLoading, setIsLoading] = useState(false); // Indicates whether the search is in progress
    const [isSearchClicked, setIsSearchClicked] = useState(false); // Indicates whether the search button is clicked
    const [isValueDate, setIsValueDate] = useState(false); // Indicates whether the search input is empty

    const [selectedMovie, setSelectedMovie] = useState(null); // Stores the selected movie for displaying details
    const [isOpenDetail, setIsOpenDetail] = useState(false); // Indicates whether the movie detail modal is open
    const [isCurrentArr, setIsCurrentArr] = useState(); // Stores the current array of movies being displayed

    const [error, setError] = useState(null); // Stores any error that occurred during the search

    const [genre, setGenre] = useState(""); // Default value for Genre
    const [mediaType, setMediaType] = useState(""); // Default value for MediaType
    const [language, setLanguage] = useState(""); // Default value for Language
    const [year, setYear] = useState(""); // Default value for Year

    const genreRef = useRef();
    const mediaTypeRef = useRef();
    const languageRef = useRef();

    // handle search input
    const handleSearchInput = (event) => {
        setKeySearch(event.target.value);
    };

    // Handle the search functionality
    const handleSearch = useCallback(
        async (key) => {
            try {
                if (isSearchClicked && !key) {
                    setIsValueDate(true); // Display empty input error message
                    setTimeout(() => {
                        setIsValueDate(false);
                    }, 1000);
                    return;
                }

                if (key) {
                    setIsLoading(true); // Set loading state to true
                    const results = await SearchMovies(key); // Perform search API call

                    if (!Array.isArray(results)) {
                        throw new Error("Failed to search movie"); // Throw an error if search fails
                    }

                    setResultSearch(results); // Update search results
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 500);
                }
            } catch (error) {
                setIsLoading(false); // Set loading state to false
                setError(error.message); // Set the error message
            }
        },
        [isSearchClicked]
    );

    // handle SearchButton when click
    const handleSearchButtonClick = () => {
        setIsSearchClicked(true);
    };

    // Handle displaying movie details
    const handleShowDetails = (item, arr) => {
        setIsCurrentArr(arr);
        if (selectedMovie?.id === item.id) {
            setIsOpenDetail(!isOpenDetail);
        } else {
            setSelectedMovie(item);
            setIsOpenDetail(true);
        }
    };

    // handle Reset
    const handleReset = (e) => {
        e.preventDefault();
        setResultSearch([]);
        setKeySearch("");
        setIsValueDate(false);
    };

    // handle Search Gener
    const handleSearchGener = async (event) => {
        event.preventDefault();
        const searchGenre = genreRef.current.value;

        setGenre(searchGenre);
        setMediaType("");
        setLanguage("");
        setYear("");
        try {
            setIsLoading(true); // Set loading state to true
            const data = await SearchMoviesGenre(searchGenre);
            if (data.success === true) {
                setResultSearch(data.results);
                setError(null);
            } else {
                setError(data.message);
                setResultSearch(data.results);
            }
            setIsLoading(false); // Set loading state to true
        } catch (error) {
            console.log(error.message);
            setIsLoading(false); // Set loading state to true
            setError(error.message); // Set the error message
        }
    };

    // handle Search Media Type
    const handleSearchMediaType = async (event) => {
        event.preventDefault();
        const searchMediaType = mediaTypeRef.current.value;

        setGenre("");
        setMediaType(searchMediaType);
        setLanguage("");
        setYear("");

        try {
            setIsLoading(true); // Set loading state to true
            const data = await SearchMoviesMediaType(searchMediaType);
            if (data.success === true) {
                setResultSearch(data.results);
                setError(null);
            } else {
                setError(data.message);
                setResultSearch(data.results);
            }
            setIsLoading(false); // Set loading state to true
        } catch (error) {
            console.log(error.message);
            setIsLoading(false); // Set loading state to true
            setError(error.message); // Set the error message
        }
    };

    // handle Search Year
    const handleSearchYear = async (event) => {
        event.preventDefault();
        const searchYear = year;

        setGenre("");
        setMediaType("");
        setLanguage("");
        try {
            setIsLoading(true); // Set loading state to true
            const data = await SearchMoviesYear(searchYear);
            if (data.success === true) {
                setResultSearch(data.results);
                setError(null);
            } else {
                setError(data.message);
                setResultSearch(data.results);
            }
            setIsLoading(false); // Set loading state to true
        } catch (error) {
            console.log(error.message);
            setIsLoading(false); // Set loading state to true
            setError(error.message); // Set the error message
        }
    };

    // handle Search Language
    const handleSearchLanguage = async (event) => {
        event.preventDefault();
        const searchLanguage = languageRef.current.value;

        setGenre("");
        setMediaType("");
        setLanguage(searchLanguage);
        try {
            setIsLoading(true); // Set loading state to true
            const data = await SearchMoviesLanguage(searchLanguage);
            if (data.success === true) {
                setResultSearch(data.results);
                setError(null);
            } else {
                setError(data.message);
                setResultSearch(data.results);
            }
            setIsLoading(false); // Set loading state to true
        } catch (error) {
            console.log(error.message);
            setIsLoading(false); // Set loading state to true
            setError(error.message); // Set the error message
        }
    };

    return (
        <div className="app">
            <NavBar />
            <Wrapper>
                <div className="search-container">
                    <SearchForm
                        onSearch={handleSearch}
                        onSearchInput={handleSearchInput}
                        setIsSearchClicked={setIsSearchClicked}
                        onSearchButtonClick={handleSearchButtonClick}
                        isValueDate={
                            isValueDate &&
                            isSearchClicked &&
                            keySearch.trim() === ""
                        }
                        keySearch={keySearch}
                        onReset={handleReset}
                    />
                    <SearchFormOption
                        genre={genre}
                        genreRef={genreRef}
                        mediaType={mediaType}
                        mediaTypeRef={mediaTypeRef}
                        language={language}
                        languageRef={languageRef}
                        setYear={setYear}
                        year={year}
                        handleSearchGener={handleSearchGener}
                        handleSearchMediaType={handleSearchMediaType}
                        handleSearchLanguage={handleSearchLanguage}
                        handleSearchYear={handleSearchYear}
                    />
                    <ResultList
                        isLoading={isLoading}
                        resultSearch={resultSearch}
                        handleShowDetails={handleShowDetails}
                        isOpenDetail={
                            isOpenDetail && isCurrentArr[0] === resultSearch[0]
                        }
                        selectedMovie={selectedMovie}
                    />
                    {!isLoading && error && <p>{error}</p>}
                </div>
            </Wrapper>
        </div>
    );
};

export default Search;
