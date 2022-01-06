// const baseUrl = process.env.REACT_APP_API_URL;
const baseUrl = 'https://api.currentsapi.services/v1/';
const apiKey = 'apiKey=LP2vsKYx_iDef8H_ElrfDWpKQ1aEGCCu1xFGioULxnwz_4so'

export const sendRequest = async (
    path,
    apiKey,
    method = 'GET',
    body = {},
    headers = {},
) => {
    const requestUrl = `${baseUrl}${path}${apiKey}`;
    const options = {
        method,
        headers: {
            ...headers,
        }
    };
    console.log(requestUrl)

    if (method === 'POST' || method === 'PUT') {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(requestUrl, options);

    const contentType = response.headers.get('Content-Type');

    if (contentType.includes('application/json')) {
        return await response.json();
    }

    throw new Error('Unexpected content type');
};
