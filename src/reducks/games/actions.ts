import firebase from "firebase/compat"

export const DELETE_GAME = "DELETE_GAME"
export const deleteGameAction = (games: firebase.firestore.DocumentData[]) => {
	return{
		type: "DELETE_GAME",
		payload: games,

	}
}

export const FETCH_GAMES = "FETCH_GAMES"
export const fetchGamesAction = (games: firebase.firestore.DocumentData[]) => {
	return{
		type: "FETCH_GAMES",
		payload: games,

	}
}
