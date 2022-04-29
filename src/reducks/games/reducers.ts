import * as Actions from "./actions"
import initialState from "../store/initialState";

export const GamesReducer = (state = initialState.games, action:any)=>{
    switch (action.type) {
			case Actions.DELETE_GAME:
			return{
				...state,
				list: [...action.payload]//[]で囲まないと更新されたことがredux側に伝わらないため
			}
			case Actions.FETCH_GAMES:
			return{
				...state,
				list: [...action.payload]//[]で囲まないと更新されたことがredux側に伝わらないため
			}
        default:
            return state
    }
}
