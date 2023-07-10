import React, { useEffect, useState } from "react";

import getVideo from "../../../api/getVideo"; // Import the getVideo from the API
import YouTube from "react-youtube"; // Import the YouTube component from the "react-youtube" library

// Import the CSS styles
import "./MovieDetail.css";

function MovieDetail(props) {
    // State variable to hold the video key
    const [videoKey, setVideoKey] = useState("");

    const { id, title, release_date, vote_average, description, img_url } =
        props;

    useEffect(() => {
        // Fetch the video data and update the video key state when id or title props change
        const fetchData = async () => {
            const video = await getVideo(id);
            const key = await getKeyVideo(video, title);

            const keyVideo = key?.[0]?.key.toString() || "";
            setVideoKey(keyVideo);
        };
        fetchData();
    }, [id, title]);

    const opts = {
        // Configuration for the YouTube player options
        height: "400",
        width: "100%",
        playerVars: {
            autoplay: 0,
        },
    };

    const getKeyVideo = async (video, title) => {
        // Filter and extract the desired video key from the fetched video data
        const key = await video?.filter((item) => {
            return (
                (item.name.includes(title.split(" ")[0]) &&
                    item.type === "Trailer") ||
                item.type === "Teaser"
            );
        });
        return key;
    };

    return (
        <div className="movie-detail-container row justify-content-between m-4">
            <div className="movie-detail-content col-5">
                <div className="movie-title">
                    <h1>{title}</h1>
                </div>
                <div className="strok"></div>
                <div className="movie-info">
                    <div>Relase Date: {release_date}</div>
                    <div>Vote:{vote_average}/10</div>
                </div>
                <div className="movie-description">{description}</div>
            </div>
            <div className="movie-detail-video col-5">
                {videoKey ? (
                    <YouTube videoId={videoKey} opts={opts} />
                ) : (
                    <img
                        className="movie-item-link"
                        src={
                            img_url
                                ? `https://image.tmdb.org/t/p/original/${img_url}`
                                : "https://image.tmdb.org/t/p/original/xOY2tKrep2ikGJsdRWyzbfLbjsX.jpg"
                        }
                        alt={title}
                    />
                )}
            </div>
        </div>
    );
}

export default MovieDetail;
