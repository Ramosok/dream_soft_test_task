import {useContext, useState} from "react";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {LIKE} from "./data";
import styles from './like.module.css'

export const Like = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    const [userId, setUserId] = useState([])

    const handleLike = () => {
        if (userId.find(() => user.uid)) {
            return
        }
        setUserId([...userId, user.uid]);
    }

    return (
        <div>
            <div>{userId.length}</div>
            <button type="button" onClick={handleLike}>{LIKE}</button>
        </div>
    );
};
