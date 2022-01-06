import styles from './loyout.module.css';

export const Loyout = ({children}) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
};

