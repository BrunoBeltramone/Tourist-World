// var express = require("express")
// var router = express.Router()
// const { getDbInfo, fillDb  } = require('../models/models.js')

// router.get('/', async (req, res)=> {
//     let {name} = req.query;
//     // let Totalcountries = await getAllCountries();
//     await fillDb()
//     let Totalcountries = await getDbInfo();
//     if(name){
//         let countryName = await Totalcountries.filter( p => p.nombre.toLowerCase().includes(name.toLowerCase()))
//         if (countryName.length > 0){
//             return res.status(200).send(countryName)
//         }else{
//             return res.status(404).send('No se encontro perrito')
//         }
//     }else{
//         return res.status(200).send(Totalcountries)
//     }
// })

// module.exports = router;