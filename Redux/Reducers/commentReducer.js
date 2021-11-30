import { ADD_COMMENT, POPULATE_DATA } from "../constants";

const initialState = {
	mealDetail: {}
};

export const commentReducer = (currentState = initialState, action) => {
	switch (action.type) {
		case ADD_COMMENT:
			return {
				mealDetail: { ...currentState.mealDetail, comments: [...currentState.mealDetail.comments, action.payload] },
			};

		case POPULATE_DATA:
			return {
				mealDetail: { ...action.payload },
			};

		default:
			return currentState;
	}
};
