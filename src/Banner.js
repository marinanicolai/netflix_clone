import React from 'react'
import "./Banner.css"
import AddIcon from '@material-ui/icons/Add';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function Banner() {
    return (
        <div className="banner">
            <img src="http://i0.wp.com/www.secondhalftravels.com/wp-content/uploads/2018/08/Dark-German-series-Netflix.jpg?fit=1800,720&ssl=1" alt="" className="banner_image" />
            <h3>NETFLIX<small>ORIGINAL</small></h3>
            <h1>DARK</h1>
            <div className="button_div">
                <button className="button1">
                    <PlayArrowIcon style={{ fontSize: 10 }} />Play
                </button>
                <button className="button2">
                    <AddIcon style={{ fontSize: 10 }} />My List
                </button>
            </div>
            <div className="intro_container">
                <p className="intro">
                    The Dark Plot Summary: A serial killer brutally murders a mother and almost all
                    of her children while her husband watches, leaving only one child alive. The
                    raises his only remaining son, who as a result of the killer's attack is born
                    with a physical impairment.
                </p>
            </div>
        </div>
    )
}

export default Banner