const express = require('express');
const router = express.Router({ mergeParams: true });
const { OrganizationsController } = require('../controllers');


router.get('/', OrganizationsController.index)

// router.get('/:id/users', OrganizationsController.showOrgUsers)

router.get('/:id', OrganizationsController.show)

router.post('/', OrganizationsController.isValidOrgCreate, OrganizationsController.create)

router.patch('/:id', OrganizationsController.isValidOrgPatch)

router.delete('/:id', OrganizationsController.destroy)


module.exports = router;