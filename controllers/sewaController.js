let modelSewa = require("../models/index").sewa

exports.getDataSewa = (request, response) => {
    modelSewa.findAll()
        .then(result => {
            return response.json({
                Count : result.length,
                Sewa : result
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
}

//untuk handle add data Sewa
exports.addDataSewa = (request, response) => {
    // tampung data request
    let newSewa = {
        id_mobil : request.body.id_mobil,
        id_karyawan : request.body.id_karyawan,
        id_pelanggan : request.body.id_pelanggan,
        tgl_sewa : request.body.tgl_sewa,
        tgl_kembali : request.body.tgl_kembali,
        total_bayar : request.body.total_bayar
    }
    modelSewa.create(newSewa)
    .then(result => {
        return response.json({
            message : `Data has been inserted`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

//untuk handle edit data Sewa
exports.editDataSewa = (request, response) => {
    let idSewa = request.params.id_sewa
    let dataSewa = {
        id_mobil : request.body.id_mobil,
        id_karyawan : request.body.id_karyawan,
        id_pelanggan : request.body.id_pelanggan,
        tgl_sewa : request.body.tgl_sewa,
        tgl_kembali : request.body.tgl_kembali,
        total_bayar : request.body.total_bayar
    }
    // eksekusi 
    modelSewa.update(dataSewa, {where :{id_sewa:idSewa}})
    .then(result => {
        return response.json({
            message : `Data has been updated`
        })
    })
    .catch(error => {
        return response.json({
            message : error.message
        })
    })
}

//untuk handle delete data Sewa
exports.deleteDataSewa = (request, response) => {
    let idSewa = request.params.id_sewa

    // eksekusi 
    modelSewa.destroy({where :{id_sewa:idSewa}})
    .then(result => {
        return response.json({
            message : `Data has been deleted`
        })
    })
    .catch(error => {
        return response.json({
            message : error.message
        })
    })
}