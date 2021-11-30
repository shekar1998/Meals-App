import { ADD_COMMENT } from "../constants";

const initialState = {
	comments: [],
};

export const commentReducer = (currentState = initialState, action): any => {
	switch (action.type) {
		case ADD_COMMENT:
			return {
				comments: { ...action.payload },
			};

		default:
			return currentState;
	}
};
