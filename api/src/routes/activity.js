var express = require("express");
var router = express.Router();
const {Activity} = require('../db');


router.post('/', async (req, res) => {
    const { nombre, dificultad, duracion, temporada } = req.body;
    const activity = Activity.findOrCreate({
            where:{
                nombre: nombre || null,
                dificultad: dificultad || null,
                duracion: duracion || null,
                temporada: temporada || null,
            }
    })
    res.send('Actividad creada')
});



module.exports = router;