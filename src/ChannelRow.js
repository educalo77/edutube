import React from 'react';
import './ChannelRow.css';
import Avatar from '@material-ui/core/Avatar';


function ChannelRow({image, channel, verified, subs, noOfVideos, description}) {
    return (
        <div className="channelRow">
            <Avatar
            className="channelRow_logo"
            alt={channel}
            scr={image}            
            />
            <div className="channelRow_text">
                <h4>{channel} </h4>
            </div>
        </div>
    )
}

export default ChannelRow
