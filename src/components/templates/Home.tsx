import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId, getUserName } from "../../reducks/users/selectors";
import { signOut } from "../../reducks/users/operations";

const Home = () => {
    const dispatch = useDispatch()
    const selector: any = useSelector(state => state)
    const uid: string = getUserId(selector)
    const username: string = getUserName(selector)
    return(
        <div>
            <h2>Home</h2>
            <p>ユーザーID{uid}</p>
            <p>ユーザー名{username}</p>
            <button onClick={() => dispatch(signOut())}>sign out</button>
        </div>
    )
}

export default Home;
