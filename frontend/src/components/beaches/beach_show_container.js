import { connect } from "react-redux";
import BeachShow from "./beach_show";
// import {
//     fetchBeachById
// } from "../../actions/beach_actions";

const mapStateToProps = (state, ownProps) => {
    return ({
    beach: state.entities.beaches[ownProps.match.params.beach_id]
})};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(BeachShow);