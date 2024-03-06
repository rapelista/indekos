import { HomePage } from "@/pages/HomePage";
import { LoginPage } from "@/pages/LoginPage";
import { LogoutPage } from "@/pages/LogoutPage";
import { createHashRouter } from "react-router-dom";

export const router = createHashRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/dashboard",
        element: <>Dashboard</>,
    },
    {
        path: "/logout",
        element: <LogoutPage />,
    },
]);
