import React from "react";

class BeachShow extends React.Component {
    componentDidMount() {
        console.log("mounted");
    }
    
    render() {
        return (
            <p>This is a beach page, yay! =)</p>
        );
    }
};

export default BeachShow;