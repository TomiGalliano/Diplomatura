// import { Link } from "react-router-dom";//
import { NavLink } from "react-router-dom";
import '../../estilos/layout.css'

const Nav = (props) => {
    return(
        <nav>
        <div class="holder">
            <ul>
                <li><NavLink className={({ isActive }) => isActive ? "activo" : undefined} to= "/">Home</NavLink>/</li>
                <li><NavLink className={({ isActive }) => isActive ? "activo" : undefined} to= "/nosotros">Nosotros</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "activo" : undefined} to= "/servicio">Servicio</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "activo" : undefined} to="/contacto">Contacto</NavLink></li>
            </ul>
        </div>
    </nav>
    );
}
export default Nav;