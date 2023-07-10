import React from "react";

// Import the CSS styles
import "./Loading.css";

function Loading(props) {
    const { Loading } = props; // Destructure the Loading prop

    return (
        <div className="Loading-spinning ">
            {Loading && (
                <div className="spinner-wrapper py-4">
                    <div className="rounded"></div>
                </div>
            )}
            {props.children}
        </div>
    );
}

export default Loading;
