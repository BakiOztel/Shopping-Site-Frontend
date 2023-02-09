import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../Redux/authSlice.js";
const AuthRoute = () => {
    const accessToken = useSelector(selectCurrentToken);
    const location = useLocation();
    return (
        accessToken ? <Outlet /> : <Navigate to="/login" state={{ location: location }} replace />
    )
}

export default AuthRoute;