const express = require('express');
const router = express.Router({ mergeParams: true });
const { SessionsController } = require('../controllers');


router.get('/', SessionsController.index)

router.get('/:id', SessionsController.show)

router.post('/', SessionsController.isValidSessionCreate, SessionsController.create)

router.patch('/:id', SessionsController.isValidSessionPatch)

router.delete('/:id', SessionsController.destroy)


module.exports = router;