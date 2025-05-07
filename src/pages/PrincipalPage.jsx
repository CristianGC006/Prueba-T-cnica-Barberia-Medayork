import { Link } from "react-router-dom";
import "./principalPage.css";
import Header from "../layout/Header";
import james from "../assets/james.jpg";
import david from "../assets/david.jpg";
import carlos from "../assets/carlos.jpg";
import React from "react";
const PrincipalPage = () => {
    return(
        <main className="principal-page">
        <Header />
        
        {/* Sección Hero */}
        <section className="hero-section">
            <div className="hero-content">
                <h1>Barbers Medayork</h1>
                <p className="hero-subtitle">Estilo y precisión en cada corte</p>
                <Link to="/login" className="cta-button">Aparta tu cita ahora</Link>
            </div>
        </section>

        {/* Sección de Servicios */}
        <section className="services-section">
            <div className="section-title">
                <h2>Nuestros Servicios</h2>
                <p>Ofrecemos la mejor experiencia en cuidado personal</p>
            </div>
            
            <div className="services-grid">
                <div className="service-card">
                    <div className="service-icon">✂️</div>
                    <h3>Corte de Cabello</h3>
                    <p>Cortes modernos y clásicos adaptados a tu estilo personal</p>
                </div>
                
                <div className="service-card">
                    <div className="service-icon">🪒</div>
                    <h3>Afeitado Tradicional</h3>
                    <p>Experimenta el ritual clásico de afeitado con navaja y toalla caliente</p>
                </div>
                
                <div className="service-card">
                    <div className="service-icon">💈</div>
                    <h3>Arreglo de Barba</h3>
                    <p>Dale forma y estilo a tu barba con nuestros expertos barberos</p>
                </div>
                
                <div className="service-card">
                    <div className="service-icon">🧔</div>
                    <h3>Tratamientos Faciales</h3>
                    <p>Cuida tu piel con nuestros tratamientos especializados para hombres</p>
                </div>
            </div>
        </section>

        {/* Sección de Barberos */}
        <section className="barbers-section">
            <div className="section-title">
                <h2>Nuestros Barberos</h2>
                <p>Profesionales con años de experiencia</p>
            </div>
            
            <div className="barbers-preview">
                <div className="barber-preview-card">
                    <img src={james} className="barber-image-placeholder" alt="JamesBarber-img">
                    </img>
                    <h3>James</h3>
                    <p>Especialista en cortes modernos</p>
                </div>
                
                <div className="barber-preview-card">
                    <img src={david} alt=""  className="barber-image-placeholder"></img>
                    <h3>David</h3>
                    <p>Maestro en barbas y afeitados</p>
                </div>
                
                <div className="barber-preview-card">
                    <img src={carlos} alt="" className="barber-image-placeholder">
        
                    </img>
                    <h3>Carlos</h3>
                    <p>Experto en estilos clásicos</p>
                </div>
            </div>
            
            <div className="view-more-container">
                <Link to="/login" className="view-more-button">Ver todos los barberos</Link>
            </div>
        </section>

        {/* Sección de Testimonios */}
        <section className="testimonials-section">
            <div className="section-title">
                <h2>Lo que dicen nuestros clientes</h2>
                <p>Experiencias reales de clientes satisfechos</p>
            </div>
            
            <div className="testimonials-container">
                <div className="testimonial-card">
                    <div className="testimonial-content">
                        <p>"El mejor lugar para un corte de cabello en la ciudad. Siempre salgo satisfecho con el resultado."</p>
                    </div>
                    <div className="testimonial-author">
                        <p className="author-name">Miguel Ángel</p>
                        <p className="author-info">Cliente desde 2020</p>
                    </div>
                </div>
                
                <div className="testimonial-card">
                    <div className="testimonial-content">
                        <p>"Excelente servicio y ambiente. Los barberos son verdaderos profesionales que saben lo que hacen."</p>
                    </div>
                    <div className="testimonial-author">
                        <p className="author-name">Alejandro</p>
                        <p className="author-info">Cliente desde 2021</p>
                    </div>
                </div>
                
                <div className="testimonial-card">
                    <div className="testimonial-content">
                        <p>"Me encanta la atención personalizada y los resultados siempre superan mis expectativas."</p>
                    </div>
                    <div className="testimonial-author">
                        <p className="author-name">Roberto</p>
                        <p className="author-info">Cliente desde 2019</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Sección de Contacto */}
        <section className="contact-section">
            <div className="contact-info">
                <h2>Visítanos</h2>
                <p>Estamos ubicados en el centro de la ciudad</p>
                <p className="address">Calle Principal #123, Medayork</p>
                <p className="phone">Teléfono: (123) 456-7890</p>
                <p className="hours">Horario: Lunes a Sábado de 9:00 AM a 8:00 PM</p>
                <Link to="/login" className="cta-button">Reserva tu cita</Link>
            </div>
        </section>

        {/* Footer */}
        <footer className="main-footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h3>Barbers Medayork</h3>
                    <p>Estilo y precisión en cada corte</p>
                </div>
                
                <div className="footer-links">
                    <h4>Enlaces Rápidos</h4>
                    <ul>
                        <li><Link to="/login">Iniciar Sesión</Link></li>
                        <li><Link to="/login">Reservar Cita</Link></li>
                        <li><Link to="/login">Servicios</Link></li>
                        <li><Link to="/login">Contacto</Link></li>
                    </ul>
                </div>
                
                <div className="footer-social">
                    <h4>Síguenos</h4>
                    <div className="social-icons">
                        <a href="#" className="social-icon">FB</a>
                        <a href="#" className="social-icon">IG</a>
                        <a href="#" className="social-icon">TW</a>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Barbers Medayork. Todos los derechos reservados.</p>
            </div>
        </footer>
     </main>
    )
}
export default PrincipalPage;