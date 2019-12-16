import React from 'react';
import { Link } from 'react-router-dom';

const LogoNav = () => {

    return (
        <div className="logo-nav">
            <Link className="pine-icon-left" to="/"><span role="img" aria-label="pineapple">&#127821;</span></Link>
            <Link className="logo-title" to="/">Pineapple Beach</Link>
            <Link className="logo-pine-icon-right" to="/"><span role="img" aria-label="pineapple">&#127821;</span></Link>
        </div>
    );
}

export default LogoNav;
