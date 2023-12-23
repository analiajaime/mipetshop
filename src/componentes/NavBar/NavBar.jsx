import "./NavBar.css"
import { Link,NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
        <Link to="/">
            <h1>Mi PetShop Online</h1>
        </Link>

        <nav>
            <ul>
                <li><Link to="/">
            <h1>Inicio</h1>
        </Link></li>
                <li>
                    <NavLink to="/categoria/veterinarios">Nuestros Veterinarios</NavLink>
                </li>

                <li>
                    <NavLink to="/categoria/perros">Perros</NavLink>
                </li>
                <li>
                    <NavLink to="/categoria/gatos">Gatos</NavLink>
                </li>
                <li>
                    <NavLink to="/categoria/otros">Otros animalitos</NavLink>
                </li>
                
            </ul>
        </nav>


    
    </header>

)
}

export default NavBar