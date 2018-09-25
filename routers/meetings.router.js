const express = require('express');
const router = express.Router({ mergeParams: true });
const { MeetingsController } = require('../controllers');


router.get('/', MeetingsController.index)

router.get('/:id', MeetingsController.show)

// router.get('/:id/member', MeetingsController.getMember)

router.post('/:id/member', MeetingsController.addMember)

// router.post('/', MeetingsController.create)

// router.patch('/:id', MeetingsController.update)

// router.delete('/:id', MeetingsController.destroy)

// router.delete('/:id/member/:memid', MeetingsController.removeMember)


module.exports = router;
