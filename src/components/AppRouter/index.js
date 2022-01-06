import {useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {useAuthState} from "react-firebase-hooks/auth";
import {privateRoutes, publicRoutes} from "../../routers";
import {Context} from "../../index";
import {LOGIN_ROUTE, NEWS_ROUTE} from "../../routers/routesName";

export const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} />
                )}
                <Redirect to={NEWS_ROUTE}/>
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} />
                )}
                <Redirect to={LOGIN_ROUTE}/>
            </Switch>
        )
};
