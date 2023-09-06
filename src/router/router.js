const express = require('express');
const ruta = express.Router();
const libro = require('../models/librosModels.js');
const connectdb = require('../connection/db.js');
connectdb();
ruta.get("/libros", async(req, res) => {
    const traerlibros = await libro.find();
    res.json(traerlibros);
});

ruta.post("/libros",async (req, res) => {
    const { nombrelibro, autor, fechapublicacion } = req.body;
    const nuevoRegistro = new libro({
        nombrelibro,
        autor,
        fechapublicacion
    });
    nuevoRegistro.nombrelibro = nombrelibro;
    nuevoRegistro.autor = autor;
    nuevoRegistro.fechapublicacion = fechapublicacion;
    await nuevoRegistro.save();
    res.json("libro guardado");
});

ruta.put("/libros/:id", async(req, res) => {
    const libroid = req.params.id;
    const { nombrelibro,autor,fechapublicacion } = req.body;
    const libroEncontrado = await libro.findById(libroid);
    libroEncontrado.nombrelibro = nombrelibro;
    libroEncontrado.autor = autor;
    libroEncontrado.fechapublicacion = fechapublicacion;
    await libroEncontrado.save();
    res.json(libroEncontrado)
});

ruta.delete("/libros/:id", async(req, res) => {
    const libroid = req.params.id;
    const libroBuscado = await libro.findById(libroid);
    await libroBuscado.deleteOne();
    res.json("registro eliminado");
});

module.exports = ruta;