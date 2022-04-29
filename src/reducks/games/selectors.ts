import {createSelector} from "reselect"

const gamesSelector = (state: any) => state.games

export const getGames = createSelector(
	[gamesSelector],
	state => state.list
)
