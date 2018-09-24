const express = require('express');
const router = express.Router({ mergeParams: true });
const { MeetingsController } = require('../controllers');


router.get('/', MeetingsController.index)

router.get('/:id', MeetingsController.show)

// router.post('/', MeetingsController.create)

// router.patch('/:id', MeetingsController.update)

// router.delete('/:id', MeetingsController.destroy)


module.exports = router;