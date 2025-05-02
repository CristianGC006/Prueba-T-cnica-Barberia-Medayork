import { useNavigate } from "react-router-dom"
import { genericAlert } from "../helpers/functions"

const UserHome = () => {
    let navigate = useNavigate()
    function singOut() {
        localStorage.removeItem('accessToken')
        genericAlert('Éxito', 'Has cerrado sesión correctamente', 'success')
        navigate('/')
    }

    return(
        <section>
            <h1>Hola soy el user Home</h1>
            <p>Bienvenido a tu página de inicio.</p>
            <button onClick={singOut}>Cerrar Sesión</button>
        </section>
    )
}
export default UserHome;