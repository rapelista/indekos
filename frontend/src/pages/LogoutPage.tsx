import { Navigate } from "react-router";

export const LogoutPage = () => {
    if (localStorage.length > 0) {
        localStorage.clear();
    }

    return <Navigate to={"/login"} />;
};
