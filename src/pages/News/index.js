import React, {useCallback, useEffect, useState} from "react";
import {OneNews} from "./OneNews";
import {Loader} from "../../components/Loader";
import {getNews} from "../../api/news";
import styles from './news.module.css';

export const News = () => {

    const [newsList, setNewsList] = useState([]);

    const fetchNews = useCallback(
        async () => {
            try {
                const data = await getNews() || [];

                setNewsList(data)

            } catch (e) {
                console.log(e);
            }
        },
        [],
    );

    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

    const {news} = newsList

    return (
        <div className={styles.news_container}>
            {news ? news.map(({url, title, description, author, image, published}) =>
                    <OneNews
                        key={title}
                        title={title}
                        description={description}
                        author={author}
                        image={image}
                        published={published}
                        url={url}
                    />) :
                <Loader/>
            }
        </div>
    );
};

