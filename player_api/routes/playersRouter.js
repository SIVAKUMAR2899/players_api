const playerscontroller = require('../controllers/playerscontroller')

const router = require('express').Router()

router.post('/addPlayer',playerscontroller.addPlayer)

router.get('/allPlayer',playerscontroller.getAllPlayer)

router.get('/:id',playerscontroller.getOnePlayer)

router.put('/:id',playerscontroller.updatePlayer)

router.delete('/:id',playerscontroller.deletePlayer)

module.exports = router;