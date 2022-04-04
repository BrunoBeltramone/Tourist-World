const { Router } = require('express');
const activityRouter = require('./activity.js');
const countriesRouter = require('./countries.js');


const router = Router();


// // Configuro los routers
router.use('/countries', countriesRouter)
router.use('/activity', activityRouter)

module.exports = router
