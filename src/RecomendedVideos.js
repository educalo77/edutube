import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import youtube from './api/youtube';
import VideoCard from './VideoCard';
import './RecomendedVideos.css';

function RecomendedVideos({darkTheme}) {

    const [state, setState] = useState({
    videos: [],
    });
    const [error, setError] = useState("");

    const data = async (e) => {
        try {
        const response = await youtube.get('/search', {
            params: {
                q: e
            }
        })
        setState({
            videos: response.data.items
        })
            
        } catch (err) {
            alert(err.message);
            setError(err.message)
        }
 
    };

    
    const themeStyles = {
        backgroundColor: darkTheme ? '#111' : '#CCC',
        color: darkTheme ? '#CCC' : '#111',
    }

    useEffect(() => {
        data("heavy-metal")
    }, [])

    return (
        <div className="recomendedVideos" style={themeStyles} >
            <h2>Recommended</h2>
            <div className="recomendedVideos_videos" style={themeStyles}>
                {state.videos.map((video) => {
                    return (
                    <Link to={`/video/${video.id.videoId}`}>
                  <VideoCard
                    channelImage={`${video.snippet.thumbnails.high.url}`}
                    image={`${video.snippet.thumbnails.high.url}`}
                    channel={`${video.snippet.channelTitle}`}
                    timestamp={`${video.snippet.publishedAt}`}
                    title={`${video.snippet.title}`}
                    description={`${video.snippet.description}`}
                />
                    </Link>                      
                    )
                })}
            </div>
            {error && <h1>{error}</h1>}
        </div>
    )
}

export default RecomendedVideos
