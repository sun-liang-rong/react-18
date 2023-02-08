import React from "react";
import { Navigate } from 'react-router-dom';
import Loadable from 'react-loadable';
const loadingTop = () => <div>加载中。。。<div/></div>
const Home = Loadable({
    loader: () => import('@/page/home/Home'),
    loading: loadingTop
})
const Login = Loadable({
    loader: () => import('@/page/login/Login'),
    loading: loadingTop
})
export type routesItems = {
    path: string;
    element: React.ReactElement;
    children?: routesItems[];
}
export const routerConfig: routesItems [] = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: 'login',
        element: <Login/>
    }
]