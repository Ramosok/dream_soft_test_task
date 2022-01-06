import React, {useCallback, useEffect, useState} from "react";
import {OneNews} from "./OneNews";
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
            {news && news.map(({id, title, description, author, image, published}) =>
                <OneNews
                    key={id}
                    title={title}
                    description={description}
                    author={author}
                    image={image}
                    published={published}
                />)}
        </div>
    );

};

