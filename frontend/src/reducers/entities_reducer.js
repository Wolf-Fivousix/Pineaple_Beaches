import { combineReducers } from "redux";
import BeachesReducer from "./beaches_reducer";
import ReviewsReducer from "./reviews_reducer";

const EntitiesReducer = combineReducers({
    beaches: BeachesReducer,
    reviews: ReviewsReducer
})

export default EntitiesReducer;