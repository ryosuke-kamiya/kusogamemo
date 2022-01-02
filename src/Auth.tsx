import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listenAuthState } from "./reducks/users/operations";
import { getSignedIn } from "./reducks/users/selectors";

const Auth = ({children}: any) => {
    const dispatch = useDispatch()
    const selector: any = useSelector((state) => state)

    const isSignedIn = getSignedIn(selector)

    useEffect(() => {
        if(!isSignedIn){
            dispatch(listenAuthState())
        }
    },[])
    if(isSignedIn){
        return children
    }else{
        return <></>
    }
}

export default Auth;