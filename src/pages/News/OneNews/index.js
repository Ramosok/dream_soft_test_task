import {Like} from "../../../components/Like";
import {FormatDate} from "../../../helpers";
import styles from './oneNews.module.css'


export const OneNews = ({title, description, author, image, published}) => {


    return (
        <div className={styles.news_container}>
            <h2>{title}</h2>
            <div>
                <div className={styles.inner_container}>
                    <img className={styles.news_img} src={image} alt=""/>
                    <p>{description}</p>
                </div>
                <p className={styles.inline_block}>Author {author}</p>
                <p className={styles.inline_block}>{FormatDate(published)}</p>
            </div>
            <Like/>
        </div>
    );
};

