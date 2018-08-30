const express = require('express')
const router = express.Router()
const { UsersController } = require('../controllers')


router.get('/', UsersController.index) 

// router.get('/:id', UsersController.show)

// router.post('/register', UsersController.isValidUserCreate, UsersController.create)

// router.post('/login', UsersController.login)

// router.patch('/:id', UsersController.update)

// router.delete('/:id', UsersController.destroy) 


module.exports = router