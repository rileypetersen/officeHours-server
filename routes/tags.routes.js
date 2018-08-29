const express = require('express')
const router = express.Router({ mergeParams: true })
const { tagsController } = require('../controllers')


router.get('/', tagsController.index)

router.get('/:tid', tagsController.show)

router.post('/', tagsController.create)

router.patch('/:tid', tagsController.update)

router.delete('/:tid', tagsController.destroy)


module.exports = router