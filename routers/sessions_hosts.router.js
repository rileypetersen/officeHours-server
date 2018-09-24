const express = require('express');
const router = express.Router({ mergeParams: true });
const { SessionsController } = require('../controllers');


// router.get('/', SessionsController.getHost)

// router.post('/', SessionsController.addHost)

// router.delete('/:hid', SessionsController.removeHost)


module.exports = router;