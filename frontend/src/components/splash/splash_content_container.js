import { connect } from "react-redux";
import {
    fetchAllBeaches
} from "../../actions/beach_actions";
import SplashContent from "./splash_content";

const mapStateToProps = state => ({
    beaches: state.entities.beaches
});

const mapDispatchToProps = dispatch => ({
    fetchAllBeaches: () => dispatch(fetchAllBeaches())
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(SplashContent);