import React from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import MainHomePage from '../pages/home/MainHomePage';
import LoginPage from '../pages/login/LoginPage';
import App from '../App';
export const routerBuilder = () => {
  const childRoutes = (): RouteObject[] => {
    return [
      {
        path: '/',
        element: <MainHomePage></MainHomePage>,
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>,
      },
    ];
  };
  const router: RouteObject[] = [{ element: <App></App>, children: childRoutes() }];
  return createBrowserRouter(router);
};
