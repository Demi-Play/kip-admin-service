import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { Films } from "./components/menuUI/Films";
import { Censors } from "./components/menuUI/Censors";
import { Persons } from "./components/menuUI/Persons";
import { Awards } from "./components/menuUI/Awards";
// import authProvider from "./authProvider";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "films",
    element: <Films />,
  },
  {
    path: "censors",
    element: <Censors />,
  },
  {
    path: "persons",
    element: <Persons />,
  },
  {
    path: "selections",
    element: <Awards />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);