import { MainLayout } from "@/layouts/MainLayout";
import { DashboardPage } from "@/pages/DashboardPage";
import { FloorsPage } from "@/pages/FloorsPage";
import { FurnituresPage } from "@/pages/FurnituresPage";
import { HomePage } from "@/pages/HomePage";
import { LoginPage } from "@/pages/LoginPage";
import { LogoutPage } from "@/pages/LogoutPage";
import { RoomsPage } from "@/pages/RoomsPage";
import { SettingsPage } from "@/pages/SettingsPage";
import { TenantsPage } from "@/pages/TenantsPage";
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
        element: <MainLayout />,
        children: [
            {
                path: "/dashboard",
                element: <DashboardPage />,
            },
            {
                path: "/tenants",
                element: <TenantsPage />,
            },
            {
                path: "/rooms",
                element: <RoomsPage />,
            },
            {
                path: "/floors",
                element: <FloorsPage />,
            },
            {
                path: "/furnitures",
                element: <FurnituresPage />,
            },
            {
                path: "/settings",
                element: <SettingsPage />,
            },
            {
                path: "/my-profile",
                element: <>My Profile</>,
            },
            {
                path: "/my-profile/settings",
                element: <>My Profile | Settings</>,
            },
        ],
    },
    {
        path: "/logout",
        element: <LogoutPage />,
    },
]);
