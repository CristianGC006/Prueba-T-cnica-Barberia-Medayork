//Imports
import { useEffect, useState } from "react";
import "./Login.css";
import ButtonForms from "../../components/ButtonForms";
import { generateToken, genericAlert, redirectionAlert } from "../../helpers/functions";
import { useNavigate } from "react-router-dom";

//Component
const Login = () => {
  //Estados:
  const [showRegister, setShowRegister] = useState(true);
  //Url de la API:
  const urlApi="https://barbersfakeapi.onrender.com/customers"
  //Estados para el formulario:
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  //Login data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [customers, setCustomers] = useState([]);
  let navigate=useNavigate();
  //Funciones para manejar el formulario:

  function getCustomers() {
    fetch(urlApi)
    .then((Response)=> Response.json())
    .then((data)=> setCustomers(data))
  }
  useEffect(() => {
    getCustomers();
  }, [])
  
  function getCustomer(){
    let customer=customers.find(
      (item)=> item.email===email && item.password===password
    )
    return customer;
  }
  function logIn(){
    
    if(getCustomer()){
    let accessToken= generateToken();
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("customer", JSON.stringify(getCustomer()));
    redirectionAlert("Éxito", "Bienvenido a tu cuenta", "src/assest/Logo.png", );
    navigate("/userHome");
  } 
    else{
      genericAlert("Error", "Usuario o contraseña incorrectos", "error");
      
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleForm=async (event) => {
    event.preventDefault();
    try{
        const respone= await fetch(urlApi,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(values)
        })
        
        if(!respone.ok){
            genericAlert("Error", "Error al registrar el usuario", "error");
            throw new Error();
        }
        await respone.json();
        genericAlert("Éxito", "Usuario registrado con éxito", "success");
    } catch(error){
        genericAlert("Error", "Error al registrar el usuario, por favor intenta de nuevo más tarde.", "error");
        throw error;
    }
   
        setValues({
            name: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            password: "",
            confirmPassword: "",
          });
    
    setShowRegister(false);
    
  }
    
 
  
  return (
    <section className="forms">
      {showRegister ? (
        <form className="form-register" onSubmit={handleForm}>
          <span className="icon-register"></span>
          <h1 className="title-register">Regístrate</h1>
          <div className="register-input-container">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre"
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
              required
            />
          </div>
          <div className="register-button-container">
            <ButtonForms type="submit" content="Registrarse"></ButtonForms>
          </div>
          <section className="accountChange">
            <p
              onClick={() => setShowRegister(false)}
              style={{ cursor: "pointer" }}
            >
              ¿Ya tienes cuenta?
            </p>
          </section>
        </form>
      ) : (
        <form className="form-login" onSubmit={(e)=> {e.preventDefault(); logIn();}}>
          <span className="icon-register"></span>
          <h1 className="title-login">Iniciar Sesión</h1>
          <div className="login-input-container">
            <label htmlFor="email">Email</label>
            <input
            onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="correo@correo.com"
              required
            />
          </div>
          <div className="login-input-container">
            <label htmlFor="password">Contraseña</label>
            <input
            onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="********"
              required
            />
          </div>
          <div className="button-container">
            <ButtonForms
              type="submit"
              content={"Iniciar Sesion"}
            ></ButtonForms>
          </div>
          <section className="accountChange">
            <a
              onClick={() => setShowRegister(true)}
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
