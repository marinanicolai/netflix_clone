import React from 'react'
import "./Banner.css"
import AddIcon from '@material-ui/icons/Add';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function Banner() {
    return (
        <div className="banner">
            <img src="" />
            <h3>NETFLIX<small>ORIGINAL</small></h3>
            <h1>DARK</h1>
            <div className="button_div">
                <div className="button1">
                    <PlayArrowIcon style={{ fontSize: 10 }}></PlayArrowIcon>
                </div>
                <div className="button2">
                    <AddIcon style={{ fontSize: 10 }}></AddIcon>
                </div>
            </div>
        </div>
    )
}

export default Banner