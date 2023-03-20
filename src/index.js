import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Inicio from './Homepage/homepage';
import Home from './Admin/Home/home';
import Usuarios from './Admin/Usuarios/crud';
import Preguntas from './Admin/Preguntas/preguntas';
import Retos from './Admin/Retos/retos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/home",
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
