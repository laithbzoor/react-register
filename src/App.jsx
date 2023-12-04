import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from './layouts/Layout';
import Usercategories from './comp/web/Usercategories';
import Home from './comp/web/Home';
import DashboardLayout from './layouts/DashboardLayout';
import Homeadmin from './comp/admin/Homeadmin';
import Admincategories from './comp/admin/Admincategories';
import Register from './comp/web/Register';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:'register',
        element:<Register/>
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'categories',
        element: <Usercategories />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [{
      path: 'home',
      element: <Homeadmin />
    },
    {
      path: 'admincategories',
      element: <Admincategories />
    }]
  },
]);

function App() {

  return (
    <RouterProvider router={router} />

  )
}

export default App
