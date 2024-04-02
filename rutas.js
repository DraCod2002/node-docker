const router = require('express').Router()

router.get('/clientes', (req, res) => {
    const clientes = [
        {
            id_cliente: 1,
            nombre: "Pedro",
            apellido: "Hernandez",
            edad:18,
            dni:"71337315"
        },
        {
            id_cliente: 2,
            nombre: "Juan",
            apellido: "Gomez",
            edad:20,
            dni:"11223344"
        },
        {
            id_cliente: 3,
            nombre: "Duberly",
            apellido: "Mondragon",
            edad:22,
            dni:"99887766"
        }
    ]
    res.json(clientes)
})

router.get('/productos', (req, res) => {
    const productos = [
        {
            id_producto: 1,
            nombre: "Arroz",
            precio: 3.5,
            stock: 40,
        },
        {
            id_producto: 2,
            nombre: "Queso",
            precio: 8.0,
            stock: 20,
        },
        {
            id_producto: 3,
            nombre: "Atún",
            precio: 3.8,
            stock: 30,
        }
    ]
    res.json(productos)
})

router.get('/', (req, res) => {
    res.sendFile("./src/index.html", {
        root:__dirname
    })
})


module.exports = router