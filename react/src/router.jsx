import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Login from "./views/Login";
import Dasboard from "./views/Dasboard";
import Survey from "./views/Survey";
import Signup from "./views/Signup";
import GuestLayout from "./views/components/GuestLayout";


const router = createBrowserRouter([
  {
      path: "/",
      element: <Dasboard />,
  },
  {
    path: "/surveys",
    element: <Survey />,
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ]
  },
]);

export default router;