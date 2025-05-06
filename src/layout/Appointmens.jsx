import AsidePanel from "./AsidePanel";
// import {useEffect, useState } from "react";
const Appointments = () => {
    // const [barber, setBarber] = useState([])

    // let apiUrlBarber="https://barbersfakeapi.onrender.com/barbers";

    // useEffect(()=>{
    //     fetch(apiUrlBarber)
    //     .then(response=> response.json())
    //     .then(data=>setBarber(data))
    //     .catch(error=>console.error("Error al cargar barberos:", error))
    // })
    return (
        <main className="home">
        <AsidePanel/>
        <div className="content-container">
            <h1>Gestión de Citas</h1>
            <p>Aquí podrás gestionar tus citas de barbería.</p>
            {/* Aquí irá el contenido de la página de citas */}
        </div>
    </main>
    );
} 
export default Appointments;