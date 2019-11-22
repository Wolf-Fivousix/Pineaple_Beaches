import { combineReducers } from 'redux';
import session from './session_reducer';
import errorsReducer from "./errors_reducer";
import entitiesReducer from "./entities_reducer";
import ui from "./ui.reducer"

const RootReducer = combineReducers({
    entities: entitiesReducer,
    session,
    errors: errorsReducer,
    ui
});

export default RootReducer;