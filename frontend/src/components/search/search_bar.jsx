import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: "" };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearButton = this.clearButton.bind(this);
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

    clearButton() {
        this.props.fetchAllBeaches();
        this.setState({ search: "" });
        document.getElementById("searchBar").value = "";
    }
    
    render() {
        
        return (
            <div className="search-bar-container">
                <form className="search-bar-form">
                    <input
                        id="searchBar"
                        className="searchBarField"
                        type="text"
                        placeholder="Search Beach"
                        onChange={this.handleChange("search")}/>
                    <button
                        className="search-but"
                        onClick={this.handleSubmit}>
                            Search
                    </button>
                    <button
                        type="button"
                        className="clear-but"
                        onClick={this.clearButton}>Clear
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBar;