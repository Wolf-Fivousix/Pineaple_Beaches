import { connect } from 'react-redux';
import React from 'react'
import { fetchAllBeaches, fetchBeachByName } from '../../actions/beach_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import GoogleApi from './google_api';

const mapStateToProps = (state) => {
    return {
        beaches: state.entities.beaches,
        formType: 'openNow'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllBeaches: () => dispatch(fetchAllBeaches()),
        // processForm: (beach) => dispatch(fetchBeachByName(beach)),
        // otherForm: (
        //     <button onClick={() => dispatch(openModal(beaches))}>
        //         openNow
        //     </button>
        // ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GoogleApi);