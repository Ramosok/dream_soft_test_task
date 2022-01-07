import styles from './comment.module.css'

export const Comment = ({displayName, text}) => {

    return (
        <div className={styles.comment_container}>
            <div>{text}</div>
            <div className={styles.author}>Author - {displayName}</div>
        </div>
    );
};

