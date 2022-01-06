import {useContext} from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Header} from "./components/Header";
import {AppRouter} from "./components/AppRouter";
import {Loyout} from "./components/Loyout";


export const App = () => {
    const {auth} = useContext(Context)
    useAuthState(auth)

    return (
        <BrowserRouter>
            <Loyout>
                <Header/>
                <AppRouter/>
            </Loyout>
        </BrowserRouter>
    );
};



