import React from "react";

// Import component
import NavBar from "../../components/navBar/NavBar";
import InforBanner from "../../components/InforBanner/InforBanner";
import MoivesWrapper from "../../components/Movies/MoivesWrapper";

function Browse() {
    return (
        <div className="app">
            <NavBar />
            <InforBanner />
            <MoivesWrapper />
        </div>
    );
}

export default Browse;
