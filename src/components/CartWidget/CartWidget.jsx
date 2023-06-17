import { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  const {cantidadTotal}=useContext(CarritoContext);
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";
  
    return (
    <div> 
          <Link to='/Cart'>
                <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
                {
                  cantidadTotal > 0 && <spam>{cantidadTotal}</spam>
                }
          </Link>
    </div>
  )
}

export default CartWidget