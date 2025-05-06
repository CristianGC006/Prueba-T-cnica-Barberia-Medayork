// Imports
import { useEffect, useState } from "react";
import "./Login.css";
import ButtonForms from "../../components/ButtonForms";
import { generateToken, genericAlert, redirectionAlert } from "../../helpers/functions";
import { useNavigate } from "react-router-dom";

// Component
const Login = () => {
  // Estado para alternar entre registro e inicio de sesión
  const [showRegister, setShowRegister] = useState(true);
  
  // URL de la API
  const urlApi = "https://barbersfakeapi.onrender.com/customers";
  
  // Estado para el formulario de registro
  const [registerValues, setRegisterValues] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  
  // Estados para el formulario de login
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: ""
  });
  
  // Estado para la lista de clientes
  const [customers, setCustomers] = useState([]);
  
 
  const navigate = useNavigate();

  // Cargar clientes al montar el componente
  useEffect(() => {
    getCustomers();
  }, []);

  // Obtener lista de clientes desde la API
  function getCustomers() {
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch(error => console.error("Error al cargar clientes:", error));
  }
  
  // Buscar cliente por email y password
  // function getCustomer() {
  //   return customers.find(
  //     (item) => item.email === loginValues.email && item.password === loginValues.password
  //   );
  // }
  
 
 

  // Manejar cambios en el formulario de registro
  const handleRegisterChange = (event) => {
    const { name, value } = event.target;
    setRegisterValues({
      ...registerValues,
      [name]: value,
    });
  };

  // Manejar cambios en el formulario de login
  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginValues({
      ...loginValues,
      [name]: value,
    });
  };

  // Alternar entre formularios
  const toggleForm = (showRegisterForm) => {
    if (showRegisterForm) {
      setLoginValues({ email: "", password: "" });
    } else {
      setRegisterValues({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        password: "",
        confirmPassword: "",
      });
    }
    setShowRegister(showRegisterForm);
  };

  // Manejar envío del formulario de registro
  const handleRegister = async (event) => {
    event.preventDefault();
    
    // Validar que las contraseñas coincidan
    if (registerValues.password !== registerValues.confirmPassword) {
      genericAlert("Error", "Las contraseñas no coinciden", "error");
      return;
    }
    
    try {
      const response = await fetch(urlApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(registerValues)
      });
      
      if (!response.ok) {
        genericAlert("Error", "Error al registrar el usuario", "error");
        throw new Error("Error al registrar");
      }
      
      const newCustomer = await response.json();
      
      // Actualizar la lista de clientes 
      setCustomers([...customers, newCustomer]);
      
      genericAlert("Éxito", "Usuario registrado con éxito", "success");
      
      // Limpiar el formulario
      setRegisterValues({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        password: "",
        confirmPassword: "",
      });
      
      // Cambiar al formulario de login
      toggleForm(false);
      
    } catch (error) {
      genericAlert("Error", "Error al registrar el usuario, por favor intenta de nuevo más tarde.", "error");
      console.error(error);
    }
  };

  // Manejar envío del formulario de login
    // Manejar envío del formulario de login
    const handleLogin = async (event) => {
      event.preventDefault();
      
      try {
        // Primero intentamos verificar si es un cliente regular (por email)
        const customerResponse = await fetch(urlApi);
        const customers = await customerResponse.json();
        
        const customer = customers.find(
          (item) => item.email === loginValues.email && item.password === loginValues.password
        );
        
        if (customer) {
          // Es un cliente regular
          let accessToken = generateToken();
          localStorage.setItem("Token", accessToken);
          localStorage.setItem("customer", JSON.stringify(customer));
          redirectionAlert("Éxito", "Bienvenido a tu cuenta", "src/assets/Logo.png");
          navigate("/userHome");
          return;
        }
        
        // Si no es cliente, verificamos si es un usuario administrador (por username o email)
        const userResponse = await fetch("https://barbersfakeapi.onrender.com/users");
        const users = await userResponse.json();
        
        const user = users.find(
          (user) => 
            (user.email === loginValues.email || user.username === loginValues.email) && 
            user.password === loginValues.password
        );
        
        if (user) {
          // Es un usuario administrador
          let accessToken = generateToken();
          localStorage.setItem("Token", accessToken);
          localStorage.setItem("admin", JSON.stringify(user));
          
          
          // Redirigir según el tipo de usuario
          if (user.role === "admin") {
            navigate("/adminPanel");
          } else {
            navigate("/userHome");
          }
          redirectionAlert("Éxito", "Bienvenido a tu cuenta", "src/assets/Logo.png");
          return;
        }
        
        // Si no se encontró en ninguno de los dos endpoints
        genericAlert("Error", "Usuario o contraseña incorrectos", "error");
        
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        genericAlert("Error", "Error al conectar con el servidor", "error");
      }
    };
  return (
    <section className="forms">
      {showRegister ? (
        <form className="form-register" onSubmit={handleRegister}>
          <span className="icon-register"></span>
          <h1 className="title-register">Regístrate</h1>
          <div className="register-input-container">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre"
              value={registerValues.name}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className="register-input-container">
            <label htmlFor="lastName">Apellido</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Apellido"
              value={registerValues.lastName}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className="register-input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="correo@correo.com"
              value={registerValues.email}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className="register-input-container">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="1234567890"
              value={registerValues.phone}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className="register-input-container">
            <label htmlFor="address">Dirección</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Calle 123"
              value={registerValues.address}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className="register-input-container">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              value={registerValues.password}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className="register-input-container">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="********"
              value={registerValues.confirmPassword}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className="register-button-container">
            <ButtonForms type="submit" content="Registrarse"></ButtonForms>
          </div>
          <section className="accountChange">
            <p
              onClick={() => toggleForm(false)}
              style={{ cursor: "pointer" }}
            >
              ¿Ya tienes cuenta?
            </p>
          </section>
        </form>
      ) : (
        <form className="form-login" onSubmit={handleLogin}>
          <span className="icon-register"></span>
          <h1 className="title-login">Iniciar Sesión</h1>
          <div className="login-input-container">
            <label htmlFor="login-email">Email</label>
            <input
              type="text"
              name="email"
              id="login-email"
              placeholder="Correo electronico o nombre de usuario"
              value={loginValues.email}
              onChange={handleLoginChange}
              required
            />
          </div>
          <div className="login-input-container">
            <label htmlFor="login-password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="login-password"
              placeholder="********"
              value={loginValues.password}
              onChange={handleLoginChange}
              required
            />
          </div>
          <div className="button-container">
            <ButtonForms
              type="submit"
              content={"Iniciar Sesión"}
            ></ButtonForms>
          </div>
          <section className="accountChange">
            <a
              onClick={() => toggleForm(true)}
              style={{ cursor: "pointer" }}
            >
              ¿No tienes cuenta? Regístrate
            </a>
          </section>
        </form>
      )}
    </section>
  );
};

export default Login;