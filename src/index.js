import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Home/home';
import Usuarios from './Usuarios/crud';
import Preguntas from './Preguntas/preguntas';
import Retos from './Retos/retos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },  
  {
    path: "/usuarios",
    element: <Usuarios />,
  },
  {
    path: "/preguntas",
    element: <Preguntas />,
  },
  {
    path: "/retos",
    element: <Retos />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
