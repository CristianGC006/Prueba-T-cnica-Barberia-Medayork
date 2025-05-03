import { Navigate } from "react-router-dom";

const ProtectedRoute = ({security}) => {
    let accessToken = localStorage.getItem("Token");
    return  accessToken ? security : <Navigate to="/"/>
    ;
}
export default ProtectedRoute;