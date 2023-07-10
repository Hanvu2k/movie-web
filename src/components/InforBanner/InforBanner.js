import React, { useEffect, useState } from "react";

// Import getData from Api
import getData from "../../api/getData";

// Import the CSS styles
import "./InforBanner.css";

function InforBanner() {
    const [bannersData, setBannersData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // Fetch data for "Original" type using the getData function
            const data = await getData("Original");
            setBannersData(data); // Update the state with fetched data
        }
        fetchData();
    }, []);

    // Generate a random index to select a banner from the fetched data
    const randomIndex = Math.floor(Math.random() * bannersData?.length);

    // banner data random
    let newbannersData = bannersData[randomIndex];

    return (
        <div className="banner-container">
            {/* banner img */}
            <div className="banner-img">
                <img
                    className="banner-img-link"
                    src={
                        newbannersData?.backdrop_path
                            ? `https://image.tmdb.org/t/p/original${newbannersData.backdrop_path}`
                            : `https://ecdn.game4v.com/g4v-content/uploads/2021/12/15100210/Dragon-Ball-Super-Super-Hero-1639537329-67-e1639537364959.jpg`
                    }
                    alt="banner"
                />
            </div>
            {/* banner infor */}
            <div className="banner-info mx-4">
                <div className="banner-title">
                    <h1>{newbannersData?.name}</h1>
                </div>
                <div className="banner-btn mt-5 mb-2">
                    <button className="btn-primary mr-3">Play</button>
                    <button className="btn-primary">My List</button>
                </div>
                <p className="banner-description">{newbannersData?.overview}</p>
            </div>
        </div>
    );
}

export default InforBanner;
