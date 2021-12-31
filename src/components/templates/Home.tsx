import React from "react";
import { useSelector } from "react-redux";
import { getUserId, getUserName } from "../../reducks/users/selectors";

const Home = () => {
    const selector: any = useSelector(state => state)
    const uid: string = getUserId(selector)
    const username: string = getUserName(selector)
    return(
        <div>
            <h2>Home</h2>
            <p>ユーザーID{uid}</p>
            <p>ユーザー名{username}</p>
        </div>
    )
}

export default Home;