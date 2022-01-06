import {sendRequest} from './index';

export const getNews = () => {
    return sendRequest('latest-news?language=eu&','apiKey=LP2vsKYx_iDef8H_ElrfDWpKQ1aEGCCu1xFGioULxnwz_4so');
};

/*
export const getNews = id => {
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
