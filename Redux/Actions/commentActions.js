import { ADD_COMMENT, POPULATE_DATA } from "../constants";

export const addComment = (payload) => {

	return {
		type: ADD_COMMENT,
		payload
	};
};

export const populateData = (payload) => {

	return {
		type: POPULATE_DATA,
		payload,
	};
};

