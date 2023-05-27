import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";


const router = createBrowserRouter([
  // {
  //   path: '',
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <HomePage />,
  //     },
    
  //   ],
  // },
  {
    path:"/",
    element: <HomePage /> ,
  },
  {
    path:"/login",
    element: <LoginPage /> ,
  }
]);

export default router