import { useState, createContext } from "react";

export const CarritoContext = createContext({ carrito: [], total :0,cantidadTotal: 0 });

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal]=useState(0);
    const [cantidadTotal, setcantidadTotal]= useState(0);
    

    const agregarProducto = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);
        if (!productoExistente) {
            setCarrito(prev => [...prev, { item, cantidad }]);
            setcantidadTotal(prev =>prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
            setcantidadTotal(prev =>prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        }

    }

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find (prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        setCarrito(carritoActualizado);
        setcantidadTotal( prev => prev - productoEliminado.cantidad);
        setTotal( prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));

    }

    const vaciaCarrito = () => {
        setCarrito([]);
        setcantidadTotal(0);
        setTotal(0);
    }

    return (
        <CarritoContext.Provider value={{ carrito, agregarProducto, eliminarProducto, vaciaCarrito, total, cantidadTotal }}>
            {children}

        </CarritoContext.Provider>
    )

}