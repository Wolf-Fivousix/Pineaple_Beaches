import { connect } from "react-redux";
import BeachShow from "./beach_show";
import { fetchBeachReviews } from '../../actions/review_actions';
import {
    fetchBeachById,
    updateBeachTemperature
} from "../../actions/beach_actions";
import { receiveCurrentUser } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
    debugger
    return ({
    reviews: Object.values(state.entities.reviews),
    beach: state.entities.beaches[ownProps.match.params.beach_id],
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user
})};

const mapDispatchToProps = dispatch => ({
    // receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    fetchBeachReviews: (id) => dispatch(fetchBeachReviews(id)),
    fetchBeachById: (beachId) => dispatch(fetchBeachById(beachId)),
    updateBeachTemperature: (payload) => dispatch(updateBeachTemperature(payload))
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(BeachShow);