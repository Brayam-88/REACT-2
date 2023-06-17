import { CarritoContext } from "../../Context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"




const Cart = () => {
    const { carrito, vaciaCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay Articulos en el carrito</h2>
                <Link to='/' > Ver Productos</Link>
            </>
        )

    }
    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id}{...producto} />)}
            <h3>Precio Total: ${total}</h3>
            <h3>Cantidad de Productos: {cantidadTotal}</h3>
            <button onClick={() => vaciaCarrito()}>Vaciar Carrito</button>
            <button onClick={<Link to="/"></Link>}>Seguir Comprando</button>
            <Link to='/checkout'>Finalizar Compra</Link>

        </div>
    )
}

export default Cart