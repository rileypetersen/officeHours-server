const Controller = require('./Controller.js')(`Users`);
const { UsersModel, OrganizationsModel, SessionsModel, MeetingsModel } = require('../models');
const validate = require('../middleware/validations');
const Token = require('../middleware/token');
const bcrypt = require('bcryptjs');


class UsersController extends Controller {
	constructor(){
		super()
	};

	static show(req, res, next) {
		let user;
		UsersModel.show(req.params.id)
			.then(userData => user = userData)
			.then(() => OrganizationsModel.getAllUserOrgs(req.params.id))
			.then(orgs => user.orgs = orgs)
			.then(() => {
				return Promise.all(user.orgs.map((org, i) => {
					return SessionsModel.index(org.id)
					.then(sessions => {
						user.orgs[i].sessions = sessions
						return user.orgs[i].sessions.map((session, j) => {
							return SessionsModel.getSessionWithMeetings(session.id)
							.then((nested) => {
								console.log('start',user.orgs[i].sessions[j],'end')
								console.log('---- we the same?!  ---- ')
								console.log('start',nested,'end')
								user.orgs[i].sessions[j] = nested

								return user
							})
						})
					})
				}))
			})
			.then(orgSessions => {
				// console.log('dis?',orgSessions)
				return orgSessions
			})
			// .then(promises => user.orgs = promises)
			.then(()=> {
				// console.log('mer!!!!',user)
				res.status(200).json({ user })
			})
			.catch(err => next(err));
	}

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
		let user;
		validate.userLogin(req.body)
			.then(() => UsersModel.getUserByUserEmail(req.body.email))
			.then(user => {
				if (!user) throw new Error('usersNotFound');
				if (!bcrypt.compareSync(req.body.password, user.hashed_password)) throw new Error('invalidPassword');
				id = user.id;
				return id;
			})
			.then(id => Token.sign(id))
			.then(token => res.status(201).set('Auth', `Bearer: ${token}`).json({ data: id }))
			.catch(err => next(err))
	};

};


module.exports = UsersController;
