import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../firebase";
import { GameType } from "../../models/games";

const returnCodeToBr = (text) => {
	if (text === "") {
		return text;
	} else {
		return HTMLReactParser(text.replace(/\r?\n/g, "<br/>"));
	}
};

const GameDetail = () => {
	const selector = useSelector((state) => state);
	const path = selector.router.location.pathname;
	const id = path.split("/game/")[1];

	const [game, setGame] = useState();

	useEffect(() => {
		db.collection("games")
			.doc(id)
			.get()
			.then((doc) => {
				const data = doc.data();
				setGame(data);
			});
	}, []);

	return (
		<div>
			<h1>ゲーム詳細</h1>
			<p>{returnCodeToBr(game.description)}</p>
		</div>
	);
};

export default GameDetail;
