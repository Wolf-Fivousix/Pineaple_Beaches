import React from "react";

class Howl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
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
            <div>
                <h3>Howl to the Moon</h3>
                <form>
                    <label>
                        Howl:
                        <input
                            onChange={this.handleInput("text")}
                            type="text"/>
                    </label>
                    <button onClick={this.handleSubmit}>Howl</button>
                </form>
            </div>
        );
    }
};

export default Howl;