import { connect } from 'react-redux';
import React from 'react'
import { fetchAllBeaches, fetchBeachById } from '../../actions/beach_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import GoogleApi from './google_api';

const mapStateToProps = (state,ownProps) => {
    // debugger
    return {
        beaches: state.entities.beaches,
        // beach: state.entities.beaches[ownProps.match.params.beach_id],
        formType: 'openNow'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllBeaches: () => dispatch(fetchAllBeaches()),
        fetchBeachById: (beachId) => dispatch(fetchBeachById(beachId)),
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