const { Router } = require('express')
const controllers = require('../controllers/index')
const router = Router()

router.get('/locations', controllers.getAllLocs)
router.get('/locations/:id', controllers.getLocById)

router.post('/createComment', controllers.createComm)
router.get('/comments', controllers.GetAllComms)

module.exports = router
