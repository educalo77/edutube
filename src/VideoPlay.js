import React from 'react';
import { useParams } from 'react-router-dom';

function VideoPlay() {

    const params = useParams();

    console.log(params.videoId)

    const videoSrc = `https://www.youtube.com/embed/${params.videoId}`;

    console.log(videoSrc)

    return (
        <div>
            <iframe src={videoSrc} allowFullScreen title="Video Player" frameborder="0" allow="autoplay; encrypted-media" />
        </div>
    )
}

export default VideoPlay
