import { useState, useEffect } from "react";
import AsidePanel from "./AsidePanel";
import BarberCard from "../components/BarberCards";
import ServiceCard from "../components/ServiceCard";
import "./appointmens.css";

const Appointments = () => {
    const [barbers, setBarbers] = useState([]);
    const [services, setServices] = useState([]);
    const [selectedBarberId, setSelectedBarberId] = useState(null);
    const [selectedServiceId, setSelectedServiceId] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    useEffect(() => {
        // Cargar barberos
        fetch("https://barbersfakeapi.onrender.com/barbers")
            .then(response => response.json())
            .then(data => setBarbers(data))
            .catch(error => console.error("Error al cargar barberos:", error));

        // Cargar servicios
        fetch("https://barbersfakeapi.onrender.com/services")
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error("Error al cargar servicios:", error));
    }, []);

    return (
        <main className="home">
            <AsidePanel />
            <div className="appointments-container">
                <h1 className="appointments-title">Reserva tu Cita</h1>
                <section className="appointment-section">
                    <h2>Selecciona tu Barbero</h2>
                    <div className="barbers-grid">
                        {barbers.map(barber => (
                            <BarberCard
                                key={barber.id}
                                barber={barber}
                                isSelected={selectedBarberId === barber.id}
                                onSelect={setSelectedBarberId}
                            />
                        ))}
                    </div>
                </section>

                <section className="appointment-section">
                    <h2>Selecciona el Servicio</h2>
                    <div className="services-grid">
                        {services.map(service => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                isSelected={selectedServiceId === service.id}
                                onSelect={setSelectedServiceId}
                            />
                        ))}
                    </div>
                </section>

                <section className="appointment-section">
                    <h2>Selecciona Fecha y Hora</h2>
                    <div className="datetime-selector">
                        <div className="date-picker">
                            <label>Fecha</label>
                            <input 
                                type="date" 
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                min={new Date().toISOString().split('T')[0]}
                            />
                        </div>
                        <div className="time-picker">
                            <label>Hora</label>
                            <input 
                                type="time" 
                                value={selectedTime}
                                onChange={(e) => setSelectedTime(e.target.value)}
                            />
                        </div>
                    </div>
                </section>

                <button 
                    className="book-button"
                    disabled={!selectedBarberId || !selectedServiceId || !selectedDate || !selectedTime}
                    onClick={() => {
                        // Aquí irá la lógica para reservar la cita
                        console.log('Reservando cita...');
                    }}
                >
                    Reservar Cita
                </button>
            </div>
        </main>
    );
};

export default Appointments;