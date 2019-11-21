import { combineReducers } from "redux";
import BeachesReducer from "./beaches_reducer";

const EntitiesReducer = combineReducers({
    beaches: BeachesReducer,
})

export default EntitiesReducer;