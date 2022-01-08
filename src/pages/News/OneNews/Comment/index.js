import {useContext} from "react";
import {Context} from "../../../../index";

import styles from './comment.module.css'

export const Comment = ({displayName, text, title}) => {
    const {firestore} = useContext(Context)

    const delMessage = async () => {
        console.log(firestore.collection(title).doc('rK9pSetuzjNDu3DZuu9b').update({
            createdAt: '',
            displayName: "",
            text: "",
            uid: ""
        }));
    }

    return (
        <div className={styles.comment_container}>
            <div>{text}</div>
            <div className={styles.author}>Author - {displayName}</div>
            <button onClick={delMessage}>Del</button>
        </div>
    );
};

