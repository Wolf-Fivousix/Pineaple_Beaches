import { RECEIVE_USER_LOGOUT, RECEIVE_USER_SIGN_IN, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
    id: null
});

export default function (state = {_nullUser}, action) {
    switch (action.type) {
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: undefined
            };
            case RECEIVE_CURRENT_USER:
                // return { id: action.currentUser.id };
                return {
                    ...state,
                    isAuthenticated: !!action.currentUser,
                    user: action.currentUser
                };
            case RECEIVE_USER_SIGN_IN:
                return {
                    ...state,
                    isAuthenticated: !!action.currentUser,
                    user: action.currentUser
                };
        default:
            return state;
    }
}