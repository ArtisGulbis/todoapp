import { TODOTypes } from './todo.types';

const INITIAL_STATE = {
	list: []
};

const listReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TODOTypes.ADD_TO_LIST:
			return {
				...state,
				list: [ ...state.list, action.payload ]
			};

		case TODOTypes.CHECK:
			return {
				...state,
				list: state.list.map((el) => (el.id === action.payload ? { ...el, checked: !el.checked } : el))
			};

		case TODOTypes.REMOVE:
			return {
				...state,
				list: state.list.filter((el) => (el.id !== action.payload ? null : el))
			};
		default:
			return state;
	}
};

export default listReducer;
