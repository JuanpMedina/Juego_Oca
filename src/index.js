import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Inicio from './Usuario/Pin/pin';
import Home from './Admin/Home/home';
import Preguntas from './Admin/Preguntas/preguntas';
import Retos from './Admin/Retos/retos';
import Pin from './Usuario/Pin/pin'
import Nombre from './Usuario/Nombre/nombre'
import Participantes from './Usuario/Participantes/participantes';
import Juego from './Usuario/Juego/app';
import Tablero from './Usuario/Tablero/tablero'
import Oca from './Usuario/Ta/oca'
import Login from './Usuario/Login/login'
import Navbar from './Navbar/navbar'
import Preg from './Admin/Preguntas/preg'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/navbar",
    element: <Navbar />,
  }, 
  {
    path: "/preg",
    element: <Preg />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/preguntas",
    element: <Preguntas />,
  },
  {
    path: "/retos",
    element: <Retos />,
  },
  {
    path: "/pin",
    element: <Pin />,
  },
  {
    path: "/nombre",
    element: <Nombre />,
  },
  {
    path: "/participantes",
    element: <Participantes />,
  },
  {
    path: "/juego",
    element: <Juego />,
  },
  {
    path: "/tablero",
    element: <Tablero />,
  },
  {
    path: "/oca",
    element: <Oca />,
  }
  ,
  {
    path: "/login",
    element: <Login />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
