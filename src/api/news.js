import {sendRequest} from './index';

/*export const getNews = () => {
    return sendRequest(`latest-news?language=eu&`,'apiKey=LP2vsKYx_iDef8H_ElrfDWpKQ1aEGCCu1xFGioULxnwz_4so');
};*/
export const getCategories = categories => {
    return sendRequest(`latest-news?category=${categories}&`,'apiKey=LP2vsKYx_iDef8H_ElrfDWpKQ1aEGCCu1xFGioULxnwz_4so');
};
//Тут должны были быть остальные методы для CRUD операций, но API не позволяет с ними работать, поэтому просто заготовки
/*
export const getOneNews = id => {
    return sendRequest();
};

export const deleteNews = id => {
    return sendRequest(, 'DELETE');
};

export const createNewNews = (data) => {
    return sendRequest('', 'POST', data);
};

export const editNews = (id, data) => {
    return sendRequest(``, 'PUT', data);
};*/
