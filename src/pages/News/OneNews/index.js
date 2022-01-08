import firebase from "firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useAuthState} from "react-firebase-hooks/auth";
import {useContext, useState} from "react";
import {Like} from "../../../components/Like";
import {FormatDate} from "../../../helpers";
import {Context} from "../../../index";
import {Comment} from "./Comment";
import styles from './oneNews.module.css'


export const OneNews = ({title, url, description, author, image, published}) => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
   const [messages] = useCollectionData(
        firestore.collection(published)
    );

    const sendMessage = async () => {
        if (value) {
            firestore.collection(published).add({
                uid: user.uid,
                displayName: user.displayName,
                text: value,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        }
        setValue('')
    }

    return (
        <div className={styles.news_container}>
            <h2>{title}</h2>
            <div>
                <div className={styles.inner_container}>
                    <img className={styles.news_img} src={image} alt=""/>
                    <p>{description}</p>
                </div>
                <p className={styles.inline_block}>Author {author}</p>
                <p><a href={url} target="_blank" rel="noreferrer">Источник....</a></p>
                <p className={styles.inline_block}>{FormatDate(published)}</p>
            </div>
            <Like/>
            <input onChange={event => setValue(event.target.value)} type="textarea"/>
            <button onClick={sendMessage}>Add comment</button>
           {messages && messages.map(({displayName, text, createdAt}) =>
                <Comment
                    key={createdAt}
                    displayName={displayName}
                    text={text}
                    title={title}
                />
            )}
        </div>
    );
};

