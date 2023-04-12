import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import MainHome from './components/MainHome/MainHome';
import Details from './components/Details/Details';
import JobApply from './components/JobApply/JobApply';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHome></MainHome>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "Details",
        element: <Details></Details>,
      },
      {
        path: "JobApply",
        element: <JobApply></JobApply>,
      },
      {
        path: "Blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);