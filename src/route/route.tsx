import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/auth-layout";
import MainLayout from "../layout/main-layout";
import { Login } from "../auth/login";
import { Signup } from "../auth/signup";
import { ForgotPassword } from "../auth/forgot-password";
import { OtpAuth } from "../auth/otp";
import { Dashboard } from "../page/dashboard/dashboard";
import { Market } from "../page/market/market";
import { Portfolio } from "../page/portfolio/portfolio";
import { Profile } from "../page/profile/profile";
import { Trade } from "../page/trade/trade";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "otp",
        element: <OtpAuth />,
      },
    ],
  },
  {
    path: "/app",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "market",
        element: <Market />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "trade",
        element: <Trade />,
      },
    ],
  },
  {
    path: "*",
    element: <Login />,
  },
]);
