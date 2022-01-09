import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from "redux";

import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

//Import reducers
import { UsersReducer } from "../users/reducers";
import { History } from "history";
import { GamesReducer } from "../games/reducers";

export default function createStore(history: History<unknown>) {
    return reduxCreateStore(
        combineReducers({
            games: GamesReducer,
            router: connectRouter(history),
            users: UsersReducer
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
}