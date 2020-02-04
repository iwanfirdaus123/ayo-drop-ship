import React from 'react';
import { Typography } from 'antd';
import { Login } from 'Components/pages';
import { Register } from 'Components/pages';
import { RootAppComponentWithRoutes, RootRouteWithSubRoutes } from 'Components/routes';
// store
import { Actions } from 'Store';

const { Title } = Typography;

/**
 * An array of route configs, with nested objects/arrays in the same structure of the app's routes
 */
const ROUTES = [
   { key: 'ROOT', path: '/', title: 'Login', component: Login, exact: true },
   { key: 'REGISTER', path: '/register', title: 'Register', component: Register, exact: true },
   {
      key: 'APP_ROOT',
      path: '/app',
      title: 'App',
      component: RootAppComponentWithRoutes,
      routes: [
         {
            key: 'APP_INDEX',
            path: '/app',
            title: 'Dashboard',
            component: () => <Title>Welcome to the App</Title>,
            icon: 'dashboard',
            exact: true
         },
         {
            key: 'APP_PROFILE',
            path: '/app/profile',
            title: 'Profile',
            component: () => <Title>Profile Page</Title>,
            icon: 'user',
            exact: true
         },
         {
            key: 'APP_AFFILIATE',
            path: '/app/affliate',
            title: 'Affiliasi',
            component: () => <Title>Affiliasi Page</Title>,
            icon: 'deployment-unit',
            exact: true
         },
         {
            key: 'APP_KOMISI',
            path: '/app/komisi',
            title: 'Komisi',
            component: () => <Title>Komisi Page</Title>,
            icon: 'credit-card',
            exact: true
         },
         {
            key: 'APP_TRAINING',
            path: '/app/training',
            title: 'Training',
            component: () => <Title>Training Page</Title>,
            icon: 'desktop',
            exact: true
         },
         {
            key: 'APP_UPDATE',
            path: '/app/update',
            title: 'Update',
            component: () => <Title>Update Page</Title>,
            icon: 'up-circle',
            exact: true
         },
         {
            key: 'APP_SHOP',
            path: '/app/shop',
            title: 'Shop',
            component: () => <Title>Shop Page</Title>,
            icon: 'shopping-cart',
            exact: true
         }
      ]
   }
];

export default ROUTES;
