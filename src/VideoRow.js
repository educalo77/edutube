import React from 'react';
import './VideoRow.css';

function VideoRow({ view, title, timestamp, channel, subs, description, image }) {
    
    return (
        <div className="videoRow">
            <img src={image} alt="" />
            <div className="videoRow_text">
                <h3>{title}</h3>
                <p className="videoRow_headline">
                    {channel} | <span className="videoRow_subs">
                    <span className="videoRow_subsno">{subs}</span> subscribers
                    </span>{" "}
                     | {view} views | {timestamp}
                </p>
                <p className="videoRow_description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
