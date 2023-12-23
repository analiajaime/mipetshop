import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemList from "./components/ItemList/ItemList"
import Item from "./components/Item/Item"
import CartWidget from "./components/CartWidget/CartWidget"
import Contador from "./components/Contador/Contador"

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi PetShop Online" />
    </div>
  )
}

export default App