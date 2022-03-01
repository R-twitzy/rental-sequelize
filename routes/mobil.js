const express = require(`express`)
const app = express()

app.use(express.json())

// call mobilController
let mobilController = require("../controllers/mobilController")

// call Middleware
let authorization = require("../middlewares/authorization")
let uploadImage = require("../middlewares/uploadImage")

// endpoint get data mobil
app.get("/", [
    authorization.authorization
], 
    mobilController.getDataMobil)

// endpoint add data mobil
app.post("/", [
    uploadImage.upload.single(`image`),
    authorization.authorization
], 
    mobilController.addDataMobil)

// endpoint edit mobil
app.put("/:id_mobil", [
    uploadImage.upload.single(`image`),
    authorization.authorization
],
    mobilController.editDataMobil)

// endpoint delete mobil
app.delete("/:id_mobil", [
    authorization.authorization
],
    mobilController.deleteDataMobil)

module.exports = app