import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../../layouts/Main/Main';
import Blog from '../../pages/Blog/Blog';
import Edit from '../../pages/Edit/Edit';
import Error from '../../pages/Error/Error';
import FAQ from '../../pages/FAQ/FAQ';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Reviews from '../../pages/Reviews/Reviews';
import ServiceDetails from '../../pages/ServiceDetails/ServiceDetails';
import Services from '../../pages/Services/Services';
import Signup from '../../pages/Signup/Signup';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';

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
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
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
            {
                path: '/edit-review',
                element: <Edit></Edit>
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }

])

export default router;