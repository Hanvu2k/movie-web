import React, { useEffect, useState } from "react";

// Import search icon as component
import { ReactComponent as SearchICon } from "../../asset/icon/Union.svg";

// import Link from react-router-dom library
import { Link } from "react-router-dom";

//  Import the CSS styles
import "./NavBar.css";

function NavBar() {
    // State variable to track scroll position
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        // Event handler for scroll event
        const handleScroll = (event) => {
            event.preventDefault();
            const scrollPosition = window.scrollY;
            scrollPosition > 100 ? setIsScroll(true) : setIsScroll(false);
        };

        // Add event listener for scroll event
        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Determine the class name for the navbar based on scroll position
    const navBarClasses = isScroll
        ? "navbar-container navbar-background d-flex justify-content-between align-items-center "
        : "navbar-container  d-flex justify-content-between align-items-center ";

    return (
        <>
            <div className={navBarClasses}>
                <div className="navbar-tittle">
                    <Link to="/" className="navbar-link">
                        <h2>Movie App</h2>
                    </Link>
                </div>
                <div>
                    <Link to="search" className="navbar-link">
                        <SearchICon className="navbar-icon" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default NavBar;
