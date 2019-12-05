import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from "../search/search_bar_container";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className="greeting-container">
                    <Link className="welcome-message" to={'/profile'}>{this.props.currentUser.username}</Link>
                    <button className="logout-but" onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className="auth-container">
                    <Link className="signup-but" to={'/signup'}>Signup</Link>
                    <Link className="login-but" to={'/login'}>Login</Link>
                </div>
            );
        }
    }   // double check links ^

    render() {
        return (
            <div className="main-nav">
                <Link className="pine-icon-left" to="/">&#127821;</Link>
                <Link className="nav-title" to="/">Pineapple Beach</Link>
                <Link className="pine-icon-right" to="/">&#127821;</Link>
                <SearchBarContainer />
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;