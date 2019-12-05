import { connect } from "react-redux";
import BeachShow from "./beach_show";
import { fetchBeachReviews } from '../../actions/review_actions';
import {
    fetchBeachById,
    updateBeachTemperature
} from "../../actions/beach_actions";

const mapStateToProps = (state, ownProps) => {
    return ({
    reviews: Object.values(state.entities.reviews),
    beach: state.entities.beaches[ownProps.match.params.beach_id],
    loggedIn: state.session.isAuthenticated
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