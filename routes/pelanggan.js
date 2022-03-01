const express = require(`express`)
const app = express()

app.use(express.json())

// call pelangganController
let pelangganController = require("../controllers/pelangganController")

let authorization = require("../middlewares/authorization")

// endpoint get data pelanggan
app.get("/", authorization.authorization, pelangganController.getDataPelanggan)

// endpoint add data pelanggan
app.post("/", pelangganController.addDataPelanggan)

// endpoint edit pelanggan
app.put("/:id_pelanggan", pelangganController.editDataPelanggan)

// endpoint delete pelanggan
app.delete("/:id_pelanggan", pelangganController.deleteDataPelanggan)

module.exports = app