import { useState, useEffect } from 'react';
import '../layout/AsidePanel.css'
import './history.css'
import AsidePanel from "../layout/AsidePanel"
import { genericAlert } from "../helpers/functions";

const History = () => {
    const [appointments, setAppointments] = useState([]);
    const user = JSON.parse(localStorage.getItem('customer'));

    useEffect(() => {
        // Obtener citas del usuario desde la API
        fetch(`https://barbersfakeapi.onrender.com/appointments?customerId=${user.id}`)
            .then(response => response.json())
            .then(data => setAppointments(data))
            .catch(error => {
                console.error("Error al cargar historial:", error);
                genericAlert("Error", "No se pudo cargar el historial", "error");
            });
    }, [user.id]);

    return (  
        <main className="home">
            <AsidePanel/>
            <div className="history-container">
                <h1 className="history-title">Historial de Citas</h1>
                
                {appointments.length === 0 ? (
                    <p className="no-appointments">No tienes citas registradas</p>
                ) : (
                    <div className="appointments-list">
                        {appointments.map(appointment => (
                            <div key={appointment.id} className="appointment-card">
                                <div className="appointment-info">
                                    <h3>{new Date(appointment.date).toLocaleDateString()}</h3>
                                    <p>Hora: {appointment.time}</p>
                                    <p>Barbero: {appointment.barberName}</p>
                                    <p>Servicio: {appointment.serviceName}</p>
                                    <p>Estado: {appointment.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}
export default History;