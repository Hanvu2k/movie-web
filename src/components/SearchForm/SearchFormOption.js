import React from "react";

function SearchFormOption({
    genre,
    genreRef,
    mediaType,
    mediaTypeRef,
    language,
    languageRef,
    year,
    handleSearchGener,
    handleSearchMediaType,
    handleSearchLanguage,
    handleSearchYear,
    setYear,
}) {
    return (
        <div className="d-flex justify-content-center my-4">
            <select
                className="user-select"
                value={genre}
                ref={genreRef}
                onChange={handleSearchGener}
            >
                <option value="">Genre</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Animation">Animation</option>
                <option value="Comedy">Comedy</option>
                <option value="Crime">Crime</option>
                <option value="Documentary">Documentary</option>
                <option value="Drama">Drama</option>
                <option value="Family">Family</option>
                <option value="Fantasy">Fantasy</option>
                <option value="History">History</option>
                <option value="Horror">Horror</option>
                <option value="Music">Music</option>
                <option value="Mystery">Mystery</option>
                <option value="Romance">Romance</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="TV Movie">TV Movie</option>
                <option value="Thriller">Thriller</option>
                <option value="War">War</option>
                <option value="Western">Western</option>
            </select>
            <select
                className="user-select"
                value={mediaType}
                ref={mediaTypeRef}
                onChange={handleSearchMediaType}
            >
                <option value="">Media Type</option>
                <option value="all">All</option>
                <option value="movie">Movie</option>
                <option value="tv">Tv</option>
                <option value="person">Person</option>
            </select>
            <select
                className="user-select"
                value={language}
                ref={languageRef}
                onChange={handleSearchLanguage}
            >
                <option value="">Language</option>
                <option value="en">en-us</option>
                <option value="ja">jp</option>
                <option value="ko">kr</option>
            </select>
            <form className="form-search-year" onSubmit={handleSearchYear}>
                <div className="search-year-input">
                    <label htmlFor="">Year</label>
                    <input
                        type="text"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <div>
                    <button className="btn-primary" type="submit">
                        Find
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SearchFormOption;
