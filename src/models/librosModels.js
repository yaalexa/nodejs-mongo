const mongoose = require("mongoose");

const librosSchema = new mongoose.Schema({
    nombrelibro: {
        type: String,
        required: true,
    },
    autor: {
        type: String,
        required:true
    },
    fechapublicacion: {
        type: String,
        required:true
    }
})

const libros = mongoose.model("libros",librosSchema);
module.exports = libros;