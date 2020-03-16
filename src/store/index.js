import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';
import users from "./reducers/users"

const reducers = combineReducers({
    users
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)));

export default store;