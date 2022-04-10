var express = require("express");
var router = express.Router();
const {Country, Activity} = require('../db');
const axios = require('axios');


// Pedir informacion a la API  ->  Retorna un array con cada pais y sus datos
const getApiInfo = async () => {
    const apiUrl = await axios.get('https://restcountries.com/v3.1/all');
    const apiInfo = await apiUrl.data.map( p => {
        return {
            id: p.cca3,
            nombre: p.translations.spa.common,
            name: p.name.common,
            imagen: p.flags.png,
            continente: p.region,
            capital: p.capital,
            subregion: p.subregion,
            area: p.area,
            poblacion: p.population
        }
    });
    return apiInfo;
};

// LLeno la Base de Datos con la apiInfo  ->  Primero verifico si ya tengo datos en mi DB  ->  Si no, Por cada el en el array creo una fila en DB
const fillDb = async () => {
    let verification = await Country.findByPk('URY')
    if(verification){
        return
    }else{
        let apiInfo = await getApiInfo();
        const god = await apiInfo.forEach(element => {
            Country.findOrCreate({
                where:{
                    id: element.id,
                    nombre: element.nombre,
                    name: element.name,
                    imagen: element.imagen,
                    continente: element.continente,
                    capital: element.capital || [ 'No tiene Capital' ],
                    subregion: element.subregion || null,
                    area: element.area,
                    poblacion: element.poblacion
                }
            })
        });
    }
}

//Pido info de la Data Base
const getDbInfo = async () => {
    return await Country.findAll({
        include: {
            model: Activity,
            attributes: ['nombre', 'dificultad', 'duracion', 'temporada'],
            through:{
                attributes:[],
            }
        }
    })
}
// Opcional -> Hace lo mismo que getDbInfo lo cual requiere mas, pero vuelve el codigo un poco mas entendible.
// const getAllCountries = async () => {
//     const dbInfo = await getDbInfo();
//     return dbInfo;
// }

router.get('/', async (req, res)=> {
    let {name} = req.query;
    // let Totalcountries = await getAllCountries();
    await fillDb()
    let Totalcountries = await getDbInfo();
    if(name){
        let countryName = await Totalcountries.filter( p => p.nombre.toLowerCase().includes(name.toLowerCase()) || p.name.toLowerCase().includes(name.toLowerCase()))
        if (countryName.length > 0){
            return res.status(200).send(countryName)
        }else{
            return res.status(404).send('No se encontro perrito')
        }
    }else{
        return res.status(200).send(Totalcountries)
    }
})

router.get('/:id', async (req, res) => {
    let { id } = req.params
    if (id){
        await fillDb()
        const countryById = await Country.findByPk(id.toUpperCase());
        if(countryById){
            return res.send(countryById)
        }else{
            return res.status(404).send('No existe un pais con ese id, intente con otro')
        }
    }else{
        return res.status(404).send('No existe un pais con ese id, intente con otro')
    }
})

module.exports = router;