import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: "" };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllBeaches();
    }

    handleChange(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchBeachByName(this.state.search);
    }

    render() {
        const beachList = Object.values(this.props.beaches)
                                .map((beach, index) => 
                                    <li key={index}>{beach.name}</li>);
        return (
            <div>
                <form>
                <input
                    type="text"
                    placeholder="Search Beach"
                    onChange={this.handleChange("search")}/>
                    <button
                        className="signup-but"
                        onClick={this.handleSubmit}>
                            Search
                    </button>
                </form>
                <ul>
                    {beachList}
                </ul>
            </div>
        );
    }
}

export default SearchBar;