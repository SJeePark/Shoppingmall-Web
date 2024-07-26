import { combineReducers } from "redux";
import authenticateReduce from "./authenticateReduce";
import productReducer from "./productReducer";

export default combineReducers({
    auth: authenticateReduce,
    product: productReducer
});