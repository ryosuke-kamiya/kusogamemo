import { signInAction } from "./actions"
import { CallHistoryMethodAction, push } from "connected-react-router";
import { auth, db, FirebaseTimeStamp } from "../../firebase";


export const signIn = (email: string, password: string) => {
    return async (dispatch:any) => {
       //validation
       if(email === "" || password === ""){
            alert("必須項目が入力されていません")
            return false
        }
        auth.signInWithEmailAndPassword(email, password)
        .then(result => {
            const user = result.user
            if (user) {
                const uid = user.uid
                db.collection('users').doc(uid).get()
                .then(snapshot => {
                    const data = snapshot.data()
                    if(data){
                        dispatch(signInAction({
                            isSignedIn: true,
                            role: data.role,
                            uid: uid,
                            username: data.username
                        }))
                    }
                    dispatch(push('/'))
                })
            }
        })
    }
}

export const signUp = (username: string, email: string, password: string, confirmPassword: string) => {
    return async (dispatch: (arg0: CallHistoryMethodAction<[string, unknown?]>) => void) => {
        //validation
        if(username === "" || email === "" || password === "" || confirmPassword === ""){
            alert("必須項目が入力されていません")
            return false
        }
        if (password !== confirmPassword) {
            alert("パスワードが一致しません")
            return false
        }
        return auth.createUserWithEmailAndPassword(email, password)
        .then((result: any) => {
            const user = result.user

            if(user){
                const uid = user.uid
                const timestamp = FirebaseTimeStamp.now()

                const userInitialData = {
                    created_at: timestamp,
                    email: email,
                    role: "customer",
                    uid: uid,
                    updated_at: timestamp,
                    username: username
                }
                db.collection('users').doc(uid).set(userInitialData)
                .then(()=>{
                    dispatch(push('/'))
                })
            }
        })
    }
}