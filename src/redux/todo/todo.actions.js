import { TODOTypes } from './todo.types';

export const addToList = (item) => (dispatch) => {
	dispatch({ type: TODOTypes.ADD_TO_LIST, payload: item });
};

export const check = (id) => (dispatch) => {
	dispatch({ type: TODOTypes.CHECK, payload: id });
};

export const remove = (id) => (dispatch) => {
	dispatch({ type: TODOTypes.REMOVE, payload: id });
};
