import { ADD_COMMENT } from "../constants";

export const addComment = (payload) => {
	return {
		type: ADD_COMMENT,
		payload,
	};
};
