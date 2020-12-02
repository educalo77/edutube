import React, {useState, useContext} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { ThemeContext } from './App';


function Header() {

    const [inputSearch, setInputSearch] = useState("");

    const darkTheme = useContext(ThemeContext);
    const themeStyles = {
        backgroundColor: darkTheme ? '#111' : '#CCC',
        color: darkTheme ? '#CCC' : '#111',
    }

    const keyDown = (e) => {
        if (e.key === 'Enter') {
            setInputSearch(e.target.value);
            window.location = `/search/:${inputSearch}`
        }
    }



    return (
        <div className="header" style={themeStyles} >
            <div className="header_left">
            <MenuIcon />
            <Link to="/">
              <img
                className="header_logo"
                src={`/edutube.png`}
                alt=""
                />              
            </Link>
            </div>
            <div className="header_input">
                <input
                    onChange={(e) => setInputSearch(e.target.value)}
                    value={inputSearch}
                    placeholder="Search"
                    type="text"
                    onKeyDown={keyDown}
                    style={themeStyles}
                />
            <Link to={`/search/:${inputSearch}`} >
            <SearchIcon className="header_inputButton" style={themeStyles} />
            </Link>
            </div>
            <div className="header_icons">
            <VideoCallIcon className="header_icon"/>
            <AppsIcon className="header_icon"/>
            <NotificationsIcon className="header_icon"/>
            <Avatar src={`/edutube.png`} /> 
            </div>
        </div>
    )
}

export default Header
