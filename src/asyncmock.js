const productos = [
    { nombre: "Balanza Digital", stock:10, precio: 2500, id: "1", img: "../img/balanzadigital.jpeg", idCat: "1" },
    { nombre: "Botella Deportiva", stock:10, precio: 1800, id: "2", img: "../img/botelladeportiva2.jpeg", idCat: "2" },
    { nombre: "Termo rosa engomado", stock:10, precio: 3200, id: "3", img: "../img/termo rosa engomado2.jpeg", idCat: "3" },
    { nombre: "Termo rosa ", stock:10, precio: 3400, id: "4", img: "../img/termo rosa mate1.jpeg", idCat: "3" },
    { nombre: "Vasos Termicos ", stock:5, precio: 5000, id: "5", img: "../img/img1.jpeg", idCat: "2" },
    { nombre: "Mate simil Stanley ", stock:10, precio: 3000, id: "6", img: "../img/img2.jpeg", idCat: "3" },
    { nombre: "Mate Metalizado ", stock:10, precio: 3200, id: "7", img: "../img/img3.jpeg", idCat: "3" },
    { nombre: "Smartwatch", stock:10, precio: 4000, id: "8", img: "../img/img4.jpeg", idCat: "1" },
    { nombre: "Botella deportiva hermetica ", stock:10, precio: 2400, id: "9", img: "../img/img5.jpeg", idCat: "2" },
   

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}



export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}