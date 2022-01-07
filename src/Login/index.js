import {useContext} from 'react';
import {Context} from "../index";
import firebase from "firebase";
import {LOG_IN_USING_GOOGLE} from "./data";

import styles from './login.module.css'

export const Login = () => {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
    }

    return (
        <div className={styles.login}>
            <button className={styles.btn} onClick={login}>{LOG_IN_USING_GOOGLE}</button>
        </div>
    );
};

