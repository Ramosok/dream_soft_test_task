import {useContext} from 'react';
import {Context} from "../index";
import firebase from "firebase";

import styles from './login.module.css'

export const Login = () => {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <div className={styles.login}>
            <button onClick={login}>Войти с помощью Google</button>
        </div>
    );
};

