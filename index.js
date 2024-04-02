const express = require("express")
const app = express()
const router = require("./rutas.js")
const port = 5000

app.use(router)
app.listen(port, () => {
    console.log('puerto ${5000}')
})

