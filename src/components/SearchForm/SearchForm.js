import React, { useEffect } from "react";

// Import search icon as component
import { ReactComponent as SearchIcon } from "../../asset/icon/Union.svg";

//  Import the CSS styles
import "./SearchForm.css";

function SearchForm(props) {
    const {
        keySearch,
        isValueDate,
        onReset,
        onSearch,
        onSearchInput,
        onSearchButtonClick,
    } = props;

    useEffect(() => {
        onSearch();
    }, [onSearch]);

    return (
        <div className="search-container mt-5 d-flex justify-content-center flex">
            <form
                className="search-form d-flex justify-content-center align-items-center flex-column"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSearch(keySearch);
                }}
            >
                {/* Display validation error message if isValueDate is true */}
                {isValueDate && (
                    <div className="validate">Please enter a key search !</div>
                )}
                <div className="search-input">
                    <input
                        className="search-input-box"
                        type="text"
                        onChange={onSearchInput}
                        value={keySearch}
                    />
                </div>
                <div className="search-icon">
                    <SearchIcon className="search-icon-link" />
                </div>
                <div className="btn-seacrh d-flex justify-content-end my-3">
                    <button className="btn-third" onClick={onReset}>
                        RESET
                    </button>
                    <button
                        type="submit"
                        className="btn-secondary mx-3"
                        onClick={onSearchButtonClick}
                    >
                        SEARCH
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;
