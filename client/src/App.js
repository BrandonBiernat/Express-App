import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.tsx";
import NoPage from "./pages/noPage.tsx";
import Login from "./pages/login.tsx";
import Register from "./pages/register.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '*',
      element: <NoPage />
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;