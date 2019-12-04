import { connect } from "react-redux";
import BeachShow from "./beach_show";
<<<<<<< HEAD
import { fetchBeachReviews } from '../../actions/review_actions'
// import {
//     fetchBeachById
// } from "../../actions/beach_actions";
=======
import {
    fetchBeachById,
    updateBeachTemperature
} from "../../actions/beach_actions";
>>>>>>> master

const mapStateToProps = (state, ownProps) => {
    return ({
    reviews: Object.values(state.entities.reviews),
    beach: state.entities.beaches[ownProps.match.params.beach_id]
})};

const mapDispatchToProps = dispatch => ({
<<<<<<< HEAD
    fetchBeachReviews: (id) => dispatch(fetchBeachReviews(id))
=======
    fetchBeachById: (beachId) => dispatch(fetchBeachById(beachId)),
    updateBeachTemperature: (payload) => dispatch(updateBeachTemperature(payload))
>>>>>>> master
});

export default connect(mapStateToProps, mapDispatchToProps)(BeachShow);