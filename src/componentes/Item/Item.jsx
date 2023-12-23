import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img, idcat}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p>Precio: {precio} </p>
        <p>ID: {id} </p>
        <p>Categoria:{idcat}</p>
        <p>Stock: 10</p>
        <Link className='btn' to={`/item/${id}`}> Ver Detalles </Link>
    </div>
  )
}

export default Item