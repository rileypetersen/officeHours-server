const Controller = require('./Controller.js')(`Users`);
const { UsersModel } = require('../models');
const validate = require('../middleware/validations');
const Token = require('../middleware/token');
const bcrypt = require('bcryptjs');


class UsersController extends Controller {
	constructor(){
		super()
	};

	// controller must alter 2 tables: "users" && "users_organizations" now (potentially)
	// all info still passed via req.body
	static isValidUserCreate(req, res, next) {
		validate.userCreate(req.body)
			.then(() =>  UsersModel.getUserByUserEmail(req.body.email))
			.then(user => {
				if (user !== undefined) throw new Error('userEmailTaken');
				next();
			})
			.catch(err => next(err));
	};

	// controller must alter 2 tables: "users" && "users_organizations" now (potentially)
	// all info still passed via req.body
	static isValidUserPatch(req, res, next) {
		validate.userUpdate(req.body)
			.then(() => UsersModel.show(req.params.id))
			.then(user => {
				if (!user) throw new Error('usersNotFound');
				next();
			})
			.catch(err => next(err));      
	};

	static login(req, res, next) {
		let id;
		validate.userLogin(req.body)
			.then(() => UsersModel.getUserByUserEmail(req.body.email))
			.then(user => {
				if (!user) throw new Error('usersNotFound');
				if (!bcrypt.compareSync(req.body.password, user.hashed_password)) throw new Error('invalidPassword');
				id = user.id;
				return id;
			})
			.then(id => Token.sign(id))
			.then(token => res.status(201).set('Auth', `Bearer: ${token}`).json({ response: id }))
			.catch(err => next(err))
	};

};


module.exports = UsersController;