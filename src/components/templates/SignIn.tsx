import React, { useState, useCallback } from "react";
import {TextInput, PrimaryButton} from "../atoms";
import { TextFieldProps } from "../atoms/TextInput";
import { signIn } from "../../reducks/users/operations";
import { useDispatch } from "react-redux";

const SignIn = (props: TextFieldProps) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState(String),
     [password, setPassword] = useState(String);


    const inputEmail = useCallback((event)=>{
        setEmail(event.target.value)
    },[setEmail])
    const inputPassword = useCallback((event)=>{
        setPassword(event.target.value)
    },[setPassword])

    return(
<div>
    <h2>
        サインイン
    </h2>
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
    <div>
        <PrimaryButton
            label={"サインイン"}
            onClick={() => dispatch(signIn(email, password))}
        />
    </div>
</div>
    )
}
export default SignIn;