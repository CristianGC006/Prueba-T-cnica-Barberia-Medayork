import './header.css'
const Header = () => {
    return(
        <header className="header">
      <div className="header-logo">
        <img
          src={"src/assets/logo.png"} 
          alt="barbers medayork Logo"
          className="logo"
        />
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#services">SERVICIOS</a></li>
          <li className="nav-item"><a href="#barberias">BARBERÍAS</a></li>
          <li className="nav-item"><a href="#reservas">RESERVAS</a></li>
        </ul>
      </nav>
    </header>
    )
}
export default Header;