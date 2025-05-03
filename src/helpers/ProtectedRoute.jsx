import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    let accessToken = localStorage.getItem("Token");
    return  accessToken ? children : <Navigate to="/"/>;
}
export default ProtectedRoute;