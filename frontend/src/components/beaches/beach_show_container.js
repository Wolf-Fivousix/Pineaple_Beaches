import { connect } from "react-redux";
import BeachShow from "./beach_show";
import {
    fetchBeachById,
    updateBeachTemperature
} from "../../actions/beach_actions";

const mapStateToProps = (state, ownProps) => {
    return ({
    beach: state.entities.beaches[ownProps.match.params.beach_id],
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user
})};

const mapDispatchToProps = dispatch => ({
    fetchBeachById: (beachId) => dispatch(fetchBeachById(beachId)),
    updateBeachTemperature: (payload) => dispatch(updateBeachTemperature(payload))
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(BeachShow);