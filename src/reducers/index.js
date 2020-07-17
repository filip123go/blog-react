import {combineReducers} from "redux";
import postReducer from "./postReducer";
import usersReducer from "./usersReducer";

//wire the reducers here
export default combineReducers({
    posts: postReducer,
    users: usersReducer
});
