import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import ProtectedRoute from "../utils/ProtectedRoute";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Settings from "./Settings";
import Signup from "./Signup";

function Parent() {
  const [state, setState] = useState({ user: undefined, users: [] });

  const routes = [
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/profile",
          element: <ProtectedRoute><Profile /></ProtectedRoute>,
        },
        {
          path: "/settings",
          element: <ProtectedRoute><Settings /></ProtectedRoute>,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <>
      <UserContext.Provider value={{ user: state.user, users: state.users }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
}

export default Parent;