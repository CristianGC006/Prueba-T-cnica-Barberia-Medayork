import ProtectedRoute from "../helpers/ProtectedRoute";
import PrincipalPage from "../pages/PrincipalPage";
import UserHome from "../pages/UserHome";
import Login from "../pages/auth/Login";
import Appointments from "../layout/Appointmens";
import History from "../layout/History";
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
        element:<ProtectedRoute><UserHome/></ProtectedRoute>
    },
    {
        path:"appointments",
        element:<ProtectedRoute><Appointments/></ProtectedRoute>
    },
    {
        path:"history",
        element:<ProtectedRoute><History/></ProtectedRoute>
    },
    
]