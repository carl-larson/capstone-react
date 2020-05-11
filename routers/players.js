const express = require('express')
const playersController = require('../controllers/players')
const { authenticate } = require('../middleware')
const router = express.Router()

router.get('/', playersController.getAllPlayers)

router.get('/:id', playersController.getPlayerById)

router.post('/', playersController.createPlayer)

router.delete('/:username', playersController.deletePlayerByUsername)

module.exports = router;