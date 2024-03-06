import { LoginCard } from "@/components/@login/LoginCard";
import { Navigate } from "react-router";

export const LoginPage = () => {
    const token = localStorage.getItem("token");

    if (token) {
        return <Navigate to={"/dashboard"} />;
    }

    return (
        <div className="flex justify-center items-center min-h-screen min-w-screen">
            <div className="container">
                <LoginCard />
            </div>
        </div>
    );
};
