
import AsidePanel from "../layout/AsidePanel"
import '../layout/AsidePanel.css'
import './UserHome.css'
const UserHome = () => {
 let user = JSON.parse(localStorage.getItem("customer"));
    return(  
        <main className="home">
            <AsidePanel/>
            <div className="home-container">
                <h1 className="home-title">Bienvenido a tu perfil <span className="user-name">{user.name}</span></h1>
                    <h2 className="sentence-haircut">¿Que corte deseas hacerte hoy ?</h2>
            </div>
        </main>
    )
}
export default UserHome;