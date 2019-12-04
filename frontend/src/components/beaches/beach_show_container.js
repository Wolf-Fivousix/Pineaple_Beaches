import { connect } from "react-redux";
import BeachShow from "./beach_show";
import { fetchBeachReviews } from '../../actions/review_actions'
// import {
//     fetchBeachById
// } from "../../actions/beach_actions";

const mapStateToProps = (state, ownProps) => {
    return ({
    reviews: Object.values(state.entities.reviews),
    beach: state.entities.beaches[ownProps.match.params.beach_id]
})};

const mapDispatchToProps = dispatch => ({
    fetchBeachReviews: (id) => dispatch(fetchBeachReviews(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BeachShow);