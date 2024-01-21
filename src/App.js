import React, { useEffect } from "react";
import "./App.css";
// components
import Navbar from "./components/Navbar";
// pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
// libraries
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
]);

const App = () => {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
