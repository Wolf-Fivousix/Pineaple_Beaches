import React from 'react';
import LogoNav from './logonav';
import { Link } from 'react-router-dom';

class ReviewNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className="greeting-container">
                    <h3 className="welcome-message">{this.props.currentUser.username}</h3>
                    <button className="logout-but" onClick={this.logoutUser}>Logout</button>
                </div>
            );
        }
    }
    // add a dashed line up in here ^
    render() {
        return (
            <div className="review-nav">
                <div className="logo-r-container">
                    <Link className="pine-icon-left" to="/">&#127821;</Link>
                    <Link className="logo-title-r" to="/">Pineapple Beach</Link>
                    <Link className="logo-pine-icon-right" to="/">&#127821;</Link>
                </div>
                {this.getLinks()}
            </div>
        );
    }
}

export default ReviewNavbar;