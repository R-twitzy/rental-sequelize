const express = require(`express`)
const app = express()

app.use(express.json())

let sewaController = require(`../controllers/sewaController`)

let authorization = require("../middlewares/authorization")

app.get("/", authorization.authorization, sewaController.getDataSewa)
app.post("/", sewaController.addDataSewa)
app.put("/:id_pelanggaran_siswa", sewaController.updateDataSewa)
app.delete("/:id_pelanggaran_siswa", sewaController.deleteDataSewa)

module.exports = app