import {
    RECEIVE_ALL_BEACHES,
    RECEIVE_NAMED_BEACHES
} from "../actions/beach_actions";

export default function (state = {}, action) {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_BEACHES:
            return Object.assign({}, action.beaches);

        case RECEIVE_NAMED_BEACHES:
            return Object.assign({}, action.beaches);

        default:
            return state;
    }
};