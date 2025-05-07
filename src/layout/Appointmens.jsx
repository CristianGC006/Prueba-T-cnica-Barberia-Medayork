import { useState, useEffect } from "react";
import AsidePanel from "./AsidePanel";
import BarberCard from "../components/BarberCards";
import ServiceCard from "../components/ServiceCard";
import "./appointmens.css";
import { genericAlert } from "../helpers/functions";
import { Navigate } from "react-router-dom";

const Appointments = () => {
  const [barbers, setBarbers] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedBarberId, setSelectedBarberId] = useState(null);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [todaysAppointments, setTodaysAppointments] = useState([]);

  useEffect(() => {
    // Cargar barberos
    fetch("https://barbersfakeapi.onrender.com/barbers")
      .then((response) => response.json())
      .then((data) => setBarbers(data))
      .catch((error) => console.error("Error al cargar barberos:", error));

    // Cargar servicios
    fetch("https://barbersfakeapi.onrender.com/services")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error al cargar servicios:", error));
    // Cargar citas del día
    fetch("https://barbersfakeapi.onrender.com/appointments")
      .then((response) => response.json())
      .then((data) => {
        const today = new Date().toISOString().split("T")[0];
        const filtered = data.filter(app => app.date === today);
        setTodaysAppointments(filtered);
      })
      .catch((error) => console.error("Error al cargar citas:", error));
  }, []);

  //Registro de citas en  su historial
  const handleBookAppointment = () => {
    const user = JSON.parse(localStorage.getItem("customer"));
    const selectedBarber = barbers.find((b) => b.id === selectedBarberId);
    const selectedService = services.find((s) => s.id === selectedServiceId);

    const newAppointment = {
      customerId: user.id,
      barberId: selectedBarberId,
      barberName: selectedBarber.name,
      serviceId: selectedServiceId,
      serviceName: selectedService.name,
      date: selectedDate,
      time: selectedTime,
      status: "Confirmada",
    };

    fetch("https://barbersfakeapi.onrender.com/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAppointment),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Error al reservar cita");
        return response.json();
      })
      .then((data) => {
        genericAlert("Éxito", "Cita reservada con éxito", "success");
        console.log("Cita reservada:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
        genericAlert("Error", "No se pudo reservar la cita", "error");
      });
  };

  return (
    <main className="home">
      <AsidePanel />
      <div className="appointments-container">
        <h1 className="appointments-title">Reserva tu Cita</h1>
        
        {/* Listado de citas del día */}
        <section className="appointment-section">
          <h2>Citas del Día</h2>
          <ul>
            {todaysAppointments.length === 0 ? (
              <li>No hay citas para hoy.</li>
            ) : (
              todaysAppointments.map((app) => (
                <li key={app.id}>
                  {app.time} - {app.customerName} con {app.barberName} ({app.serviceName})
                </li>
              ))
            )}
          </ul>
        </section>
        <section className="appointment-section">
          <h2>Selecciona tu Barbero</h2>
          <div className="barbers-grid">
            {barbers.map((barber) => (
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
            {services.map((service) => (
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
                min={new Date().toISOString().split("T")[0]}
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
          disabled={
            !selectedBarberId ||
            !selectedServiceId ||
            !selectedDate ||
            !selectedTime
          }
          onClick={handleBookAppointment}
        >
          Reservar Cita
        </button>
      </div>
    </main>
  );
};

export default Appointments;

