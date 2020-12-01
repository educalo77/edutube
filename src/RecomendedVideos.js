import React, {useState, useEffect} from 'react';
import './RecomendedVideos.css';
import youtube from './api/youtube';
import VideoCard from './VideoCard';

function RecomendedVideos() {

    const [state, setState] = useState({
    videos: [],
    selectedVideo: null
    });

    const data = async (e) => {
        const response = await youtube.get('/search', {
            params: {
                q: e
            }
        })
        setState({
            videos: response.data.items
        })
    };

    useEffect(() => {
        data("slayer")
    }, [])

    return (
        <div className="recomendedVideos">
            <h2>Recommended</h2>
            <div className="recomendedVideos_videos">
                {state.videos.map((video) => {
                    return (
                  <VideoCard
                    views="2.3M views"
                    channelImage="https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png"
                    image={`${video.snippet.thumbnails.high.url}`}
                    channel={`${video.snippet.channelTitle}`}
                    timestamp={`${video.snippet.publishedAt}`}
                    subs="659"
                    title={`${video.snippet.title}`}
                    description={`${video.snippet.description}`}
                />                      
                    )
                })}
                {/* <VideoCard
                    title="Become a web developer in 10 minutes"
                    channel="Sonny Sangha"
                    views="2.3M views"
                    timestamp="3 days ago"
                    image="https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png"
                    channelImage="https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png"
                />
                <VideoCard
                    title="Become a web developer in 10 minutes"
                    channel="Sonny Sangha"
                    views="2.3M views"
                    timestamp="3 days ago"
                    image="https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png"
                    channelImage="https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png"
                />
                <VideoCard
                    title="Become a web developer in 10 minutes"
                    channel="Sonny Sangha"
                    views="2.3M views"
                    timestamp="3 days ago"
                    image="https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png"
                    channelImage="https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png"
                />
                <VideoCard
                    title="Become a web developer in 10 minutes"
                    channel="Sonny Sangha"
                    views="2.3M views"
                    timestamp="3 days ago"
                    image="https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png"
                    channelImage="https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png"
                />
                <VideoCard
                    title="Become a web developer in 10 minutes"
                    channel="Sonny Sangha"
                    views="2.3M views"
                    timestamp="3 days ago"
                    image="https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png"
                    channelImage="https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png"
                />
                <VideoCard
                    title="Become a web developer in 10 minutes"
                    channel="Sonny Sangha"
                    views="2.3M views"
                    timestamp="3 days ago"
                    image="https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png"
                    channelImage="https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png"
                />
                <VideoCard
                    title="Become a web developer in 10 minutes"
                    channel="Sonny Sangha"
                    views="2.3M views"
                    timestamp="3 days ago"
                    image="https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png"
                    channelImage="https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png"
                /> */}
            </div>
        </div>
    )
}

export default RecomendedVideos
