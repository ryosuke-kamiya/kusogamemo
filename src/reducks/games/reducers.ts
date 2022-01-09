import * as Actions from "./actions"
import initialState from "../store/initialState";

export const GamesReducer = (state = initialState.games, action:any)=>{
    switch (action.type) {
        default:
            return state
    }
}