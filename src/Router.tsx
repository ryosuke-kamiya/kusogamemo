import React from "react";
import { Route, Switch } from "react-router";
import {
	SignUp,
	SignIn,
	Reset,
	GameEdit,
	GameList,
	GameDetail,
} from "./components/templates";
import Auth from "./Auth";

const Router = () => {
	return (
		<Switch>
			<Route exact path={"/signIn"} component={SignIn} />
			<Route exact path={"/signIn/reset"} component={Reset} />
			<Route exact path={"/signUp"} component={SignUp} />
			{/* ログイン後に表示したいページ↓ */}
			<Auth>
				<Route exact path={"(/)?"} component={GameList} />
				{/* TODO：ログインしなくても表示できるようにする */}
				<Route exact path={"/game/:id"} component={GameDetail} />
				<Route path={"/game/edit(/:id)?"} component={GameEdit} />
			</Auth>
		</Switch>
	);
};
export default Router;
