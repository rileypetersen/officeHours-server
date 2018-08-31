const Controller = require('./Controller.js')(`Users`);
const { UsersModel } = require('../models');
const validate = require('../middleware/validations');
const Token = require('../middleware/token');
const bcrypt = require('bcryptjs');


class UsersController extends Controller {
  constructor(){
    super()
  };

  static isValidUserCreate(req, res, next) {
    validate.userCreate(req.body)
      .then(() =>  UsersModel.getUserByUsername(req.body.user_name))
      .then(user => {
        if (user !== undefined) throw new Error('userNameTaken')
        next();
      })
      .catch(err => next(err));
  };

  static isValidUserPatch(req, res, next) {
    validate.userUpdate(req.body)
      .then(() => UsersModel.show(req.params.id))
      .then(user => {
        if (!user) throw new Error('userNotFound')
        next();
      })
      .catch(err => next(err));      
  };

  static login(req, res, next) {
    validate.userLogin(req.body)
      .then(() => UsersModel.getUserByUsername(req.body.user_name))
      .then(user => {
        if (!user) throw new Error('userNotFound')
        if (!bcrypt.compareSync(req.body.password, user.hashed_password)) throw new Error('invalidPassword')
        return user.id
      })
      .then(id => Token.sign(id))
      .then(token => res.status(201).set('Auth', `Bearer: ${token}`).json({ response: id   }))
      .catch(err => next(err))
  };

};


module.exports = UsersController;