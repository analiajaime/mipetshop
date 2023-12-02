import `./NavBar.css`
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <header>
    <h1>Mi PetShop Online</h1> 
    <nav>  
        <ul>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>
            
        </ul>
    </nav>
    <CartWidget />
    </header>
  )
}

export default NavBar