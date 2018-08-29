const express = require('express')
const router = express.Router({ mergeParams: true })
const { organizationsController } = require('../controllers')


router.get('/', organizationsController.index)

router.get('/:oid', organizationsController.show)

router.post('/', organizationsController.create)

router.patch('/:oid', organizationsController.update)

router.delete('/:oid', organizationsController.destroy)


module.exports = router