import React from 'react';
import SplashContentContainer from "./splash_content_container";

class Splash extends React.Component {

    render() {
        return (
            <div className="splash-back">
                <SplashContentContainer />
            </div>
        );
    }
}

export default Splash;