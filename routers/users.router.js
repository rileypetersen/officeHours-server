const express = require('express');
const router = express.Router();
const { AuthController, UsersController } = require('../controllers');


router.get('/', UsersController.index) 

router.get('/:id', UsersController.show)

router.get('/token', UsersController.isAuthenticated, UsersController.getAuthStatus)

router.post('/register', UsersController.isValidUserCreate, UsersController.create)

router.post('/login', UsersController.login)

router.patch('/:id', AuthController.isOwnerOfUser, UsersController.isValidUserPatch, UsersController.update)

router.delete('/:id', AuthController.isOwnerOfUser, UsersController.destroy) 


module.exports = router;