import React from 'react'
import { useRoutes } from "react-router-dom";
import LANDINGPAGE from './pages/landing/landingpage';
import LOGIN from './pages/login';
import SIGNUP from './pages/signup';
import CONFIRMATIONPAGE from './pages/confirmationpage';
import CART from './pages/cart';

export default function Router() {
    const routes = useRoutes([
        {
            path: "/",
            element: <LANDINGPAGE />,
            index: true,
          },

          {
            path: "login",
            element: <LOGIN />,
            index: true,
          },

          {
            path: "signup",
            element: <SIGNUP />,
            index: true,
          },

          {
            path: "confirmationpage",
            element: <CONFIRMATIONPAGE />,
            index: true,
          },

          {
            path: "cart",
            element: <CART />,
            index: true,
          },
        
    ]);
    return routes;
}

