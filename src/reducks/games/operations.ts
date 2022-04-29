import { push } from "connected-react-router";
import firebase from "firebase/compat";
import { db, FirebaseTimeStamp } from "../../firebase";
import { fetchGamesAction, deleteGameAction } from "./actions";

const GamesRef = db.collection("games");

export const deleteGame = (id: string)=>{
	return async (dispatch: (arg0: any) => void, getState: () => { (): any; new(): any; games: { (): any; new(): any; list: any; }; }) => {
		GamesRef.doc(id).delete()
		.then(
			()=>{
				const prevGames = getState().games.list
				const nextGames = prevGames.filter((game: { id: any; }) => game.id !== id)
				dispatch(deleteGameAction(nextGames))
			}
		)
	}
}

export const fetchGames = () => {
	return async (dispatch: any) => {
		GamesRef.orderBy("updated_at", "desc")
			.get()
			.then((snapshots) => {
				const gameList: firebase.firestore.DocumentData[] = [];
				snapshots.forEach((snapshot) => {
					const game = snapshot.data();
					gameList.push(game);
				});
				dispatch(fetchGamesAction(gameList));
			});
	};
};

export const saveGame = (
	id: string,
	title: string,
	rule: string,
	win: string,
	minNum: number,
	maxNum: number,
	place: string,
	genre: string,
	userId: string
) => {
	return async (dispatch: any) => {
		const timestamp = FirebaseTimeStamp.now();

		const data = {
			title: title,
			rule: rule,
			win: win,
			minNum: minNum,
			maxNum: maxNum,
			place: place,
			genre: genre,
			updated_at: timestamp,
			id: id,
			userId: userId
		};

		if (id === "") {
			const ref = GamesRef.doc();//idを自動採番してrefに代入
			id = ref.id;
			data.id = id;
		}

		return GamesRef.doc(id)
			.set(data, { merge: true })
			.then(() => dispatch(push("/")))
			.catch((error) => {
				throw new Error(error);
			});
	};
};
