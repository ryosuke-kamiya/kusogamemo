import { push } from "connected-react-router";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteGame } from "../../reducks/games/operations";

const GameItem = (props: { id: string; title: string}) => {
	const dispatch = useDispatch()
	return(
		<div>
			<h2 onClick={() => dispatch(push('/game/'+props.id))}>{props.title}</h2>
			<button onClick={()=>{dispatch(deleteGame(props.id))}}>削除</button>
		</div>
		);
};

export default GameItem;
