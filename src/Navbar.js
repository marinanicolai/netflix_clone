import React from 'react'
import "./Navbar.css"
import SearchIcon from '@material-ui/icons/Search';
import StorefrontIcon from '@material-ui/icons/Storefront';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Navbar() {
    return (
        <div className="navbar">
            <span><img className="navbar_logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" srcset="" /></span>
            <span>Home</span>
            <span>TV Shows</span>
            <span>Movies</span>
            <span>Latest</span>
            <span>My List</span>
            <span>KIDS</span>
            <span><SearchIcon /></span>
            <span><NotificationsIcon /></span>
            <span><StorefrontIcon /></span>
        </div>
    );
}

export default Navbar;
