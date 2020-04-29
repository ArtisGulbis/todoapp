import { combineReducers } from "redux";
import listReducer from './todo/todo.reducer';

const rootReducer = combineReducers({
    completeList: listReducer
});

export default rootReducer;
