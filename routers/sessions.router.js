const express = require('express');
const router = express.Router({ mergeParams: true });
const { SessionsController } = require('../controllers');


router.get('/', SessionsController.index)

router.get('/:id', SessionsController.show)

router.post('/', SessionsController.isValidSessionCreate, SessionsController.create)

// router.post('/:id/host', SessionsController.addHost)

router.patch('/:id', SessionsController.isValidSessionPatch)

router.delete('/:id', SessionsController.destroy)

// router.delete('/:id/host/:hid', SessionsController.removeHost)


module.exports = router;