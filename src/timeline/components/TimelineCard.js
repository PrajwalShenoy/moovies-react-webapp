import React from "react";
import "../index.css"

const TimelineCard = ({ imageUrl, username, userImage, timeStamp, information, link }) => {
    return (
        <div className="container d-flex timelineCard mt-5 mb-2">
            <img src={imageUrl} alt="Movie Poster" />
            <div className="container m-3">
                <div className="d-flex align-items-center">
                    <img src="https://picsum.photos/180/250" alt="User" className="user-image" />
                    <p className="ms-3 timelinecard-username">{username}</p>
                </div>
                <div className="mt-3">
                    <p className="timelinecard-content">{information}</p>
                </div>
                <p className="timestamp">{timeStamp}</p>
                {/* <a href={link} className="btn btn-primary">Read more</a> */}
            </div>
        </div>
    );
}

export default TimelineCard;