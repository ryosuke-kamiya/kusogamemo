import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GameItem } from "../organisms";
import { fetchGames } from "../../reducks/games/operations";
import { getGames } from "../../reducks/games/selectors";

const GameList = () => {
	const dispatch = useDispatch();
	const selector = useSelector((state)=>state)
	const games = getGames(selector)

	useEffect(() => {
		dispatch(fetchGames());
	}, []);

	return (
		<section>
			<h1>ゲームリスト</h1>
			<div>
				{games.length > 0 && (
					games.map((game: { id: string; title: string}) =>(
						<GameItem
							key={game.id}
							id={game.id}
							title={game.title}
							/>
					))
				)}
			</div>
		</section>
	);
};

export default GameList;
