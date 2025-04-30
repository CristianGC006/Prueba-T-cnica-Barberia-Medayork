import PrincipalPage from "../pages/PrincipalPage";
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
    }
]