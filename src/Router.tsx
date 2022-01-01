import React from "react";
import { Route, Switch } from "react-router";
import { Home, SignUp, SignIn } from "./components/templates";

const Router =()=>{
return(
    <Switch>
        <Route exact path={"/signIn"} component={SignIn}/>
        <Route exact path={"/signUp"} component={SignUp}/>
        <Route exact path={"(/)?"} component={Home}/>
        {/* <Route path={"/posts/:id"} component={Post}/> */}
    </Switch>
)
}
export default Router