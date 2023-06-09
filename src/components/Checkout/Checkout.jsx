import { useState, useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, getDoc, updateDoc, doc } from "firebase/firestore";
import "./Checkout.css";


const Checkout = () => {
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const manejadorFormulario = (event) => {
        event.preventDefault();
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("completar el formulario");
        }

        if (!email !== !emailConfirmacion) {
            setError("email distintos verificar");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.item.cantidad
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email

        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "stockProductos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock ;
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                })
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                    })
                    .catch((error) => {
                        console.error("error en generar orden", error);
                        setError("error al generar orden");
                    })

            })
            .catch((error) => {
                console.error("error al actualizar stock", error);
                setError("su error en stock de productos");
            })


    }

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={manejadorFormulario}>
                {carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p>
                            {producto.item.nombre} x {producto.cantidad}
                        </p>
                        <p> Precio: ${producto.item.precio}</p>
                        <hr />
                    </div>

                ))}
                <p>Precio Final: ${total}</p>
                <hr />
                <div>
                    <label htmlFor=""> Nombre:</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Apellido:</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Telefono:</label>
                    <input type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor=""> Email Confirmacion:</label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {error && <p>{error}</p>}
                <button type="submit">Finalizar Compra</button>

            </form>
            {
                ordenId && (
                    <strong>Numero de orden Generada es {ordenId} ¡Muchas Gracias!</strong>
                )
            }
        </div>
    )
}

export default Checkout