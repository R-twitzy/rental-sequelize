// memanggil library md5
const md5 = require("md5")
let jwt = require(`jsonwebtoken`)

// memanggil file model untuk karyawan
let modelKaryawan = require("../models/index").karyawan

exports.getDataKaryawan = (request, response) => {
    modelKaryawan.findAll()
    .then(result => {
        return response.json({
            Count : result.length,
            karyawan: result
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.addDataKaryawan = (request, response) => {
    // tampung data request
    let newKaryawan = {
        nama_karyawan: request.body.nama_karyawan,
        alamat_karyawan: request.body.alamat_karyawan,
        kontak: request.body.kontak,
        username: request.body.username,
        password: md5(request.body.password),
    }

    modelKaryawan.create(newKaryawan)
        .then(result => {
            return response.json({
                message: `Data karyawan berhasil ditambahkan`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
    }

exports.editDataKaryawan = (request, response) => {
    let id = request.params.id_karyawan
    let dataKaryawan = {
        nama_karyawan: request.body.nama_karyawan,
        alamat_karyawan: request.body.alamat_karyawan,
        kontak: request.body.kontak,
        username: request.body.username,
        password: md5(request.body.password),
    }
    
    modelKaryawan.update(dataKaryawan, {where: {id_karyawan: id}})
        .then(result => {
            return response.json({
                message: `Data karyawan berhasil diedit`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
    }

exports.deleteDataKaryawan = (request, response) => {
    let id = request.params.id_karyawan

    modelKaryawan.destroy({where: {id_karyawan: id}})
        .then(result => {
            return response.json({
                message: `Data karyawan berhasil dihapus`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
    }

exports.authentication = async(request, response) => {
        let data = {
            username: request.body.username,
            password: md5(request.body.password)
        }

        // validasi (cek data di tabel karyawan)
        let result = await modelKaryawan.findOne({where: data})

        if (result) {
            // data ditemukan

            // payload adalah data/informasi yg akan dienkripsi
            let payload = JSON.stringify(result) // konversi dari bentuk objek ke bentuk json
            let secretKey = `Sequelize itu sangat menyenangkan`

            // generate token
            let token = jwt.sign(payload, secretKey)
            return response.json({
                logged: true,
                token: token
            })

        } else{
            // data tidak ditemukan
            return response.json({
                logged: false,
                message: `invalid username or password`
            })
        }
}