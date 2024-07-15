import React from 'react'
import { useRoutes } from "react-router-dom";
import LANDINGPAGE from './pages/landing/landingpage';
import LOGIN from './pages/login';
import SIGNUP from './pages/signup';
import CONFIRMATIONPAGE from './pages/confirmationpage';
import CART from './pages/cart';
import FOODNEARBY from './pages/foodnearby';
import FREQUENTLYORDER from './pages/frequentlyorder';
import FAVOURITEVENDOR from './pages/favouritevendor'
import VENDOR from './pages/vendor'

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

          {
            path: "foodnearby",
            element: <FOODNEARBY />,
            index: true,
          },

          {
            path: "frequentlyorder",
            element: <FREQUENTLYORDER />,
            index: true,
          },

          {
            path: "favouritevendor",
            element: <FAVOURITEVENDOR />,
            index: true,
          },

          {
            path: "vendor",
            element: <VENDOR />,
            index: true,
          },
        
    ]);
    return routes;
}

