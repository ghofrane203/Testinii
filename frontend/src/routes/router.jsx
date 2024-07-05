import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Quiz from "../pages/quiz/Quiz";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/Quiz",
          element: <Quiz/>
      }
      ]
    },
  ]);
  