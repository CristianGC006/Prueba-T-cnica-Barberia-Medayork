
import AsidePanel from "../layout/AsidePanel"
import '../layout/AsidePanel.css'
import './UserHome.css'
const UserHome = () => {
    
    return(
        <main className="home">
            <AsidePanel/>
            <h1>Hola soy el user Home</h1>
            <p>Bienvenido a tu página de inicio.</p>
        </main>
    )
}
export default UserHome;