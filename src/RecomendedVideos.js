import React from 'react';
import './RecomendedVideos.css';
import VideoCard from './VideoCard';

function RecomendedVideos() {
    return (
        <div className="recomendedVideos">
            <h2>Recommended</h2>
            <div className="recomendedVideos_videos">
                <VideoCard
                    title="Become a web developer in 10 minutes"
                    channel="Sonny Sangha"
                    views="2.3M views"
                    timestamp="3 days ago"
                />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    )
}

export default RecomendedVideos
