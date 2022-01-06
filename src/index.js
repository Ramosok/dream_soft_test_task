import {createContext} from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase";
import {App} from "./App";
import styles from './index.module.css'


firebase.initializeApp({
        apiKey: "AIzaSyCm5ISM4KXXWpswMeu013WqTcom8xMD3Ms",
        authDomain: "test-task-7a219.firebaseapp.com",
        databaseURL: "https://test-task-7a219-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "test-task-7a219",
        storageBucket: "test-task-7a219.appspot.com",
        messagingSenderId: "243228760937",
        appId: "1:243228760937:web:7056a02eef7eb8a5ba7bf8"
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);