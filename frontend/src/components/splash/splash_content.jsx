import React from "react";
import GoogleApiContainer from '../google_maps/google_api_wrapper';
import BeachIndex from "../beaches/beaches_index";

class SplashContent extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllBeaches();
    }

    handleInput(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {

        const beachList = Object.values(this.props.beaches)
                                .map((beach, index) => 
                                    <li
                                        className="beachIndexPlate"
                                        key={index}>
                                            <BeachIndex beach={beach}/>
                                    </li>
                                );

        return(
            <div className="splash-container">
                <div className="ul-container">
                    <ul className="beach-ul-index">
                        {beachList}
                    </ul>
                </div>
                <GoogleApiContainer />
                <h1 className="trade-mark">®</h1>
            </div>
        );
    }
};

export default SplashContent;