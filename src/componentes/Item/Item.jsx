import './Item.css'
import React from 'react'



const Item = ({id, nombre, precio, img, idCat}) => {
  return (
    <div>
        <img src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p>Precio: {precio} </p>
        <p>ID: {id} </p>
        <br />
        <button> Ver Detalles </button>
    </div>
  )
}

export default Item