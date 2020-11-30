import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';

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
        </div>
    )
}

export default SearchPage
