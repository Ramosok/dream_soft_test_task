import {LOGIN_ROUTE, NEWS_ROUTE} from "./routesName";
import {Login} from "../Login";
import {News} from "../pages/News";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: NEWS_ROUTE,
        Component: News
    }
]