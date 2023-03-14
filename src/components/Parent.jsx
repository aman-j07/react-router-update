import React, { createContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import ProtectedRoute from "../utils/ProtectedRoute";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./Navbar";
import Profile from "./Profile";
import Settings from "./Settings";
import Signup from "./Signup";
export const AppContext = createContext();
function Parent() {
  const [state, setState] = useState({
    products: [],
    user: undefined,
    users: [{ name: "Aman", email: "aman@gmail.com", password: "Pass@1234" }],
  });

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setState({ ...state, products: data.products });
      });
  }, []);

  const routes = [
    {
      path: "/",
      element: <NavBar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
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
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "/settings",
          element: (
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <>
      <AppContext.Provider value={{ state, setState }}>
        <UserContext.Provider value={{ user: state.user }}>
          <RouterProvider router={router} />
        </UserContext.Provider>
      </AppContext.Provider>
    </>
  );
}

export default Parent;
