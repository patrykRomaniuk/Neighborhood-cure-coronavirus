import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../actions/auth/logOut';

const Footer = ({ isAuthenticated,logOut }) => {
    return (
        <footer>
            <div className="footer-container footer-links-wrapper">

                <div className="footer-links-section">
                    <ul>
                        <li style={{ display: !isAuthenticated ? "block" : "none" }} className="links-header"><Link to="/register">Patreon</Link></li>
                        <li style={{ display: !isAuthenticated ? "block" : "none" }} className="links-header"><Link to="/register">Register</Link></li>
                        <li style={{ display: !isAuthenticated ? "block" : "none" }} className="links-header"><Link to="/login">Login</Link></li>
                        <li className="links-header"><Link to="/map">Map</Link></li>
                        <li style={{ display: isAuthenticated ? "block" : "none" }} className="links-header"><Link to="/user-profile">Profile</Link></li>
                        <li style={{ display: isAuthenticated ? "block" : "none" }} className="links-header"><Link to="/add-map-post">Add Task</Link></li>
                        <li style={{ display: isAuthenticated ? "block" : "none" }} className="links-header" onClick={() => logOut()}>
                            <Link to="/login">
                            Log Out
                            </Link>
                        </li>
                        <li className="links-header"><Link to="/sign-in" >Landing</Link></li>

                    </ul>
                </div>

                <div className="footer-links-section">
                    <ul>
                        <li style={{ display: isAuthenticated ? "block" : "none" }} className="links-header"><Link to="/settings">Settings</Link></li>
                        <li style={{ display: isAuthenticated ? "block" : "none" }} className="about"><Link to="/change-password">Change password</Link></li>
                        <li  style={{ display: isAuthenticated ? "block" : "none" }}className="about"><Link to="/delete-user">Delete account</Link></li>
                    </ul>
                </div>

                <div className="footer-links-section">
                    <ul>
                        <li className="links-header">Info about creator</li>
                        <li className="about"><a href="http://patryk-romaniuk.com/" target="_blank">Website</a></li>
                        <li className="about"><a href="https://www.youtube.com/channel/UCGdjiAYIMltlO3j8LhVkSbA?view_as=subscriber" target="_blank">Youtube channel</a></li>
                    </ul>
                </div>

                <div className="social-media-wrapper">
                    <div className="social-media">
                        <a href="https://twitter.com/?lang=en" target="_blank" className="social-href"><i className="fab fa-twitter social"></i></a>
                        <a href="https://www.facebook.com/" target="_blank" className="social-href"><i className="fab fa-facebook-f social"></i></a> 
                        <a href="https://www.youtube.com/" target="_blank" className="social-href"><i className="fab fa-youtube social"></i></a> 
                        <a href="https://www.instagram.com/?hl=en" target="_blank" className="social-href"><i className="fab fa-instagram social"></i></a> 
                    </div>
                </div> 
            </div>

            <div className="footer-container">
                <div className="under-footer">
                    <p className="about rights">Neigborhood Help &copy; 2020 All rights reserved</p>
                </div>
            </div>

        </footer>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logOut })(Footer);