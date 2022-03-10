const express = require(`express`)
const app = express()

app.use(express.json())

let sewaController = require(`../controllers/sewaController`)

let authorization = require("../middlewares/authorization")

app.get("/", authorization.authorization, sewaController.getDataSewa)
app.post("/", sewaController.addDataSewa)
app.put("/:id_sewa", sewaController.editDataSewa)
app.delete("/:id_sewa", sewaController.deleteDataSewa)

module.exports = app