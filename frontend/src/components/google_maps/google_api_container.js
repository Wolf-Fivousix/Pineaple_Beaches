import { connect } from 'react-redux';
import { fetchAllBeaches } from '../../actions/beach_actions';
import GoogleApi from './google_api';

const mapStateToProps = (state) => {
    return {
        beaches: state.entities.beaches
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllBeaches: () => dispatch(fetchAllBeaches())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GoogleApi);