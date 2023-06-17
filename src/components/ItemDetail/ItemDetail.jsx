import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../Context/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({id, nombre, precio, img, stock}) => {
  const [agregarCantidad, setAgregarCantidad]= useState(0);

  const{agregarProducto} = useContext(CarritoContext);

  const manejadoraCantidad =(cantidad) => {
    setAgregarCantidad(cantidad);
    

    const item ={id, nombre,precio};
    agregarProducto(item, cantidad);
  }
  
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio eveniet facere maiores quo tempore quisquam! Consectetur dolores quos ducimus maiores quam quae, eveniet voluptatibus beatae, nemo cumque tempore modi?</p>
        <img src= {img} alt={nombre} />
        {
          agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) :(<ItemCount inicial={1} stock={stock} funcionAgregar={manejadoraCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail