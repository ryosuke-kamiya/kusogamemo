import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../firebase";
import { GameType } from "../../models/games";
import HTMLReactParser from "html-react-parser";

const returnCodeToBr = (text: string) => {
	if (text === "") {
		return text;
	} else {
		return HTMLReactParser(text.replace(/\r?\n/g, "<br/>"));
	}
};

const GameDetail = () => {
	const selector: any = useSelector((state) => state);
	const path = selector.router.location.pathname;
	const id = path.split("/game/")[1];

	const [game, setGame] = useState<any>();

	useEffect(() => {
		db.collection("games")
			.doc(id)
			.get()
			.then((doc) => {
				const data: any = doc.data();
				setGame(data);
			});
	}, []);

	return (
		game ? (
			<div>
				<h1>ゲーム詳細</h1>
				<p>{returnCodeToBr(game.rule)}</p>
			</div>
		):null
	);
};

export default GameDetail;
