import React from "react";

// Import css style
import "./Wrapper.css";

function Wrapper(props) {
    // The Wrapper component receives props as its parameter
    // The props.children represents the content wrapped by this component
    return <div className="wrapper p-4">{props.children}</div>;
}

export default Wrapper;
