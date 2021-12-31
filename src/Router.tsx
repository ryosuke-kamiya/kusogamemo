import React from "react";
import { Route, Switch } from "react-router";
import { Login, Home } from "./components/templates";

const Router =()=>{
return(
    <Switch>
        <Route exact path={"/login"} component={Login}/>
        <Route exact path={"(/)?"} component={Home}/>
        {/* <Route path={"/posts/:id"} component={Post}/> */}
    </Switch>
)
}
export default Router