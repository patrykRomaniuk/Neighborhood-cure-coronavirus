import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="landing-page-wrapper">
              <Helmet>
                <meta charSet="utf-8" />
                <title>NeighborlyHelp</title>
                <meta name="description" content="Website where neighbors can help each other by solving their day to day tasks."/>
                <meta name="keywords" content="Neighborly, Neighborly Help, neighborly help, neighborlyhelp, neighborhoodhelp, neighborly"/>
                <meta name="author" content="Patryk Romaniuk"/> 
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Helmet>
            <h1 className="main-header">NeighborlyHelp</h1>
            <h1 className="middle-section">Join a growing community where neighbors can help each other on daily basis</h1>
            <p className="sub-section">check <Link className="link-to-map" to="/map">Map</Link> and add task in your area,<span className="free-text">it's free!</span></p>
        </div>
    )
}

export default Landing
