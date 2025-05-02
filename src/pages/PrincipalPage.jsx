import { Link } from "react-router-dom";
import "./principalPage.css";
import Header from "../layout/Header";
const PrincipalPage = () => {
    return(
     <main>
        <Header />
        <Link to="/login">Aparta tu cita ahora</Link>
        <p>¡Bienvenido a nuestra página principal!</p>
     </main>
    )
}
export default PrincipalPage;