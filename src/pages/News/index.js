import {useCallback, useEffect, useState} from "react";
import {OneNews} from "./OneNews";
import {Button} from "../../components/Button";
import {Loader} from "../../components/Loader";
import {getCategories} from "../../api/news";
import {categoriesList} from "./data";
import styles from './news.module.css';

export const News = () => {
    const [newsList, setNewsList] = useState([]);
    const [categories, setCategories] = useState('')

    const {news} = newsList

    const handleCategories = (event) => {
        setCategories(event.target.name)
    }

    const fetchNews = useCallback(
        async () => {
            try {
                const data = await getCategories(categories);

                setNewsList(data)

            } catch (e) {
                console.log(e);
            }
        },
        [categories],
    );

    useEffect(() => {
        fetchNews();
    }, [fetchNews]);


    return (

        <div className={styles.news_container}>
            {categoriesList.map(categoriesItem =>
                <Button
                    key={categoriesItem}
                    tittle={categoriesItem}
                    handleUser={handleCategories}
                />)}

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

