import { createStore, combineReducers } from "redux";
import { commentReducer } from "./Reducers/commentReducer";

const reducer = combineReducers({
	commentReducer: commentReducer,
});

const store = createStore(reducer);

export default store;
