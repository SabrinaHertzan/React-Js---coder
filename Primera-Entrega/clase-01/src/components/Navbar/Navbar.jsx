import "./navbar.css"
import logo from "../../assets/logo.jpg"
import { IoMdCart } from "react-icons/io";
 
function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <div>
                <img src={logo} className="logo" alt="" />
            </div>
            
            <h1 className="titulo"> Creaciones </h1>
            <ul className="navbar-links">
                <li className="navbar-item">
                    <a className="navbar-color" href="#">Inicio</a>
                </li>
                <li className="navbar-item">
                    <a className="navbar-color" href="">Galería</a>
                </li>
                <li className="navbar-item">
                    <a className="navbar-color" href="">Sobre mí</a>
                </li>
                <li className="navbar-item">
                    <a className="navbar-color" href="">Contacto</a>
                </li>
            </ul>
            <div className= "carrito">
                    <IoMdCart />
                <span className="badge" >3</span>
            </div>
            
        </nav>

    </div>
  )
}

export default Navbar