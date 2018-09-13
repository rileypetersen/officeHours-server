const express = require('express');
const router = express.Router({ mergeParams: true });
const { OrganizationsController } = require('../controllers');


// router.get('/', OrganizationsController.showOrgUsers)

// router.post('/', OrganizationsController.addOrgUser)

// router.patch('/:uid', OrganizationsController.updateOrgUser)

// router.post('/:uid', OrganizationsController.removeOrgUser)


module.exports = router;