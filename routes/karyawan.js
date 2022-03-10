const express = require(`express`)
const app = express()

app.use(express.json())

// call karyawanController
let karyawanController = require("../controllers/karyawanController")

let authorization = require("../middlewares/authorization")

// endpoint get data karyawan
app.get("/", authorization.authorization,karyawanController.getDataKaryawan)

// endpoint add data karyawan
app.post("/", authorization.authorization,karyawanController.addDataKaryawan)

// endpoint edit karyawan
app.put("/:id_karyawan", authorization.authorization,karyawanController.editDataKaryawan)

// endpoint delete karyawan
app.delete("/:id_karyawan", authorization.authorization,karyawanController.deleteDataKaryawan)

app.post("/auth", karyawanController.authentication)

module.exports = app