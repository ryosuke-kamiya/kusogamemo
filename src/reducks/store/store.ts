import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from "redux";

import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

//Import reducers
// import { ProductsReducer } from "../products/reducers";
import { UsersReducer } from "../users/reducers";

export default function createStore(history:any) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            users: UsersReducer
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
}