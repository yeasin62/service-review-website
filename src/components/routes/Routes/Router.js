import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Router = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:
        },

    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Router;