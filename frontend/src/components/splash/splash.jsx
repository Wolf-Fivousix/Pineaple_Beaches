import React from 'react';
import SplashContentContainer from "./splash_content_container";
import NavBarContainer from "../nav/navbar_container";

class Splash extends React.Component {

    render() {
        return (
            <div className="splash-back">
                <NavBarContainer />
                <SplashContentContainer />
            </div>
        );
    }
}

export default Splash;