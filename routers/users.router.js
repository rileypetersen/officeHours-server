const express = require('express');
const router = express.Router();
const { AuthController, TagsController, UsersController } = require('../controllers');


router.get('/', UsersController.index) 

router.get('/:id', UsersController.show)

router.get('/token', AuthController.isAuthenticated, AuthController.getAuthStatus)

router.post('/register', UsersController.isValidUserCreate, UsersController.create)

router.post('/login', UsersController.login)

router.get('/:id/tags', TagsController.showUserTags)

router.post('/:id/tags', TagsController.addOrRemoveTag)

router.patch('/:id', AuthController.isOwnerOfUser, UsersController.isValidUserPatch, UsersController.update)

router.delete('/:id', AuthController.isOwnerOfUser, UsersController.destroy) 


module.exports = router;