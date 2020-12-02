import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import './VideoPlay.css';
import SearchPage from './SearchPage';
import ThemeContext from './App';

function VideoPlay() {

    const params = useParams();
    
    const videoSrc = `https://www.youtube.com/embed/${params.videoId}`;

    const darkTheme = useContext(ThemeContext);
    const themeStyles = {
        backgroundColor: darkTheme ? '#111' : '#CCC',
        color: darkTheme ? '#CCC' : '#111',
    }

    return (
        <div className="videoPlay" style={themeStyles} >
            <div className="videoPlay_iframe_title">
            <iframe
                className="videoPlay_iframe"
                src={videoSrc}
                allowFullScreen
                title="Video Player"
            />
            </div>
            <SearchPage search={"heavy-metal"} />
        </div>
    )
}

export default VideoPlay
