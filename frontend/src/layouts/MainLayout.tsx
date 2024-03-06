import { Navbar } from "@/components/Navbar";
import { Navigate, Outlet } from "react-router";

export const MainLayout = () => {
    const token = localStorage.getItem("token");

    return token ? (
        <div className="min-h-screen min-w-screen">
            <Navbar />
            <div className="container mt-6">
                <Outlet />
            </div>
        </div>
    ) : (
        <Navigate to={"/login"} />
    );
};
