import '../layout/AsidePanel.css'
import './history.css'
import AsidePanel from "../layout/AsidePanel"

const History = () => {
    return(  
        <main className="home">
            <AsidePanel/>
            <div className="content-container">
                <h1>Historial de Visitas</h1>
                <p>Aquí podrás ver tu historial de visitas a nuestras barberías.</p>
                {/* Aquí irá el contenido de la página de historial */}
            </div>
        </main>
    )
}
export default History;