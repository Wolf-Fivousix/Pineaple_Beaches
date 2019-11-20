import React from "react";
import SearchBarContainer from "../search/search_bar_container";

class SplashContent extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }

    handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();
    }

    render() {
        return(
            <div className="splash-container">
                <section>
                    <h3>Map goes here</h3>
                    <SearchBarContainer />
                </section>
                <h3>Reviews go here</h3>
            </div>
        );
    }
};

export default SplashContent;