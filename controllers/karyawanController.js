// memanggil library md5
const md5 = require("md5")
let jwt = require(`jsonwebtoken`)

// memanggil file model untuk karyawan
let modelkaryawan = require("../models/index").karyawan

exports.getDatakaryawan = (request, response) => {
    modelkaryawan.findAll()
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

exports.addDatakaryawan = (request, response) => {
    // tampung data request
    let newkaryawan = {
        nama_karyawan: request.body.nama_karyawan,
        karyawanname: request.body.karyawanname,
        password: md5(request.body.password),
    }

    modelkaryawan.create(newkaryawan)
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

exports.editDatakaryawan = (request, response) => {
    let id = request.params.id_karyawan
    let datakaryawan = {
        nama_karyawan: request.body.nama_karyawan,
        karyawanname: request.body.karyawanname,
        password: md5(request.body.password),
    }
    
    modelkaryawan.update(datakaryawan, {where: {id_karyawan: id}})
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

exports.deleteDatakaryawan = (request, response) => {
    let id = request.params.id_karyawan

    modelkaryawan.destroy({where: {id_karyawan: id}})
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
            karyawanname: request.body.karyawanname,
            password: md5(request.body.password)
        }

        // validasi (cek data di tabel karyawan)
        let result = await modelkaryawan.findOne({where: data})

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
                message: `invalid karyawanname or password`
            })
        }
}