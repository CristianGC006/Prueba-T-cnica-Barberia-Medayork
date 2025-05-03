
import { useNavigate } from "react-router-dom";
import OptionsHome from "../components/OptionsHome";
import { genericAlert } from "../helpers/functions";
import "./AsidePanel.css";

const AsidePanel = () => {
    let navigate = useNavigate()
    function singOut() {
        localStorage.removeItem('accessToken')
        genericAlert('Éxito', 'Has cerrado sesión correctamente', 'success')
        navigate('/')
    }

    return(
        <aside>
            <section className="container-elements-aside">
                <div className="header-aside-img-container">
                    <img src="" alt="" />
                </div>
                <div className="info-user-aside">
                    <h1 className="tittle-aside">Bienvenido (Nombre del usuario) a Barbers <br />Medayork</h1>
                    <p className="text-aside">Tu estilo, nuestra pasión.</p>
                </div>
                <OptionsHome type={"button"} content={"Citas"} onclick={"#"}/>
                <OptionsHome type={"button"} content={"cerrar Seccion"} onclick={"#"}/>
                <OptionsHome type={"button"} content={"Historial"} onclick={"#"}/>
                <OptionsHome type={"button"} content={"Cerrar Sesion"} onclick={singOut}/>
            </section>
        </aside>
    )

}
export default AsidePanel;