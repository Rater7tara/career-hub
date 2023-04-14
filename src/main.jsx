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
import Statistics from './components/Statistics/Statistics';
import JobApply from './components/JobApply/JobApply';
import Blog from './components/Blog/Blog';
import Details from './components/Details/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHome></MainHome>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "Details/:id",
        element: <Details></Details>,

        loader: async ({params}) => {
          const res = await fetch("/data2-fea.json");
          const jobs = await res.json();

          const findJobs = jobs.find(job => job.id == params.id);
          return findJobs;
        }
      
      },
      {
        path: "JobApply",
        element: <JobApply></JobApply>,
        // loader: jobLoader,
      },
      {
        path: "Blog",
        element: <Blog></Blog>,
      },
      {
        path: "Details/:id",
        element: <Details></Details>,
      },
      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);