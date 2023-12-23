const productos = [
    { id: 1, nombre: "Veterinario 1", precio: 100, img: "public\img\card1.jpeg", idcat: "veterinarios" },
    { id: 2, nombre: "Perro 1", precio: 150, img: "public\img\card2.jpeg", idcat: "perros" },
    { id: 3, nombre: "Comida 1", precio: 200, img: "public\img\card3.jpeg", idcat: "comidas" },
    { id: 4, nombre: "Perro 2", precio: 250, img: "public\img\card4.jpeg", idcat: "perros" },
    { id: 5, nombre: "Otros 1", precio: 300, img: "public\img\card5.jpeg", idcat: "otros" },
    { id: 6, nombre: "Otros 2", precio: 350, img: "public\img\card6.jpeg", idcat: "otros" },
    { id: 7, nombre: "Gato 1", precio: 400, img: "public\img\card7.jpeg", idcat: "gatos" },
    { id: 8, nombre: "Otros 3", precio: 450, img: "public\img\card8.jpeg", idcat: "otros" },
    { id: 9, nombre: "Otros 3", precio: 500, img: "public\img\card9.jpeg", idcat: "otros" },
    { id: 10, nombre: "Gato 2", precio: 550, img: "public\img\card10.jpeg", idcat: "gatos" },
    { id: 11, nombre: "Otros 4", precio: 600, img: "public\img\card11.jpeg", idcat: "otros" },
    { id: 12, nombre: "Perro 3", precio: 650, img: "public\img\card12.jpeg", idcat: "perros" },
    { id: 13, nombre: "Veterinario 2", precio: 700, img: "public\img\card13.jpeg", idcat: "veterinarios" },
    { id: 14, nombre: "Veterinario 3", precio: 750, img: "public\img\card14.jpeg", idcat: "veterinarios" },
    { id: 15, nombre: "Veterinario 4", precio: 800, img: "public\img\card15.jpeg", idcat: "veterinarios" },
    { id: 16, nombre: "Veterinario 5", precio: 850, img: "public\img\card16.jpeg", idcat: "veterinarios" },

]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

/*Crear una función similar a la anterior pero que solo nos retorne un item*/

export const getUnProducto = (id) => {
    return new Promise( resolve => {
        setTimeout( () => {
            const producto = productos.find(item => item.id === id);
            resolve(producto);
        }, 2000)
    })
}


//Nueva función que retorne toda una categoria: 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(()=> {
            const productosCategoria = productos.filter(item => item.idCat === idCategoria );
            resolve(productosCategoria);
        }, 2000)
    })
}


