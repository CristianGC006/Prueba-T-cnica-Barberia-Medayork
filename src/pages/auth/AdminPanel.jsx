import React, { useState, useEffect } from "react";
import "./AdminPanel.css";
import { useNavigate } from "react-router-dom";
import { genericAlert } from "../../helpers/functions";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("appointments");
  const [appointments, setAppointments] = useState([]);
  const [barbers, setBarbers] = useState([]);
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  
  const admin = JSON.parse(localStorage.getItem("admin"));

  useEffect(() => {
    // Cargar datos al iniciar
    fetchAppointments();
    fetchBarbers();
    fetchServices();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("https://barbersfakeapi.onrender.com/appointments");
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error("Error al cargar citas:", error);
    }
  };

  const fetchBarbers = async () => {
    try {
      const response = await fetch("https://barbersfakeapi.onrender.com/barbers");
      const data = await response.json();
      setBarbers(data);
    } catch (error) {
      console.error("Error al cargar barberos:", error);
    }
  };

  const fetchServices = async () => {
    try {
      const response = await fetch("https://barbersfakeapi.onrender.com/services");
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error("Error al cargar servicios:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("admin");
    genericAlert("Éxito", "Sesión cerrada correctamente", "success");
    navigate("/");
  };

  const updateAppointmentStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`https://barbersfakeapi.onrender.com/appointments/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (response.ok) {
        fetchAppointments(); // Recargar citas
        genericAlert("Éxito", "Estado actualizado correctamente", "success");
      } else {
        genericAlert("Error", "No se pudo actualizar el estado", "error");
      }
    } catch (error) {
      console.error("Error al actualizar cita:", error);
      genericAlert("Error", "Error de conexión", "error");
    }
  };

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <div className="admin-profile">
          <div className="admin-avatar">
            <span>{admin.username}</span>
          </div>
          <p>Administrador</p>
        </div>
        
        <nav className="admin-nav">
          <button 
            className={`nav-item ${activeTab === "appointments" ? "active" : ""}`}
            onClick={() => setActiveTab("appointments")}
          >
            Citas
          </button>
          <button 
            className={`nav-item ${activeTab === "barbers" ? "active" : ""}`}
            onClick={() => setActiveTab("barbers")}
          >
            Barberos
          </button>
          <button 
            className={`nav-item ${activeTab === "services" ? "active" : ""}`}
            onClick={() => setActiveTab("services")}
          >
            Servicios
          </button>
          <button 
            className="nav-item logout"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </nav>
      </aside>
      
      <main className="admin-content">
        <header className="admin-header">
          <h1>Panel de Administración</h1>
        </header>
        
        {activeTab === "appointments" && (
          <div className="admin-section">
            <h2>Gestión de Citas</h2>
            <div className="appointments-table">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Cliente</th>
                    <th>Barbero</th>
                    <th>Servicio</th>
                    <th>Precio</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map(appointment => (
                    <tr key={appointment.id}>
                      <td>#{appointment.id}</td>
                      <td>{new Date(appointment.date).toLocaleDateString()}</td>
                      <td>{appointment.time}</td>
                      <td>{appointment.name || "Cliente"}</td>
                      <td>{appointment.phone || "N/A"}</td>
                      <td>{appointment.barberName}</td>
                      <td>{appointment.serviceName}</td>
                      <td>${services.find(s => s.id === appointment.serviceId)?.price || "N/A"}</td>
                      <td>
                        <span className={`status-badge ${appointment.status.toLowerCase()}`}>
                          {appointment.status}
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button 
                            onClick={() => updateAppointmentStatus(appointment.id, "Completada")}
                            className="complete-btn"
                            disabled={appointment.status === "Completada" || appointment.status === "Cancelada"}
                          >
                            Completar
                          </button>
                          <button 
                            onClick={() => updateAppointmentStatus(appointment.id, "Cancelada")}
                            className="cancel-btn"
                            disabled={appointment.status === "Cancelada"}
                          >
                            Cancelar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {activeTab === "barbers" && (
          <div className="admin-section">
            <h2>Gestión de Barberos</h2>
            <div className="barbers-grid admin-grid">
              {barbers.map(barber => (
                <div key={barber.id} className="admin-card">
                  <h3>{barber.name}</h3>
                  <p>{barber.specialty}</p>
                  <div className="admin-card-actions">
                    <button className="edit-btn">Editar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === "services" && (
          <div className="admin-section">
            <h2>Gestión de Servicios</h2>
            <div className="services-grid admin-grid">
              {services.map(service => (
                <div key={service.id} className="admin-card">
                  <h3>{service.name}</h3>
                  <p className="price">${service.price}</p>
                  <p>{service.description}</p>
                  <div className="admin-card-actions">
                    <button className="edit-btn">Editar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
export default AdminPanel;