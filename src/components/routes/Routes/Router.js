import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../../layouts/Main/Main';
import Blog from '../../pages/Blog/Blog';
import FAQ from '../../pages/FAQ/FAQ';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Reviews from '../../pages/Reviews/Reviews';
import Services from '../../pages/Services/Services';
import Signup from '../../pages/Signup/Signup';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }

])

export default router;