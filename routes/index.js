const { Router } = require('express');
const controllers = require('../controllers/index');
const router = Router();

router.get('/comments', controllers.getAllComms);

router.post('/createComms', controllers.createComm);

router.get('/comments/:id', controllers.getCommById)


module.exports = router;