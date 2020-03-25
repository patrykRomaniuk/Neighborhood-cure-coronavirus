import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="landing-page-wrapper">
            <h1 className="main-header">NeighborlyHelp</h1>
            <h1 className="middle-section">Join a growing community where neighbors can help each other on daily basis</h1>
            <p className="sub-section">check <Link className="link-to-map" to="/map">Map</Link> and add task in your area,<span className="free-text">it's free!</span></p>
        </div>
    )
}

export default Landing
