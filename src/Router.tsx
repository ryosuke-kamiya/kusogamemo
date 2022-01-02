import React from "react";
import { Route, Switch } from "react-router";
import { Home, SignUp, SignIn, Reset } from "./components/templates";
import Auth from "./Auth";

const Router =()=>{
return(
    <Switch>
        <Route exact path={"/signIn"} component={SignIn}/>
        <Route exact path={"/signIn/reset"} component={Reset}/>
        <Route exact path={"/signUp"} component={SignUp}/>
        {/* ログイン後に表示したいページ↓ */}
        <Auth>
            <Route exact path={"(/)?"} component={Home}/>
        </Auth>
        {/* <Route path={"/posts/:id"} component={Post}/> */}
    </Switch>
)
}
export default Router