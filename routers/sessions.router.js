const express = require('express')
const router = express.Router({ mergeParams: true })
const { SessionsController } = require('../controllers')


router.get('/', SessionsController.index)

router.get('/:sid', SessionsController.show)

router.post('/', SessionsController.isValidSessionCreate, SessionsController.create)

router.patch('/:sid', SessionsController.isValidSessionPatch)

router.delete('/:sid', SessionsController.destroy)


module.exports = router