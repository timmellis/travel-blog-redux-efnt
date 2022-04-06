const { Router } = require('express')
const controllers = require('../controllers/index')
const router = Router()

router.get('/locations', controllers.getAllLocs)

router.post('/createComms', controllers.createComm)

router.get('/locations/:id', controllers.getLocById)

router.get('/createLoc', controllers.createLoc)

module.exports = router
