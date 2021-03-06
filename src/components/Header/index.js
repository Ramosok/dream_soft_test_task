import {useContext} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../../index";
import styles from './header.module.css'
import {EXIT, WORLD_NEWS} from "./data";

export const Header = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <div className={styles.header}>
            {
                user &&
                <div>
                    <div className={styles.user}><img src={user.photoURL} alt=""/><p>{user.displayName}</p></div>
                    <button onClick={() => auth.signOut()}>{EXIT}</button>
                </div>
            }
            <h1 className={styles.tittle}>{WORLD_NEWS}</h1>

        </div>
    );

};

