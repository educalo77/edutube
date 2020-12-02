import React, { useState, useEffect, useMemo, useContext } from 'react';
import { useParams, Link } from "react-router-dom";
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import VideoRow from './VideoRow';
import youtube from './api/youtube';
import { ThemeContext } from './App';


function SearchPage({ search }) {
    
    const params = useParams();

    const darkTheme = useContext(ThemeContext);
    const themeStyles = {
        backgroundColor: darkTheme ? '#111' : '#CCC',
        color: darkTheme ? '#CCC' : '#111',
        input: {
            backgroundColor: darkTheme ? '#111' : '#CCC'
        }
    }

    const [state, setState] = useState({
    videos: [],
    selectedVideo: null
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
        }
        catch (err) {
            alert(err.message);
            setError(err.message);
        }
    };

    const searchData = useMemo(() => {
        return state.videos.filter((e) => e.id.videoId);
    }, [state])

    useEffect(() => {
        data(search || params.searchTerm)
    }, [params.searchTerm, search])

    return (
        <div className="searchPage" style={themeStyles}>
            <div className="searchPage_filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>  
            <hr />
            {searchData && searchData.map((video) => {
                return (
                    <Link
                        to={`/video/${video.id.videoId}`}
                    >
            <VideoRow
                key={`${video.id.videoId}`}
                image={`${video.snippet.thumbnails.high.url}`}
                channel={`${video.snippet.channelTitle}`}
                timestamp={`${video.snippet.publishedAt}`}
                title={`${video.snippet.title}`}
                description={`${video.snippet.description}`}
            />
            </Link>  
            )
            })}
            <hr />
            {error && <h1>{error}</h1>}
        </div>
    )
}

export default SearchPage
