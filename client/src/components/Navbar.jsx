import React, { useState } from 'react';
import { logOut } from '../actions/auth/logOut';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ auth: { isAuthenticated }, logOut }) => {

    let [isSidebar,setSidebar] = useState(false);

    return (
        <nav>

            <div className="logo">
                <Link to="/">NeighborlyHelp</Link>                
            </div>

            <div className="navbar-links">
                <Link to="/map">Map</Link>
                <Link style={{ display: isAuthenticated ? 'block' : 'none' }} to="/user-profile">Profile</Link>
                <Link style={{ display: isAuthenticated ? 'block' : 'none' }} to="/add-map-post">Add task</Link>
                <Link style={{ display: isAuthenticated ? 'block' : 'none' }} to="/settings">Settings</Link>
                <Link style={{ display: isAuthenticated ? 'block' : 'none' }} onClick={() => logOut()} to="/">Log Out</Link>
                <Link style={{ display: !isAuthenticated ? 'block' : 'none' }} to="/login">Login</Link>
                <Link style={{ display: !isAuthenticated ? 'block': 'none' }} to="/register">Register</Link>
            </div>

            <div className="hamburger">

                <i 
                style={{ 
                    display: isSidebar ? 'none' : 'block'
                }}
                className="fa fa-bars" 
                onClick={() => setSidebar(true) }>
                </i>

                <i 
                style={{ 
                    display: isSidebar ? 'block' : 'none'
                }}
                className="fa fa-times" 
                onClick={() => setSidebar(false) }>
                </i>

            </div>

            <div 
            className="responsive-navbar-wrapper"
            style={{
                left: isSidebar ? '0' : '-100%',
                transition: 'all .5s ease-in-out',
                zIndex: isSidebar ? '-1' : '10'
            }}>
                <Link to="/map" onClick={() => setSidebar(false)}>Map</Link>
                <Link style={{ display: isAuthenticated ? 'block' : 'none' }} onClick={() => setSidebar(false)} to="/user-profile">Profile</Link>
                <Link style={{ display: isAuthenticated ? 'block' : 'none' }} onClick={() => setSidebar(false)} to="/add-map-post">Add task</Link>
                <Link style={{ display: isAuthenticated ? 'block' : 'none' }} onClick={() => setSidebar(false)} to="/settings">Settings</Link>
                <Link style={{ display: isAuthenticated ? 'block' : 'none' }} onClick={() => {
                    setSidebar(false)
                    logOut()
                }} to="/login">
                    Log Out
                </Link>
                <Link style={{ display: !isAuthenticated ? 'block' : 'none' }} onClick={() => setSidebar(false)} to="/login">Login</Link>
                <Link style={{ display: !isAuthenticated ? 'block': 'none' }} onClick={() => setSidebar(false)} to="/register">Register</Link>
            </div>                

        </nav>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logOut })(Navbar);
