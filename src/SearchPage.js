import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import youtube from './api/youtube';

function SearchPage() {
    
    const params = useParams();

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
        console.log(response.data.items)
    };

    useEffect(() => {
        data(params.searchTerm)
    }, [params.searchTerm])

    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>  
            <hr />
            {/* <ChannelRow
                image={"https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png"}
                channel="clever"
                verified
                subs="659"
                noOfVideos={382}
                description="texto texto texto texto texto texto"
            /> */}
            {state.videos && state.videos.map((video) => {
                return (
            <VideoRow
                image={`${video.snippet.thumbnails.high.url}`}
                channel={`${video.snippet.channelTitle}`}
                timestamp={`${video.snippet.publishedAt}`}
                subs="659"
                title={`${video.snippet.title}`}
                view="1M"
                description={`${video.snippet.description}`}
            />  )
            })}

            <hr />
            {/* <VideoRow
                view="1.5M"
                subs="659k" 
                description="texto texto texto texto texto texto"
                timestamp="59 sec ago"
                channel="edutube"
                title="edutube only CSS"
                image="https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png"
            />
            <VideoRow
                view="1.5M"
                subs="659k" 
                description="texto texto texto texto texto texto"
                timestamp="59 sec ago"
                channel="edutube"
                title="edutube only CSS"
                image="https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png" 
            /> */}
        </div>
    )
}

export default SearchPage
