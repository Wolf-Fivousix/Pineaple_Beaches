import { connect } from "react-redux";
import {
    fetchAllBeaches,
    fetchBeachByName
} from "../../actions/beach_actions";
import SearchBar from "./search_bar";

const mapStateToProps = state => ({
    beaches: state.entities.beaches
});

const mapDispatchToProps = dispatch => ({
    fetchAllBeaches: () => dispatch(fetchAllBeaches()),
    fetchBeachByName: (beachName) => dispatch(fetchBeachByName(beachName))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);