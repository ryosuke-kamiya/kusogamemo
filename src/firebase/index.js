import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
import { firebaseConfig } from "./config";


firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth();//ここの型定義が分からないので、js
export const db = firebase.firestore();
export const storage = firebase.storage();
export const FirebaseTimeStamp = firebase.firestore.Timestamp;
