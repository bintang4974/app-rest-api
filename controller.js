'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok('Rest API Running..', res);
}

// GET All Data Mahasiswa
exports.getMahasiswa = function(req, res){
    connection.query("SELECT * FROM mahasiswa", function(error, rows, field){
        if(error){
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    })
}

// GET All Data Mahasiswa based on id
exports.getMahasiswaId = function(req, res){
    let id = req.params.id;
    connection.query("SELECT * FROM mahasiswa where id_mahasiswa = ?", [id],
        function(error, rows, field){
            if(error){
                connection.log(error);
            } else {
                response.ok(rows, res);
            }
        }
    )
}