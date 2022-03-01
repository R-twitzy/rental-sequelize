const express = require(`express`)
const app = express()

app.use(express.json())

// call karyawanController
let karyawanController = require("../controllers/karyawanController")

// endpoint get data karyawan
app.get("/", karyawanController.getDataKaryawan)

// endpoint add data karyawan
app.post("/", karyawanController.addDataKaryawan)

// endpoint edit karyawan
app.put("/:id_karyawan", karyawanController.editDataKaryawan)

// endpoint delete karyawan
app.delete("/:id_karyawan", karyawanController.deleteDataKaryawan)

app.post("/auth", karyawanController.authentication)

module.exports = app