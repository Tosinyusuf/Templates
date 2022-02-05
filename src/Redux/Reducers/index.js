import { combineReducers } from "redux";
import { templateReducer } from "./templateReducer";
import {HeaderReducer} from "./HeaderReducer"

const reducer = combineReducers({
    allTemplates: templateReducer,
    Headers: HeaderReducer,
});

export default reducer;