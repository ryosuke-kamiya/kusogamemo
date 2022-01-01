import React, { useState, useCallback } from "react";
import {TextInput, PrimaryButton} from "../atoms";
import { TextFieldProps } from "../atoms/TextInput";
import { signUp } from "../../reducks/users/operations";
import { useDispatch } from "react-redux";

const SignUp = (props: TextFieldProps) => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState(String),
     [email, setEmail] = useState(String),
     [password, setPassword] = useState(String),
     [confirmPassword, setConfirmPassword] = useState(String);


    const inputUsername = useCallback((event)=>{
        setUsername(event.target.value)
    },[setUsername])
    const inputEmail = useCallback((event)=>{
        setEmail(event.target.value)
    },[setEmail])
    const inputPassword = useCallback((event)=>{
        setPassword(event.target.value)
    },[setPassword])
    const inputConfirmPassword = useCallback((event)=>{
        setConfirmPassword(event.target.value)
    },[setConfirmPassword])
    return(
<div>
    <h2>
        アカウント登録
    </h2>
    <TextInput
                    fullWidth={true} label={"username"} multiline={false}
                    required={true} rows={1} value={username}
                    type={"text"} onChange={inputUsername}
    />
    <TextInput
                    fullWidth={true} label={"email"} multiline={false}
                    required={true} rows={1} value={email}
                    type={"email"} onChange={inputEmail}
    />
    <TextInput
                    fullWidth={true} label={"パスワード"} multiline={false}
                    required={true} rows={1} value={password}
                    type={"password"} onChange={inputPassword}
    />
    <TextInput
                    fullWidth={true} label={"パスワード再確認"} multiline={false}
                    required={true} rows={1} value={confirmPassword}
                    type={"password"} onChange={inputConfirmPassword}
    />
    <div>
        <PrimaryButton
            label={"アカウントを登録する"}
            onClick={() => dispatch(signUp(username, email, password, confirmPassword))}
        />
    </div>
</div>
    )
}
export default SignUp;