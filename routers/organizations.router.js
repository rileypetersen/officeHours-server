const express = require('express')
const router = express.Router({ mergeParams: true })
const { OrganizationsController } = require('../controllers')


router.get('/', OrganizationsController.index)

router.get('/:oid', OrganizationsController.show)

router.post('/', OrganizationsController.isValidOrgCreate, OrganizationsController.create)

router.patch('/:oid', OrganizationsController.isValidOrgPatch)

// router.delete('/:oid', OrganizationsController.destroy)


module.exports = router
