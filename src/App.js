import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import React from 'react';
import router from './components/routes/Routes/Router';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
