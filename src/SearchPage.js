import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>  
            <hr />
            <ChannelRow
                image="https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png"
                channel="clever"
                verified
                subs="659"
                noOfVideos={382}
                description="texto texto texto texto texto texto"
            />
            <hr />
            <VideoRow
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
            />
        </div>
    )
}

export default SearchPage
