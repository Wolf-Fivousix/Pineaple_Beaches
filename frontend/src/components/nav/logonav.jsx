import React from 'react';
import { Link } from 'react-router-dom';

const LogoNav = () => {

    return (
        <div className="logo-nav">
            <Link className="pine-icon-left" to="/">&#127821;</Link>
            <Link className="logo-title" to="/">Pineapple Beach</Link>
            <Link className="logo-pine-icon-right" to="/">&#127821;</Link>
        </div>
    );
}

export default LogoNav;