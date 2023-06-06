import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import ProductPage from "../pages/ProductPage";
import Layout from "../components/Layout";
import RegisterPage from "../pages/RegisterPage";
import AccountPage from "../pages/AccountPage";

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
    
    ],
  },

  {
    path:"/login",
    element: <LoginPage /> ,
  },
  {
    path:"/register",
    element: <RegisterPage /> ,
  }
]);

export default router