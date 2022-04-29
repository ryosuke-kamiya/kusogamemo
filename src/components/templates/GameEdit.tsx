import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextInput, SelectBox, PrimaryButton } from "../atoms";
import { saveGame } from "../../reducks/games/operations";
import { db } from "../../firebase";
import { getUserId } from "../../reducks/users/selectors";
import ImageArea from "../organisms/ImageArea";

const GameEdit = () => {
	const dispatch = useDispatch();
	let id = window.location.pathname.split("/game/edit")[1];
console.log(id)
	//idが入っていた場合、/idとなるため
	if (id !== '' && id !== undefined) {
		id = id.split("/")[1];
	}

	const selector: any = useSelector((state) => state)
	const userId = getUserId(selector)


	const [title, setTitle] = useState(String);
	const [rule, setRule] = useState(String);
	const [win, setWin] = useState(String);
	const [minNum, setMinNum] = useState(Number);
	const [maxNum, setMaxNum] = useState(Number);
	const [place, setPlace] = useState(String);
	const [genre, setGenre] = useState(String);

	const inputTitle = useCallback(
		(event) => {
			setTitle(event.target.value);
		},
		[setTitle]
	);

	const inputRule = useCallback(
		(event) => {
			setRule(event.target.value);
		},
		[setRule]
	);

	const inputWin = useCallback(
		(event) => {
			setWin(event.target.value);
		},
		[setWin]
	);

	const inputMinNum = useCallback(
		(event) => {
			setMinNum(event.target.value);
		},
		[setMinNum]
	);

	const inputMaxNum = useCallback(
		(event) => {
			setMaxNum(event.target.value);
		},
		[setMaxNum]
	);

	const places = [
		{ id: "car", name: "車内" },
		{ id: "billiards", name: "ビリヤード" },
		{ id: "outdoor", name: "屋外" },
		{ id: "road", name: "道" },
		{ id: "indoor", name: "屋内" },
	];

	const genres = [
		{ id: "words", name: "言葉遊び" },
		{ id: "active", name: "アクティブ" },
	];

	useEffect(() => {
		if (id !== "" && id !== undefined) {
			db.collection("games")
				.doc(id)
				.get()
				.then((snapshot) => {
					const data: any = snapshot.data();
					setTitle(data.title);
					setRule(data.rule);
					setWin(data.win);
					setMinNum(data.minNum);
					setMaxNum(data.maxNum);
					setPlace(data.place);
					setGenre(data.genre);
				});
		}
	}, [id]);

	return (
		<section>
			<h2>ゲーム登録・編集</h2>
			<ImageArea/>
			<TextInput
				value={title}
				type={"text"}
				onChange={inputTitle}
				fullWidth={true}
				label={"タイトル"}
				required={true}
				rows={1}
			/>
			<TextInput
				value={rule}
				type={"textarea"}
				onChange={inputRule}
				multiline={true}
				fullWidth={true}
				label={"ルール"}
				required={true}
			/>
			<TextInput
				value={win}
				type={"textarea"}
				onChange={inputWin}
				fullWidth={true}
				label={"勝利条件"}
				required={true}
				multiline={true}
			/>
			<div>
				<div>人数</div>
				<TextInput
					value={minNum}
					type={"number"}
					onChange={inputMinNum}
					fullWidth={true}
					required={true}
				/>
				〜
				<TextInput
					value={maxNum}
					type={"number"}
					onChange={inputMaxNum}
					fullWidth={true}
					required={true}
				/>
			</div>
			<SelectBox
				label={"場所"}
				required={true}
				value={place}
				select={setPlace}
				options={places}
			/>
			<SelectBox
				label={"ジャンル"}
				required={true}
				value={genre}
				select={setGenre}
				options={genres}
			/>
			<div>
				<PrimaryButton
					onClick={() =>
						dispatch(
							saveGame(id, title, rule, win, minNum, maxNum, place, genre, userId)
						)
					}
					label={"ゲームを保存"}
				/>
			</div>
		</section>
	);
};

export default GameEdit;
