const express = require('express');
const router = express.Router({ mergeParams: true });
const { OrganizationsController } = require('../controllers');


router.get('/', OrganizationsController.indexOrgUsers)

router.get('/:uid', OrganizationsController.showOrgUser)

router.post('/', OrganizationsController.addOrgUser)

router.patch('/:uid', OrganizationsController.updateOrgUser)

router.delete('/:uid', OrganizationsController.removeOrgUser)


module.exports = router;