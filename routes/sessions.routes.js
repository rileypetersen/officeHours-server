const express = require('express')
const router = express.Router({ mergeParams: true })
const { sessionsController } = require('../controllers')


router.get('/', sessionsController.index)

router.get('/:sid', sessionsController.show)

router.post('/', sessionsController.create)

router.patch('/:sid', sessionsController.update)

router.delete('/:sid', sessionsController.destroy)


module.exports = router