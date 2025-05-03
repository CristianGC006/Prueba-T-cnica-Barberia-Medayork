import ProtectedRoute from "../helpers/ProtectedRoute";
import PrincipalPage from "../pages/PrincipalPage";
import UserHome from "../pages/UserHome";
import Login from "../pages/auth/Login";

/*Rutas para el flujo de la App*/ 
export let routes=[
    {
        path:"/",
        element: <PrincipalPage/>
    },
    {
        path:"login",
        element:<Login/>
    },
    {
        path:"userHome",
        element:<UserHome/>
    }
]